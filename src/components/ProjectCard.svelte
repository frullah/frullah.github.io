<script>
  import { faCircle } from "@fortawesome/free-solid-svg-icons";
  import Icon from "fa-svelte";
  import tippy from "sveltejs-tippy";

  const cirlceTippy = {
    placement: 'right',
    content: 'Work in progress'
  }

  export let name;
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

  :global(.wip-icon) {
    @apply text-orange-400 text-xs;
  }
</style>

<a class="project-card" href="projects/{slug}.json" on:click|preventDefault>
  <div class="p-2 px-3 inline-block absolute right-0 top-0" use:tippy={cirlceTippy} >
    <Icon class="wip-icon" icon={faCircle} />
  </div>
  <div class="text-center font-bold">{name}</div>
</a>
