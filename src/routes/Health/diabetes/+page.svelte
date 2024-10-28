<script>
    import { onMount } from 'svelte';
    import { db } from '../../../firebase.js';
    import { doc, getDoc } from "firebase/firestore";

    let article = null;
    let loading = true;
    let error = null;

    async function fetchDiseaseArticle() {
        try {
            loading = true;
            const articleRef = doc(db, "disease", "disease");
            console.log('Fetching document:', articleRef.path);
            
            const articleSnap = await getDoc(articleRef);

            if (articleSnap.exists()) {
                const data = articleSnap.data();
                console.log('Document data:', data);
                
                if (data?.disease) {
                    article = {
                        id: articleSnap.id,
                        title: "Disease Information",
                        content: data.disease,
                    };
                } else {
                    throw new Error("Disease field not found in the document");
                }
            } else {
                throw new Error("Document not found");
            }
        } catch (err) {
            error = err.message;
            console.error("Error fetching disease article:", err);
        } finally {
            loading = false;
        }
    }

    onMount(fetchDiseaseArticle);
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mountains+of+Christmas:wght@400;700&family=Paprika&display=swap" rel="stylesheet">

{#if loading}
    <div class="loading">
        <p>Loading article...</p>
    </div>
{:else if error}
    <div class="error">
        <p>{error}</p>
    </div>
{:else if article && article.content}
    <article class="article-container">
        <header class="article-header">
            <h1>{article.title}</h1>
        </header>

        <div class="article-content">
            {@html article.content}
        </div>
    </article>
{:else}
    <div class="no-content">
        <p>No content available</p>
    </div>
{/if}

<style>
    .article-container{
        display: inline-block;
        justify-content: left;
        align-items: center;
        padding: 90px;  
        font-family: "Inter", sans-serif;

    }

    .no-content {
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    .article-contet{
        text-align: center;
        font-size:90px;
    }
</style>
