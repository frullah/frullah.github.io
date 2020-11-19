<script>
  import { SectionHeader } from "@beyonk/svelte-scrollspy";
  import { scrollto } from "svelte-scrollto";

  export let height;
  let show = false;
  const sections = [
    {
      id: "home",
      text: "Home",
    },
    {
      id: "projects",
      text: "Projects",
    },
  ];

  function handleNavButtonClick() {
    show = !show;
  }
</script>

<style global>
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

    padding: theme('padding.2');
  }

  .active > .nav-item {
    @apply text-accent;
  }

  .nav-item {
    @apply
      block
      p-2
      sm:inline-block
      sm:mt-0
      hover:text-accent;
  }

  .nav-items {
    @apply
      w-full
      hidden
      mt-3
      flex-grow
      sm:mt-0
      sm:block
      lg:flex
      lg:items-center
      lg:w-auto;

    &.show {
      @apply block;
    }
  }

  .nav-toggler {
    @apply
      flex
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

<header class="navbar" bind:offsetHeight={height}>
  <button class="nav-toggler" on:click={handleNavButtonClick}>
    <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
  <nav class="nav-items" class:show>
    <div class="text-sm sm:flex-grow">
      {#each sections as link}
        <SectionHeader id={link.id}>
          <a
            use:scrollto={`#${link.id}`}
            href="#{link.id}"
            class="nav-item">{link.text}</a>
        </SectionHeader>
      {/each}
    </div>
  </nav>
</header>
