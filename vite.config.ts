import { defineConfig } from 'vite';
import { resolve } from 'path';
import refresh from '@vitejs/plugin-react-refresh';

const reactCompat = resolve(__dirname, 'node_modules/preact/compat');

const aliases = () => {
  const def = { '~': resolve(__dirname, 'src') };
  const production = {
    'react': reactCompat,
    'react-dom': reactCompat,
  };

  return process.env.NODE_ENV === 'production'
    ? { ...def, ...production }
    : def;
};

export default defineConfig({
  resolve: {
    alias: aliases(),
  },
  plugins: [refresh()],
});


