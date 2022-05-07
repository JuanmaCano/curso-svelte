<script>
	import {onMount, onDestroy, beforeUpdate, afterUpdate, tick} from 'svelte';

	/* create */
	// scripts
	console.log('execute first scripts');
	// onMount
	onMount(async () => {
		console.log('later, execute onMount');
		await tick();
		console.log('TICK: execute when all methods already executed');
	});
	/* tick --> fire at the end of cicle,
    for example, at the end of onMount, etc .. */

	// onDestroy
	onDestroy(() => {
		console.log('execute on destroy Component');
	});

	/* update DOM */
	// beforeUpdate
	beforeUpdate(() => {
		console.log('execute before Update DOM');
	});
	// afterUpdate
	afterUpdate(() => {
		console.log('execute after Update DOM');
	});
</script>
