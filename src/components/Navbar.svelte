<script>
  export let segment;

  let show = false;

  function handleNavButtonClick() {
    show = !show;
  }
</script>

<style lang="scss">

.navbar {
  @apply
    flex
    items-center
    justify-between
    flex-wrap
    py-2
    px-4
    sticky
    top-0
    bg-white
    w-full
    border-gray-400
    border-b-2;
}

.nav-item {
  @apply block p-2;

  @screen sm {
    @apply inline-block mt-0;
  }

  &:hover {
    @apply text-primary-600;
  }
}

.nav-items {
  @apply hidden mt-3;

  @screen sm {
    @apply mt-0 block;
  }

  &.show {
    @apply block;
  }
}
</style>

<nav class="navbar">
  <div class="block sm:hidden">
    <button
      class="flex items-center px-3 py-2 border rounded text-primary-400 border-primary-400 hover:text-primary-700"
      on:click={handleNavButtonClick}
    >
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
  <div class="nav-items w-full block flex-grow lg:flex lg:items-center lg:w-auto" class:show={show}>
    <div class="text-sm sm:flex-grow">
      <a href="." class="nav-item {segment}">Home</a>
      <a href="projects" class="nav-item">Projects</a>
    </div>
  </div>
</nav>