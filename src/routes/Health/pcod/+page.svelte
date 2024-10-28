<script>
    import { onMount } from 'svelte';
    import { db } from '../../../firebase.js';
    import { doc, getDoc } from "firebase/firestore";

    let article = null;
    let loading = true;
    let error = null;

<<<<<<< HEAD
    async function fetchDiseaseArticle() {
        try {
            loading = true;
            const articleRef = doc(db, "disease", "PCOD");  // Accessing the "PCOD" document within "disease" collection
            console.log('Fetching document:', articleRef.path);

=======
    async function fetchPCODArticle() {
        try {
            loading = true;
            // Reference to the specific "PCOD" document in the "disease" collection
            const articleRef = doc(db, "disease", "PCOD :");
>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
            const articleSnap = await getDoc(articleRef);

            if (articleSnap.exists()) {
                const data = articleSnap.data();
<<<<<<< HEAD
                console.log('Document data:', data);

                if (data?.PCOD) {  // Accessing the "PCOD" field in the document
                    article = {
                        id: articleSnap.id,
                        title: "PCOD",
                        content: data.PCOD,  // Assigning the content from the PCOD field
                    };
                } else {
                    throw new Error("PCOD field not found in the document");
                }
            } else {
                throw new Error("Document not found");
            }
        } catch (err) {
            error = err.message;
            console.error("Error fetching disease article:", err);
=======
                // Safely transform the data with null checks
                article = {
                    id: articleSnap.id,
                    title: data?.title || 'PCOD :',
                    content: data?.content || '',
                    // Add any other fields that exist in your document
                };
            } else {
                throw new Error("PCOD article not found");
            }
        } catch (err) {
            error = err.message;
            console.error("Error fetching PCOD article:", err);
>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
        } finally {
            loading = false;
        }
    }

<<<<<<< HEAD
    onMount(fetchDiseaseArticle);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aladin&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mountains+of+Christmas:wght@400;700&family=Paprika&display=swap" rel="stylesheet">

=======
    onMount(fetchPCODArticle);
</script>

>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
{#if loading}
    <div class="loading">
        <p>Loading article...</p>
    </div>
{:else if error}
    <div class="error">
        <p>{error}</p>
    </div>
<<<<<<< HEAD
{:else if article && article.content}
=======
{:else if article}
>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
    <article class="article-container">
        <header class="article-header">
            <h1>{article.title}</h1>
        </header>

        <div class="article-content">
<<<<<<< HEAD
            {@html article.content}
        </div>
    </article>
{:else}
    <div class="no-content">
        <p>No content available</p>
=======
            {#if article.content}
                {@html article.content}
            {:else}
                <p>No content available</p>
            {/if}
        </div>
    </article>
{:else}
    <div class="error">
        <p>No article data available</p>
>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
    </div>
{/if}

<style>
    .article-container {
<<<<<<< HEAD
        display: inline-block;
        justify-content: left;
        align-items: center;
        padding: 90px;  
        font-family: "Inter", sans-serif;
    }

    .no-content {
=======
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    .article-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 2.5rem;
        color: #1f2937;
        margin-bottom: 1rem;
        word-break: break-word;
    }

    .article-content {
        line-height: 1.8;
        color: #333;
        font-size: 1.1rem;
        word-break: break-word;
    }

    .article-content :global(h2) {
        font-size: 1.8rem;
        margin: 2rem 0 1rem;
        color: #1f2937;
    }

    .article-content :global(p) {
        margin-bottom: 1.5rem;
    }

    .article-content :global(ul), 
    .article-content :global(ol) {
        margin-bottom: 1.5rem;
        padding-left: 2rem;
    }

    .article-content :global(li) {
        margin-bottom: 0.5rem;
    }

    .loading, .error {
>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
        text-align: center;
        padding: 3rem;
        color: #666;
    }

<<<<<<< HEAD
    .article-content {
        text-align: left;
    }
</style>
=======
    .error {
        color: #dc2626;
    }

    @media (max-width: 768px) {
        .article-container {
            padding: 1rem;
        }

        h1 {
            font-size: 2rem;
        }
    }
</style>
>>>>>>> 224d30e31d5ecf57679df3589b96bc92c3be4b43
