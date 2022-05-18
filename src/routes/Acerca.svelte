<script>
	export let params = {};
</script>

<h1>Acerca de</h1>
<h6>Id recibido: {params.id}</h6>
{#if params.nombre}
	<h6>Nombre recibido: {params.nombre}</h6>
{/if}
