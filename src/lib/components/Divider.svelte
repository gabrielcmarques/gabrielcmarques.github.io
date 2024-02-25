<div class="upper-section">
	<span>LOREM</span>
</div>
<div class="lower-section section-divider">
	<span>IPSUM</span>
</div>

<style lang="scss">
	.lower-section,
	.upper-section {
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgba(#2980b9, 0.5);

		span {
			font-size: 2.2rem;
		}
	}
	.upper-section {
		min-height: 50vh;
		width: 100%;
		background: #34495e;
	}
	.lower-section {
		min-height: 50vh;
		width: 100%;
		background: #2c3e50;
	}
	.section-divider {
		position: relative;
	}
	.section-divider:before {
		content: '';
		width: 6.5rem;
		height: 6.5rem;
		background: #2c3e50;
		border-radius: 100%;
		position: absolute;
		top: -3.25rem;
		left: calc(50% - 3.25rem);
		color: rgba(#2980b9, 0.5);
		line-height: 6rem;
		text-indent: 1.75rem;
		font-size: 3rem;
	}
</style>
