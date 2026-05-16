"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";


export const ThemToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // when mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted) {
    return (
      <div className="px-1 flex justify-between items-center">
        <Moon size={18} />
        <Switch disabled />
        <Sun size={18} />
      </div>
    );
  }
  return (
    <div className="px-1 flex justify-between items-center">
      <Moon
        size={18}
        className={` transition-colors ${
          theme === "dark" ? "text-yellow-400" : "text-gray-400"
        }`}
      />
      <Switch
        className="mx-1"
        checked={theme === "light"}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
      />
      <Sun
        size={18}
        className={` transition-colors ${
          theme === "light" ? "text-yellow-400" : "text-gray-400"
        }`}
      />
    </div>
  );
};
