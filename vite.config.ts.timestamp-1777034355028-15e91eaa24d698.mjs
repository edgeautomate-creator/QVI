// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
function safePublicPlugin() {
  return {
    name: "safe-public-copy",
    enforce: "post",
    closeBundle() {
      const publicDir = path.resolve(__vite_injected_original_dirname, "public");
      const outDir = path.resolve(__vite_injected_original_dirname, "dist");
      if (!fs.existsSync(publicDir)) return;
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      const files = fs.readdirSync(publicDir);
      for (const file of files) {
        if (file.includes("image copy")) {
          continue;
        }
        const srcPath = path.join(publicDir, file);
        const destPath = path.join(outDir, file);
        try {
          fs.copyFileSync(srcPath, destPath);
        } catch (error) {
          console.warn(`Warning: Could not copy ${file}:`, error);
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), safePublicPlugin()],
  publicDir: false,
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIHNhZmVQdWJsaWNQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3NhZmUtcHVibGljLWNvcHknLFxuICAgIGVuZm9yY2U6ICdwb3N0JyBhcyBjb25zdCxcbiAgICBjbG9zZUJ1bmRsZSgpIHtcbiAgICAgIGNvbnN0IHB1YmxpY0RpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwdWJsaWMnKTtcbiAgICAgIGNvbnN0IG91dERpciA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jyk7XG5cbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhwdWJsaWNEaXIpKSByZXR1cm47XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMob3V0RGlyKSkgZnMubWtkaXJTeW5jKG91dERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocHVibGljRGlyKTtcblxuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGlmIChmaWxlLmluY2x1ZGVzKCdpbWFnZSBjb3B5JykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNyY1BhdGggPSBwYXRoLmpvaW4ocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4ob3V0RGlyLCBmaWxlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzcmNQYXRoLCBkZXN0UGF0aCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBXYXJuaW5nOiBDb3VsZCBub3QgY29weSAke2ZpbGV9OmAsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHNhZmVQdWJsaWNQbHVnaW4oKV0sXG4gIHB1YmxpY0RpcjogZmFsc2UsXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGNBQWM7QUFDWixZQUFNLFlBQVksS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFDbEQsWUFBTSxTQUFTLEtBQUssUUFBUSxrQ0FBVyxNQUFNO0FBRTdDLFVBQUksQ0FBQyxHQUFHLFdBQVcsU0FBUyxFQUFHO0FBQy9CLFVBQUksQ0FBQyxHQUFHLFdBQVcsTUFBTSxFQUFHLElBQUcsVUFBVSxRQUFRLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFFcEUsWUFBTSxRQUFRLEdBQUcsWUFBWSxTQUFTO0FBRXRDLGlCQUFXLFFBQVEsT0FBTztBQUN4QixZQUFJLEtBQUssU0FBUyxZQUFZLEdBQUc7QUFDL0I7QUFBQSxRQUNGO0FBRUEsY0FBTSxVQUFVLEtBQUssS0FBSyxXQUFXLElBQUk7QUFDekMsY0FBTSxXQUFXLEtBQUssS0FBSyxRQUFRLElBQUk7QUFFdkMsWUFBSTtBQUNGLGFBQUcsYUFBYSxTQUFTLFFBQVE7QUFBQSxRQUNuQyxTQUFTLE9BQU87QUFDZCxrQkFBUSxLQUFLLDJCQUEyQixJQUFJLEtBQUssS0FBSztBQUFBLFFBQ3hEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO0FBQUEsRUFDckMsV0FBVztBQUFBLEVBQ1gsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
