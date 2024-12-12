<script lang="ts">
	import { findOptimalRatio, getFractionsFromRatios } from '../helpers/helpers.js';
	import { gridSpans } from '$stores';

	// By default container will take 100% of width and adapt
	// its height to the content.
	let {
		maxHeight = '',
		columnGap = '1rem',
		position = 'static',
		classes = ''
	} = $props<{
		maxHeight?: string;
		columnGap?: string;
		classes?: string;
		position?: 'static' | 'sticky';
	}>();

	const setup = (container: HTMLElement) => {
		const images = container.querySelectorAll('img');
		const ids: string[] = [];
		const ratios: string[] = [];
		images.forEach((i) => {
			ratios.push(findOptimalRatio(i.naturalWidth, i.naturalHeight));
			ids.push(i.id);
		});

		let fractions = getFractionsFromRatios(ratios);
		const minFrac = Math.min(...fractions);
		if (minFrac < 1) fractions = fractions.map((n) => n / minFrac);
		fractions = fractions.map((n) => Math.floor(n));

		fractions.forEach((f, i) => {
			$gridSpans[ids[i]] = f;
		});
	};

	const gapStyle = `column-gap: ${columnGap};`;
	let maxHeightStyle = $derived(maxHeight ? `max-height: ${maxHeight};` : '');
	let style = $derived(`${maxHeightStyle} ${gapStyle}`);
</script>

<div class={`rf-row ${classes} ${position !== 'static' ? position : ''}`} use:setup {style}>
	<slot containerName="RowGrid" />
</div>

<style>
	.rf-row {
		margin: 3rem 0;
		align-items: start;
		display: grid;
		grid-auto-rows: auto;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		row-gap: 1.5rem;
	}
</style>
