<script>
	// your script goes here
	import Card from './card.svelte';
	export let posts;
</script>

<div class="row">
	{#each posts as { title, description, img }}
		<div class="col-12 col-md-4 mt-5">
			<Card {title} {img} {description} />
		</div>
	{/each}
</div>
<!-- content here -->
