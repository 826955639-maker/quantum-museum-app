# Minimal static file server for Windows PowerShell 5.1+ (no admin, no install).
# Used as a fallback by the launcher .bat when Python is not available,
# so the offline single-file HTML can be opened via http://localhost and the
# browser allows camera (getUserMedia) access.
param(
  [int]$Port = 8000,
  [string]$Root = ""
)

if ($Root -eq "") { $Root = (Get-Location).Path }
$Root = (Resolve-Path -LiteralPath $Root).Path

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.htm'  = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.mjs'  = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.txt'  = 'text/plain; charset=utf-8'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.gif'  = 'image/gif'
  '.webp' = 'image/webp'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.woff' = 'font/woff'
  '.woff2'= 'font/woff2'
  '.ttf'  = 'font/ttf'
  '.mp3'  = 'audio/mpeg'
  '.wav'  = 'audio/wav'
  '.mp4'  = 'video/mp4'
  '.webm' = 'video/webm'
  '.wasm' = 'application/wasm'
}

function HtmlEscape([string]$s) {
  return $s.Replace('&','&amp;').Replace('<','&lt;').Replace('>','&gt;').Replace('"','&quot;')
}

try {
  $listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $Port)
  $listener.Start()
} catch {
  Write-Host "ERROR: cannot listen on port $Port. It may already be in use." -ForegroundColor Red
  Write-Host "Close the other program, or edit the .bat file and change PORT to e.g. 8010."
  exit 1
}

Write-Host ""
Write-Host "Serving folder: $Root"
Write-Host "Open  http://localhost:$Port/  in your browser."
Write-Host "Close this window (or press Ctrl+C) to stop the server."
Write-Host ""

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $requestLine = $reader.ReadLine()
    while ($true) {
      $h = $reader.ReadLine()
      if ($null -eq $h -or $h -eq '') { break }
    }
    if (-not $requestLine) { continue }

    $urlPath = ($requestLine -split ' ')[1]
    if (-not $urlPath) { $urlPath = '/' }
    $urlPath = $urlPath.Split('?')[0]
    $relPath = [uri]::UnescapeDataString($urlPath).TrimStart('/').Replace('/', '\')

    $status = '200 OK'
    $ctype  = 'application/octet-stream'
    $bytes  = $null

    $resolved = $null
    $candidate = Join-Path $Root $relPath
    if (Test-Path -LiteralPath $candidate) {
      $resolved = (Resolve-Path -LiteralPath $candidate).Path
      # keep requests inside the served folder
      $rootPrefix = $Root.TrimEnd('\') + '\'
      $inside = $resolved.Equals($Root, [System.StringComparison]::OrdinalIgnoreCase) -or
                $resolved.StartsWith($rootPrefix, [System.StringComparison]::OrdinalIgnoreCase)
      if (-not $inside) { $resolved = $null }
    }

    if ($resolved -and (Test-Path -LiteralPath $resolved -PathType Leaf)) {
      $bytes = [System.IO.File]::ReadAllBytes($resolved)
      $ext = [System.IO.Path]::GetExtension($resolved).ToLower()
      if ($mime.ContainsKey($ext)) { $ctype = $mime[$ext] }
    }
    elseif ($resolved -and (Test-Path -LiteralPath $resolved -PathType Container)) {
      $base = $urlPath
      if (-not $base.EndsWith('/')) { $base += '/' }
      $items = Get-ChildItem -LiteralPath $resolved | Sort-Object @{Expression={ -not $_.PSIsContainer }}, Name
      $rows = foreach ($i in $items) {
        $name = $i.Name
        $href = $base + [uri]::EscapeDataString($i.Name)
        if ($i.PSIsContainer) { $name += '/'; $href += '/' }
        '<li style="margin:6px 0"><a href="' + $href + '">' + (HtmlEscape $name) + '</a></li>'
      }
      $title = HtmlEscape ([uri]::UnescapeDataString($urlPath))
      $html = '<!doctype html><html><head><meta charset="utf-8"><title>' + $title + '</title></head>' +
              '<body style="font-family:sans-serif;max-width:720px;margin:40px auto">' +
              '<h3>Index of ' + $title + '</h3><ul>' + ($rows -join '') + '</ul></body></html>'
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($html)
      $ctype = 'text/html; charset=utf-8'
    }
    else {
      $status = '404 Not Found'
      $bytes = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found: ' + $urlPath)
      $ctype = 'text/plain; charset=utf-8'
    }

    $header = "HTTP/1.1 $status`r`nContent-Type: $ctype`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-cache`r`nConnection: close`r`n`r`n"
    $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($hb, 0, $hb.Length)
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Flush()
  }
  catch { }
  finally { $client.Close() }
}
