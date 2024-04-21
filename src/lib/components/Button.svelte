<script>
    export let text = "";
    export let img = "";
    export let type = "default";
    export let callback = function(){
      console.log("Callback function called.")
    };
</script>

<div
    tabindex="0"
    on:click={callback}
    on:keydown={(e) => {
        if (e.key === "Enter") {
            callback();
        }
    }}
    role="button"
    style={
    (img == "" ? "padding: .5em 0;" : "")
    +
    (type == "good" ? "background-color: rgb(120, 200, 61); border-color: rgb(108, 164, 48); color: white; width: 60vw;"
      : type == "select" ? "background-color: rgb(225, 243, 254); color: rgb(71, 152, 209); border-color: rgb(151, 214, 251);" : "")
    }
>
    {#if img != ""}
    <img src={img} alt={text} />
    {/if}
    { text }
</div>

<style>
    img {
        width: 100%;
        height: auto;
    }

    div {
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
        border: 3px solid grey;
        border-bottom-width: 5px;
        border-radius: 1em;
        font-size: 2rem;
        cursor: pointer;
        background-color: white;
        width: 45vw;
        margin: .3em auto;
        display: flex;
        justify-content: center;
        font-weight: 500;
        transition: scale 0.2s ease-in;
        flex-direction: column;
        align-items: center;
    }

    div:active {
        scale: 0.98;
        transition: scale 0.2s ease-out;
    }
</style>
