'use client';
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export const ThemeSwith = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <div className="theme">
            <button onClick={toggleTheme}>
                {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
}
