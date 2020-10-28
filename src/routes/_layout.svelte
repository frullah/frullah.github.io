<script>
  import Navbar from "../components/Navbar.svelte";

  export let segment;
</script>

<style lang="scss" src="./_layout.scss"></style>

<Navbar {segment} />

<slot />
