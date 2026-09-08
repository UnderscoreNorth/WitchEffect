<script>
	import { onMount } from 'svelte';
	/* Data pull query
	async function scrapeCollection(baseUrlTemplate, startPage, endPage, delayMs = 800) {
	// baseUrlTemplate should have {page} where the page number goes, e.g.:
	// 'https://rateyourmusic.com/collection/_North/oo,ss.d/{page}'

	const allCDs = [];

	const parsePage = (doc) => {
	const table = doc.querySelector('table.mbgen');
	if (!table) return [];
	const tbody = table.querySelector('tbody');
	const rows = tbody.querySelectorAll('tr');
	const CDs = [];

	rows.forEach((row) => {
		const img = row.querySelector('td.or_q_thumb_album img');
		const artistEl = row.querySelector('a.artist');
		const albumEl = row.querySelector('a.album');
		const yearEl = row.querySelector('.smallgray');

		if (!img || !artistEl || !albumEl) return;

		const srcMatch = img.src.match(/\/i\/\d+\/w\/(.+)$/);
		const url = 'https://e.snmc.io/i/75/w/' + (srcMatch ? srcMatch[1] : null);

		const yearMatch = yearEl ? yearEl.textContent.match(/\((\d{4})\)/) : null;
		const year = yearMatch ? parseInt(yearMatch[1], 10) : null;

		CDs.push({
		url,
		artist: artistEl.textContent.trim(),
		album: albumEl.textContent.trim(),
		year
		});
	});

	return CDs;
	};

	for (let page = startPage; page <= endPage; page++) {
	const url = baseUrlTemplate.replace('{page}', page);
	console.log(`Fetching page ${page}...`);

	try {
		const res = await fetch(url, { credentials: 'include' });
		if (!res.ok) {
		console.warn(`Page ${page} returned status ${res.status}, stopping.`);
		break;
		}
		const html = await res.text();
		const doc = new DOMParser().parseFromString(html, 'text/html');
		const pageCDs = parsePage(doc);

		if (pageCDs.length === 0) {
		console.log(`Page ${page} had no rows — likely past the end. Stopping.`);
		break;
		}

		allCDs.push(...pageCDs);
	} catch (err) {
		console.error(`Error fetching page ${page}:`, err);
		break;
	}

	// Be polite / avoid triggering rate limits or bot detection
	await new Promise((resolve) => setTimeout(resolve, delayMs));
	}

	console.log(`Done. Total CDs collected: ${allCDs.length}`);
	console.log(allCDs);

	return allCDs;
	}

	// Usage — replace 20 with your actual last page number:
	scrapeCollection('https://rateyourmusic.com/collection/_North/oo,ss.d/{page}', 1, 20);
	*/
	let CDs = [
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "The Bends",
        "year": 1995
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "In Rainbows",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "OK Computer",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "Kid A",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "Amnesiac",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "Hail to the Thief",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Weezer",
        "album": "Pinkerton",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Weezer",
        "album": "Weezer [Blue Album]",
        "year": 1994
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Outline",
        "album": "You Smash It, We'll Build Around It",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Powerslave",
        "year": 1984
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Somewhere in Time",
        "year": 1986
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Seventh Son of a Seventh Son",
        "year": 1988
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Fear of the Dark",
        "year": 1992
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "The X Factor",
        "year": 1995
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Dance of Death",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "A Matter of Life and Death",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "The Final Frontier",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "The Book of Souls",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Maiden Japan",
        "year": 1981
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Somewhere Back in Time: The Best Of - 1980-1989",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "From Fear to Eternity: The Best of 1990-2010",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "Pablo Honey",
        "year": 1993
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Brave New World",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Judas Priest",
        "album": "Screaming for Vengeance",
        "year": 1982
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Death Grips",
        "album": "The Money Store",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Death Grips",
        "album": "No Love Deep Web",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Death Grips",
        "album": "Bottomless Pit",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Death Grips",
        "album": "The Powers That B",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "きのこ帝国 [Kinoko Teikoku]",
        "album": "渦になる [Uzu ni naru]",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "きのこ帝国 [Kinoko Teikoku]",
        "album": "Eureka",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "宇宙コンビニ [Uchu Conbini]",
        "album": "月の反射でみてた [Tsuki no Hansha de Miteta]",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Godspeed You Black Emperor!",
        "album": "Lift Yr. Skinny Fists Like Antennas to Heaven!",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Godspeed You Black Emperor!",
        "album": "Slow Riot for New Zerø Kanada E.P.",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "City and Colour",
        "album": "Little Hell",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Neutral Milk Hotel",
        "album": "In the Aeroplane Over the Sea",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "ASIAN KUNG-FU GENERATION",
        "album": "ソルファ [Sol-fa]",
        "year": 2004
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boston",
        "album": "Boston",
        "year": 1976
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Broken Social Scene",
        "album": "You Forgot It in People",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "UFO",
        "album": "Strangers in the Night",
        "year": 1979
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pink Floyd",
        "album": "The Dark Side of the Moon",
        "year": 1973
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pink Floyd",
        "album": "Wish You Were Here",
        "year": 1975
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pink Floyd",
        "album": "Animals",
        "year": 1977
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pink Floyd",
        "album": "The Wall",
        "year": 1979
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pink Floyd",
        "album": "The Wall",
        "year": 1979
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "凛として時雨 [Ling Tosite Sigure]",
        "album": "Feeling Your U.F.O.",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Tragically Hip",
        "album": "Now for Plan A",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pixies",
        "album": "Doolittle",
        "year": 1989
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "Animation Beck Soundtrack: Beck",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Fugazi",
        "album": "First Demo",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "The Glowing Man",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "The Seer",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "Filth",
        "year": 1983
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Atlantis Airport",
        "album": "a [360°] Cosmic Flight",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Atlantis Airport",
        "album": "A [ ] Passport EP +2",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Pink",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Melt-Banana",
        "album": "Fetch",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Sigur Rós",
        "album": "Hvarf / Heim",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Sigur Rós",
        "album": "Kveikur",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "AC/DC",
        "album": "Back in Black",
        "year": 1980
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Anvil",
        "album": "Metal on Metal",
        "year": 1982
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Anvil",
        "album": "Juggernaut of Justice",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Balconies",
        "album": "Fast Motions",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Black Sabbath",
        "album": "Sabbath Bloody Sabbath",
        "year": 1973
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Bob Dylan",
        "album": "Highway 61 Revisited",
        "year": 1965
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mingus",
        "album": "The Black Saint and the Sinner Lady",
        "year": 1963
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Coldplay",
        "album": "A Rush of Blood to the Head",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Daft Punk",
        "album": "Random Access Memories",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Dälek",
        "album": "Absence",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Darkness",
        "album": "Permission to Land",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Deafheaven",
        "album": "Sunbather",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Death From Above 1979",
        "album": "The Physical World",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Deep Purple",
        "album": "Deep Purple in Rock",
        "year": 1970
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Delgados",
        "album": "Hate",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Dio",
        "album": "Dio at Donington UK: Live 1983 & 1987",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Dio",
        "album": "Holy Diver",
        "year": 1983
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Dinosaur",
        "album": "You're Living All Over Me",
        "year": 1987
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Earth, Wind & Fire",
        "album": "The Best of Earth Wind & Fire Vol. I",
        "year": 1978
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Eminem",
        "album": "The Marshall Mathers LP 2",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Eminem",
        "album": "The Eminem Show",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Fela Kuti",
        "album": "Opposite People / Sorrow Tears and Blood",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Frank Sinatra",
        "album": "Nothing but the Best",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Godspeed You Black Emperor!",
        "album": "F♯A♯∞",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "God's Pee",
        "album": "'Allelujah! Don't Bend Ascend",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Godspeed You! Black Emperor",
        "album": "'Asunder, Sweet and Other Distress'",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Green Day",
        "album": "Dookie",
        "year": 1994
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Guns n' Roses",
        "album": "Appetite for Destruction",
        "year": 1987
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Killers",
        "year": 1981
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Joy Division",
        "album": "Closer",
        "year": 1980
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Joy Division",
        "album": "Unknown Pleasures",
        "year": 1979
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Kanye West",
        "album": "My Beautiful Dark Twisted Fantasy",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Kanye West",
        "album": "Yeezus",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Kendrick Lamar",
        "album": "To Pimp a Butterfly",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Koyori",
        "album": "World on Color",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Led Zeppelin",
        "album": "Presence",
        "year": 1976
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Led Zeppelin",
        "album": "Led Zeppelin [IV]",
        "year": 1971
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Led Zeppelin",
        "album": "Houses of the Holy",
        "year": 1973
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Led Zeppelin",
        "album": "Physical Graffiti",
        "year": 1975
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Led Zeppelin",
        "album": "Mothership",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Lou Bega",
        "album": "A Little Bit of Mambo",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "凛として時雨 [Ling Tosite Sigure]",
        "album": "Still a Sigure Virgin?",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "凛として時雨 [Ling Tosite Sigure]",
        "album": "Inspiration Is Dead",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Lucy Rose",
        "album": "Like I Used To",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Magnetic Fields",
        "album": "69 Love Songs",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mastodon",
        "album": "Leviathan",
        "year": 2004
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mastodon",
        "album": "Once More 'Round the Sun",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Megadeth",
        "album": "Rust in Peace Live",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Megadeth",
        "album": "Peace Sells... But Who's Buying?",
        "year": 1986
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Megadeth",
        "album": "Rust in Peace",
        "year": 1990
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Megadeth",
        "album": "Endgame",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Megadeth",
        "album": "Th1rt3en",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Metallica",
        "album": "Ride the Lightning",
        "year": 1984
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Metallica",
        "album": "Metallica",
        "year": 1991
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Metallica",
        "album": "Death Magnetic",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mother Mother",
        "album": "Very Good Bad Thing",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mumford & Sons",
        "album": "Sigh No More",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Muse",
        "album": "Origin of Symmetry",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "N.W.A",
        "album": "Straight Outta Compton",
        "year": 1989
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "PENs+",
        "album": "Soccer",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "PENs+",
        "album": "RULES!",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Phantom Planet",
        "album": "The Guest",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Rage Against the Machine",
        "album": "Evil Empire",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Rage Against the Machine",
        "album": "Rage Against the Machine",
        "year": 1992
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Red Hot Chili Peppers",
        "album": "Stadium Arcadium",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Red Hot Chili Peppers",
        "album": "Californication",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Red Hot Chili Peppers",
        "album": "By the Way",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Red Hot Chili Peppers",
        "album": "I'm With You",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Rie fu",
        "album": "Rie fu",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Rush",
        "album": "Moving Pictures",
        "year": 1981
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "サンボマスター [Sambomaster]",
        "album": "きみのためにつよくなりたい",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Scorpions",
        "album": "Sting in the Tail",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "Retro Future Girls",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "UFO",
        "album": "Phenomenon",
        "year": 1974
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "U2",
        "album": "Achtung Baby",
        "year": 1991
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Van Halen",
        "album": "A Different Kind of Truth",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Velvet Underground",
        "album": "The Velvet Underground & Nico",
        "year": 1967
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Weezer",
        "album": "Weezer [White Album]",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Weezer",
        "album": "Make Believe",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Who",
        "album": "Tommy",
        "year": 1969
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Who",
        "album": "Who's Next",
        "year": 1971
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Wilco",
        "album": "Yankee Hotel Foxtrot",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Wintersleep",
        "album": "The Great Detachment",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Cliff Martinez",
        "album": "Drive",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "POSTMÄRCHEN",
        "album": "リトルバスターズ！ [Little Busters!]",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "増田俊郎 [Toshio Masuda]",
        "album": "「蟲師」蟲音 後 [Mushishi: Mushinone go]",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "増田俊郎 [Toshio Masuda]",
        "album": "「蟲師」蟲音 前 [Mushishi: Mushinone zen]",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "大谷幸 [Kow Otani]",
        "album": "ワンダと巨像 大地の咆哮 [Wander to kyozō: Daichi no hōkō]",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Raymond Wong",
        "album": "Shaolin Soccer Soundtrack",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "浦田恵司 [Keishi Urata]",
        "album": "Texhnolyze: The Man of Men",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "ききやま",
        "album": "～ゆめのおと～ YUMENIKKI",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Chieco Kawabe",
        "album": "Brilliance",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "geek sleep sheep",
        "album": "Candy",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "jizue",
        "album": "Story",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Judy and Mary",
        "album": "The Power Source",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Nami Tamaki",
        "album": "Make Progress",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "To Be Kind",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "Soundtracks for the Blind",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "The Great Annihilator",
        "year": 1995
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "Swans Are Dead",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "White Light From the Mouth of Infinity",
        "year": 1991
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "supercell",
        "album": "Today Is a Beautiful Day",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Supercar",
        "album": "スリーアウトチェンジ [Three Out Change!!]",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "See-Saw",
        "album": "Dream Field",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Quichua Mashis",
        "album": "Tantanacui",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "北出菜奈 [Nana Kitade]",
        "album": "18 ~Eighteen~",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mass of the Fermenting Dregs",
        "album": "Mass of the Fermenting Dregs",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "凛として時雨 [Ling Tosite Sigure]",
        "album": "Es or S",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "8 Mile",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "和田薫 [Kaoru Wada]",
        "album": "Inuyasha - OST 3",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "加藤英美里 [Emiri Kato]",
        "album": "Lucky Star Character Song Featuring Kagami Vol. 002",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "釘宮理恵 [Rie Kugimiya]",
        "album": "とらドラ! キャラクターソングアルバム [Toradora! Character Song Album]",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "浦田恵司 [Keishi Urata]",
        "album": "Texhnolyze: The Man of Men",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Otori",
        "album": "I Wanna Be Your Noise",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Ramin Djawadi",
        "album": "Westworld: Season 1",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Aesop Rock",
        "album": "Labor Days",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "arigarnon friends",
        "album": "Boy to Man",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Antlers",
        "album": "Hospice",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Blue Hearts",
        "album": "The Blue Hearts",
        "year": 1987
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Amplifier Worship",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Flood",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Heavy Rocks",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Boris at Last -Feedbacker-",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Heavy Rocks",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris",
        "album": "Noise",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Carpenter Brut",
        "album": "Trilogy",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "指先ノハク [Yubisaki Nohaku]",
        "album": "肴〜Sakana〜",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "指先ノハク [Yubisaki Nohaku]",
        "album": "フルレンジ",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "宇宙コンビニ [Uchu Conbini]",
        "album": "染まる音を確認したら [Somaru oto wo kakunin shitara]",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "TK From 凛として時雨 [TK From Ling Tosite Sigure]",
        "album": "Fantastic Magic",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "THIS IS JAPAN",
        "album": "Distortion",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Roger Waters",
        "album": "Is This the Life We Really Want?",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "NICO Touches the Walls",
        "album": "Who Are You?",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "百蚊 [Hyacca]",
        "album": "花園 [Hanazono]",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "百蚊 [Hyacca]",
        "album": "刺したい [Sashitai]",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "fripSide",
        "album": "Infinite Synthesis",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "the pillows",
        "album": "Little Busters: Float Like a Butterfly, Sting Like a Bee",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Radiohead",
        "album": "A Moon Shaped Pool",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "ゆくえしれずつれづれ [Yukueshirezutsurezure]",
        "album": "ポスト過多ストロフィー",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "シュガー・ベイブ [Sugar Babe]",
        "album": "Songs",
        "year": 1975
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Fishmans",
        "album": "Long Season",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "JYOCHO",
        "album": "祈りでは届かない距離 [A Prayer in Vain]",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "TK From 凛として時雨 [TK From Ling Tosite Sigure]",
        "album": "White Noise",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Pats Pats",
        "album": "The Pats Pats",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "雨宮天 [Sora Amamiya]",
        "album": "おうちに帰りたい [Wanna Go Home]",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "和田薫 [Kaoru Wada]",
        "album": "「犬夜叉」オリジナル・サウンドトラック～音楽篇 弐 (Inuyasha Original Soundtrack - Ongaku Hen Ni)",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Koutei Camera Girl Zwei",
        "album": "Night on Verse",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "JYOCHO",
        "album": "碧い家で僕ら暮らす [Days in the Bluish House]",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Nuito",
        "album": "Unutella",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Sufjan Stevens",
        "album": "Carrie & Lowell",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Hans Zimmer",
        "album": "Interstellar",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Fishmans",
        "album": "宇宙 日本 世田谷 [Uchu Nippon Setagaya]",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "フィッシュマンズ [Fishmans]",
        "album": "空中キャンプ [Something in the Air]",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "Mikgazer Vol.1",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Child Bite",
        "album": "Strange Waste",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Child Bite",
        "album": "Monomania",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Child Bite",
        "album": "Vision Crimes [yellow/purple vinyl]",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "☆24EFFECTS☆",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Fishmans",
        "album": "98.12.28 男達の別れ [98.12.28 Otokotachi no wakare]",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "山崎ハコ [Hako Yamasaki]",
        "album": "綱渡り [Tsunawatari]",
        "year": 1976
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "広瀬香美 [Kohmi Hirose]",
        "album": "Rhapsody",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Melt-Banana",
        "album": "Cell-Scape",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Girls Dead Monster",
        "album": "Keep the Beats!",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "ボアダムス [Boredoms]",
        "album": "ヴィジョン  クリエイション ニューサン [Vision Creation Newsun]",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "牧野由依 [Yui Makino]",
        "album": "もどかしい世界の上で (Modokashii Sekai no Ue de)",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Kikagaku Moyo",
        "album": "House in the Tall Grass",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "King Krule",
        "album": "The Ooz",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "ELO",
        "album": "Time",
        "year": 1981
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Brand New",
        "album": "The Devil and God Are Raging Inside Me",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Brand New",
        "album": "Déjà entendu",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "At the Drive-In",
        "album": "Relationship of Command",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Justice",
        "album": "† [Cross]",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "清水靖晃 [Yasuaki Shimizu]",
        "album": "案山子 [Kakashi]",
        "year": 1982
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Fugees",
        "album": "The Score",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Boris with Merzbow",
        "album": "現象 [Gensho]",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Judee Sill",
        "album": "Heart Food",
        "year": 1973
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Judee Sill",
        "album": "Judee Sill",
        "year": 1971
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Judas Priest",
        "album": "Firepower",
        "year": 2018
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Beatles",
        "album": "Abbey Road",
        "year": 1969
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "スピッツ [Spitz]",
        "album": "空の飛び方 [Sora no Tobikata]",
        "year": 1994
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "David Bowie",
        "album": "The Rise and Fall of Ziggy Stardust and The Spiders From Mars",
        "year": 1972
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Angelo Badalamenti",
        "album": "Twin Peaks: Limited Event Series Soundtrack",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Broken Social Scene",
        "album": "Hug of Thunder",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Teengenerate",
        "album": "Get Action!",
        "year": 1994
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "ボアダムス [Boredoms]",
        "album": "スーパー アー [Super æ]",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "戸川純 [Jun Togawa]",
        "album": "玉姫様 [Tamahime sama]",
        "year": 1984
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "スピッツ [Spitz]",
        "album": "ハチミツ [Hachimitsu]",
        "year": 1995
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "椎名林檎 [Sheena Ringo]",
        "album": "勝訴ストリップ [Shouso Strip]",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "椎名林檎 [Sheena Ringo]",
        "album": "加爾基 精液 栗ノ花 [Kalk Samen Chestnut Flower]",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Coaltar of the Deepers",
        "album": "Yukari Telepath",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Tatsuro Yamashita",
        "album": "For You",
        "year": 1982
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Casiopea",
        "album": "Casiopea",
        "year": 1979
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Number Girl",
        "album": "Sappukei",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Ozma",
        "album": "Rock and Roll Part Three",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "凛として時雨 [Ling Tosite Sigure]",
        "album": "#5",
        "year": 2018
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "神聖かまってちゃん [Shinsei Kamattechan]",
        "album": "つまんね [Tsumanne]",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Bakyun the everyday",
        "album": "Dosukoi・City Survival",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mouse on the Keys",
        "album": "Tres",
        "year": 2018
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Lightning Bolt",
        "album": "Fantasy Empire",
        "year": 2015
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Tom Waits",
        "album": "Bone Machine",
        "year": 1992
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "eastern youth",
        "album": "感受性応答セヨ [Kanjyuseioutouseyo]",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Melt-Banana",
        "album": "Scratch or Stitch",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Otomo Yoshihide's New Jazz Quintet",
        "album": "ONJQ Live in Lisbon",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "放課後ティータイム [Hokago Tea Time]",
        "album": "放課後ティータイムII [Ho-kago Tea Time Second]",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "放課後ティータイム [Hokago Tea Time]",
        "album": "Utauyo!!Miracle",
        "year": 2010
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Bitch and Animal",
        "album": "What's That Smell?",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "Orange Twin Field Works Volume 1",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Jeff Mangum",
        "album": "Live at Jittery Joe's",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Yellow Magic Orchestra",
        "album": "Yellow Magic Orchestra",
        "year": 1978
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Melt Banana",
        "album": "MxBx 1998 / 13,000 Miles at Light Velocity",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "矢野顕子 [Akiko Yano]",
        "album": "ただいま。 [Tadaima.]",
        "year": 1981
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "はっぴいえんど [Happy End]",
        "album": "風街ろまん [Kazemachi Roman]",
        "year": 1971
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Otomo Yoshihide Invisible Songs",
        "album": "Sora",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Jeremy Enigk",
        "album": "World Waits",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Jeremy Enigk",
        "album": "Return of the Frog Queen",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Come",
        "album": "Eleven: Eleven",
        "year": 1992
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Spiritualized®",
        "album": "Ladies and Gentlemen We Are Floating in Space",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Chinese Stars",
        "album": "Turbo Mattress",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Japanther",
        "album": "Japanther / Viking Club",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "PUP",
        "album": "Morbid Stuff",
        "year": 2019
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pipe",
        "album": "6 Days Till Bellus",
        "year": 1994
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Lightning Bolt",
        "album": "Ride the Skies",
        "year": 2001
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "PUP",
        "album": "PUP",
        "year": 2013
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "PUP",
        "album": "The Dream Is Over",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Various Artists",
        "album": "Saigon Supersound Vol. 1",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Radio Dept.",
        "album": "Running Out of Love",
        "year": 2016
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Marc Ribot Trio",
        "album": "Live at the Village Vanguard",
        "year": 2014
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Go! Team",
        "album": "Thunder, Lightning, Strike",
        "year": 2004
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Neutral Milk Hotel",
        "album": "On Avery Island",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "John Lennon",
        "album": "John Lennon / Plastic Ono Band",
        "year": 1970
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "John Lennon",
        "album": "Imagine",
        "year": 1971
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Bad Brains",
        "album": "Bad Brains",
        "year": 1982
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Bread & Butter",
        "album": "Barbecue",
        "year": 1974
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Presidents of the United States of America",
        "album": "The Presidents of the United States of America",
        "year": 1995
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Smiths",
        "album": "The Queen Is Dead",
        "year": 1986
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Script",
        "album": "The Script",
        "year": 2008
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Graham Coxon",
        "album": "Love Travels at Illegal Speeds",
        "year": 2006
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Iron Maiden",
        "album": "Senjutsu",
        "year": 2021
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Notwist",
        "album": "Neon Golden",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Ian Taylor",
        "album": "RuneScape: Original Soundtrack Classics",
        "year": 2018
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Horrors",
        "album": "V",
        "year": 2017
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Pavement",
        "album": "Crooked Rain, Crooked Rain",
        "year": 1994
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "PUP",
        "album": "The Unraveling of PUPTHEBAND",
        "year": 2022
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Louvin Brothers",
        "album": "Satan Is Real",
        "year": 1959
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Nick Drake",
        "album": "Bryter Layter",
        "year": 1971
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Yo La Tengo",
        "album": "And Then Nothing Turned Itself Inside-Out",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Shellac",
        "album": "The End of Radio",
        "year": 2019
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Hardal",
        "album": "Nasıl? Ne Zaman?",
        "year": 1978
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Hatch",
        "album": "Shape of Raw to Come",
        "year": 2022
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Mogwai",
        "album": "4 Satin",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Primal Scream",
        "album": "Screamadelica",
        "year": 1991
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Puffy",
        "album": "Spike",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Lemonheads",
        "album": "Car Button Cloth",
        "year": 1996
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Arcade Fire",
        "album": "Funeral",
        "year": 2004
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Dismemberment Plan",
        "album": "Emergency & I",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "The Velvet Underground",
        "album": "White Light / White Heat",
        "year": 1968
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Ozzy Osbourne",
        "album": "Blizzard of Ozz",
        "year": 1980
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Jun Kung",
        "album": "Playback Is a Bitch",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "銀杏BOYZ [Ging Nang Boyz]",
        "album": "Door",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "八十八ヶ所巡礼 [88Kasyo Junrei]",
        "album": "○△□ (Maru sankaku shikaku)",
        "year": 2012
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "world's end girlfriend",
        "album": "Hurtbreak Wonderland",
        "year": 2007
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "eastern youth",
        "album": "雲射抜ケ声 [Kumoinukekoe]",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Number Girl",
        "album": "Omoide in My Head 1: Best & B-Sides",
        "year": 2005
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "wowaka",
        "album": "アンハッピーリフレイン [Unhappy Refrain]",
        "year": 2011
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "zts",
        "album": "うみねこのなく頃に Musicbox Red [Umineko no naku koro ni Musicbox Red]",
        "year": 2009
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Penpals",
        "album": "Penpals",
        "year": 1997
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Penpals",
        "album": "Americaman",
        "year": 1998
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Penpals",
        "album": "Right Now",
        "year": 1999
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Swans",
        "album": "The Beggar",
        "year": 2023
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Paul McCartney",
        "album": "Egypt Station",
        "year": 2018
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Daniel Johnston",
        "album": "Continued Story / Hi, How Are You",
        "year": 1991
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "cute",
        "album": "she",
        "year": 2023
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Kill Yourself",
        "album": "Soft Touch of Man",
        "year": 2003
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "LVHF",
        "album": "En Vue",
        "year": 2024
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Nikoん [Nikon]",
        "album": "public melodies",
        "year": 2024
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Modest Mouse",
        "album": "The Moon & Antarctica",
        "year": 2000
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Roscoe Mitchell & The Note Factory",
        "album": "Song for My Sister",
        "year": 2002
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "Public Health",
        "album": "Minamata",
        "year": 2025
    },
    {
        "url": "https://e.snmc.io/i/75/w/null",
        "artist": "If Lucy Fell",
        "album": "Zebra Dance",
        "year": 2008
    }
]
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'Y',
		'Z'
	];
	const years = ['50', '60', '70', '80', '90', '00', '10', '20'];
	let sortType = 'Artist';
	function sort(sortType) {
		CDs = CDs.sort((a, b) => {
			if (sortType == 'Artist') {
				if (a.artist == b.artist) {
					return a.year - b.year;
				} else {
					let artist = removeThe(a.artist);
					let brtist = removeThe(b.artist);
					return artist > brtist ? 1 : -1;
				}
			} else {
				if (a.year == b.year) {
					if (a.artist == b.artist) {
						return a.album > b.album ? 1 : -1;
					} else {
						let artist = removeThe(a.artist);
						let brtist = removeThe(b.artist);
						return artist > brtist ? 1 : -1;
					}
				} else {
					return a.year - b.year;
				}
			}
		});
		if (sortType == 'Artist') {
			let cIndex = 0;
			let artist = '';
			let alphabetStart = {};
			for (let cd of CDs) {
				if (artist !== cd.artist) {
					artist = cd.artist;
					cIndex += 55;
				}
				cd.hue = cIndex;
				cd.light = 40;
				cd.letter = removeThe(cd.artist).substring(0, 1);
				if (!alphabetStart[cd.letter]) {
					alphabetStart[cd.letter] = cd.letter;
					cd.id = cd.letter.toUpperCase();
				}
			}
		} else {
			let decadeStart = {};
			for (let cd of CDs) {
				let decade =
					Math.floor(cd.year / 10)
						.toString()
						.substring(2) + '0';
				cd.hue = Math.floor(cd.year / 10) * 60;
				cd.light = (cd.year % 10) * 5 + 20;
				cd.letter = decade;
				if (!decadeStart[cd.letter]) {
					decadeStart[cd.letter] = cd.letter;
					cd.id = cd.letter.toUpperCase();
				}
			}
		}

		yup();
	}
	function removeThe(str) {
		str = str.toLowerCase();
		if (str.indexOf('the ') == 0) return str.substring(4);
		return str;
	}
	function isScrolledIntoView(el) {
		var rect = el.getBoundingClientRect();
		var elemTop = rect.top;
		var elemBottom = rect.bottom;
		var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
		return isVisible;
	}
	let d;
	function checkWeight(letter) {
		if (d) {
			let cds = d.getElementsByClassName(letter.toLowerCase());
			for (let cd of cds) {
				if (isScrolledIntoView(cd)) return 'bold';
			}
		}
		return '';
	}
	let y = 0;
	function yup() {
		y = Math.random();
		d = document;
	}
	onMount(() => {
		sort('Artist');
	});
