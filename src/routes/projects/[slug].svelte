<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const res = await this.fetch(`projects/${slug}.json`);
    const project = await res.json();

    if (res.status !== 200) {
      return this.error(res.status, project.message);
    }

    return { project };
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  export let project;

  onMount(() => {
    goto("projects");
  });
</script>
