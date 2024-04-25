<script>
    import Button from "$lib/components/Button.svelte";
    import india from "$lib/assets/india.png";
    import { goto } from "$app/navigation";

    function redirect(link) {
        goto(link);
    }
</script>

<main>
    <div class="grid">
        <Button text="Cards" img="cardthumb.png" type="select" callback={() => redirect("/cards")}/>
        <Button text="Odia" img={india} type="select" callback={() => redirect("/odia")}/>
    </div>
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Creates a three-column grid */
        gap: 1rem;
        padding: 1rem;
    }
</style>
