<script>
	export let name;
	
	function onInput() {
	  console.log('foo')
	}
</script>

<template lang="pug">
	main
		h1 Hello {name} 1212
		p Visit the 
			a(href="https://svelte.dev/tutorial") Svelte tutorial 
			| to learn how to build Svelte apps.

		input(bind:value="{name}")
		input(on:input="{onInput}")
</template>

<style lang="postcss">
	main
		text-align: center
		padding: 1em
		max-width: 240px
		margin: 0 auto

		@media (min-width: 640px)
			max-width: none

	h1
		color: #ff3e00
		text-transform: uppercase
		font-size: 4em
		font-weight: 100

</style>