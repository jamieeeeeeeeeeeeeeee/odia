<script>
    // We are using a store instead of props to have an animation.
    import { progress } from "$lib/store.js";
</script>

<div>
    <p>
        {($progress.done / ($progress.total + 0.0001) * 100).toFixed(0) + "%"}
    </p>
    <div
        id="indicator"
        style={"width:" + $progress.done / $progress.total * 100 + "%"}
    >
    </div>
</div>

<style>
    p {
        margin: 0;
        padding: 0;
        font-weight: bold;
        position: fixed;
        margin-left: 1rem;
    }

    div {
        justify-self: center;
        display: flex;
        flex-direction: row;
        align-content: center;
        flex-grow: 1;
        height: 100%;
        background-color: rgb(229, 229, 229);
        margin: 0 2rem;
        border-radius: 1rem;
        text-align: center;
        align-items: center;
    }

    #indicator {
        transition: width 0.5s;
        flex-grow: 0;
        margin: 0;
        background-color: #FF671F;
    }
</style>
