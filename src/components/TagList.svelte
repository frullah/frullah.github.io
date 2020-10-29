<script>
  import Tag from './Tag.svelte'

  let klass
  export let tags
  export { klass as class }
</script>

<style>
  :global(.tag-list > li) {
    @apply inline-block m-1;
  }
</style>

<ul class="tag-list {klass}">
  {#each tags as tag}
    <li>
      <Tag text={tag} />
    </li>
  {/each}
</ul>
