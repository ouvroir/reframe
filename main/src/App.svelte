<script lang="ts">
  import Image from './lib/Image.svelte'
  import Row from './lib/Row.svelte'
</script>

<main id="main" class="content-grid">
  <h1>Reframe prototype november 2023</h1>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea omnis
    explicabo accusamus quo facilis laboriosam, quos corporis molestiae nostrum
    ad optio. Earum veniam omnis consectetur fugit doloribus soluta nobis.
  </p>

  <Row>
    <Image
      src="./src/lib/portrait1.jpg"
      caption="{`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
      technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}"
    />
  </Row>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    necessitatibus rerum delectus est aperiam totam voluptatem, tenetur iure?
    Dolores non ratione, quia eveniet fugit velit. Iste omnis vero adipisci a?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    necessitatibus rerum delectus est aperiam totam voluptatem, tenetur iure?
    Dolores non ratione, quia eveniet fugit velit. Iste omnis vero adipisci a?
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    necessitatibus rerum delectus est aperiam totam voluptatem, tenetur iure?
    Dolores non ratione, quia eveniet fugit velit. Iste omnis vero adipisci a?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    necessitatibus rerum delectus est aperiam totam voluptatem, tenetur iure?
    Dolores non ratione, quia eveniet fugit velit. Iste omnis vero adipisci a?
  </p>

  <Row>
    <Image
      src="./src/lib/portrait1.jpg"
      caption="{`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
      technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}"
    />
    <Image
      src="./src/lib/portrait2.jpg"
      caption="{`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
      technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}"
    />
  </Row>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    necessitatibus rerum delectus est aperiam totam voluptatem, tenetur iure?
    Dolores non ratione, quia eveniet fugit velit. Iste omnis vero adipisci a?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
    necessitatibus rerum delectus est aperiam totam voluptatem, tenetur iure?
    Dolores non ratione, quia eveniet fugit velit. Iste omnis vero adipisci a?
  </p>
  <Row classes="breakout">
    <Image
      src="./src/lib/portrait1.jpg"
      caption="{`Pierre Petit (1831-1909). [Eugène] Haussmann. [Recueil. Les Conseillers de la Commission municipale de Paris et de la Commission départementale de la Seine] 1860."
      technique: "Tirage au charbon d’après un négatif sur verre, 46,5 cm (page).`}"
    />
    <Image
      src="./src/lib/portrait2.jpg"
      caption="{`Adolphe Yvon (1817-1893). Napoléon III remettant au baron Haussmann le décret d’annexion des communes limitrophes le 16 février 1859. 1865."
      technique: "H.T. 327 x 230 cm. Paris, Musée Carnavalet`}"
    />
  </Row>
</main>

<style>
</style>
