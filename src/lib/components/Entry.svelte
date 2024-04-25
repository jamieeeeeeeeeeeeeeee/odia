<script>
    export let text = "";
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
    role="textbox"
    style={
    (type == "good" ? "background-color: rgb(120, 200, 61); border-color: rgb(108, 164, 48); color: white; width: 60vw;"
      : type == "select" ? "background-color: rgb(225, 243, 254); color: rgb(71, 152, 209); border-color: rgb(151, 214, 251);" : "")
    }
>
    <input type="text" placeholder={text} />
</div>

<style>
    input {
        font-family: 'Roboto', sans-serif;
        font-size: 2em;
        border: none;
        background-color: transparent;
        width: 100%;
        text-align: left;
        padding: .5em 0;
        color: black;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        outline: none;
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
        width: 55vw;
        margin: .3em auto;
        display: flex;
        justify-content: center;
        font-weight: 500;
        transition: scale 0.2s ease-in;
        flex-direction: column;
        align-items: center;
        padding-left: 0.5em;
        padding-right: 0.1em;
    }

    div:active {
        scale: 0.98;
        transition: scale 0.2s ease-out;
    }
</style>
