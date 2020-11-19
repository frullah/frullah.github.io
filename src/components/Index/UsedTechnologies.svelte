<script>
  import TagList from "../TagList.svelte";

  const skills = [
    "HTML",
    "Javascript",
    "Typescript",
    "Vue",
    "Vuetify",
    "Bootstrap",
    "Tailwind CSS",
    "Ruby",
    "Ruby on rails",
    "PostgreSQL",
    "MariaDB",
    "Docker",
    "Git",
    "Sass",
    "Amazon Web Service",
  ];
</script>

<style lang="scss">
  :global(.tech-stack) {
    @apply text-center;
    margin: 0 auto;
    max-width: 580px;
  }
</style>

<div class="container">
  <h2 class="section-title">Technologies I use</h2>
  <TagList aria-label="used-technologies" tags={skills} class="tech-stack" />
</div>
