<script>
  import { ScrollableSection } from "@beyonk/svelte-scrollspy";

  import SocialLinks from "../SocialLinks.svelte";
  import UsedTechnologies from "./UsedTechnologies.svelte";
</script>

<style lang="scss">
  :global(.bio-title) {
    @apply mb-4;
  }

  :global(.bio-description) {
    margin: theme("margin.4") auto;
    max-width: 580px;
  }
</style>

<ScrollableSection id="home">
  <div class="container text-center">
    <h1 class="bio-title">Hi, I'm <strong>Fajarullah</strong></h1>
    <p class="bio-description">
      I'm a Software Developer, I love to code Web. I often use
      <a class="text-link" href="https://www.ruby-lang.org">Ruby</a>, and
      <a
        class="text-link"
        href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a>
      as my programming languages. When I have free time, I play
      <a class="text-link" href="https://osu.ppy.sh/users/5132441">osu!</a>,
      watching animes, or learning languages.
    </p>

    <SocialLinks />
  </div>
  <UsedTechnologies />
</ScrollableSection>
