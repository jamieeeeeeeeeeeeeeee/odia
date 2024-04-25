<script>
    import Button from "$lib/components/Button.svelte";
    import { goto } from "$app/navigation";

    export const levels = [
        "vowels",
        "consonants"
    ]

    function redirect(link) {
        goto(link);
    }
</script>

<main>
    <div class="grid">
        {#each levels as level}
            <Button text={level.toUpperCase()} type="select" callback={() => redirect("/odia/" + level)}/>
        {/each}
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
