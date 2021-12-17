<script>
	import ContactLink from '../ContactLink.svelte';

	const contacts = [
		{
			name: 'whatsapp-square',
			content: '+62 859 3993 6593',
			href: 'callto:+6285939936593'
		},
		{
			name: 'github-square',
			content: '@frullah',
			href: 'https://github.com/frullah'
		},
		{
			name: 'linkedin',
			content: '@fajarullah',
			href: 'https://www.linkedin.com/in/fajarullah/'
		},
		{
			name: 'envelope',
			content: 'frullah12@gmail.com',
			href: 'mailto:frullah12@gmail.com'
		},
		{
			name: 'codingame',
			content: 'Codingame ID: frullah',
			href: 'https://www.codingame.com/profile/5e3c0adf405d67aac36c0904e56ff16a7992341'
		},
		{
			name: 'codewars',
			content: 'Codewars ID: frullah',
			href: 'https://www.codewars.com/users/frullah'
		},
	];
</script>

<section>
	<div class="mx-auto mt-4 max-w-screen-sm p-4">
		<h1 aria-label="introduction" class="mb-4 text-2xl text-center">
			Hi, I am <strong aria-label="my name">Fajarullah</strong>
		</h1>
		<article aria-label="about me" class="text-center mb-4">
			<p>I am a Full Stack Engineer, I like to code to solve problems.</p>
			<p>
				I often use
				<a class="text-primary-600" rel="noopener" target="_blank" href="https://www.ruby-lang.org"
					>Ruby</a
				>, and
				<a
					class="text-primary-600"
					rel="noopener"
					target="_blank"
					href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a
				>
				as my programming languages.
			</p>
			<p>Sometime in my free time, i like to explore new technologies, learn about machine learning, and learn foreign languages.</p>
		</article>

		<ul aria-label="contact links" class="flex justify-center mx-auto">
			{#each contacts as contact}
				<li class="mx-1">
					<ContactLink name={contact.name} content={contact.content} href={contact.href} />
				</li>
			{/each}
		</ul>
	</div>
</section>
