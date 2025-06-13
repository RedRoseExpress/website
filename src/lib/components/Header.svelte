<script lang="ts">
    import { onNavigate } from "$app/navigation";
	import LogoSvg from "$lib/svgs/LogoSvg.svelte";
    import { onMount } from "svelte";

	const links: Link[] = [
		{
			text: "Home",
			href: "/",
		},
		{
			text: "About",
			href: "/about",
		},
	];

	let currentPath: string = $state(
		typeof window !== "undefined" ?
			window.location.pathname : "/"
	);

	let scrolling: boolean = $state(true);

	function handleScroll() {
		const scrollTop = document.documentElement.scrollTop;
		scrolling = scrollTop > 32;
	}

	function isCurrentLink(link: Link): boolean {
		return link.href === currentPath;
	}

	onNavigate(() => {
		currentPath = typeof window !== "undefined" ?
			window.location.pathname : "/"
	});

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	type Link = {
		text: string;
		href: string;
	};
</script>

<header class={scrolling ? "scrolling" : ""}>
	<LogoSvg />

	<nav>
		{#each links as link}
			<a
				href={link.href}
				class={isCurrentLink(link) ? "current": ""}
			>{link.text}</a>
		{/each}
	</nav>
</header>

<style lang="scss">
	@use "$lib/styles/app";

	header {
		width: 100%;
		padding: 16px 64px;
		background-color: rgba(255, 255, 255, 0.6);
		box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		transition: background-color 0.15s ease-out;

		&.scrolling {
			background-color: #ffffff;
		}
	}

	:global(svg) {
		$height: 54px;

		height: $height;
		width: $height * 1.7928;
		margin-right: auto;
	}

	nav {
		margin-left: auto;

		a {
			color: app.$color-grey;
			font-size: 14px;
			line-height: 18px;
			font-weight: 700;
			text-decoration: none;
			text-transform: uppercase;
			margin-left: 24px;
			padding: 16px;

			&.current {
				color: app.$theme-color;
			}
		}
	}
</style>
