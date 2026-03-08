import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function safePublicPlugin() {
  return {
    name: 'safe-public-copy',
    enforce: 'post' as const,
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');

      if (!fs.existsSync(publicDir)) return;
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

      const files = fs.readdirSync(publicDir);

      for (const file of files) {
        if (file.includes('image copy')) {
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

export default defineConfig({
  plugins: [react(), safePublicPlugin()],
  publicDir: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
