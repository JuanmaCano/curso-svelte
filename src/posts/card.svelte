<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	export let title;
	export let description;
	export let img;

	function go() {
		dispatch('go', {
			id: 123,
		});
	}

	function booking() {
		dispatch('booking', 'createDispatcherEvent: to fire actions from child components to parent functions');
	}
</script>

<div class="card" style="width: 18rem;">
	<img src={img} class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title">{title}</h5>
		<p class="card-text">{description}</p>
		<button class="btn btn-primary" on:click={go}>Go somewhere</button>
		<button class="btn btn-success" on:click={booking}>Booking</button>
	</div>
</div>
