<script>
    import { onMount } from 'svelte';
    import { db } from '../../../firebase.js';
    import { doc, getDoc } from "firebase/firestore";

    let article = null;
    let loading = true;
    let error = null;

    async function fetchPCODArticle() {
        try {
            loading = true;
            // Reference to the specific "PCOD" document in the "disease" collection
            const articleRef = doc(db, "disease", "PCOD :");
            const articleSnap = await getDoc(articleRef);

            if (articleSnap.exists()) {
                const data = articleSnap.data();
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
        } finally {
            loading = false;
        }
    }

    onMount(fetchPCODArticle);
</script>

{#if loading}
    <div class="loading">
        <p>Loading article...</p>
    </div>
{:else if error}
    <div class="error">
        <p>{error}</p>
    </div>
{:else if article}
    <article class="article-container">
        <header class="article-header">
            <h1>{article.title}</h1>
        </header>

        <div class="article-content">
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
    </div>
{/if}

<style>
    .article-container {
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
        text-align: center;
        padding: 3rem;
        color: #666;
    }

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