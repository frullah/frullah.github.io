<script>
  import Tag from "../Tag.svelte";

  const usedTechnologies = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "Stimulus JS",
    "TailwindCSS",
    "Python",
    "Ruby",
    "Ruby on rails",
    "Hotwire",
    "PostgreSQL",
    "OracleDB",
    "MariaDB",
    "Git",
    "Github",
    "Github Action",
    "Docker",
    "AWS",
  ];
</script>

<section id="technologies">
  <div class="container my-4 p-4 max-w-screen-sm">
    <h2 class="text-xl text-center mb-4">My Tech Stacks</h2>
    <ul class="flex flex-wrap justify-center">
      {#each usedTechnologies as usedTechnology}
        <li class="mx-1 mb-2">
          <Tag text={usedTechnology} />
        </li>
      {/each}
    </ul>
  </div>
</section>
