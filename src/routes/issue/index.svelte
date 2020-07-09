<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`issue.json`).then(r => r.json()).then(issues => {
			return { issues };
		});
	}
</script>

<script>
	export let issues;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Issue</title>
</svelte:head>

<h1>Recent Issues</h1>

<ul>
	{#each issues as issue}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='issue/{issue.slug}'>{issue.title}</a></li>
	{/each}
</ul>
