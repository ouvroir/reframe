<script lang="ts">
	import { Image, Scroll, Row } from '$components';
	import { samples } from '$stores';
</script>

<h1>Scroll</h1>

<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor. Facilisis volutpat
	est velit egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
	dignissim. At volutpat diam ut venenatis tellus in metus vulputate eu. Arcu vitae elementum
	curabitur vitae nunc sed. Sed viverra tellus in hac. Id faucibus nisl tincidunt eget nullam.
	Posuere morbi leo urna molestie at. Curabitur vitae nunc sed velit dignissim sodales ut eu.
	Elementum integer enim neque volutpat ac. Amet consectetur adipiscing elit duis tristique
	sollicitudin. Duis at tellus at urna condimentum mattis.
</p>
<div class="breakout">
	<Scroll>
		<Image
			src={$samples.portrait}
			caption={`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
        technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}
			position="sticky"
			captionStyle="hover"
		/>
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor. Facilisis
				volutpat est velit egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque
				elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus vulputate eu. Arcu
				vitae elementum curabitur vitae nunc sed. Sed viverra tellus in hac. Id faucibus nisl
				tincidunt eget nullam. Posuere morbi leo urna molestie at. Curabitur vitae nunc sed velit
				dignissim sodales ut eu. Elementum integer enim neque volutpat ac. Amet consectetur
				adipiscing elit duis tristique sollicitudin. Duis at tellus at urna condimentum mattis.
			</p>
			<p>
				Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Tincidunt id aliquet risus
				feugiat in ante metus dictum. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
				Elementum integer enim neque volutpat ac tincidunt vitae. Convallis tellus id interdum velit
				laoreet id donec ultrices tincidunt. Fames ac turpis egestas sed tempus urna et. Augue neque
				gravida in fermentum et sollicitudin ac orci phasellus. Pulvinar sapien et ligula
				ullamcorper malesuada proin. Quam pellentesque nec nam aliquam sem et tortor. Eget aliquet
				nibh praesent tristique magna sit amet purus.
			</p>
			<p>
				Accumsan sit amet nulla facilisi morbi tempus. In mollis nunc sed id semper risus in
				hendrerit gravida. Tincidunt arcu non sodales neque sodales ut. Cum sociis natoque penatibus
				et magnis dis parturient montes. Et malesuada fames ac turpis egestas sed tempus urna.
				Habitant morbi tristique senectus et netus. Urna neque viverra justo nec ultrices. Congue
				nisi vitae suscipit tellus mauris a diam. Integer malesuada nunc vel risus commodo viverra
				maecenas. Ac turpis egestas maecenas pharetra convallis posuere morbi. Neque ornare aenean
				euismod elementum nisi quis. Viverra adipiscing at in tellus integer feugiat scelerisque
				varius. Pellentesque elit eget gravida cum sociis natoque penatibus et. Volutpat maecenas
				volutpat blandit aliquam etiam. Duis ut diam quam nulla porttitor massa id neque. At varius
				vel pharetra vel turpis. Nibh praesent tristique magna sit. Scelerisque in dictum non
				consectetur a erat nam. Fames ac turpis egestas maecenas pharetra convallis. Lobortis
				scelerisque fermentum dui faucibus.
			</p>
			<p>
				Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Tincidunt id aliquet risus
				feugiat in ante metus dictum. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
				Elementum integer enim neque volutpat ac tincidunt vitae. Convallis tellus id interdum velit
				laoreet id donec ultrices tincidunt. Fames ac turpis egestas sed tempus urna et. Augue neque
				gravida in fermentum et sollicitudin ac orci phasellus. Pulvinar sapien et ligula
				ullamcorper malesuada proin. Quam pellentesque nec nam aliquam sem et tortor. Eget aliquet
				nibh praesent tristique magna sit amet purus.
			</p>
		</div>
	</Scroll>
</div>

<h2>Sticky Row</h2>

<div class="full-width">
	<Scroll>
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor. Facilisis
				volutpat est velit egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque
				elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus vulputate eu. Arcu
				vitae elementum curabitur vitae nunc sed. Sed viverra tellus in hac. Id faucibus nisl
				tincidunt eget nullam. Posuere morbi leo urna molestie at. Curabitur vitae nunc sed velit
				dignissim sodales ut eu. Elementum integer enim neque volutpat ac. Amet consectetur
				adipiscing elit duis tristique sollicitudin. Duis at tellus at urna condimentum mattis.
			</p>

			<p>
				Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Tincidunt id aliquet risus
				feugiat in ante metus dictum. Odio tempor orci dapibus ultrices in iaculis nunc sed augue.
				Elementum integer enim neque volutpat ac tincidunt vitae. Convallis tellus id interdum velit
				laoreet id donec ultrices tincidunt. Fames ac turpis egestas sed tempus urna et. Augue neque
				gravida in fermentum et sollicitudin ac orci phasellus. Pulvinar sapien et ligula
				ullamcorper malesuada proin. Quam pellentesque nec nam aliquam sem et tortor. Eget aliquet
				nibh praesent tristique magna sit amet purus.
			</p>
			<p>
				Accumsan sit amet nulla facilisi morbi tempus. In mollis nunc sed id semper risus in
				hendrerit gravida. Tincidunt arcu non sodales neque sodales ut. Cum sociis natoque penatibus
				et magnis dis parturient montes. Et malesuada fames ac turpis egestas sed tempus urna.
				Habitant morbi tristique senectus et netus. Urna neque viverra justo nec ultrices. Congue
				nisi vitae suscipit tellus mauris a diam. Integer malesuada nunc vel risus commodo viverra
				maecenas. Ac turpis egestas maecenas pharetra convallis posuere morbi. Neque ornare aenean
				euismod elementum nisi quis. Viverra adipiscing at in tellus integer feugiat scelerisque
				varius. Pellentesque elit eget gravida cum sociis natoque penatibus et. Volutpat maecenas
				volutpat blandit aliquam etiam. Duis ut diam quam nulla porttitor massa id neque. At varius
				vel pharetra vel turpis. Nibh praesent tristique magna sit. Scelerisque in dictum non
				consectetur a erat nam. Fames ac turpis egestas maecenas pharetra convallis. Lobortis
				scelerisque fermentum dui faucibus.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor. Facilisis
				volutpat est velit egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque
				elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus vulputate eu. Arcu
				vitae elementum curabitur vitae nunc sed. Sed viverra tellus in hac. Id faucibus nisl
				tincidunt eget nullam. Posuere morbi leo urna molestie at. Curabitur vitae nunc sed velit
				dignissim sodales ut eu. Elementum integer enim neque volutpat ac. Amet consectetur
				adipiscing elit duis tristique sollicitudin. Duis at tellus at urna condimentum mattis.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor. Facilisis
				volutpat est velit egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque
				elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus vulputate eu. Arcu
				vitae elementum curabitur vitae nunc sed. Sed viverra tellus in hac. Id faucibus nisl
				tincidunt eget nullam. Posuere morbi leo urna molestie at. Curabitur vitae nunc sed velit
				dignissim sodales ut eu. Elementum integer enim neque volutpat ac. Amet consectetur
				adipiscing elit duis tristique sollicitudin. Duis at tellus at urna condimentum mattis.
			</p>
		</div>

		<Row position="sticky">
			<Image
				src={$samples.landscape}
				caption={`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
            technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}
				captionStyle="hover"
			/>
			<Image
				src={$samples.portrait}
				caption={`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
        technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}
			/>
		</Row>
	</Scroll>
</div>
