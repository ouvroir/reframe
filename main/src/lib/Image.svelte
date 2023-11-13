<script lang="ts">
  export let src: string
  export let srcset: string[] = []
  export let alt: string = ''
  export let caption: string = ''
  export let align: 'left' | 'center' | 'right' = 'center'
  //   export let credits: string = ''
  //   export let metadata: string = ''
  //   export let manifestUrl: string = ''
  //   export let viewer: none | 'mirador' | 'openseadragon' = null

  const aspectRatio: number = 0
  let img: HTMLImageElement

  const alignStyle = ``
  const style = `${alignStyle}`

  /** TODO:
   * width of .image has to be computed by container
   */
</script>

<div class="image" style="{style}">
  <img bind:this="{img}" src="{src}" alt="{alt}" srcset="{srcset.join(',')}" />
  <p class="legend">
    {caption}
  </p>
</div>

<style>
  .image {
    /* max-width: 100%; */
    /* max-height: 100%; */
    align-self: start;
  }

  img {
    max-width: 100%;
    max-height: inherit;
    display: block;
    object-fit: contain;
  }

  .legend {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-style: italic;
  }
</style>
