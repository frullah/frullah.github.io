<script>
  import Icon from '@/components/Icon.svelte'
  import tippy from "sveltejs-tippy";

  const wipTippy = {
    placement: "bottom",
    content: "Work in progress",
  };

  export let name;
  export let done;
  export let slug;
</script>

<style lang="scss">
  :global(.project-card) {
    @apply w-full cursor-pointer relative;
    padding: theme('padding.3') theme('padding.2');

    @screen sm {
      @apply w-1/2;
    }

    @screen md {
      @apply w-1/3;
    }

    &:hover {
      @apply bg-primary-200;
    }
  }

  :global(.wip) {
    @apply inline-block absolute right-0 top-0;
    padding: theme('padding.3') theme('padding.2');
  }

  :global(.wip-icon) {
    @apply text-orange-400 text-xs;
  }
</style>

<a class="project-card" href='projects/{slug}.json' on:click|preventDefault>
  {#if !done}
    <div
      class="wip"
      use:tippy={wipTippy}>
      <Icon class="wip-icon" name='circle' />
    </div>
  {/if}
  <div class="text-center font-bold">{name}</div>
</a>
