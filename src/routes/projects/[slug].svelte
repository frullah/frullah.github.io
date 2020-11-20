<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const response = await this.fetch(`projects/${slug}.json`);
    const project = await response.json();
    return { project };
  }
</script>

<script>
</script>
