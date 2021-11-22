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
  <div class="mx-auto my-4 max-w-screen-sm p-4">
    <h2 class="mb-4 text-xl text-center">My Tech Stacks</h2>
    <ul class="flex flex-wrap justify-center">
      {#each usedTechnologies as usedTechnology}
        <li class="mx-1 mb-2">
          <Tag text={usedTechnology} />
        </li>
      {/each}
    </ul>
  </div>
</section>
