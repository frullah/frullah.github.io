<script>
	export let name;
	$$restProps.class = `icon ${$$restProps.class || ''}`;
</script>

<svg {...$$restProps}>
	<use href="#{name}" />
</svg>

<style>
	.icon {
		@apply inline-block w-[1em] h-[1em] overflow-visible fill-current;
	}
</style>
