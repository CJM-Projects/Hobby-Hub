import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig(({ mode }) => {

    const basePrefix = mode === "production" ? "/Hobby-Hub/" : "/";

    return {
        base: basePrefix,
        plugins: [
            react(),
            babel({ presets: [reactCompilerPreset()] }),
            tailwindcss(),
        ],
    };
});