<script lang="ts">
	import { findOptimalRatio, getFractionsFromRatios } from '$lib/helpers/helpers.js';
	import { gridSpans } from '$stores';

	// By default container will take 100% of width and adapt
	// its height to the content.
	let {
		maxHeight = '',
		columnGap = '1rem',
		classes = ''
	} = $props<{ maxHeight?: string; columnGap?: string; classes?: string }>();

	const setup = (container: HTMLElement) => {
		const images = container.querySelectorAll('img');
		const ids: string[] = [];
		const ratios: string[] = [];
		images.forEach((i) => {
			ratios.push(findOptimalRatio(i.naturalWidth, i.naturalHeight));
			ids.push(i.id);
		});

		let fractions = getFractionsFromRatios(ratios);
		console.log(fractions);
		const minFrac = Math.min(...fractions);
		if (minFrac < 1) fractions = fractions.map((n) => n / minFrac);
		fractions = fractions.map((n) => Math.floor(n));

		console.log(fractions);
		fractions.forEach((f, i) => {
			$gridSpans[ids[i]] = f;
		});
	};

	const gapStyle = `column-gap: ${columnGap};`;
	let maxHeightStyle = $derived(maxHeight ? `max-height: ${maxHeight};` : '');
	let style = $derived(`${maxHeightStyle} ${gapStyle}`);

	$effect(() => {
		console.log(style);
	});
</script>

<div class={`rf-row ${classes}`} use:setup {style}>
	<slot containerName="RowFlex" />
</div>

<style>
	.rf-row {
		margin: 1rem 0;
		align-items: start;
		display: flex;
		flex-wrap: wrap;
		row-gap: 1.5rem;
	}
</style>
