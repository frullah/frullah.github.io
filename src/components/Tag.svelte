<script>
  export let text
</script>

<style global>
  .tag {
    @apply text-xs inline-block font-semibold border border-primary-500 rounded;
    padding: theme('padding.1') theme('padding.3');
  }
</style>

<div class="tag">{text}</div>
