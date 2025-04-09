import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        // svgoConfig: {
        //   floatPrecision: 2,
        // },
        // exportType: 'default',
        // jsxRuntime: 'automatic',
        // typescript: true,
        // expandProps: true,
        // index: true,
        // typescript: true,
        svgo: false,
      },
      include: '**/*.svg',
    }),
    react(),
  ],
});
