<script>
  export let name;
  export let slug;
</script>

<style lang="scss">
  :global(.project-card) {
    @apply w-1/2 p-2 cursor-pointer;

    @screen sm {
      @apply w-1/3;
    }

    &:hover {
      @apply bg-primary-200;
    }
  }
</style>

<a class="project-card" href="projects/{slug}" on:click|preventDefault>
  <div class="text-center font-bold">{name}</div>
</a>
