<script lang="ts">
  export let classes = ''
  export let imgHovered = false
</script>

<div
  class="{`caption ${classes} ${
    classes.includes('hover') && !imgHovered ? 'hidden' : ''
  }`}"
>
  <p>
    <slot />
  </p>
</div>

<style>
  .caption {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-style: italic;
    line-height: 0.9rem;
  }

  .hover {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease;
  }

  .hidden {
    background-color: transparent;
    color: transparent;
  }
</style>
