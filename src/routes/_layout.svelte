<script>
  import * as animateScroll from 'svelte-scrollto'
  import { cubicOut } from 'svelte/easing'
  import { ScrollSpy } from '@beyonk/svelte-scrollspy'
  import Navbar from '@/components/Layout/Navbar.svelte'
  import { onMount } from 'svelte'
  import InlineSvg from '@/components/Layout/InlineSvg.svelte'
  import Snackbar from '@/components/Layout/Snackbar.svelte'

  let navbarHeight

  onMount(() => {
    animateScroll.setGlobalOptions({
      offset: -navbarHeight,
      duration: 300,
      easing: cubicOut
    })
  })
</script>

<style global lang="postcss" src="./_layout.pcss"></style>

<Snackbar />
<InlineSvg />

<ScrollSpy>
  <Navbar bind:height={navbarHeight} />
  <slot />
</ScrollSpy>
