<script>
  import Nav from "@/components/Layout/Nav.svelte";
  import InlineSvg from "../components/Layout/InlineSvg.svelte";
</script>

<InlineSvg />
<Nav />

<main>
  <slot />
</main>

<style global lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @tailwind screens;
</style>
