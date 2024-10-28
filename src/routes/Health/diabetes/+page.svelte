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
        display: flex;
        
    }
    .no-content {
        text-align: center;
        padding: 3rem;
        color: #666;
    }
</style>
