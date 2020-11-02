<script>
  import Icon from "./Icon.svelte";
  import Tag from "./Tag.svelte";

  export let project;

  function setProjectToNull() {
    project = null;
  }
</script>

{#if project}
  <div
    class="fixed z-10 inset-0 overflow-y-auto content-center items-center justify-center flex">
    <div
      class="fixed inset-0 transition-opacity bg-gray-700 opacity-50"
      on:click={setProjectToNull} />

    <div
      class=" bg-white rounded-lg overflow-hidden shadow-xl transform transition-all md:max-w-5xl sm:w-full"
      role="dialog"
      aria-modal="true">
      <div class="p-4 sm:p-6">
        <div class="modal-title flex items-center">
          <div class="flex flex-grow items-center">
            <h3 class="font-bold" id="modal-headline">
              {project.metadata.name}
            </h3>
            {#if !project.metadata.done}
              <Icon name="circle" class="wip-icon ml-2" />
              <div class="ml-2 text-sm">[Work in progress]</div>
            {/if}
          </div>
          <button
            class="font-bold text-xl px-4 py-2"
            on:click={setProjectToNull}>×</button>
        </div>
        <div class="modal-body flex flex-wrap">
          <div class="w-full md:w-6/12">
            <h4 class="font-bold">{project.metadata.category}</h4>
            <article class="my-4">
              {@html project.html}
            </article>
            <ul>
              {#each project.metadata.stacks as stack}
                <li class="inline-block m-1">
                  <Tag text={stack} />
                </li>
              {/each}
            </ul>
          </div>
          <div
            class="w-full md:w-6/12 flex justify-center items-center py-4 sm:py-0">
            {#each project.metadata.images as image, i}
              <img src={image} alt="preview-{i}" />
            {:else}
              <p class="text-muted text-center">No image available</p>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
