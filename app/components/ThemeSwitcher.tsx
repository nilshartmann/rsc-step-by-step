"use client";

import { useState } from "react";

type ThemeSwitcherProps = {
  children: React.ReactNode;
};

export default function ThemeSwitcher({ children }: ThemeSwitcherProps) {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "Dark" : "Light"}>
      {children}
      <label className="Checkbox">
        <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
        Dark Mode
      </label>
    </div>
  );
}
