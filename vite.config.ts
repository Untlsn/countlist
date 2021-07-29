import { defineConfig } from 'vite';
import { resolve } from 'path';
import prefresh from '@prefresh/vite';

const reactCompat = resolve(__dirname, 'node_modules/preact/compat');

export default defineConfig({
  plugins: [prefresh()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'react': reactCompat,
      'react-dom': reactCompat,
    },
  },
});


