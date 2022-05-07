<script>
	export let control; // text or textarea
	export let value;
	export let placeholder;
	export let type;
	export let name;
</script>

<div class="form-group">
	<label>{name}</label>
	{#if control === 'textarea'}
		<textarea class="form-control" {placeholder} {value} on:input rows="10" />
	{:else}
		<input class="form-control" {type} {placeholder} {value} on:input />
	{/if}
</div>
