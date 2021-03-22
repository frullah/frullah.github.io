<script>
  import { snackbarText } from '@/store.js';

  import { onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'


  const timeoutMs = 5000
  let visible = false
  let timer

  const clearTimer = () => clearTimeout(timer)

  $: if (snackbarText.value) {
    visible = true
    clearTimer()
    timer = setTimeout(() => {
      visible = false
      clearTimer()
    }, timeoutMs)
  }

  onDestroy(clearTimer)
</script>

<style global lang="scss">
  .snackbar {
    @apply fixed bottom-4 left-4 bg-gray-700 text-white;
    padding: theme("padding.3");
  }
</style>

{#if visible}
  <div
    class="snackbar"
    in:fly={{ y: 48, duration: 350 }}
    out:fly={{ y: 48, duration: 350 }}>
    {snackbarText.value}
  </div>
{/if}
