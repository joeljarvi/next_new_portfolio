"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";

export default function DarkmodeSwitch() {
  const [theme, setTheme] = React.useState("acid");
  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "acid" : "luxury");
  };

  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="flex items-baseline justify-end mr-2">
      <label className="swap swap-rotate">
        <input type="checkbox" />

        {/* sun icon */}
        <span
          className="swap-on text-base-content fill-current font-souvenir text-2xl"
          onClick={toggleTheme}
        >
          <MoonIcon width={20} height={20} />
        </span>

        {/* moon icon */}

        <span
          className="flex flex-row items-center justify-start gap-x-2 swap-off text-base-content fill-current font-souvenir text-2xl"
          onClick={toggleTheme}
        >
          <SunIcon width={20} height={20} />
        </span>
      </label>
    </div>
  );
}
