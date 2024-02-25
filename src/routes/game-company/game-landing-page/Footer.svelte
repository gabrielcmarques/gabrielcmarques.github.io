<script>
	import endPattern from './components/svgs/end-pattern.svg';
</script>

<div id="footer_lp" class="pt-12 text-center">
	<!-- <img class="z-50 w-full h-10 md:h-24" src={endPattern} alt="" /> -->
	<footer id="footer" class="relative z-50 dark:bg-gray-900">
		<div class="border-t border-b border-gray-200 dark:border-gray-700 py-3 border">
			<div
				class="my-10 flex items-center justify-around max-sm:mt-1 max-sm:px-5 gap-5 cursor-pointer hover:text-brand dark:hover:text-brand"
			>
				<span class="icon-[bi--steam] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[cib--epic-games] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--xbox] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--playstation] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--nintendo-switch] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--android2] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--apple] w-12 h-12" role="img" aria-hidden="true" />
			</div>
		</div>
		<div class="footer-container">
			<div class="footer-column">
				<ul class="footer-list">
					<li class="footer-header">Product</li>
					<li><a href="#footer_lp">FAQ</a></li>
					<li><a href="#footer_lp">News</a></li>
					<li><a href="#footer_lp">Community</a></li>
					<li><a href="#footer_lp">Register</a></li>
				</ul>
			</div>
			<div class="footer-column">
				<ul class="footer-list">
					<li class="footer-header">Help</li>
					<li><a href="#footer_lp">Guides</a></li>
					<li><a href="#footer_lp">Legal Notices</a></li>
					<li><a href="#footer_lp">Terms of Use</a></li>
					<li><a href="#footer_lp">Privacy Policy</a></li>
					<li><a href="#footer_lp">Terms of Service</a></li>
				</ul>
			</div>
			<div class="footer-column">
				<ul class="footer-list">
					<li class="footer-header">Company</li>
					<li><a href="#footer_lp">Technology Blog</a></li>
					<li><a href="#footer_lp">Press Kit</a></li>
					<li><a href="#footer_lp">Work With Us</a></li>
				</ul>
			</div>
		</div>

		<div class="flex flex-col justify-center items-center">
			<p class="my-6 text-xs lg:text-sm text-gray-900 dark:text-gray-50">
				Gabriel Christo Marques 2023.
			</p>
		</div>
	</footer>
</div>

<style>
	span {
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}
	span:hover {
		transform: translateY(-5px) scale(1.08);
	}

	.footer-container {
		display: flex;
		justify-content: space-between;
		padding: 20px 0;
	}

	.footer-column {
		flex: 1;
	}

	.footer-list {
		list-style: none;
		padding: 0;
	}

	.footer-header {
		color: #fff;
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	.footer-list a {
		color: #888;
		text-decoration: none;
		transition: color 0.3s;
	}

	.footer-list a:hover {
		color: #fff;
	}
</style>
