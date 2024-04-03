<script>
    import Button from "$lib/components/Button.svelte";
    import india from "$lib/assets/india.png";
    import { goto } from "$app/navigation";

    /**
     * Function to redirect to another page
     * @param {string} link - The link to redirect to
     */
    function redirect(link) {
        goto(link);
    }
</script>

<header>
    <div id="HR">HR</div>
    <div id="title">Cards</div>
</header>
<main>
    <div class="grid">
        <Button text="Trumps" img="cardthumb.png" type="select" callback={() => redirect("/cards/trumps")}/>
        <Button text="Strawberry Split" type="select" callback={() => redirect("/cards/strawberry-split")}/>
    </div>
</main>

<style>
 header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem;
   background-color: #f0f0f0;
 }

 #HR {
   font-size: 1.5rem;
   font-weight: bold;
   text-transform: uppercase;
 }

 #title {
   font-weight: bold;
 }

 main {
   height: calc(100vh - 100px); /* Adjust the height as needed */
   overflow-y: auto;
   }

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Creates a three-column grid */
    gap: 1rem;
    padding: 1rem;
}
</style>
