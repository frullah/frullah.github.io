<script>
  let klass = "";
  export let name;
  export { klass as class };
</script>

<svg class="icon {klass}">
  <use xlink:href="#{name}" />
</svg>
