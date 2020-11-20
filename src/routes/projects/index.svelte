<script context="module">
  export async function preload() {
    const res = await this.fetch("projects.json");
    const projects = await res.json();
    return { projects };
  }
</script>

<script>
  import ProjectCard from "@/components/ProjectCard.svelte";
import { pageTransitionIn, pageTransitionOut } from "@/transition.js";

  export let projects;
</script>

<style global>
  .project-list {
    @apply flex flex-wrap;
  }
</style>

<main in:pageTransitionIn out:pageTransitionOut>
  <div class="container">
    <h1 class="section-title">Projects</h1>
    <div class="project-list">
      {#each projects as { metadata, slug }}
        <ProjectCard name={metadata.name} {slug} done={metadata.done} />
      {:else}
        <div class="text-center text-muted">no project yet</div>
      {/each}
    </div>
  </div>
</main>
