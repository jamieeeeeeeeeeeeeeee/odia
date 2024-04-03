import { writable } from "svelte/store";

const progress = writable({
  "done": 0,
  "total": 0
})

const options = writable([]);
const selectedOptions = writable(new Set());
export { progress, options, selectedOptions };
