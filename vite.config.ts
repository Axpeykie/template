import { ConfigEnv, UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  console.log('COMMAND->', command)
  console.log('MODE->', mode)
  const customEnv = loadEnv(mode, process.cwd())
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    base: '/template/',
    server: {
      port: Number(customEnv.VITE_PORT),
      open: true, // 服务启动时是否自动打开浏览器
      cors: true // 允许跨域
    },
    build: {
      target: 'es2019',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止Infinity被压缩为1/0，这可能会导致Chrome出现性能问题
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
}
