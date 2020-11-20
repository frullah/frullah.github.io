<script>
  import { onDestroy } from 'svelte'
  import { fly } from 'svelte/transition'

  import { snackbarText } from '../../store'

  const timeoutMs = 5000
  let visible = false
  let timerId

  $: if (snackbarText.value) {
    visible = true
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      visible = false
      clearTimeout(timerId)
    }, timeoutMs)
  }

  onDestroy(() => {
    clearTimeout(timerId)
  })
</script>

<style global>
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
