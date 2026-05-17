<script lang="ts">
	const BASE_PATH = '/resources/cards/';

	interface Props {
		faction: string;
		name: string;
		imagePath: string;
		description?: string;
	}

	let { faction, name, imagePath, description = '' }: Props = $props();

	const src = $derived(`${BASE_PATH}${imagePath}`);
</script>

<div class="card-wrap">
	<div class="card">
		<div class="card-image">
			<img {src} alt={name} />
		</div>

		<div class="card-description">
			<p>{name}</p>
			<p>{description}</p>
		</div>
		<img class="faction-stripe" src="/resources/cards/elements/nml_stripe.png" alt="" />
	</div>

	<img class="power-number" src="/resources/other/power_number_hero_silver_MO.png" alt="" />
</div>

<style>
	.card-wrap {
		overflow: hidden;
		position: relative;
		width: 150px;
	}

	.card {
		position: relative;
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		border: 5px solid black;
		background: #1a1a1a;
	}

	.card-image {
		width: 100%;
		height: 153px;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center -11px;
		display: block;
	}

	.card-description {
		font-size: 4px;
		height: 53px;
		color: black;
		background-image: url('/resources/cards/elements/desc_background.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.faction-stripe {
		position: absolute;
		left: 4px;
		bottom: 5px;
		width: 30%;
		z-index: 2;
		pointer-events: none;
	}

	.power-number {
		position: absolute;
		left: -1px;
		top: 0px;
		width: 60%;
		z-index: 3;
		pointer-events: none;
	}
</style>
