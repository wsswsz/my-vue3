import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock';
// import { UserConfigExport, ConfigEnv } from 'vite';

import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
const prodMock = false;
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'scss':  path.resolve(__dirname, 'src/assets/scss'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'img': path.resolve(__dirname, 'src/assets/img'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
      'cfg': path.resolve(__dirname, 'src/config')
    }
  },
  define: {
    'process.env': {} // vue3已经移除了process.env
  },
  plugins: [vue(), viteMockServe({
    mockPath: 'mock',
    prodEnabled: prodMock,
    // injectCode: `
    //   import { setupProdMockServer } from './mockProdServer';
    //   setupProdMockServer();
    // `,
    // logger: true
  })]
})


