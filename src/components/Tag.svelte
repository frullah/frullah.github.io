<script>
  export let text
</script>

<style>
  :global(.tag) {
    @apply text-xs inline-block font-semibold px-3 py-1 border border-primary-500 rounded;
  }
</style>

<div class="tag">{text}</div>
