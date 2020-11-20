<script>
  import tippy from "sveltejs-tippy";
  import Icon from "../Icon.svelte";

  const wipTippy = {
    placement: "bottom",
    content: "Work in progress",
  };
</script>

<style global>
  .wip {
    @apply inline-block;
    padding: theme("padding.3");
  }

  .wip-icon {
    @apply text-orange-400 text-xs;
  }
</style>

<div class="wip" use:tippy={wipTippy}>
  <Icon class="wip-icon" name="circle" />
</div>
