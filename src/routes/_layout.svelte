<script>
	import InlineSvg from '../components/InlineSvg.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<style global lang="scss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@tailwind screens;
</style>

<InlineSvg></InlineSvg>
<Nav/>

<main>
	<slot></slot>
</main> 