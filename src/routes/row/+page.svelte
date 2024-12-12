<script lang="ts">
	import { Image, Row, RowFlex } from '$components';
	import { samples } from '$stores';
</script>

<h1>Rows</h1>

<h2>Row (css grid)</h2>
<Row classes="breakout" let:containerName>
	<Image
		{containerName}
		src={$samples.page}
		caption={`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
        technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}
	/>
	<Image
		{containerName}
		src={$samples.portrait}
		caption={`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
        technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}
	/>
	<Image
		{containerName}
		src={$samples.landscape}
		caption={`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
        technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}
	/>
</Row>

<h2>RowFlex (css flexbox)</h2>
<RowFlex classes="breakout" let:containerName>
	<Image
		captionStyle="hover"
		{containerName}
		src={$samples.page}
		caption={`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
        technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}
	/>
	<Image
		captionStyle="hover"
		{containerName}
		src={$samples.portrait}
		caption={`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
        technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}
	/>
	<Image
		captionStyle="hover"
		{containerName}
		src={$samples.landscape}
		caption={`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
        technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}
	/>
</RowFlex>
