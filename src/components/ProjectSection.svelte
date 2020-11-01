<script>
  import ProjectCard from '@/components/ProjectCard.svelte'
  import ProjectDetail from '@/components/ProjectDetail.svelte'
  import { ScrollableSection } from '@beyonk/svelte-scrollspy'

  export let projects
  export let project

  async function showProjectDetail (slug) {
    const response = await fetch(`projects/${slug}.json`)
    project = await response.json()
  }
</script>

<style>
  :global(.project-list) {
    @apply flex;
  }
</style>

<ScrollableSection id="projects">
  <div class="container">
    <h2 class="section-title">Projects</h2>
    {#if projects}
      <div class="project-list">
        {#each projects as project}
          <ProjectCard
            name={project.metadata.name}
            slug={project.slug}
            done={project.metadata.done}
            on:click={(_) => showProjectDetail(project.slug)} />
        {:else}
          <div class="text-center text-gray-600">no project yet</div>
        {/each}
      </div>
    {:else}
      <p class="text-gray-700">loading...</p>
    {/if}
  </div>
</ScrollableSection>

<ProjectDetail {project} />
