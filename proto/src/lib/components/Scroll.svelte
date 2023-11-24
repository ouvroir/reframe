<script lang="ts">
</script>

<div class="rf-scroll">
	<slot />
</div>

<style>
	.rf-scroll {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
		gap: 1.5rem;
	}
</style>
