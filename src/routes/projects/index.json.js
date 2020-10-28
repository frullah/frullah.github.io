import { responseJSON } from '../../server-utils';
import projects from './_projects'

const content = JSON.stringify(projects.map(data => ({
  slug: data.slug,
  metadata: data.metadata,
})))

export function get(req, res) {
  responseJSON(res, 200, content)
}