<script>
  import ContactIcon from "../components/ContactIcon.svelte";

  const links = [
    {
      href: "mailto:frullah12@gmail.com",
      name: "envelope",
      content: "frullah12@gmail.com",
    },
    {
      href: "https://web.whatsapp.com/send?phone=+6285939936593",
      name: "whatsapp-square",
      content: "+62-859-3993-6593",
    },
    {
      href: "https://github.com/frullah",
      name: "github-square",
      content: "@frullah",
    },
  ];
</script>

<ul aria-label="contacts" class="tag-list">
  {#each links as link (link.name)}
    <li>
      <ContactIcon {...link} />
    </li>
  {/each}
</ul>
