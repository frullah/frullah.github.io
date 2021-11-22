<script>
	import InlineSvg from '../components/Layout/InlineSvg.svelte';
</script>

<InlineSvg />

<main>
	<slot />
</main>

<style global lang="scss">
	@use '../stylesheets/tailwind.css';
	@use '../stylesheets/base.scss';
	@use '../stylesheets/icons.scss';
</style>
