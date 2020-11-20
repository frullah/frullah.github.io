<script>
  import WipIcon from "./Icons/WipIcon.svelte";

  export let name;
  export let done;
</script>

<style global>
  .project-card {
    @apply w-full relative border border-gray-300 my-2;
  }
</style>

<div class="project-card">
  <div class="text-center font-bold">
    {name}
  </div>
</div>
