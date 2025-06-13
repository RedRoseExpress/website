<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

	const { children }: Props = $props();

	type Props = {
		children?: any;
	};
</script>

<Header />

{#if children}
	{@render children()}
{/if}

<Footer />
