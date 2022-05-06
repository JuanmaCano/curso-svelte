<script>
	// your script goes here
	import Navbar from './design/header.svelte';
	import Card from './posts/card.svelte';
	const color = 'danger';
	let posts = [
		{
			id: '1',
			title: 'Trabajando con Svelte',
			description: 'Realizando el curso de svelte',
			img: 'https://cdn.pixabay.com/photo/2016/05/07/16/52/sea-1377712__340.jpg',
		},
		{
			id: '2',
			title: 'Trabajando con Vue',
			description: 'Realizando el curso de Vue',
			img: 'https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522__340.jpg',
		},
		{
			id: '3',
			title: 'Trabajando con React',
			description: 'Realizando el curso de React',
			img: 'https://cdn.pixabay.com/photo/2018/03/08/18/40/bald-eagle-3209427__340.jpg',
		},
	];
</script>

<Navbar title="Components in Svelte" {color} />
<Navbar title="Components in Svelte" color="warning" />

{#each posts as { title, description, img }}
	<!-- content here -->
	<Card {title} {img} {description} />
{/each}
