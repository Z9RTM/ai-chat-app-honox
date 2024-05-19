import path from 'path'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import nodeServerPlugin from './vite-node-server-plugin'
import client from 'honox/vite/client'

export default defineConfig(({ mode }) => {
  const common = {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './app')
      }
    }
  }
  if (mode === 'client') {
    return {
      ...common,
      plugins: [client({ jsxImportSource: "react" })],
      build: {
        rollupOptions: {
          input: ['./app/client.ts', './app/style.css'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name].[ext]'
          }
        },
        emptyOutDir: false
      }
    }
  } else {
    return {
      ...common,
      ssr: {
        external: ['react', 'react-dom', 'ai/react']
      },
      plugins: [
        honox(),
        nodeServerPlugin()
      ]
    }
  }
})
