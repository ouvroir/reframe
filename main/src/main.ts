import "./css/reset.css";
import "./css/styles.css";

import App from "./App.svelte";

const app = new App({
  target: document.getElementById("body"),
});

export default app;
