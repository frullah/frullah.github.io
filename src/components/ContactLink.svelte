<script>
	import Icon from './Icon.svelte';
	import tippy from 'sveltejs-tippy';
	import 'tippy.js/dist/svg-arrow.css';
	export let content;
	export let href;
	export let name;
	const tippyProps = {
		placement: 'bottom',
		interactive: true,
		content: content
	};
</script>

<a {href} rel="noopener" target="_blank" use:tippy={tippyProps}>
	<Icon class="text-[40px] {name}" {name} />
</a>
