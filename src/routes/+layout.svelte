<script>
</script>

<div id="container">
	<div id="navBar">
		<a href="/">Witch Effect</a>
		<div><hr /></div>
		<a href="/_n">_north</a>
		<a href="/pedals">pedals</a>
		<a href="/sprites">sprites</a>
		<a href="/letsdraw">let's draw</a>
		<a href="https://witcheffect.com/a-stream">stream</a>
		<a href="/cds">CDs</a>
	</div>
	<div id="contents">
		<slot />
	</div>
</div>

<style>
	#container {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: row;
	}
	#navBar {
		width: 9rem;
		background: rgba(0, 0, 0, 0.25);
		border-right: dashed #877d49;
		padding: 10px;
		display: flex;
		flex-direction: column;
	}
	#navBar hr {
		border-color: #877d49;
		border-style: dashed;
	}
	#contents {
		flex-grow: 1;
		flex-shrink: 1;
		overflow-y: auto;
		width: 100%;
		padding: 10px;
	}
	@media (orientation: portrait) {
		#container {
			flex-direction: column;
		}
		#navBar {
			width: 100%;
			display: block;
		}
	}
</style>
