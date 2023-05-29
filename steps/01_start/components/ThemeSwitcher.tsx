import { useState } from "react";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "Dark" : "Light"}>
      <p>todo: children rendern</p>
      <div className="ThemeSwitcher">
        <label className="Checkbox">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
}
