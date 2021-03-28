<script>
  export let color = null;
</script>

<button
  class:btn={true}
  class:btn-primary={color === "primary"}
  {...$$restProps}
  on:click
>
  <slot />
</button>

<style lang="scss" global>
  .btn {
    @apply rounded-md
      px-4
      py-2
      m-1
      transition
      duration-150
      ease
      select-none
      focus:outline-none
      focus:ring;
  }

  .btn-primary {
    @apply text-white
      bg-primary-500
      hover:bg-primary-600;
  }
</style>
