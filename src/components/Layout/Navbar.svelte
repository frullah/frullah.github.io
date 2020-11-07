<script>
  import { SectionHeader } from "@beyonk/svelte-scrollspy";
  import { scrollto } from "svelte-scrollto";

  export let height;
  let show = false;
  const links = [
    {
      id: "home",
      text: "Home",
    },
    {
      id: "projects",
      text: "Projects",
    },
  ];

  function handleNavButtonClick(node) {
    show = !show;
  }
</script>

<style lang="scss">
  :global(.navbar) {
    @apply flex
    items-center
    justify-between
    flex-wrap
    sticky
    top-0
    bg-white
    w-full
    border-gray-400
    border-b-2;
    padding: theme('padding.4') theme('padding.2');
  }

  :global(.active > .nav-item) {
    @apply text-primary-600;
  }

  :global(.nav-item) {
    @apply block p-2;

    @screen sm {
      @apply inline-block mt-0;
    }

    &:hover {
      @apply text-primary-600;
    }
  }

  :global(.nav-items) {
    @apply w-full hidden mt-3 flex-grow;

    @screen sm {
      @apply mt-0 block;
    }

    @screen lg {
      @apply flex items-center w-auto;
    }

    &.show {
      @apply block;
    }
  }

  :global(.nav-toggler) {
    @apply flex items-center border rounded text-primary-400 border-primary-400;
    padding: theme('padding.2') theme('padding.3');

    &:hover {
      @apply text-primary-700;
    }
  }

  :global(.nav-item) {
    @apply text-sm;

    @screen sm {
      @apply flex-grow;
    }
  }
</style>

<header class="navbar" bind:offsetHeight={height}>
  <div class="block sm:hidden">
    <button class="nav-toggler" on:click={handleNavButtonClick}>
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
  <nav
    class="nav-items"
    class:show>
    <div class="text-sm sm:flex-grow">
      {#each links as link}
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
