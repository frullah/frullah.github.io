export function responseJSON (res, code, content) {
  res.writeHead(code, { 'Content-Type': 'application/json' })
  res.end(content)
}
