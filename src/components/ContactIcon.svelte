<script>
  import Icon from "fa-svelte";
  import { roundArrow } from "tippy.js";
  import tippy from "sveltejs-tippy";
  import 'tippy.js/dist/svg-arrow.css'
  import 'tippy.js/animations/scale-subtle.css'

  export let content;
  export let href;
  export let icon;
  const tippyProps = {
    placement: "bottom",
    interactive: true,
    arrow: roundArrow,
    animation: "scale-subtle",
  };

  $: tippyProps.content = content;
</script>

<style lang="scss">
  a :global(.contact-icon) {
    font-size: 34px;
  }

  a :global(.fa-envelope) {
    @apply text-red-600;
  }

  a :global(.fa-github-square) {
    color: #333;
  }

  a :global(.fa-whatsapp-square) {
    color: #4fce5d;
  }
</style>

<a {href} target="_blank" use:tippy={tippyProps}>
  <Icon class="contact-icon fa-{icon.iconName}" {icon} />
</a>
