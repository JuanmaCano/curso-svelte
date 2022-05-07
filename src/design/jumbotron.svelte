<script>
	export let title;
	let show = false;
</script>

<div class="jumbotron mt-4" on:mouseenter={() => (show = true)} on:mouseleave={() => (show = false)}>
	<h1>{title}</h1>
	<h2>
		<slot name="subtitle" />
	</h2>
	<p>
		<slot name="paragraph" />
	</p>
	<slot {show} />
</div>

<style>
	.jumbotron {
		padding: 2rem;
		background: whitesmoke;
		color: grey;
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
