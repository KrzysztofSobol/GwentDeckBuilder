<script lang="ts">
	import Card from '$lib/components/Card.svelte';
</script>

<main class="test-page">
	<Card
		faction="MO"
		type="HERO"
		name=""
		imagePath="standard/neutral/neu_geralt.png"
		description=""
	/>

	<Card
		faction="MO"
		type="NORMAL"
		name=""
		imagePath="standard/monsters/nml_toad.png"
		description=""
	/>
</main>

<style>
	.test-page {
		min-height: 100vh;
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
</style>
