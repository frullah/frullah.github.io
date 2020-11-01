<script>
  import { ScrollableSection } from '@beyonk/svelte-scrollspy'

  import TagList from './TagList.svelte'

  const skills = [
    'HTML',
    'Javascript',
    'Tailwind CSS',
    'Ruby',
    'Ruby on rails',
    'Vue',
    'Vuetify',
    'PostgreSQL',
    'MariaDB'
  ]
</script>

<style lang="scss">
  :global(.skill-list) {
    @apply max-w-lg text-center;

    @screen sm {
      @apply text-left;
    }
  }
</style>

<ScrollableSection id="skills">
  <div class="container">
    <h2 class="section-title">Skills</h2>
    <TagList tags={skills} class="skill-list" />
  </div>
</ScrollableSection>
