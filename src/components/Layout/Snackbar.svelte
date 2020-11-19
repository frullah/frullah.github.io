<script>
  	import { onDestroy } from 'svelte';
  import { fly } from "svelte/transition";

  import { snackbarText } from "../../store";
  setTimeout(() => (snackbarText.value = "asasa"), 500)
  
  const timeout = 1
  export let visible = false
  let timerId

  $: if (snackbarText.value) {
    visible = true
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      visible = false
      timerId = undefined
    }, timeout * 1000)
  }

  onDestroy(() => {
    clearTimeout(timerId)
    timerId = undefined
  });
</script>

<style>
  :global(.snackbar) {
    @apply fixed bottom-4 left-4 bg-gray-700 text-white;
    padding: theme("padding.3");
  }
</style>

{#if visible}
  <div
    class="snackbar"
    in:fly={{ y: 48, duration: 250 }}
    out:fly={{ y: 48, duration: 250 }}>
    {snackbarText.value}
  </div>
{/if}
