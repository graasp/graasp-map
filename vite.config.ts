import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { UserConfigExport, defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export default (): UserConfigExport =>
  defineConfig({
    plugins: [react(), dts({ entryRoot: 'src' }), cssInjectedByJsPlugin()],
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'graasp-map',
        formats: ['cjs', 'es'],
        // the proper extensions will be added
        fileName: 'index',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: [
          '@emotion/react',
          '@emotion/styled',
          '@graasp/sdk',
          '@graasp/translations',
          '@graasp/query-client',
          '@graasp/ui',
          '@mui/icons-material',
          '@mui/lab',
          '@mui/material',
          'date-fns',
          'i18next',
          'react-dom',
          'react-i18next',
          'react-query',
          'react',
          'stylis-plugin-rtl',
        ],
      },
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  });
