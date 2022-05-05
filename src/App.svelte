<script>
	let name = 'Juanma Cano';
	let v1 = 0;
	let v2 = 0;
	let check = false;
	let texto = '';
	let login = false;
	const cambio = () => (login = !login);

	function alerta1() {
		alert('alerta1');
	}

	const alerta2 = () => alert('alerta2');

	let contador = 0;
	// variable reactiva == computed property de Vue
	$: resultado = contador * 10;
	$: if (resultado === 30) {
		texto = 'OK';
	} else {
		texto = 'Ooouucch';
	}

	let nombres = ['Juanma', 'Eli', 'Valeria', 'Pablo'];

	let personas = [
		{id: 1, nombre: 'Devan', apellido: 'Mordey', email: 'dmordey0@google.com.br'},
		{id: 2, nombre: 'Tobi', apellido: 'Knudsen', email: 'tknudsen1@cbc.ca'},
		{id: 3, nombre: 'Thia', apellido: 'Rosengarten', email: 'trosengarten2@posterous.com'},
		{id: 4, nombre: 'Willy', apellido: 'Sterling', email: 'wsterling3@blogspot.com'},
		{id: 5, nombre: 'Wes', apellido: 'Chaffin', email: 'wchaffin4@myspace.com'},
		{id: 6, nombre: 'Martyn', apellido: 'Nicholson', email: 'mnicholson5@dmoz.org'},
		{id: 7, nombre: 'Lannie', apellido: 'Gallatly', email: 'lgallatly6@senate.gov'},
		{id: 8, nombre: 'Mirella', apellido: 'De Ruel', email: 'mderuel7@facebook.com'},
		{id: 9, nombre: 'Sunny', apellido: 'Stening', email: 'sstening8@odnoklassniki.ru'},
		{id: 10, nombre: 'Newton', apellido: 'Hatchman', email: 'nhatchman9@ebay.co.uk'},
		{id: 11, nombre: 'Karalee', apellido: 'Ogle', email: 'koglea@ted.com'},
		{id: 12, nombre: 'Tobye', apellido: 'Hefner', email: 'thefnerb@goo.ne.jp'},
		{id: 13, nombre: 'Krissie', apellido: 'Pimm', email: 'kpimmc@jugem.jp'},
		{id: 14, nombre: 'Hadley', apellido: 'Bouller', email: 'hboullerd@elpais.com'},
		{id: 15, nombre: 'Elizabet', apellido: 'Shevlan', email: 'eshevlane@wufoo.com'},
		{id: 16, nombre: 'Gris', apellido: 'Karpenko', email: 'gkarpenkof@buzzfeed.com'},
		{id: 17, nombre: 'Ermina', apellido: 'Morecombe', email: 'emorecombeg@dagondesign.com'},
		{id: 18, nombre: 'Florrie', apellido: 'Roylance', email: 'froylanceh@yahoo.co.jp'},
		{id: 19, nombre: 'Jessi', apellido: 'Scarrisbrick', email: 'jscarrisbricki@rambler.ru'},
		{id: 20, nombre: 'Lura', apellido: 'Questier', email: 'lquestierj@howstuffworks.com'},
	];

	let promesa = ajax();
	let users = [];

	async function ajax() {
		const api = 'https://jsonplaceholder.typicode.com/users';
		const res = await fetch(api);
		users = await res.json();

		if (res.ok) {
			return users;
		} else {
			throw new Error('error al conectar con la api');
		}
	}
</script>

<main>
	<h1>Data binding</h1>
	<h2>{name}</h2>
	<input type="text" bind:value={name} />
	<hr />
	Valor 1<input type="range" bind:value={v1} />
	Valor 2 <input type="range" bind:value={v2} />
	<p>{v1} + {v2} = {v1 + v2}</p>
	<hr />
	Habilitar botón
	<input type="checkbox" bind:checked={check} />
	<button disabled={!check}> Save </button>
	<hr />
	<h1>ONCLICK</h1>
	<button on:click={alerta1}>Alerta 1</button>
	<button on:click={alerta2}>Alerta 2</button>
	<button on:click={() => alert('alerta3')}>Alerta 3</button>
	<hr />
	<h1>Variables reactivas (computed en Vue)</h1>
	<button on:click={() => contador++}>Contador</button>
	<p>Contador: {contador}</p>
	<p>Resultado (contador x 10): {resultado}</p>
	<p>{texto}</p>
	<hr />
	<h1>Bloque IF</h1>
	<button on:click={cambio}>
		{#if login}
			<!-- content here -->
			<span>Logout</span>
		{:else}
			<!-- else content here -->
			<span>Login</span>
		{/if}
	</button>
	<hr />
	<h1>Bloque For Each</h1>
	<ul>
		{#each nombres as nombre}
			<li>{nombre}</li>
		{/each}
	</ul>
	<hr />
	<table>
		<th>#</th>
		<th>Nombre</th>
		<th>Apellido</th>
		<th>Email</th>
		{#each personas as persona}
			<tr>
				<td>{persona.id}</td>
				<td>{persona.nombre}</td>
				<td>{persona.apellido}</td>
				<td>{persona.email}</td>
			</tr>
		{:else}
			<tr>
				<td colspan="3">la api no tiene datos</td>
			</tr>
		{/each}
	</table>
	<hr />
	<h1>Bloque await</h1>
	{#await promesa}
		<!-- promise is pending -->
		Cargando users ...
	{:then users}
		<!-- promise was fulfilled -->
		<table>
			<th>#</th>
			<th>Name</th>
			<th>Username</th>
			<th>Email</th>
			{#each users as user}
				<tr>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.username}</td>
					<td>{user.email}</td>
				</tr>
			{:else}
				<tr>
					<td colspan="3">la api no tiene datos</td>
				</tr>
			{/each}
		</table>
	{:catch error}
		<p style="color:red">{error}</p>
	{/await}
</main>
