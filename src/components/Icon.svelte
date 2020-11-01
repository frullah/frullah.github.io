<script>
  let klass = "";
  export let name;
  export { klass as class };
</script>

<svg class="icon {klass}" role="img">
  <use xlink:href="#{name}" />
</svg>
