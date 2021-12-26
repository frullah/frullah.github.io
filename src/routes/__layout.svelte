<script>
	import InlineSvg from '../components/Layout/InlineSvg.svelte';
</script>

<InlineSvg />

<svelte:head>
	<title>Fajarullah - personal website</title>
</svelte:head>

<main>
	<slot />
</main>

<style global lang="scss">
	@use '../stylesheets/tailwind.css';
	@use '../stylesheets/base.scss';
	@use '../stylesheets/icons.scss';
</style>
