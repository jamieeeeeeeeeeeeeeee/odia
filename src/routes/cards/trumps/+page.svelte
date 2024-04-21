<script>
    import Button from "$lib/components/Button.svelte";
    import Entry from "$lib/components/Entry.svelte";
    import { writable } from "svelte/store";
    import Card from "$lib/components/Card.svelte";
    const screen = writable("join");
</script>

<main>
    {#if $screen == "join"}
    <div id="join">
      <Entry text="Username"/>
      <Button text="Join Game" type="select"/>
    </div>
    {/if}
</main>

<style>
    main {
        height: calc(100vh); /* Adjust the height as needed */
        overflow-y: auto;
        background-color: #f0d0e0;
    }

    #join {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
