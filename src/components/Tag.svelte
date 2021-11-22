<script>
  export let text;
</script>

<div class="tag">{text}</div>

<style>
  .tag {
    @apply inline-block rounded border border-primary-500 py-1.5 px-3 font-medium text-sm;
  }
</style>
