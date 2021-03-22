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

<style global lang="scss">
  .tech-stack {
    margin: 0 auto;
    max-width: 580px;
  }
</style>

<section aria-label="used-technologies" class="container">
  <h2 class="section-title">Technologies I use</h2>
  <TagList aria-label="tech-stack" tags={skills} class="tech-stack" />
</section>
