<script>
  import Button from "../Button.svelte";
  import Icon from "../Icon.svelte";

  let openNav = false;
  const links = [{ href: "#home", text: "Home" }];
</script>

<header
  class="flex items-center py-1 px-4 border-b-[3px] h-[54px] z-20 fixed inset-x-0 top-0 bg-white"
>
  <div class="container max-w-screen-sm flex items-center">
    <a class="text-2xl" href="#home">Fajarullah</a>
    <div class="flex-grow" />
    <div
      on:click={() => (openNav = false)}
      class:hidden={!openNav}
      class="fixed inset-0 z-10 bg-gray-900 opacity-50 sm:hidden"
    />

    <Button class="m-0 ml-2 block sm:hidden" on:click={() => (openNav = true)}>
      <Icon class="text-xl" name="bars" />
    </Button>

    <nav class:open={openNav}>
      <Button
        class="sm:hidden block ml-auto"
        on:click={() => (openNav = false)}
      >
        <Icon class="text-2xl" name="times" />
      </Button>
      <ul>
        {#each links as link}
          <li><a href={link.href}>{link.text}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  nav {
    @apply fixed
      sm:static
      inset-y-0
      right-0
      sm:w-auto
      w-[256px]
      transform
      translate-x-full
      sm:translate-x-0
      transition
      duration-200
      sm:block
      bg-white
      z-20;

    &.open {
      @apply block
        translate-x-0
        ease-out;
    }

    & ul li a {
      @apply block py-2.5 px-4 font-medium hover:text-primary-600;
    }
  }
</style>
