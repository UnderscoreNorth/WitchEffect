<script>
    import {page} from '$app/stores';    
</script>
<div id='container'>
    {#if $page.route.id !== '/'}
    <div id='navBar'>
            [<a href='/home'>Witch Effect</a>]-[<a href='/_n'>_n</a>|<a href='/pedals'>pedals</a>|<a href='/sprites'>sprites</a>|<a href='/letsdraw'>let's draw</a>]
    </div>
    {/if}
    <div id='contents'>
    <slot />
    </div>
</div>
<style>
    #container{
        height:calc(100vh - 20px);
        width:calc(100vw - 20px);
        padding:10px;
        display:flex;
        flex-direction: column;        
    }
    #navBar{
        font-size:150%;
        font-weight: bold;
    }
    #contents{
        font-size:100%;
        flex-grow: 1;
        flex-shrink: 1;
        overflow-y: auto;
        width:100%;
    }
</style>