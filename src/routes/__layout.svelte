<script>
	import InlineSvg from '../components/Layout/InlineSvg.svelte';
	import Nav from '../components/Layout/Nav.svelte';
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

  @layer base {
    :root {
      --text-body: theme("colors.gray.700");
    }

    body {
			color: var(--text-body);
    }
  }
</style>
