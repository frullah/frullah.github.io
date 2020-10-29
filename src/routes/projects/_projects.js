import projects from './_contents/*.md'

export default projects
  .map(data => ({
    slug: data.filename.slice(0, -3),
    metadata: data.metadata,
    html: data.html
  }))
  .sort((a, b) => a.metadata.date - b.metadata.date)
