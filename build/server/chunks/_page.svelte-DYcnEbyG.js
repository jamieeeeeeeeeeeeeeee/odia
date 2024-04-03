import { c as create_ssr_component, v as validate_component } from './ssr-Z9fptITy.js';
import { B as Button } from './Button-BtDJWjQ6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Button, "Button").$$render($$result, { text: "Hello", type: "select" }, {}, {})} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Cards",
      img: "cardthumb.png",
      type: "select"
    },
    {},
    {}
  )}</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DYcnEbyG.js.map
