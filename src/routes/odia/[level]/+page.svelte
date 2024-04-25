<script>
    import Options from "$lib/components/Options.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import Button from "$lib/components/Button.svelte";
    import india from "$lib/assets/india.png";
    import { writable } from "svelte/store";
    import { progress, options, selectedOptions } from "$lib/store.js";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let level  = $page.params.level;
    let app;
    let db;
    const info = writable({"info": "", "color": "green", "showing": false, "button": "CHECK"})
    const answer = writable("");
    const question = writable("");


    const docs = {};

    function generateQuestion() {
        // So docs now have the id of english translation, with .translation as Odia.
        // so let us pick  4 random options from docs.
        const keys = Object.keys(docs);
        let answerDoc = "";
        const randomKeys = [];
        while (randomKeys.length < 4) {
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            if (!randomKeys.includes(docs[randomKey].t)) {
                randomKeys.push(docs[randomKey].t);
                answerDoc = randomKey;
            }
        }
        
        // set options to randomKeys
        options.set(randomKeys.sort(() => Math.random() - 0.5));
        answer.set(answerDoc);
        question.set('Translate to English: ' + answerDoc);
    }

    // get .json file
    // it is in static "/odia-lang/{level}.json"
    // the format is: 
    // "ଅ": {"t": "a", "e": "(a)bout"},
    // where t is translit, and e is british-english example.
    onMount(async () => {
        const res = await fetch(`/odia-lang/${level}.json`);
        const data = await res.json();
        Object.keys(data).forEach((key) => {
            docs[key] = data[key];
        });

        console.log(docs);
        generateQuestion();
    });


    function buttonClick() {
        if ($info.showing == false) { // i.e. answer
            if ($selectedOptions.has(docs[$answer].t)) {
            progress.update((p) => {
                return {
                    done: p.done + 1,
                    total: p.total + 1,
                };
            });
            info.update((i) => {
                return {
                    info: "Correct!",
                    button: "NEXT QUESTION",
                    color: "#046A38",
                    showing: true
                };
            });
            } else {
            progress.update((p) => {
                return {
                    done: p.done,
                    total: p.total + 1
                };
            });
            info.update((i) => {
                return {
                    info: $answer + " is ( " + docs[$answer].t + " )  as in " + docs[$answer].e,
                    button: "NEXT QUESTION",
                    color: "#FF671F",
                    showing: true
                };
            });
            }
        } else {
            selectedOptions.set(new Set());
            info.update((i) => {
                return {
                    info: "",
                    button: "CHECK",
                    color: "green",
                    showing: false
                };
            });
            generateQuestion();
        }
    }
</script>

<main>
{#if $question == ""}
        <div id="question">
            Loading...
        </div>
    {:else}
        <div id="question">{$question}</div>
    {/if}
    <div id="center">
        <Options doubleClickCallback={buttonClick}/>
    </div>
    <div
    id="info"
    style={!$info.showing ? "" : "background-color: " + $info.color + ";"}
>
    <div style="{$info.color == "#046A38" ? "color: white;" : ""} margin: 1rem; min-width: 10rem; height: 2rem;" id="infoinfo">{$progress.total == 0 ? "Double click an answer to confirm. Click it again for the next question." : ""} {$info.showing ? $info.info : ""}</div>
</div>    
</main>
<footer>
    <div id="hansika">For Hansika ❤️</div>
    <div id="lang">
        <div>ଓଡ଼ିଆ<br>Odia</div>
        <img width={50} src={india} alt='India' />
    </div>
</footer>

<style>
    #info {
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #infoinfo {
        font-size: 1.7rem;
        align-self: flex-start;
        justify-self: flex-start;
    }

    #center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        align-self: center;
        justify-self: center;
        width: 50vw;
    }

    #question {
        align-self: flex-start;
        margin-left: 1rem;
        min-width: 25rem;
        margin-top: 1rem;
        font-size: 3rem;
    }

    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        height: 3vh;
        background-color: white;
    }

    #hansika {
        font-weight: 700;
    }

    #lang {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #lang img {
        margin-left: .5rem;
    }
</style>
