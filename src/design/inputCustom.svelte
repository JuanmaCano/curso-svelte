<script>
	export let control; // text or textarea
	export let value;
	export let placeholder;
	export let type;
	export let name;
	export let id;
</script>

<div class="form-group">
	<label for={id} {id}>{name}</label>
	{#if control === 'textarea'}
		<textarea class="form-control" {id} {placeholder} {value} on:input rows="10" />
	{:else}
		<input class="form-control" {type} {id} {placeholder} {value} on:input />
	{/if}
</div>
