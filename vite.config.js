import { defineConfig } from 'vite' // 动态配置函数
import vue from '@vitejs/plugin-vue2'

import { resolve } from 'path'

const pathSrc = resolve(__dirname, 'src')

export default () =>
	defineConfig({
		plugins: [vue()],
		server: {
			hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      port: 4567, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: true,
      https: false, // whether open https 开启https首次运行比较慢 且有个输入密码过程
      // proxy look for https://vitejs.cn/config/#server-proxy
      // proxy: {
      //   '/api': {
      //     target: loadEnv('dev', process.cwd()).VITE_APP_PROXY_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
		},
		resolve: {
      alias: {
        '~/': `${pathSrc}/`,
        '@/': `${pathSrc}/`,
      },
    },
	})

