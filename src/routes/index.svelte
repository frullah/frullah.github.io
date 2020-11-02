<script context="module">
  export async function preload() {
    const res = await this.fetch("projects.json");
    const projects = await res.json();
    return { projects };
  }
</script>

<script>
  import HomeSection from "@/components/Index/HomeSection.svelte";
  import ProjectSection from "@/components/Index/ProjectSection.svelte";
  import SkillsSection from "@/components/Index/SkillsSection.svelte";

  export let projects;
</script>

<svelte:head>
  <title>Fajarullah</title>
</svelte:head>

<main>
  <HomeSection />
  <SkillsSection />
  <ProjectSection {projects} />
</main>
