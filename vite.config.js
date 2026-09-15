import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

function saveContentPlugin() {
  const contentPath = resolve(__dirname, 'src/content.json')
  return {
    name: 'save-content',
    configureServer(server) {
      server.middlewares.use('/api/save-content', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end()
          return
        }
        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body)
            writeFileSync(contentPath, JSON.stringify(parsed, null, 2) + '\n')
            res.statusCode = 200
            res.end('ok')
          } catch (err) {
            res.statusCode = 500
            res.end('error')
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), saveContentPlugin()],
})
