<script>
	import Router from 'svelte-spa-router';
	import {link, push} from 'svelte-spa-router';
	import routes from './routes';
</script>

<nav class="navbar navbar-expand-lg bg-light">
	<div class="container-fluid">
		<span class="navbar-brand" href="#">Svelte - routing</span>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/" use:link>Inicio</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/acerca/123/Juanma" use:link>Acerca de </a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contacto" use:link>Contacto</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<button on:click={() => push('/acerca/7')} class="btn btn-warning"> Acerca de </button>

<Router {routes} />
