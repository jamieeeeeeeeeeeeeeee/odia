import { c as create_ssr_component, b as add_attribute, e as escape } from './ssr-Z9fptITy.js';

const css = {
  code: "img.svelte-1fjnzov{width:100%;height:auto}div.svelte-1fjnzov{font-family:'Roboto', sans-serif;overflow:hidden;border:3px solid grey;border-bottom-width:5px;border-radius:1em;font-size:2rem;cursor:pointer;background-color:white;width:45vw;margin:.3em auto;display:flex;justify-content:center;font-weight:500;transition:scale 0.2s ease-in;flex-direction:column;align-items:center}div.svelte-1fjnzov:active{scale:0.98;transition:scale 0.2s ease-out}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { img = "" } = $$props;
  let { type = "default" } = $$props;
  let { callback = function() {
    console.log("Callback function called.");
  } } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0)
    $$bindings.callback(callback);
  $$result.css.add(css);
  return `<div tabindex="0" role="button"${add_attribute(
    "style",
    (img == "" ? "padding: .5em 0;" : "") + (type == "good" ? "background-color: rgb(120, 200, 61); border-color: rgb(108, 164, 48); color: white; width: 60vw;" : type == "select" ? "background-color: rgb(225, 243, 254); color: rgb(71, 152, 209); border-color: rgb(151, 214, 251);" : ""),
    0
  )} class="svelte-1fjnzov">${img != "" ? `<img${add_attribute("src", img, 0)}${add_attribute("alt", text, 0)} class="svelte-1fjnzov">` : ``} ${escape(text)} </div>`;
});

export { Button as B };
//# sourceMappingURL=Button-BtDJWjQ6.js.map
