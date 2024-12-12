<script lang="ts">
	import '$lib/css/reset.css';
	import '$lib/css/styles.css';
	import '$lib/css/reframe.css';

	let innerWidth: number;
	let innerHeight: number;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="vw-info">
	<p>
		{innerWidth} x {innerHeight}
	</p>
</div>
<nav>
	<ul>
		<li>
			<a href="/single">single</a>
		</li>
		<li>
			<a href="/row">row</a>
		</li>
		<li>
			<a href="/gallery">gallery</a>
		</li>
		<li>
			<a href="/scroll">scroll</a>
		</li>
	</ul>
</nav>

<main id="main" class="content-grid">
	<slot />
</main>

<style>
	.vw-info {
		position: fixed;
		content: '';
		top: 1.5rem;
		left: 1rem;
		width: fit-content;
		font-weight: 800;
		z-index: 2;
	}
	nav {
		display: flex;
		flex-direction: row;
	}
	nav > ul {
		width: max-content;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		margin: 2rem auto;
	}
</style>
