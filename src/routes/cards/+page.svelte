<script>
    import Button from "$lib/components/Button.svelte";
    import Entry from "$lib/components/Entry.svelte";
    import { writable } from "svelte/store";

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
        background-color: #f0d0e0;
    }

    #join {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 60vw;
        justify-self: center;
        align-self: center;
    }
</style>
