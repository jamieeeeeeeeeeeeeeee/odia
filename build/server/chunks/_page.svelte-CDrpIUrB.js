import { c as create_ssr_component, v as validate_component } from './ssr-Z9fptITy.js';
import { B as Button } from './Button-BtDJWjQ6.js';
import { g as goto } from './client-CQ5E_ugM.js';
import './exports-DuWZopOC.js';

const css = {
  code: "header.svelte-1r0zvvx{display:flex;justify-content:space-between;align-items:center;padding:1rem;background-color:#f0f0f0}#HR.svelte-1r0zvvx{font-size:1.5rem;font-weight:bold;text-transform:uppercase}#title.svelte-1r0zvvx{font-weight:bold}main.svelte-1r0zvvx{height:calc(100vh - 100px);overflow-y:auto}.grid.svelte-1r0zvvx{display:grid;grid-template-columns:repeat(3, 1fr);gap:1rem;padding:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function redirect(link) {
    goto();
  }
  $$result.css.add(css);
  return `<header class="svelte-1r0zvvx" data-svelte-h="svelte-1onlhxd"><div id="HR" class="svelte-1r0zvvx">HR</div> <div id="title" class="svelte-1r0zvvx">Cards</div></header> <main class="svelte-1r0zvvx"><div class="grid svelte-1r0zvvx">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Trumps",
      img: "cardthumb.png",
      type: "select",
      callback: () => redirect()
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Strawberry Split",
      type: "select",
      callback: () => redirect()
    },
    {},
    {}
  )}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CDrpIUrB.js.map
