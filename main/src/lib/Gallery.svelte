<script lang="ts">
  export let nbCols = 2;
  export let nbRows = 2;
  export let rowGap: string = 1;
  export let colGap: string = 1;
  export let locale: "fr" | "en" | null;
  export let content: { url: string; caption: string }[];
</script>

<h2>Gallery component</h2>
