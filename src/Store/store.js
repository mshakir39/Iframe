import { writable } from "svelte/store"
export const selectedFont = writable("");
export const screenType = writable("max-w-full")
export const storeTab = writable('page.svelte');
export const primaryColor = writable('bg-pink-600');
export const showCode = writable(false);
