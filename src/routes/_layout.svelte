<script>
  import * as animateScroll from 'svelte-scrollto'
  import { cubicOut } from 'svelte/easing'
  import { ScrollSpy } from '@beyonk/svelte-scrollspy'
  import Navbar from '../components/Navbar.svelte'
  import { onMount } from 'svelte'

  let navbarHeight

  onMount(() => {
    animateScroll.setGlobalOptions({
      offset: -navbarHeight,
      duration: 300,
      easing: cubicOut
    })
  })
</script>

<style lang="scss" src="./_layout.scss">
</style>

<ScrollSpy>
  <Navbar bind:height={navbarHeight} />
  <slot />
</ScrollSpy>
