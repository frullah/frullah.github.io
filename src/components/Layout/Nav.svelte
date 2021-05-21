<script>
  let navState = false;

  function closeNav() {
    navState = false;
  }
</script>

<header
  class="flex items-center py-1 px-4 border-b-[3px] h-[54px] z-20 fixed inset-x-0 top-0 bg-white"
>
  <div class="container max-w-screen-sm flex items-center">
    <a class="text-2xl" href="#home">Fajarullah</a>
    <div class="flex-grow" />
    <div
      on:click={closeNav}
      class:hidden={!navState}
      class="fixed inset-0 z-10 bg-gray-900 opacity-50 sm:hidden hidden"
    />
  </div>
</header>
