<script>
  import { ScrollableSection } from "@beyonk/svelte-scrollspy";

  import SocialIcons from "../SocialIcons.svelte";
  import UsedTechnologies from "./UsedTechnologies.svelte";
</script>

<style lang="scss">
  :global(.bio-description) {
    margin: 0 auto theme("margin.4");
    max-width: 580px;
  }
</style>

<ScrollableSection id="home">
  <div class="container text-center mt-4">
    <h1 class="bio-title">Hi, I'm <strong>Fajarullah</strong></h1>
    <p class="bio-description">
      I'm a Software Developer, I love to code for Web Development. I often use
      <a
        class="text-accent text-link"
        href="https://www.ruby-lang.org">Ruby</a>, and
      <a
        class="text-accent text-link"
        href="https://developer.mozilla.org/docs/Web/JavaScript">JavaScript</a>
      as my programming languages. When I have free time, I enjoy game, watching
      animes, and learning languages.
    </p>

    <SocialIcons />
  </div>
  <UsedTechnologies />
</ScrollableSection>
