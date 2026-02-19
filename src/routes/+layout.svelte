<script>
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}


<footer>
	<div>
		<h2>Content</h2>
		<a href="mailto:edoper19@htl-shkoder.com">Write a mail</a>
	</div>
	<div>
		<h2>Admin</h2>
		<a href="/admin">Go to admin area</a>
	</div>
</footer>


<style>
	
	footer {
		display: flex;
		justify-content: space-evenly;
		padding: 10px;
		background-color: darkgrey;
		align-items: center;
	}
	

</style>
