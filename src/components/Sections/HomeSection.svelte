<script>
  import ContactLink from "../ContactLink.svelte";

  const contacts = [
    {
      name: "whatsapp-square",
      content: "+62 859 3993 6593",
      href: "callto:+6285939936593",
    },
    {
      name: "github-square",
      content: "@frullah",
      href: "https://github.com/frullah",
    },
    {
      name: "linkedin",
      content: "@fajarullah",
      href: "https://www.linkedin.com/in/fajarullah/",
    },
    {
      name: "envelope",
      content: "frullah12@gmail.com",
      href: "mailto:frullah12@gmail.com",
    },
  ];
</script>

<section id="home">
  <div class="container max-w-screen-sm mx-auto mt-24 p-4">
    <h1 aria-label="introduction" class="text-2xl text-center mb-4">
      Hi, I am <strong aria-label="my name">Fajarullah</strong>
    </h1>
    <p aria-label="about me" class="text-center mb-4">
      I am a Full Stack Engineer, I love to build web stuff. I often use
      <a
        class="text-primary-600"
        rel="noopener"
        target="_blank"
        href="https://www.ruby-lang.org">Ruby</a
      >, and
      <a
        class="text-primary-600"
        rel="noopener"
        target="_blank"
        href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a
      >
      as my programming languages. When I have free time, sometime i learn about
      machine learning, playing
      <a
        class="text-primary-600"
        rel="noopener"
        target="_blank"
        href="https://osu.ppy.sh/users/5132441">osu!</a
      >, watching animes, or learn foreign languages.
    </p>

    <ul aria-label="contact links" class="flex mx-auto justify-center">
      {#each contacts as contact}
        <li class="mx-1">
          <ContactLink
            name={contact.name}
            content={contact.content}
            href={contact.href}
          />
        </li>
      {/each}
    </ul>
  </div>
</section>

<style global lang="scss">
  .icon {
    &.envelope {
      @apply text-red-600;
    }

    &.github-square {
      color: #333;
    }

    &.whatsapp-square {
      color: #4fce5d;
    }

    &.linkedin {
      color: #0e76a8;
    }
  }
</style>
