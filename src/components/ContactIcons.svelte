<script>
  import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons/faWhatsappSquare'
  import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare'
  import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
  import ContactIcon from '../components/ContactIcon.svelte'

  const links = [
    {
      href: 'mailto:frullah12@gmail.com',
      icon: faEnvelope,
      content: 'frullah12@gmail.com'
    },
    {
      href: 'https://web.whatsapp.com/send?phone=+6285939936593',
      icon: faWhatsappSquare,
      content: '+62-859-3993-6593'
    },
    {
      href: 'https://github.com/frullah',
      icon: faGithubSquare,
      content: '@frullah'
    }
  ]
</script>

<style>
:global(.contact-icon-list > li) {
  @apply inline-block m-1;
}
</style>

<ul class="contact-icon-list">
  {#each links as link (link.icon)}
    <li>
      <ContactIcon {...link} />
    </li>
  {/each}
</ul>
