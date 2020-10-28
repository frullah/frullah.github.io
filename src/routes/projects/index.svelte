<script context="module">
  export async function preload() {
    const response = await this.fetch("projects.json");
    const projects = await response.json();
    return { projects };
  }
</script>

<script>
  import ProjectCard from "@/components/ProjectCard.svelte";
  import ProjectDetail from "@/components/ProjectDetail.svelte";

  export let projects;
  export let project;

  async function showProjectDetail(slug) {
    const response = await fetch(`projects/${slug}.json`);
    project = await response.json();
  }
</script>

<style>
  :global(.project-list) {
    @apply flex;
  }
</style>

<main>
  <div class="container">
    <h2 class="section-title">Projects</h2>
    <div class="project-list">
      {#each projects as project}
        <ProjectCard
          name={project.metadata.name}
          slug={project.slug}
          on:click={(_) => showProjectDetail(project.slug)} />
      {:else}
        <div class="text-center text-gray-600">no project yet</div>
      {/each}
    </div>
  </div>
</main>

<ProjectDetail {project} />
