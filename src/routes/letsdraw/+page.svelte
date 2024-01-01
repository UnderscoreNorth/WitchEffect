<script>
    let selImg = '';
    let hover = false;
    const posts = [
        {
            img:'Yoko',
            title:`Yoko (Inukami) - Date lost, somewhere between Spring 2012 and Spring 2013`,
            desc:`6x6 tiles<br>The very first one I started, I went to bed, so this was actually stiched together by someone else, the original template is lost`
        },
        {
            img:'Free',
            title: 'Free! - May 5, 2013',
            desc:`6x6 tiles over 2.7 hours<br>The first one with the trip I used, people were much more enthustiastic then and this was finished shortly`
        },
        {
 img:"Yuru Yuri",
title:'Yuru Yuri - May 9, 2013',
				
				desc:`8x5 tiles over 5 hours<br>The second one, probably the most consistent in color pallete`,
			},
			{
 img:"Bakemonogatari",
title:'Bakemonogatari - Aug 21, 2013',
				
				desc:`8x6 tiles over 8.5 hours<br>After this was finished, 5 more collabs were started by other people in 3 days`,
			},
			{
 img:"Akira",
title:'Akira - Sep 9, 2013',
				
				desc:`6x5 tiles over 24 hours<br>The longest and slowest collab, monitoring this for a whole day was exhausting`,
			},	
			{
 img:"Kill la Kill",
title:'Kill la Kill - Sept 30, 2013',
				
				desc:`6x6 tiles over 22 hours<br>Triple panties`,
			},
			{
 img:"Cromartie",
title:'Cromartie Highschool - Oct 25, 2013',
				
				desc:`4x7 tiles over 8 hours<br>One of my favourites, the large number of characters allowed for many people to draw interesting tiles`,
			},
			{
 img:"Kyousougiga",
title:'Kyousougiga - Nov 29, 2013',
				
				desc:`4x6 tiles over 20 hours<br>Tied with Akira as the slowest collab, it was then that I tried to see if initial post time and day of the week affected activity`,
			},
			{
 img:"Space Brothers",
title:'Space Brothers - Jan 3, 2014',
				
				desc:`4x7 tiles over 10 hours<br>Used a screencap, so result was a little uninteresting, I believe multiple people also drew more than one tile`,
			},
			{
 img:"Space Dandy",
title:'Space Dandy - Jan 29, 2014',
				
				desc:`7x5 tiles over 13 hours<br>Perhaps the best looking one`,
			},
			{
 img:"SamFlam",
title:'Samurai Flamenco - Mar 5, 2014',
				
				desc:`5x7 tiles over 9 hours<br>The last one I did, I chose this poster because this had a lot of characters, but failed to realize how much blank space it had`,
			},
    ];
    const getSrc = ()=>{
        return `/img/letsdraw/${selImg} ${hover ? 'Final' : 'Template'}.jpg`;
    }
</script>
<div class='container'>
    <div>
        <br>
        Monthly /a/ draws from May 2013 to March 2014 that I hosted, some of these tiles were drawn by myself if you can guess which ones
        <hr>
    </div>
    <div id="drawcontainer">
        {#if selImg}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id="overlaycontainer" on:click={()=>selImg=''}>
                <a target="_blank" href={`/img/letsdraw/${selImg} Final.jpg`}>
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    {#key hover}
                        <img id="zoomedimg" src={getSrc()} alt="" on:mouseover={()=>hover=true} on:mouseleave={()=>hover=false}>
                    {/key}
                </a>
            </div>
        {/if}
        {#each posts as post}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class='postContainer' on:click={()=>{selImg = post.img}}>
                <h4>{post.title}</h4>
                <div>
                    <img src={`/img/letsdraw/${post.img} Thumbnail.jpg`} alt={post.img}/>
                    <div>{@html post.desc}</div>
                </div>
            </div>
        {/each}
    </div>
</div>
<style>
    #drawcontainer{
        display:flex;
        width:100%;
        flex-wrap: wrap;
        gap:20px;
        flex-shrink: 1;
        flex-grow:1;
        overflow-y: auto;
    }
    .postContainer {
        border:dashed 2px #877d49;
        width: 40svw;
        min-width:300px;
        max-width:500px;
        min-height:12rem;
        padding:10px;
        cursor: pointer;
        vertical-align:top;
        text-align:left;
        margin:auto;
    }
    .postContainer:hover{
        background-color:rgba(255,255,255,0.5);
    }
    .postContainer>div{
        display:flex;
        gap:10px;
    }
    #overlaycontainer{
        position:fixed;
        top: 0px;
        left: 0px;
        z-index: 1;
        width:100vw;
        height:100svh;
        background: rgba(0,0,0, 0.75);
        display:flex;
        justify-content: center;
        align-items: center;
    }
    #zoomedimg{			
        max-height: 80svh;
        max-width: 80vw;
        padding:5px;
        border:dashed 2px #877d49;

    }	
</style>
	