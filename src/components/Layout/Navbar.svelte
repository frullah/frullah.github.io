<script>
  export let segment;

  let show = false;
  const sections = [
    {
      link: undefined,
      text: "Home",
    },
    {
      link: "projects",
      text: "Projects",
    },
  ];

  function handleNavButtonClick() {
    show = !show;
  }
</script>

<style global lang="scss">
  .navbar {
    @apply flex
    items-center
    justify-between
    flex-wrap
    sticky
    top-0
    bg-white
    w-full
    border-gray-300
    border-b-2;

    padding: theme("padding.2") theme("padding.4");
  }

  .nav-item.active {
    @apply text-accent;
  }

  .nav-item {
    @apply block
      p-2
      sm:inline-block
      sm:mt-0
      hover:text-accent;
  }

  nav {
    @apply w-full
      hidden
      mt-3
      flex-grow
      sm:justify-end
      sm:mt-0
      sm:flex
      lg:flex
      lg:items-center
      lg:w-auto;

    &.show {
      @apply flex;
    }
  }

  .nav-toggler {
    @apply flex
      items-center
      border-0
      outline-none
      justify-center
      hover:text-accent
      sm:hidden;

    height: 40px;
    width: 40px;
  }

  .nav-item {
    @apply text-sm sm:flex-grow;
  }
</style>

<header class="navbar" >
  <button class="nav-toggler" on:click={handleNavButtonClick}>
    <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
  <nav class:show>
    <ul class="nav-items">
      <li class="text-sm sm:flex-grow">
        {#each sections as link}
          <a
            href={link.link || '/'}
            class="nav-item"
            class:active={link.link === segment}>
            {link.text}
          </a>
        {/each}
      </li>
    </ul>
  </nav>
</header>
