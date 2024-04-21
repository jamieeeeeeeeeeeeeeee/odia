<script>
    // We are using a store instead of props to have an animation.
    import { progress } from "$lib/store.js";
</script>

<div>
    <div
        id="indicator"
        style={"width:" + $progress.done / $progress.total * 100 + "%"}
    >
    </div>
</div>

<style>
    div {
        justify-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        flex-grow: 1;
        height: 2rem;
        background-color: rgb(229, 229, 229);
        margin: 0 2rem;
        border-radius: 1rem;
    }

    #indicator {
        transition: width 0.5s;
        flex-grow: 0;
        margin: 0;
        background-color: rgb(246, 201, 69);
    }
</style>
