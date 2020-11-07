<script>
  import "@skeleton-elements/svelte/skeleton-text.css";
  import "@skeleton-elements/svelte/skeleton-image.css";
  import "@skeleton-elements/svelte/skeleton-effect.css";

  import Icon from "./Icon.svelte";
  import TagList from "./TagList.svelte";
  import { SkeletonText, SkeletonImage } from "@skeleton-elements/svelte";
  import Modal from "./Modal.svelte";

  export let projectLoader;

  function setProjectToNull() {
    projectLoader = null;
  }
</script>

<style lang="scss">
  :global(.project-images) {
    @apply w-full flex justify-center items-center;
    padding: theme('padding.4') 0;

    @screen sm {
      @apply py-0;
    }

    @screen md {
      @apply w-6/12;
    }
  }

  :global(.project-description) {
    margin: theme('margin.4') 0;
  }
</style>

<svelte:head>
  {#if projectLoader}
    <style>
      body {
        @apply overflow-hidden;
      }
    </style>
  {/if}
</svelte:head>{#if projectLoader}
  <Modal backdropClickHandler={setProjectToNull}>
    {#await projectLoader}
      <div class="modal-title">
        <div class="flex flex-grow items-center">
          <SkeletonText effect="blink">Project Title</SkeletonText>
        </div>
        <button class="w-12 h-10" on:click={setProjectToNull}>
          <Icon name="times" />
        </button>
      </div>
      <div class="modal-body">
        <div class="w-full md:w-6/12">
          <SkeletonText effect="blink" tag="div">Project Category</SkeletonText>
          <SkeletonText effect="blink" tag="div" class="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            ante purus. Vestibulum non consectetur mi. Ut molestie, libero at
            tincidunt pellentesque, nibh lectus interdum.
          </SkeletonText>
          <div class="project-stacks">
            <SkeletonText effect="blink">Stack</SkeletonText>
            <SkeletonText effect="blink">Stack</SkeletonText>
            <SkeletonText effect="blink">Stack</SkeletonText>
          </div>
        </div>
        <div class="project-images">
          <SkeletonImage effect="blink" width="320" height="192" />
        </div>
      </div>
    {:then project}
      <div class="modal-title">
        <div class="flex flex-grow items-center">
          <h3 class="font-bold" id="modal-headline">{project.metadata.name}</h3>
          {#if !project.metadata.done}
            <Icon name="circle" class="wip-icon mx-2" />
            <div class="text-sm">[Work in progress]</div>
          {/if}
        </div>
        <button class="w-12 h-10" on:click={setProjectToNull}>
          <Icon name="times" />
        </button>
      </div>
      <div class="modal-body">
        <div class="w-full md:w-6/12">
          <h4 class="font-bold">{project.metadata.category}</h4>
          <article class="project-description">
            {@html project.html}
          </article>
          <TagList class="project-stacks" tags={project.metadata.stacks} />
        </div>
        <div class="project-images">
          {#each project.metadata.images as image, i}
            <img src={image} alt="preview-{i}" />
          {:else}
            <p class="text-muted text-center">No image available</p>
          {/each}
        </div>
      </div>
    {/await}
  </Modal>
{/if}
