<script>
  import InlineSvg from "../components/Layout/InlineSvg.svelte";
  import Nav from "../components/Nav.svelte";
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
