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

	const name = "Fajarullah"
	const role = "Full Stack Software Engineer"
</script>

<section>
	<div class="mx-auto my-6 max-w-screen-sm p-4">
		<div aria-label="introduction">
			<h1>
				<p class="text-2xl">Hi, I am</p>
				<strong aria-label="name" class="text-3xl">{name}</strong>
			</h1>
		</div>
		<article aria-label="about me" class="mt-4 max-w-[480px]">
			<p>A {role}, who like to code to solve problems.</p>
			<p>
				Often uses
				<a class="text-primary-600" rel="noopener" target="_blank" href="https://www.ruby-lang.org"
					>Ruby</a
				> and
				<a
					class="text-primary-600"
					rel="noopener"
					target="_blank"
					href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a
				>
				as programming languages.
			</p>
			<p>I like to explore new technologies so that I can work efficiently, learn about machine learning, and learn foreign languages.</p>
		</article>

		<ul aria-label="contact links" class="flex mx-auto mt-4">
			{#each contacts as contact}
				<li class="mx-1">
					<ContactLink name={contact.name} content={contact.content} href={contact.href} />
				</li>
			{/each}
		</ul>
	</div>
</section>
