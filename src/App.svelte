<script>
	import Navbar from './design/header.svelte';
	import CardGrid from './posts/cardGrid.svelte';
	import InputCustom from './design/inputCustom.svelte';
	const color = 'danger';
	let title = '';
	let description = '';
	let img = '';
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
	function addPost() {
		const nuevoPost = {
			id: parseInt(Math.random() * 100).toString(),
			title,
			description,
			img,
		};

		posts = [nuevoPost, ...posts];
	}
</script>

<Navbar title="Components in Svelte" {color} />
<Navbar title="Components in Svelte" color="warning" />

<div class="container">
	<CardGrid {posts} />
</div>

<hr />
<div class="container">
	<h3>Save Post</h3>
	<form on:submit|preventDefault={addPost} class="my-3">
		<InputCustom
			type="text"
			name="Title"
			placeholder="Title"
			value={title}
			on:input={(event) => {
				title = event.target.value;
			}}
		/>

		<InputCustom
			type="text"
			name="Imagen"
			placeholder="Imagen"
			value={img}
			on:input={(event) => {
				img = event.target.value;
			}}
		/>

		<InputCustom
			control="textarea"
			name="Description"
			placeholder="Description"
			value={description}
			on:input={(event) => {
				description = event.target.value;
			}}
		/>
		<button type="submit" class="btn btn-info w-100">Save</button>
	</form>
</div>
