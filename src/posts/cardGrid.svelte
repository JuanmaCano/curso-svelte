<script>
	import Card from './card.svelte';
	export let posts;

	let event = '';

	function goBooking(e) {
		event = e.detail;
	}

	function goAlert(e) {
		event = e.detail.id;
	}
</script>

<div class="row">
	{#each posts as { title, description, img }}
		<div class="col-12 col-md-4 mt-5">
			<Card {title} {img} {description} on:booking={goBooking} on:go={goAlert} />
		</div>
	{/each}
</div>

{#if event !== ''}
	<div class="row">
		<p class="fst-italic">param sent from child component with createEventDispatcher</p>
		<strong>{event}</strong>
	</div>
{/if}
