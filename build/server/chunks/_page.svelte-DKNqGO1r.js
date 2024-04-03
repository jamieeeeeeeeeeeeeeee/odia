import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from './ssr-Z9fptITy.js';
import { B as Button } from './Button-BtDJWjQ6.js';
import { w as writable } from './index-DeHbcQUC.js';

const css$1 = {
  code: "input.svelte-1us5tut{font-family:'Roboto', sans-serif;font-size:2rem;border:none;background-color:transparent;width:100%;text-align:left;padding:.5em 0;color:black;user-select:none;-webkit-user-select:none;-moz-user-select:none;outline:none}div.svelte-1us5tut{font-family:'Roboto', sans-serif;overflow:hidden;border:3px solid grey;border-bottom-width:5px;border-radius:1em;font-size:2rem;cursor:pointer;background-color:white;width:55vw;margin:.3em auto;display:flex;justify-content:center;font-weight:500;transition:scale 0.2s ease-in;flex-direction:column;align-items:center;padding-left:0.5em;padding-right:0.1em}div.svelte-1us5tut:active{scale:0.98;transition:scale 0.2s ease-out}",
  map: null
};
const Entry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { type = "default" } = $$props;
  let { callback = function() {
    console.log("Callback function called.");
  } } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0)
    $$bindings.callback(callback);
  $$result.css.add(css$1);
  return `<div tabindex="0" role="textbox"${add_attribute(
    "style",
    type == "good" ? "background-color: rgb(120, 200, 61); border-color: rgb(108, 164, 48); color: white; width: 60vw;" : type == "select" ? "background-color: rgb(225, 243, 254); color: rgb(71, 152, 209); border-color: rgb(151, 214, 251);" : "",
    0
  )} class="svelte-1us5tut"><input type="text"${add_attribute("placeholder", text, 0)} class="svelte-1us5tut"> </div>`;
});
const css = {
  code: "main.svelte-v3l2g5{height:calc(100vh);overflow-y:auto;background-color:#f0d0e0}#join.svelte-v3l2g5{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $screen, $$unsubscribe_screen;
  const screen = writable("join");
  $$unsubscribe_screen = subscribe(screen, (value) => $screen = value);
  $$result.css.add(css);
  $$unsubscribe_screen();
  return `<main class="svelte-v3l2g5">${$screen == "join" ? `<div id="join" class="svelte-v3l2g5">${validate_component(Entry, "Entry").$$render($$result, { text: "Username" }, {}, {})} ${validate_component(Button, "Button").$$render($$result, { text: "Join Game", type: "select" }, {}, {})}</div>` : ``} </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DKNqGO1r.js.map