</script>

<div class="container">
	<div id="header">
		My collection of CDs - Sort <input
			type="radio"
			on:change={() => sort('Artist')}
			bind:group={sortType}
			value="Artist"
		/>
		Artist
		<input type="radio" on:change={() => sort('Year')} bind:group={sortType} value="Year" />
		Year
		<hr />
	</div>
	<div id="container">
		<div id="letterNavContainer">
			<div id="letterNav">
				{#key y}
					{#if sortType == 'Artist'}
						{#each alphabet as letter}
							<a href={'#' + letter} style:font-weight={checkWeight(letter)}>{letter}</a>
						{/each}
					{:else}
						{#each years as letter}
							<a href={'#' + letter} style:font-weight={checkWeight(letter)}>{letter}s</a>
						{/each}
					{/if}
				{/key}
			</div>
		</div>
		<div id="cdShelf" on:scroll={() => yup()}>
			{#each CDs as cd}
				<div
					id={cd.id}
					class="cdContainer {cd.letter}"
					style:background={`hsl(${cd.hue},60%,${cd.light}%,0.3)`}
				>
					<img src={cd.url} alt="art" /><br />
					<div class="artist">{cd.artist} ({cd.year})</div>
					<div class="album">{cd.album}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#container {
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		overflow-y: hidden;
	}
	#letterNav {
		display: flex;
		flex-direction: row;
		gap: 3px;
		padding: 2px;
	}
	#letterNav a {
		text-decoration: none;
	}
	#cdShelf {
		display: flex;
		gap: 3px;
		flex-wrap: wrap;
		overflow-y: auto;
	}
	.cdContainer {
		border: dashed #877d49;
		padding: 5px;
		text-align: center;
		max-width: 6rem;
	}
	.cdContainer img {
		height: 6rem;
		width: 6rem;
		min-height: 6rem;
		min-width: 6rem;
	}
	.cdContainer .artist {
		font-style: italic;
		color: #f1e5a5;
	}
	.cdContainer {
		font-size: xx-small;
	}
</style>
