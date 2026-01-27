import { defineConfig } from 'vite';

// Eenvoudige configuratie voor statische HTML site
export default defineConfig({
      server: {
        port: 3000,
        host: '0.0.0.0',
    open: true,
  },
  publicDir: 'images',
});
