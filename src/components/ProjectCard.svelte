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

<style global>
  .project-card {
    @apply
      w-full
      cursor-pointer
      relative
    hover:bg-primary-200
      sm:w-1/2
      md:w-1/2;
    padding: theme('padding.3')
  }

  .wip {
    @apply inline-block absolute right-0 top-0;
    padding: theme('padding.3');
  }

  .wip-icon {
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
