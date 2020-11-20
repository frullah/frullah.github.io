<script>
  export let segment;

  import Navbar from "@/components/Layout/Navbar.svelte";
  import InlineSvg from "@/components/Layout/InlineSvg.svelte";
  import GlobalSnackbar from "@/components/GlobalSnackbar.svelte";
</script>

<style global src="./_layout.pcss">
</style>

<GlobalSnackbar />
<InlineSvg />

<Navbar {segment} />
<slot />
