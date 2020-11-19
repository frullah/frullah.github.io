<script>
  import * as animateScroll from "svelte-scrollto";
  import { cubicOut } from "svelte/easing";
  import { ScrollSpy } from "@beyonk/svelte-scrollspy";
  import Navbar from "@/components/Layout/Navbar.svelte";
  import { onMount } from "svelte";
  import InlineSvg from "@/components/Layout/InlineSvg.svelte";
  import Snackbar from "@/components/Layout/Snackbar.svelte";

  let navbarHeight;

  onMount(() => {
    animateScroll.setGlobalOptions({
      offset: -navbarHeight,
      duration: 300,
      easing: cubicOut,
    });

    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  });
</script>

<style lang="scss" src="./_layout.scss">
</style>

<Snackbar />
<InlineSvg />

<ScrollSpy>
  <Navbar bind:height={navbarHeight} />
  <slot />
</ScrollSpy>
