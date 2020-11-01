<script>
  import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
  import Icon from "fa-svelte";
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
    @apply w-1/2 p-2 cursor-pointer relative;

    @screen sm {
      @apply w-1/3;
    }

    &:hover {
      @apply bg-primary-200;
    }
  }

  :global(.wip) {
    @apply p-2 px-3 inline-block absolute right-0 top-0;
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
      <Icon class="wip-icon" icon={faCircle} />
    </div>
  {/if}
  <div class="text-center font-bold">{name}</div>
</a>
