<script>
  import Icon from './Icon.svelte'
  import tippy from 'sveltejs-tippy'
  import 'tippy.js/dist/svg-arrow.css'

  export let content
  export let href
  export let name

  const tippyProps = {
    placement: 'bottom',
    interactive: true,
    content: null
  }

  $: tippyProps.content = content
</script>

<style global>
  .contact-icon {
    font-size: 34px;

    &.envelope {
      @apply text-red-600;
    }

    &.github-square {
      color: #333;
    }
  
    &.whatsapp-square {
      color: #4fce5d;
    }
  }
</style>

<a {href} rel="noopener" target="_blank" use:tippy={tippyProps}>
  <Icon class="contact-icon {name}" {name} />
</a>
