<script>
	export let title;
</script>

<div class="jumbotron mt-4">
	<h1>{title}</h1>
	<h2>
		<slot name="subtitle" />
	</h2>
	<p>
		<slot name="paragraph" />
	</p>
</div>

<style>
	.jumbotron {
		padding: 2rem;
		background: lightsteelblue;
		color: white;
		border-radius: 0.75rem;
	}
	h2 {
		color: salmon;
		font-weight: bolder;
	}
	p {
		color: salmon;
	}
</style>
