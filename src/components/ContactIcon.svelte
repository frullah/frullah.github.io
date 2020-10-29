<script>
  import Icon from 'fa-svelte'
  import tippy from 'sveltejs-tippy'
  import 'tippy.js/dist/svg-arrow.css'

  export let content
  export let href
  export let icon
  const tippyProps = {
    placement: 'bottom',
    interactive: true
  }

  $: tippyProps.content = content
</script>

<style>
  :global(.contact-icon) {
    font-size: 34px;
  }

  :global(.fa-envelope) {
    @apply text-red-600;
  }

  :global(.fa-github-square) {
    color: #333;
  }

  :global(.fa-whatsapp-square) {
    color: #4fce5d;
  }
</style>

<a {href} target="_blank" use:tippy={tippyProps}>
  <Icon class="contact-icon fa-{icon.iconName}" {icon} />
</a>
