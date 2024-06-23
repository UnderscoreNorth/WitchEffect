<script>
</script>

<div id="container">
	<div id="navBar">
		[<a href="/">Witch Effect</a>] - [<a href="/_n">_n</a>|<a href="/pedals">pedals</a>|<a
			href="/sprites">sprites</a
		>|<a href="/letsdraw">let's draw</a>|<a href="https://witcheffect.com/a-stream">stream</a>]
	</div>
	<div id="contents">
		<slot />
	</div>
</div>

<style>
	#container {
		height: calc(100svh - 20px);
		width: calc(100vw - 20px);
		padding: 10px;
		display: flex;
		flex-direction: column;
	}
	#navBar {
		font-size: 150%;
		font-weight: bold;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	#contents {
		font-size: 100%;
		flex-grow: 1;
		flex-shrink: 1;
		overflow-y: auto;
		width: 100%;
	}
</style>
