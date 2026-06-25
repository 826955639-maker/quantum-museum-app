import { useState, type ReactNode } from "react";
import Icon from "../components/Icon";

type VoiceMode = "儿童版" | "普通版" | "深度版";
type LanguageMode = "中文" | "English" | "更多";
type AssistMode = "高对比模式" | "无障碍设备租用" | "字幕辅助" | "语音辅助";
type ReturnMode = "归还点提示" | "归还流程";
type SettingsGlyphName =
  | "audio"
  | "font"
  | "language"
  | "accessibility"
  | "device"
  | "clear"
  | "contrast"
  | "headphones"
  | "caption"
  | "shield";

function SettingsGlyph({ name }: { name: SettingsGlyphName }) {
  if (name === "font") {
    return <span className="settings-glyph settings-glyph--text">Aa</span>;
  }

  if (name === "caption") {
    return <span className="settings-glyph settings-glyph--caption">CC</span>;
  }

  const glyphs: Record<Exclude<SettingsGlyphName, "font" | "caption">, ReactNode> = {
    audio: (
      <>
        <path d="M5 15V9M9 19V5M13 21V3M17 18V6M21 15V9" />
      </>
    ),
    language: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21M12 3c-2.4 2.6-3.6 5.6-3.6 9s1.2 6.4 3.6 9" />
      </>
    ),
    accessibility: (
      <>
        <circle cx="12" cy="4.8" r="2" />
        <path d="M5.5 9.5h13M12 9.5v5.2M8.2 20l2.4-5.3M15.8 20l-2.4-5.3" />
      </>
    ),
    device: (
      <>
        <rect x="9" y="4.2" width="8.5" height="6.8" rx="1.3" />
        <path d="M11 14.8h4.8l2.3-2.2c1.3-1.2 2.5.5 1.3 1.9l-3.1 3.7H9.1L6 20.2H3.6v-6h2.2l2.2 1.5" />
        <path d="M11 7.6h4.5" />
      </>
    ),
    clear: (
      <>
        <path d="m15.8 3.5 4.7 4.7-8 8-4.7-4.7Z" />
        <path d="M10 14.2 5.2 19M4 20h9.5M18.2 6.5l-2.7-2.7" />
      </>
    ),
    contrast: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" />
      </>
    ),
    headphones: (
      <>
        <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
        <rect x="3.8" y="13.2" width="3.4" height="5" rx="1.2" />
        <rect x="16.8" y="13.2" width="3.4" height="5" rx="1.2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5 19 6.2v5.1c0 4.6-2.7 7.7-7 9.2-4.3-1.5-7-4.6-7-9.2V6.2Z" />
        <path d="m9 12 2 2.1 4.2-4.6" />
      </>
    ),
  };

  return (
    <svg className="settings-glyph" viewBox="0 0 24 24" aria-hidden="true">
      {glyphs[name]}
    </svg>
  );
}

function SegmentControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="settings-segment" role="group">
      {options.map((option) => (
        <button
          className={`settings-pill${option === value ? " is-active" : ""}`}
          key={option}
          type="button"
          aria-pressed={option === value}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function SettingRow({
  icon,
  title,
  description,
  children,
}: {
  icon: SettingsGlyphName;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="setting-row">
      <span className="setting-row__icon" aria-hidden="true">
        <SettingsGlyph name={icon} />
      </span>
      <span className="setting-row__copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <span className="setting-row__control">{children}</span>
    </article>
  );
}

export default function SettingsPage() {
  const [voiceMode, setVoiceMode] = useState<VoiceMode>("普通版");
  const [fontSize, setFontSize] = useState(50);
  const [languageMode, setLanguageMode] = useState<LanguageMode>("中文");
  const [assistMode, setAssistMode] = useState<AssistMode>("高对比模式");
  const [returnMode, setReturnMode] = useState<ReturnMode>("归还点提示");

  const assistOptions: Array<{ label: AssistMode; icon: SettingsGlyphName }> = [
    { label: "高对比模式", icon: "contrast" },
    { label: "无障碍设备租用", icon: "headphones" },
    { label: "字幕辅助", icon: "caption" },
    { label: "语音辅助", icon: "audio" },
  ];

  return (
    <section className="settings-layout" aria-labelledby="settings-title">
      <section className="settings-main-card">
        <header className="settings-heading">
          <h1 id="settings-title">设置</h1>
          <p>根据参观习惯调整导览体验</p>
        </header>

        <div className="settings-list" aria-label="设置选项">
          <SettingRow icon="audio" title="语音讲解" description="选择适合的讲解深度">
            <SegmentControl
              options={["儿童版", "普通版", "深度版"]}
              value={voiceMode}
              onChange={setVoiceMode}
            />
          </SettingRow>

          <SettingRow icon="font" title="字号调节" description="调整界面文字大小">
            <div className="font-slider">
              <div className="font-slider__labels" aria-hidden="true">
                <span>小</span>
                <span>中</span>
                <span>大</span>
              </div>
              <input
                aria-label="字号调节"
                max={100}
                min={0}
                type="range"
                value={fontSize}
                onChange={(event) => setFontSize(Number(event.target.value))}
              />
            </div>
          </SettingRow>

          <SettingRow icon="language" title="多语言" description="切换导览语言">
            <SegmentControl
              options={["中文", "English", "更多"]}
              value={languageMode}
              onChange={setLanguageMode}
            />
          </SettingRow>

          <SettingRow icon="accessibility" title="无障碍辅助" description="为不同参观者提供辅助体验">
            <button className="setting-arrow-button" type="button" aria-label="查看无障碍辅助">
              <Icon name="chevron-right" />
            </button>
          </SettingRow>

          <SettingRow icon="device" title="设备归还提醒" description="归还地点提示与流程">
            <span className="status-capsule">
              已开启 <i aria-hidden="true" />
            </span>
          </SettingRow>

          <SettingRow icon="clear" title="会话清除" description="清除本次设备使用记录">
            <button className="clear-session-button" type="button" onClick={() => console.log("clear session")}>
              一键清除
            </button>
          </SettingRow>
        </div>
      </section>

      <aside className="settings-side" aria-label="设置详情">
        <section className="settings-side-card accessibility-card">
          <h2>无障碍辅助</h2>
          <div className="assist-grid">
            {assistOptions.map((option) => (
              <button
                className={`assist-tile${assistMode === option.label ? " is-active" : ""}`}
                key={option.label}
                type="button"
                aria-pressed={assistMode === option.label}
                onClick={() => setAssistMode(option.label)}
              >
                <span className="assist-tile__dot" aria-hidden="true" />
                <SettingsGlyph name={option.icon} />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="settings-side-card return-device-card">
          <h2>设备归还</h2>
          <div className="return-tabs" role="group" aria-label="设备归还信息切换">
            {(["归还点提示", "归还流程"] as ReturnMode[]).map((tab) => (
              <button
                className={returnMode === tab ? "is-active" : ""}
                key={tab}
                type="button"
                aria-pressed={returnMode === tab}
                onClick={() => setReturnMode(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="return-route" aria-hidden="true">
            <div className="return-location return-location--current">
              <Icon name="location" />
              <small>当前位置</small>
            </div>
            <div className="return-path">
              <span />
              <i />
            </div>
            <div className="return-location return-location--desk">
              <Icon name="location" />
              <strong>服务台</strong>
              <small>归还点</small>
            </div>
          </div>
          <p className="return-note">离馆前请将 iPad 归还至服务台</p>
        </section>

        <section className="settings-side-card privacy-card">
          <h2>隐私与会话</h2>
          <div className="privacy-actions">
            <button type="button" onClick={() => console.log("clear session")}>
              <SettingsGlyph name="clear" />
              一键清除本次记录
            </button>
            <button type="button" onClick={() => console.log("privacy notice")}>
              <SettingsGlyph name="shield" />
              隐私说明
            </button>
          </div>
        </section>
      </aside>

      <button className="guide-hint settings-hint" type="button" onClick={() => console.log("设置提示")}>
        <span className="guide-hint__icon" aria-hidden="true">
          <span className="settings-hint-bulb">!</span>
        </span>
        <span>设置仅影响本次 iPad 使用，归还后将自动恢复默认状态</span>
        <Icon name="chevron-right" />
      </button>
    </section>
  );
}
