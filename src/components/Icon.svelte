<script>
  export let name;
  $$restProps.class = `icon ${$$restProps.class || ""}`
</script>

<style global lang="scss">
  .icon {
    width: 1em;
    height: 1em;
    display: inline-block;
    overflow: visible;
    fill: currentColor;
  }
</style>

<svg {...$$restProps}>
  <use href="#{name}"></use>
</svg>