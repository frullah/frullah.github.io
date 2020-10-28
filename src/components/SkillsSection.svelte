<script>
  import Tag from "../components/Tag.svelte";

  const skills = [
    "Git",
    "HTML",
    "Javascript",
    "Ruby",
    "Ruby on rails",
    "Bootstrap",
    "Vue",
    "Vuetify",
    "PostgreSQL",
    "MariaDB",
  ];
</script>

<section id="skills">
  <div class="container">
    <h2 class="text-center mb-2">Skills</h2>
    <ul class="text-center">
      {#each skills as skill}
        <li class="inline-block m-1">
          <Tag text={skill} />
        </li>
      {/each}
    </ul>
  </div>
</section>
