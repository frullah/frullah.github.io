<script>
  import ProjectCard from "@/components/ProjectCard.svelte";
  import ProjectDetail from "@/components/ProjectDetail.svelte";
  import { ScrollableSection } from "@beyonk/svelte-scrollspy";

  export let projects;
  export let project;

  async function showProjectDetail(slug) {
    project = fetch(`projects/${slug}.json`).then((res) => res.json());
  }
</script>

<style global>
  .project-list {
    @apply flex flex-wrap;
  }
</style>

<ScrollableSection id="projects">
  <div class="container">
    <h1 class="section-title">Projects</h1>
    <div class="project-list">
      {#each projects as { metadata, slug }}
        <ProjectCard
          name={metadata.name}
          {slug}
          done={metadata.done}
          on:click={(_) => showProjectDetail(slug)} />
      {:else}
        <div class="text-center text-muted">no project yet</div>
      {/each}
    </div>
  </div>
</ScrollableSection>

<ProjectDetail projectLoader={project} />
