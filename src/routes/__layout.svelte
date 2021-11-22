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
	@use "../stylesheets/tailwind.css";
	@use "../stylesheets/base.scss";
	@use "../stylesheets/icons.scss";
</style>
