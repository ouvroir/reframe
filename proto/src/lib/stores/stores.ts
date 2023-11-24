import { writable } from "svelte/store";

export const gridSpans = writable({} as { [id: string]: number })
