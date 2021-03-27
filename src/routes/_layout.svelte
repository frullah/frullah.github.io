<script>
	import Nav from '../components/Nav.svelte';
</script>

<style global lang="scss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@tailwind screens;
</style>

<Nav/>

<main>
	<slot></slot>
</main>