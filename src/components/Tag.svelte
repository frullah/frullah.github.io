<script>
  export let text;
</script>

<div class="tag">{text}</div>

<style global lang="scss">
  .tag {
    @apply text-sm inline-block font-medium border border-primary-500 rounded py-1.5 px-3;
  }
</style>
