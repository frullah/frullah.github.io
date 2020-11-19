<script>
  export let backdropClickHandler;
</script>

<style global>
  .backdrop {
    @apply fixed inset-0 transition-opacity bg-gray-700 opacity-50;
  }

  .modal-wrapper {
    @apply fixed z-10 inset-0 overflow-y-auto content-center items-center justify-center flex;
  }

  .modal {
    @apply bg-white rounded-lg overflow-hidden shadow-xl transform transition-all
      sm:w-full
      md:max-w-5xl;
  }

  .modal-title {
    @apply flex items-center;
    padding: theme("padding.3") theme("padding.4") theme("padding.2");
  }

  .modal-body {
    @apply flex flex-wrap items-center;
    padding: theme("padding.4");
  }
</style>

<div class="modal-wrapper">
  <div class="backdrop" on:click={backdropClickHandler} />
  <div class="modal" role="dialog" aria-modal="true">
    <slot />
  </div>
</div>
