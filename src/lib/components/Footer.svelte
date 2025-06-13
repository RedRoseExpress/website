<script lang="ts">
	import { config } from "$lib/config";

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="work">
		<span>WANT TO WORK WITH US?</span>
		<a href="/">APPLY NOW</a>
	</div>

	<div class="main">
		<div class="left">
			<span class="name">{config.company.name}</span>
			<span class="address"><b>Visit us at:</b> {config.company.address}</span>
		</div>
	</div>

	<div class="bottom">
		<span><b>{config.company.name}</b> &copy; {year} All Rights Reserved</span>
	</div>
</footer>

<style lang="scss">
	@use "$lib/styles/app";

	.work, .main, .bottom {
		width: 100%;
		padding: 32px;
	}

	.work {
		background-color: app.$theme-color;
		padding-top: 64px;
		padding-bottom: 64px;
		display: flex;
		flex-direction: column;
		align-items: center;

		span {
			color: #ffffff;
			font-size: 32px;
			line-height: 36px;
			font-weight: 700;
			margin: 16px 0;
		}

		a {
			color: app.$theme-color;
			font-size: 16px;
			font-weight: 700;
			text-decoration: none;
			padding: 16px;
			border-radius: 24px;
			background-color: #ffffff;
		}
	}

	.main {
		background-color: #424242;

		span {
			color: #ffffff;
			display: block;
		}

		.left {
			span {
				display: block;
			}

			.name {
				font-size: 32px;
			}

			.address {
				font-size: 14px;
			}
		}
	}

	.bottom {
		padding-top: 16px;
		padding-bottom: 16px;
		display: flex;
		justify-content: flex-end;

		span {
			color: app.$color-grey;
			font-size: 14px;
		}

		b {
			text-transform: capitalize;
		}
	}
</style>
