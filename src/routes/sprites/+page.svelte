<script>
    export let data;
    let {imgArr} = data;   
    let search = '';
    let sort = 'name';    
    let gen = [true,true,true,true];
    const getName = (url)=>{
        return url.replace(/^.+\//, '').replace(/\..+$/,'').replace(/v\d/,'').trim();
    }
    const getDate = (string)=>{
        let date = new Date(string);
        return `${date.getFullYear()}-${date.getMonth().toString().padStart(2,0)}-${date.getDay().toString().padStart(2,0)}`;
    }
    $: getSprites = () =>{
        return imgArr
            .filter(x=>getName(x.path).toLowerCase().includes(search.toLowerCase()))
            .filter(x=>[1,2,3].some(y=>x.version == ('v' + y) && gen[y]))
            .sort((a,b)=>{
                if(sort == 'name'){
                    return a.path > b.path ? 1 : -1;
                } else {
                    return new Date(b.date).getTime() - new Date(a.date).getTime()
                }
            })
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
        | Count: {getSprites().length}
        <hr>
    </div>
    <div id='spriteContainer'>    
        {#each getSprites() as src}
        <div class='spriteContainer'>
            <div>
                <div class='imageContainer'><img src={src.path} alt={src.path} /></div>
                <div>{getDate(src.date)}<br>
                    {getName(src.path)}
                    
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
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width:100%;
        max-height:100%;
    }
    .spriteContainer{
        width:200px; 
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
        max-height: 75px;
    }
    @media (max-width:400px){
        .spriteContainer{
            width:100%;
        }
    }
</style>
