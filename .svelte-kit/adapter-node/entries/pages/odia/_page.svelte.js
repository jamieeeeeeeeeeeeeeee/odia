import { c as create_ssr_component, a as subscribe, d as each, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { B as Button } from "../../../chunks/Button.js";
import "@firebase/app";
import "@firebase/firestore";
import { i as india } from "../../../chunks/india.js";
import "../../../chunks/client.js";
import "firebase/firestore";
const progress = writable({
  "done": 0,
  "total": 0
});
const options = writable([]);
const selectedOptions = writable(/* @__PURE__ */ new Set());
const css$3 = {
  code: "div.svelte-hyor03{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:1rem}",
  map: null
};
const Options = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedOptions, $$unsubscribe_selectedOptions;
  let $options, $$unsubscribe_options;
  $$unsubscribe_selectedOptions = subscribe(selectedOptions, (value) => $selectedOptions = value);
  $$unsubscribe_options = subscribe(options, (value) => $options = value);
  let { mult = false } = $$props;
  function optionClick(option) {
    if (mult) {
      if ($selectedOptions.has(option)) {
        $selectedOptions.delete(option);
      } else {
        $selectedOptions.add(option);
      }
    } else {
      selectedOptions.set(/* @__PURE__ */ new Set([option]));
    }
  }
  if ($$props.mult === void 0 && $$bindings.mult && mult !== void 0)
    $$bindings.mult(mult);
  $$result.css.add(css$3);
  $$unsubscribe_selectedOptions();
  $$unsubscribe_options();
  return `<div class="svelte-hyor03">${each($options, (option) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: $selectedOptions.has(option) ? "select" : "",
        callback: () => optionClick(option),
        text: option
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const css$2 = {
  code: "div.svelte-1dfkqcd{justify-self:center;display:flex;flex-direction:row;justify-content:space-between;align-content:center;flex-grow:1;height:2rem;background-color:rgb(229, 229, 229);margin:0 2rem;border-radius:1rem}#indicator.svelte-1dfkqcd{transition:width 0.5s;flex-grow:0;margin:0;background-color:rgb(246, 201, 69)}",
  map: null
};
const Progress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  $$result.css.add(css$2);
  $$unsubscribe_progress();
  return `<div class="svelte-1dfkqcd"><div id="indicator"${add_attribute("style", "width:" + $progress.done / $progress.total * 100 + "%", 0)} class="svelte-1dfkqcd"></div> </div>`;
});
const css$1 = {
  code: ".skeleton.svelte-cjmcab{background-color:var(--baseColor);background-image:linear-gradient(\r\n      90deg,\r\n      var(--baseColor),\r\n      var(--highlightColor),\r\n      var(--baseColor)\r\n    );background-size:200px 100%;background-repeat:no-repeat;display:inline-block;width:100%;animation:svelte-cjmcab-loading-animation var(--animationLength) ease-in-out infinite}@keyframes svelte-cjmcab-loading-animation{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}",
  map: null
};
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "100%" } = $$props;
  let { height = "25px" } = $$props;
  let { borderRadius = "4px" } = $$props;
  let { baseColor = "rgb(238, 238, 238)" } = $$props;
  let { highlightColor = "rgb(245, 245, 245)" } = $$props;
  let { animationLength = "1.2s" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.borderRadius === void 0 && $$bindings.borderRadius && borderRadius !== void 0)
    $$bindings.borderRadius(borderRadius);
  if ($$props.baseColor === void 0 && $$bindings.baseColor && baseColor !== void 0)
    $$bindings.baseColor(baseColor);
  if ($$props.highlightColor === void 0 && $$bindings.highlightColor && highlightColor !== void 0)
    $$bindings.highlightColor(highlightColor);
  if ($$props.animationLength === void 0 && $$bindings.animationLength && animationLength !== void 0)
    $$bindings.animationLength(animationLength);
  $$result.css.add(css$1);
  return ` <div class="skeleton svelte-cjmcab" style="${"height: " + escape(height, true) + "; width: " + escape(width, true) + "; border-radius: " + escape(borderRadius, true) + "; --baseColor: " + escape(baseColor, true) + "; --highlightColor: " + escape(highlightColor, true) + "; --animationLength: " + escape(animationLength, true)}"></div>`;
});
const css = {
  code: '[role="button"].svelte-1ia9uz7.svelte-1ia9uz7{cursor:pointer}#infoinfo.svelte-1ia9uz7.svelte-1ia9uz7{font-size:1.5rem;font-weight:700;margin-left:1rem;align-self:flex-start;flex-grow:0}#question.svelte-1ia9uz7.svelte-1ia9uz7{align-self:flex-start;margin-left:1rem;min-width:25rem;margin-top:1rem}#info.svelte-1ia9uz7.svelte-1ia9uz7{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:15vh;transition:all 0.2s ease}header.svelte-1ia9uz7.svelte-1ia9uz7{display:flex;flex-direction:row;align-items:center;padding:1rem;height:5vh;background-color:white;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem}main.svelte-1ia9uz7.svelte-1ia9uz7{background-color:white;height:84vh;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative}footer.svelte-1ia9uz7.svelte-1ia9uz7{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1rem;height:3vh;background-color:white}#hansika.svelte-1ia9uz7.svelte-1ia9uz7{font-weight:700}#lang.svelte-1ia9uz7.svelte-1ia9uz7{display:flex;flex-direction:row;align-items:center}#lang.svelte-1ia9uz7 img.svelte-1ia9uz7{margin-left:.5rem}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $answer, $$unsubscribe_answer;
  let $selectedOptions, $$unsubscribe_selectedOptions;
  let $info, $$unsubscribe_info;
  let $question, $$unsubscribe_question;
  $$unsubscribe_selectedOptions = subscribe(selectedOptions, (value) => $selectedOptions = value);
  const info = writable({
    "info": "",
    "color": "green",
    "showing": false,
    "button": "CHECK"
  });
  $$unsubscribe_info = subscribe(info, (value) => $info = value);
  const answer = writable("");
  $$unsubscribe_answer = subscribe(answer, (value) => $answer = value);
  const question = writable("");
  $$unsubscribe_question = subscribe(question, (value) => $question = value);
  const docs = {};
  function generateQuestion() {
    const keys = Object.keys(docs);
    let answerDoc = "";
    const randomKeys = [];
    while (randomKeys.length < 4) {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      if (!randomKeys.includes(docs[randomKey].o)) {
        randomKeys.push(docs[randomKey].o);
        answerDoc = randomKey;
      }
    }
    options.set(randomKeys);
    answer.set(docs[answerDoc].o);
    question.set('What is this vowel "' + answerDoc + '" in Odia?');
  }
  function buttonClick() {
    if ($info.showing == false) {
      if ($selectedOptions.has($answer)) {
        selectedOptions.set(/* @__PURE__ */ new Set());
        progress.update((p) => {
          return { done: p.done + 1, total: p.total + 1 };
        });
        info.update((i) => {
          return {
            info: "Correct!",
            button: "NEXT QUESTION",
            color: "rgb(223, 254, 191);",
            showing: true
          };
        });
      } else {
        progress.update((p) => {
          return { done: p.done, total: p.total + 1 };
        });
        info.update((i) => {
          return {
            info: $answer,
            button: "NEXT QUESTION",
            color: "rgb(254, 191, 191);",
            showing: true
          };
        });
      }
    } else {
      info.update((i) => {
        return {
          info: "",
          button: "CHECK",
          color: "green",
          showing: false
        };
      });
      generateQuestion();
    }
  }
  $$result.css.add(css);
  $$unsubscribe_answer();
  $$unsubscribe_selectedOptions();
  $$unsubscribe_info();
  $$unsubscribe_question();
  return `<header class="svelte-1ia9uz7"><div role="button" tabindex="0" class="svelte-1ia9uz7" data-svelte-h="svelte-127rnbs"><img${add_attribute("width", 35, 0)} src="close.svg" alt="Close"></div> ${validate_component(Progress, "Progress").$$render($$result, {}, {}, {})} <div data-svelte-h="svelte-1bipc6g"></div></header> <main class="svelte-1ia9uz7">${$question == "" ? `<div id="question" class="svelte-1ia9uz7">${validate_component(Skeleton, "Skeleton").$$render(
    $$result,
    {
      baseColor: "rgb(175, 175, 175)",
      highlightColor: "rgb(225, 225, 225)",
      height: "2rem"
    },
    {},
    {}
  )}</div>` : `<h1 id="question" class="svelte-1ia9uz7">${escape($question)}</h1>`} ${validate_component(Options, "Options").$$render($$result, {}, {}, {})} <div id="info"${add_attribute(
    "style",
    !$info.showing ? "" : "background-color: " + $info.color + ";",
    0
  )} class="svelte-1ia9uz7"><div${add_attribute("style", !$info.showing ? "color: white" : "", 0)} id="infoinfo" class="svelte-1ia9uz7">${escape($info.showing ? $info.info : ".")}</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "good",
      callback: buttonClick,
      text: $info.button
    },
    {},
    {}
  )}</div></main> <footer class="svelte-1ia9uz7" data-svelte-h="svelte-1ul2xwi"><div id="hansika" class="svelte-1ia9uz7">For Hansika ❤️</div> <div id="lang" class="svelte-1ia9uz7"><div>ଓଡ଼ିଆ<br>Odia</div> <img${add_attribute("width", 50, 0)}${add_attribute("src", india, 0)} alt="India" class="svelte-1ia9uz7"></div> </footer>`;
});
export {
  Page as default
};
