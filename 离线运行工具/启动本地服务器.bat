@echo off
setlocal
chcp 65001 >nul
title 量子探微馆 - 本地服务器
cd /d "%~dp0"

rem 如果提示端口被占用，把下面的 8000 改成其它数字（如 8010）再运行
set PORT=8000

echo ============================================================
echo   量子探微馆 · 本地服务器一键启动
echo ------------------------------------------------------------
echo   作用：通过 http://localhost:%PORT% 打开离线网页，
echo   解决 file:// 页面无法调用摄像头的问题（全程无需联网）。
echo.
echo   使用：把本文件和 server.ps1 一起放到 HTML 文件所在的
echo   文件夹里，双击运行。浏览器会自动打开文件列表，
echo   点击你的 HTML 文件即可开始体验。
echo.
echo   停止：直接关闭本窗口。
echo ============================================================
echo.
echo 当前提供服务的文件夹：%CD%
echo.

rem 2 秒后自动打开浏览器（给服务器留出启动时间）
start "" /min powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep 2; Start-Process 'http://localhost:%PORT%/'"

rem 优先使用 Python 启动器（py），其次 python，最后用 Windows 自带 PowerShell 兜底
where py >nul 2>nul
if not errorlevel 1 (
  echo 检测到 Python，正在启动服务器：http://localhost:%PORT%/
  py -3 -m http.server %PORT%
  if errorlevel 1 goto :try_python
  goto :end
)

:try_python
where python >nul 2>nul
if not errorlevel 1 (
  echo 检测到 Python，正在启动服务器：http://localhost:%PORT%/
  python -m http.server %PORT%
  if errorlevel 1 goto :try_powershell
  goto :end
)

:try_powershell
if exist "%~dp0server.ps1" (
  echo 未检测到可用的 Python，改用 Windows 自带的 PowerShell 启动服务器...
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port %PORT% -Root "%CD%"
  goto :end
)

echo.
echo [错误] 未找到 Python，也没有在本文件旁边找到 server.ps1。
echo 请把 server.ps1 和本文件放在同一个文件夹里后重新运行。

:end
echo.
echo 服务器已停止。
pause
