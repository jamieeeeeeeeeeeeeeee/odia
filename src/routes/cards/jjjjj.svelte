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
        <Button text="Trumps" type="select" callback={() => redirect("/cards/trumps")}/>
            <Button text="Strawberry Split" type="select" callback={() => redirect("/cards/strawberry-split")}/>
        </div>
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        gap: 1rem;
        padding: 1rem;
    }
</style>