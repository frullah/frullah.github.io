<script>
  import { onMount } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import * as animateScroll from 'svelte-scrollto'
  import { ScrollSpy } from '@beyonk/svelte-scrollspy'
  import Navbar from '@/components/Layout/Navbar.svelte'
  import InlineSvg from '@/components/Layout/InlineSvg.svelte'
  import GlobalSnackbar from '@/components/GlobalSnackbar.svelte'

  
  let navbarHeight

  onMount(() => {
    animateScroll.setGlobalOptions({
      offset: -navbarHeight,
      duration: 300,
      easing: cubicOut
    })
  })
</script>

<style global src="./_layout.pcss"></style>

<GlobalSnackbar />
<InlineSvg />

<ScrollSpy>
  <Navbar bind:height={navbarHeight} />
  <slot />
</ScrollSpy>
