import { responseJSON } from '../../server-utils'
import projects from './_projects'

const lookup = {}
for (const project of projects) {
  lookup[project.slug] = JSON.stringify(project)
}

export async function get (req, res) {
  const { slug } = req.params
  const data = lookup[slug]

  if (data === undefined) {
    return responseJSON(res, 404, JSON.stringify({ message: 'not found' }))
  }

  responseJSON(res, 200, data)
}
