<script>
    export let data;
    let {imgArr} = data;   
    let search = '';
    let sort = 'name';    
    let gen = [true,true,true,true];
    const getName = (url)=>{
        return url.substring(17).replace(/\..+$/,'').replace(/v\d/,'').trim();
    }
    const getDate = (date)=>{
        return new Date(date).toDateString();
    }
</script>
<div class='container'>
    <div>
        <br>
        Started as a couple of threads on /a/ during Christmas of 2013 for anon's daughterus. Eventually grew to be the avatars on Best Key Tube alongside whatever characters I like.
        <br>
        <input bind:value={search}>
        <input type='checkbox' bind:checked={gen[1]} /> Gen 1
        <input type='checkbox' bind:checked={gen[2]} /> Gen 2
        <input type='checkbox' bind:checked={gen[3]} /> Gen 3
        | Sort
        <input type='radio' bind:group={sort} value='name'> Name
        <input type='radio' bind:group={sort} value='date'> Date
        | Count: {imgArr
            .filter(x=>x.path.toLowerCase().includes(search.toLowerCase()))
            .filter(x=>[1,2,3].some(y=>x.version == ('v' + y) && gen[y])).length}
        <hr>
    </div>
    <div id='spriteContainer'>    
        {#each imgArr
            .filter(x=>x.path.toLowerCase().includes(search.toLowerCase()))
            .filter(x=>[1,2,3].some(y=>x.version == ('v' + y) && gen[y]))
            .sort((a,b)=>{
                if(sort == 'name'){
                    return a.path > b.path ? 1 : -1;
                } else {
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                }
            }) as src}
        <div class='spriteContainer'>
            <div>
                <div class='imageContainer'><img src={src.path} alt={src.path} /></div>
                <div>{getName(src.path)}
                    {getDate(src.date)}
                </div>
            </div>
        </div>
        {/each}   
    </div>
</div>
<style>
    #spriteContainer{
        flex-shrink: 1;
        overflow-y: auto;
    }
    .spriteContainer{
        display:inline-block;
        width:200px;       
        height: 75px;
        vertical-align: top;
    }
    .spriteContainer>div{
        display:flex;
        height:inherit;
    }
    .imageContainer{
        width:75px;
        flex-shrink: 0;
        text-align: center;
    }
    img{
        max-height: 100%;
    }
</style>
