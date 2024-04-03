<script>
    import Options from "$lib/components/Options.svelte";
    import Progress from "$lib/components/Progress.svelte";
    import { initializeApp } from "@firebase/app";
    import { getFirestore } from "@firebase/firestore";
    import { firebaseConfig } from "$lib/firebaseConfig";
    import Button from "$lib/components/Button.svelte";
    import india from "$lib/assets/india.png";
    import { writable } from "svelte/store";
    import { progress, options, selectedOptions } from "$lib/store.js";
    import { goto } from "$app/navigation";
    import { Skeleton } from "svelte-loading-skeleton";

    let app;
    let db;
    const info = writable({"info": "", "color": "green", "showing": false, "button": "CHECK"})
    const answer = writable("");
    const question = writable("");

    import { collection, getDocs } from "firebase/firestore";
    import { onMount } from "svelte";

    /**
      * @type {Object.<string, Object>}
      * @description Object to store documents from Firestore
    */
    const docs = {};

    function generateQuestion() {
        // So docs now have the id of english translation, with .translation as Odia.
        // so let us pick  4 random options from docs.
        const keys = Object.keys(docs);
        let answerDoc = "";
        const randomKeys = [];
        while (randomKeys.length < 4) {
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            if (!randomKeys.includes(docs[randomKey].o)) {
                randomKeys.push(docs[randomKey].o);
                answerDoc = randomKey;
            }
        }
        // set options to randomKeys
        options.set(randomKeys);
        answer.set(docs[answerDoc].o);
        question.set('What is this vowel "' + answerDoc + '" in Odia?')
    }

    onMount(async() => {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);

        // get 'level1' collection
        const level1 = collection(db, 'letters');
        // get document with id '1' from 'level1' collection
        const docSnap = await getDocs(level1);
        // forEach doc in docSnap, do <doc.id, doc.data()> in const docs.
        docSnap.forEach(doc => {
            docs[doc.id] = doc.data();
        });
        generateQuestion();
    });

    function buttonClick() {
        if ($info.showing == false) { // i.e. answer
          if ($selectedOptions.has($answer)) {
            selectedOptions.set(new Set());
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
                    color: "rgb(223, 254, 191);",
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
                    info: $answer,
                    button: "NEXT QUESTION",
                    color: "rgb(254, 191, 191);",
                    showing: true
                };
            });
          }
        } else {
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

<header>
    <div
        role="button"
        tabindex="0"
        on:click={() => goto('/')}
        on:keydown={(e) => e.key === 'Enter' && goto('/')}
    >
        <img width={35} src='close.svg' alt='Close' />
    </div>
    <Progress />
    <div>
    </div>
</header>
<main>
    {#if $question == ""}
        <div id="question">
            <Skeleton baseColor="rgb(175, 175, 175)" highlightColor="rgb(225, 225, 225)" height="2rem"/>
        </div>
    {:else}
        <h1 id="question">{$question}</h1>
    {/if}
    <Options />
    <div
        id="info"
        style={!$info.showing ? "" : "background-color: " + $info.color + ";"}
    >
        <div style={!$info.showing ? "color: white" : ""} id="infoinfo">{$info.showing ? $info.info : "."}</div>
        <Button type="good" callback={buttonClick} text={$info.button} />
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
    [role="button"] {
        cursor: pointer;
    }

    #infoinfo {
        font-size: 1.5rem;
        font-weight: 700;
        margin-left: 1rem;
        align-self: flex-start;
        flex-grow: 0;
    }

    #question {
        align-self: flex-start;
        margin-left: 1rem;
        min-width: 25rem;
        margin-top: 1rem;
    }

    #info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 15vh;
        transition: all 0.2s ease;
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        height: 5vh;
        background-color: white;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    main {
        background-color: white;/*#f5f5f5;*/
        height: 84vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
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
