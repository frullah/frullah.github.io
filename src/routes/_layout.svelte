<script>
	import Navbar from "../components/Navbar.svelte";
	
  export let segment;
</script>

<style>
:global(h1) {
  @apply text-3xl;
}

:global(h2) {
  @apply text-2xl;
}

:global(h3) {
  @apply text-xl;
}
</style>

<Navbar {segment} />

<main>
  <slot />
</main>
