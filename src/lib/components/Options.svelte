<script>
  import { options, selectedOptions } from "$lib/store.js";
  import Button from "$lib/components/Button.svelte";
  export let mult = false;

  // Function to handle option click
  /**
    * Function to handle option click
    * @param {string} option - The option clicked
  */
  function optionClick(option) {
      if (mult) {
          if ($selectedOptions.has(option)) {
              $selectedOptions.delete(option);
          } else {
              $selectedOptions.add(option);
          }
      } else {
          selectedOptions.set(new Set([option]));
      }
  }
</script>

<div>
{#each $options as option}
    <Button
        type={$selectedOptions.has(option) ? "select" : ""}
        callback={() => optionClick(option)}
        text={option}
    />
{/each}
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 1rem;
    }
</style>
