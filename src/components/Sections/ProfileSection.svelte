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
	const role = "software engineer"
</script>


<section class="py-4 bg-primary-100">
	<div aria-label="introduction" class="text-center">
		<h1>
			<p class="text-2xl">Hi, I am</p>
			<strong aria-label="name" class="text-3xl">{name}</strong>
		</h1>
		<h2 class="text-xl">A passionate {role}</h2>
	</div>

	<ul aria-label="contact links" class="flex justify-center mx-auto mt-4">
		{#each contacts as contact}
			<li class="mx-1">
				<ContactLink name={contact.name} content={contact.content} href={contact.href} />
			</li>
		{/each}
	</ul>
</section>
<section>
	<div class="mx-auto max-w-screen-sm py-8 px-4">
		<h2 class="text-2xl">About me</h2>
		<article aria-label="about me" class="mt-4 max-w-[560px]">
			<p>
				I like to code to solve problems, mostly using 
				<a class="text-primary-600" rel="noopener" target="_blank" href="https://www.ruby-lang.org"
					>Ruby</a
				> and
				<a
					class="text-primary-600"
					rel="noopener"
					target="_blank"
					href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a
				>.
			</p>
			<p>I love new challenges, and explore new technologies to get things done effectively and efficiently.</p>
			<p class="mt-4">I have interest in machine learning, and have hobby learning foreign languages.</p>
		</article>
	</div>
</section>
