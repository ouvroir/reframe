<script lang="ts">
	import { gridSpans } from '$stores';
	import { findOptimalRatio } from '$lib/helpers/helpers.js';
	import { Caption } from '$components';

	let {
		id = crypto.randomUUID(),
		src,
		srcset = [],
		alt = '',
		caption = '',
		captionStyle = 'fixed',
		minWidth = '250px',
		containerName = '',
		position = 'block'
	} = $props<{
		src: string;
		id?: string;
		srcset?: string[];
		alt?: string;
		caption?: string;
		captionStyle?: 'fixed' | 'hover';
		minWidth?: string;
		containerName?: string;
		position?: 'block' | 'float' | 'sticky';
	}>();

	let containerWidth: number;
	let img: HTMLImageElement;
	let imgContainer: HTMLDivElement;
	let parentIsRFContainer = $state(false);

	let aspectRatio = $state('');

	let alignStyle = ``;

	// if placed in grid, span represents the number of columns used by Image
	let span: number | undefined = $state(undefined);
	let spanStyle = $derived(`grid-column: span ${span};`);
	let flexStyle = $derived(`flex: ${span} 1 ${minWidth};`);
	let marginStyle = $derived(
		parentIsRFContainer || position === 'float' ? '' : 'margin: 1.5rem 0;'
	);

	let style: string = $derived(
		`${marginStyle} ${alignStyle} ${span ? spanStyle : ''} ${span ? flexStyle : ''}`
	);

	// ie. used for showing/hiding caption
	let hovered = $state(false);
	const onMouseEnter = () => (hovered = true);
	const onMouseLeave = () => (hovered = false);

	// updated by container
	gridSpans.subscribe((gs) => {
		if (Object.keys(gs).includes(id)) span = gs[id];
	});

	$effect(() => {
		if (img) aspectRatio = findOptimalRatio(img.naturalWidth, img.naturalHeight);
		parentIsRFContainer = imgContainer.parentElement!.className.includes('rf-');
	});
</script>

<div
	class={`image ${position}`}
	{style}
	bind:clientWidth={containerWidth}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
	bind:this={imgContainer}
	role="img"
>
	<img bind:this={img} {src} {alt} srcset={srcset.join(',')} {id} />
	<Caption classes={`${captionStyle}`} imgHovered={hovered}>
		{caption}
	</Caption>
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
		align-self: start;
	}

	img {
		max-width: 100%;
		width: 100%;
		max-height: inherit;
		display: block;
		object-fit: contain;
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

	.float {
		float: right;
		width: 50%;
		margin-left: 1rem;
	}
</style>
