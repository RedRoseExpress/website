<script lang="ts">
	import Splash from "$lib/components/Splash.svelte";
	import { config } from "$lib/config";
</script>

<section class="main">
	<Splash
		src="/main-background.jpg"
		alt="A red truck."
		title="About Us"
		action="Get a quote"
		height={75}
	/>
</section>

<section class="content">
	<p>At {config.company.name}, trucking isn’t just what we do - it’s who we are. Built on a foundation of hard work, integrity, and a commitment to excellence, we’ve been proudly serving businesses across Canada with dependable freight and logistics solutions.</p>
	<p>With a modern, well-maintained fleet and a dedicated team of experienced drivers and logistics professionals, we ensure every shipment gets where it needs to go - safely, on time, and with care. Whether you’re moving a single load or managing complex supply chain needs, we tailor our services to fit your business, offering flexibility, transparency, and peace of mind every mile of the way.</p>
	<p>We understand that in today’s fast-paced world, reliability matters. That’s why we go the extra mile to communicate clearly, deliver consistently, and build lasting relationships with our customers. From local hauls to long-distance freight, {config.company.name} is the partner you can count on to keep your business moving forward.</p>
</section>

<style lang="scss">
	@use "$lib/styles/app";

	.content {
		padding: 80px 128px;
	}

	p {
		color: app.$color-grey;
		font-size: 17px;
		line-height: 28px;
		margin: 16px;
	}
</style>
