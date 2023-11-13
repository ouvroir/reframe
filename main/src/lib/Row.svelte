<script lang="ts">
  import { findOptimalRatio, getFractionsFromRatios } from './helpers'

  // By default container will take 100% of width and adapt
  // its height to the content.
  export let maxHeight: string = ''
  export let columnGap: string = '1rem'
  export let classes: string = ''

  let gridTC = ''

  const setup = (container: HTMLElement) => {
    const images = container.querySelectorAll('img')

    const ratios: string[] = []
    images.forEach((i) => {
      //   console.log(i.naturalWidth, i.naturalHeight)
      //   console.log(findOptimalRatio(i.naturalWidth, i.naturalHeight))
      ratios.push(findOptimalRatio(i.naturalWidth, i.naturalHeight))
    })

    const fractions = getFractionsFromRatios(ratios)
    // console.log(ratios)
    // console.log(fractions)

    gridTC = fractions.reduce(
      (s: string, f: number): string => `${s} ${f}fr`,
      ''
    )
    console.log(gridTC)
  }

  const gapStyle = `column-gap: ${columnGap};`
  $: maxHeightStyle = maxHeight ? `max-height: ${maxHeight};` : ''
  $: gridTCStyle = gridTC
    ? `display: grid; grid-template-columns: ${gridTC};`
    : ''

  $: style = `${maxHeightStyle} ${gridTCStyle} ${gapStyle}`

  console.log('style', style)
</script>

<div class="{`rf-row ${classes}`}" use:setup style="{style}">
  <slot />
</div>

<style>
  .rf-row {
    margin: 2rem 0;
    align-items: start;
    grid-template-rows: auto;
  }
</style>
