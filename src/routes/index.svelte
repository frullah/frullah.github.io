<script>
  import UsedTechnologies from "@/components/Index/UsedTechnologies.svelte";

  import SocialLinks from "@/components/SocialLinks.svelte";
  import { pageTransitionIn, pageTransitionOut } from "@/transition.js";
</script>

<style global lang="scss">
  .bio-title {
    @apply mb-4;
  }

  .bio-description {
    margin: theme("margin.4") auto;
    max-width: 580px;
  }

  #home {
    @apply text-center;
  }
</style>

<svelte:head>
  <title>Fajarullah</title>
</svelte:head>

<main id="home" in:pageTransitionIn out:pageTransitionOut>
  <div class="container">
    <h1 class="bio-title">Hi, I'm <strong>Fajarullah</strong></h1>
    <p class="bio-description">
      I'm a Software Developer, I love to code Web. I often use
      <a
        class="text-link"
        rel="noopener"
        target="_blank"
        href="https://www.ruby-lang.org">Ruby</a>, and
      <a
        class="text-link"
        rel="noopener"
        target="_blank"
        href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a>
      as my programming languages. When I have free time, I play
      <a
        class="text-link"
        rel="noopener"
        target="_blank"
        href="https://osu.ppy.sh/users/5132441">osu!</a>, watching animes, or
      learning languages.
    </p>

    <SocialLinks />
  </div>
  <UsedTechnologies />
</main>
