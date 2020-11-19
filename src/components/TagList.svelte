<script>
  import Tag from './Tag.svelte'

  export let tags
</script>

<style>
  :global(.tag-list > li) {
    @apply inline-block m-1;
  }
</style>

<ul class="tag-list {$$props.class}" aria-label={$$props['aria-label']}>
  {#each tags as tag}
    <li>
      <Tag text={tag} />
    </li>
  {/each}
</ul>
