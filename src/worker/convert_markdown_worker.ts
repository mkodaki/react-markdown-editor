import * as marked from 'marked'
import * as sanitizeHtml from 'sanitize-html'

const worker: Worker = self as any

worker.addEventListener('message', (event) => {
    const text = event.data
    const buffer = String(marked.parse(text))
    const html = sanitizeHtml(buffer, { allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'] })
    worker.postMessage({ html })
})
