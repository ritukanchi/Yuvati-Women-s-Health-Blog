<script>
	export let name;
	import { db } from './firebase'; 
	import client from './typesense';
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte'; 

	let posts = []; 
	let searchResults = [];
	let loading = false; 
	let noResults = false; 

	// Fetch posts from Firestore
	async function fetchPosts() {
		const postsCollection = collection(db, 'posts'); 
		const postsSnapshot = await getDocs(postsCollection);
		posts = postsSnapshot.docs.map(doc => ({
			id: doc.id,
			title: doc.data().title,
			content: doc.data().content 
		}));
		console.log(posts); 
	}

	// Search posts using Typesense
	async function searchPosts(query) {
		loading = true; 
		try {
			const results = await client.collections('posts').documents().search({
				q: query,
				query_by: 'title,content',
			});
			searchResults = results.hits; 
			noResults = searchResults.length === 0;
			console.log(searchResults); 
		} catch (error) {
			console.error('Error searching posts:', error);
		}
		loading = false;
	}

	// Handle search form submission
	function handleSearch(event) {
		event.preventDefault();
		const query = event.target.query.value;
		searchPosts(query);
	}

	// Call fetchPosts when the component mounts
	onMount(() => {
		fetchPosts();
	});
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Yuvati Health Blog</p>
	<form on:submit={handleSearch}>
		<input type="text" name="query" placeholder="Search posts..." required />
		<button type="submit">Search</button>
	</form>
	<section>
		<h2>Blog Posts</h2>
		<ul>
			{#each posts as post}
				<li>
					<a href={`/blog/${post.id}`}>
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h2>Search Results</h2>
		{#if loading}
			<p>Loading...</p>
		{:else if noResults}
			<p>No results found.</p>
		{:else}
			<ul>
				{#each searchResults as post}
					<li>{post.title} - {post.content}</li>
				{/each}
			</ul>
		{/if}
	</section>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	input {
		padding: 0.5em;
		margin-right: 0.5em;
	}

	button {
		padding: 0.5em 1em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
