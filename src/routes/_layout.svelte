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

  @layer base {
    :root {
      --text-body: theme("colors.gray.700");
    }

    body {
      @apply text-body-color;
    }
  }

  @tailwind components;
  @tailwind utilities;
  @tailwind screens;
</style>
