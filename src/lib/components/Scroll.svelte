<script lang="ts">
</script>

<div class="rf-scroll">
	<slot />
</div>

<style>
	.rf-scroll {
		margin: 2rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1.5rem;
	}
</style>
