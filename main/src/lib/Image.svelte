<script lang="ts">
  import { gridSpans } from '../stores/stores'
  import { findOptimalRatio } from './helpers'

  export let id = crypto.randomUUID()
  export let src: string
  export let srcset: string[] = []
  export let alt: string = ''
  export let caption: string = ''
  export let minWidth: string = '250px'
  export let containerName: string = '' // only for debug
  // export let align: 'left' | 'center' | 'right' = 'center'

  //   export let credits: string = ''
  //   export let metadata: string = ''
  //   export let manifestUrl: string = ''
  //   export let viewer: none | 'mirador' | 'openseadragon' = null

  let containerWidth: number
  let img: HTMLImageElement
  $: aspectRatio = img
    ? findOptimalRatio(img.naturalWidth, img.naturalHeight)
    : ''

  let alignStyle = ``
  let spanStyle = ''
  let flexStyle = ''
  let style: string = ''

  gridSpans.subscribe((gs) => {
    if (Object.keys(gs).includes(id)) {
      const span = gs[id]
      spanStyle = `grid-column: span ${span};`
      flexStyle = `flex: ${span} 1 ${minWidth};`
    }
    style = `${alignStyle} ${spanStyle} ${flexStyle}`
  })

  /** TODO:
   * width of .image has to be computed by container
   */
</script>

<div bind:clientWidth="{containerWidth}" class="image" style="{style}">
  <img
    bind:this="{img}"
    src="{src}"
    alt="{alt}"
    srcset="{srcset.join(',')}"
    id="{id}"
  />
  <p class="legend">
    {caption}
  </p>
  {#if img}
    <div class="info-container">
      <p>{img.naturalWidth}px x {img.naturalHeight}px ~ {aspectRatio}</p>
      {#if containerName === 'RowGrid'}
        <p>{spanStyle}</p>
      {:else if containerName === 'RowFlex'}
        <p>{flexStyle}</p>
      {/if}
      <p>container width: {containerWidth ? containerWidth : ''}</p>
    </div>
  {/if}
</div>

<style>
  .image {
    position: relative;
    /* max-width: 100%; */
    /* max-height: 100%; */
    align-self: start;
  }

  img {
    max-width: 100%;
    width: 100%;
    max-height: inherit;
    display: block;
    object-fit: contain;
  }

  .legend {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-style: italic;
  }

  .info-container {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: white;
    font-weight: 600;
  }

  .info-container > p + p {
    margin-top: 0rem !important;
  }
</style>
