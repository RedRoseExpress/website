<script lang="ts">
    import { onMount } from "svelte";
	import { config } from "$lib/config";

	const {
		src,
		alt,

		title,
		action,

		height = 100,
	}: Props = $props();

	let headerHeight: number = $state(0);

	function addHeaderPadding() {
		const header = document.querySelector("header");
		headerHeight = header?.clientHeight || 0;
	}

	onMount(() => {
		window.addEventListener("resize", addHeaderPadding);
		addHeaderPadding();

		return () => {
			window.removeEventListener("resize", addHeaderPadding);
		};
	});

	type Props = {
		src: string;
		alt: string;

		title: string;
		action: string;

		height?: number;
	};
</script>

<div
	class="splash"
	style:height={`${height}vh`}
	style:padding-top={`${headerHeight}px`}
>
	<img src={src} alt={alt} />
	<div class="shade"></div>

	<div class="box">
		<span>{config.company.name}</span>
		<h1>{title}</h1>
		<a href="/">{action}</a>
	</div>
</div>

<style lang="scss">
	@use "$lib/styles/app";

	.splash {
		width: 100vw;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: padding-top 0.15s ease-out;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.box {
		width: 650px;
		padding: 32px;
		background-color: rgba(255, 255, 255, 0.75);
		position: relative;
		border-radius: 4px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 2;

		span {
			color: app.$theme-color;
			font-size: 20px;
			font-weight: 700;
			text-transform: uppercase;
		}

		h1 {
			color: app.$color-grey;
			font-size: 40px;
			line-height: 44px;
			font-weight: 700;
			margin: 16px 0;
		}

		a {
			color: #ffffff;
			font-size: 16px;
			font-weight: 700;
			text-decoration: none;
			text-transform: uppercase;
			padding: 16px;
			border-radius: 24px;
			background-color: app.$theme-color;
		}
	}

	.shade {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
</style>
