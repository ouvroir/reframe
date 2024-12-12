import { writable, readable } from "svelte/store";

export const gridSpans = writable({} as { [id: string]: number })
export const samples = readable({
    portrait: "https://gallica.bnf.fr/iiif/ark:/12148/btv1b53165973q/f1/full/full/0/native.jpg",
    landscape: "https://gallica.bnf.fr/iiif/ark:/12148/btv1b530281251/f1/full/full/0/native.jpg",
    page: "https://manuscrits-france-angleterre.org/iiif/ark:/12148/btv1b10544629s/f82/full/full/0/native.jpg",
})