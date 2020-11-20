import { fade } from 'svelte/transition'

const duration = 150

export function pageTransitionIn (node) {
  return fade(node, { duration, delay: duration })
}

export function pageTransitionOut (node) {
  return fade(node, { duration })
}
