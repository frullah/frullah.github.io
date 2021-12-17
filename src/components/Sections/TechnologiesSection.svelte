<script>
	import Tag from '../Tag.svelte';

	const usedTechnologies = [
		'Ruby',
		'Rails',
		'Hotwire (Rails)',
		'Stimulus JS',
		'Javascript',
		'Typescript',
		'HTML5',
		'CSS3',
		'TailwindCSS',
		'Bootstrap',
		'PostgreSQL',
		'OracleDB',
		'MariaDB',
		'Python',
		'PHP',
		'Git',
		'Github',
		'Github Action',
		'Docker',
		'Google Cloud Platform',
		'AWS',
		'Flutter',
		'Firebase'
	];
</script>

<section id="technologies">
	<div class="mx-auto my-4 max-w-screen-sm p-4">
		<h2 class="mb-4 text-xl text-center">My Tech Stacks</h2>
		<ul class="flex flex-wrap justify-center">
			{#each usedTechnologies as usedTechnology}
				<li class="mx-1 mb-2">
					<Tag text={usedTechnology} />
				</li>
			{/each}
		</ul>
	</div>
</section>
