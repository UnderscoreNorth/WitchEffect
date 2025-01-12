<script>
	import { onMount } from 'svelte';

	const CDs = [
		{
			url: 'https://e.snmc.io/i/75/w/e1c39392720fe94ddf9581c33f2847cc/10747281',
			artist: 'AC/DC',
			album: 'Back in Black',
			year: '1980'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a77bde115f16513b519471395615e311/10003314',
			artist: 'Aesop Rock',
			album: 'Labor Days',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/caf2a4ff309a171fad7a36a7a9e84f83/2782278',
			artist: 'The Antlers',
			album: 'Hospice',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a1346756f2a7a6ed2256e9b2cb2aa108/1901358',
			artist: 'Anvil',
			album: 'Metal on Metal',
			year: '1982'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7f64e406c3fab82c0f98a78d18deb9a4/3700333',
			artist: 'Anvil',
			album: 'Juggernaut of Justice',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6be00c9d0df6b1ec2f12f92b660cb8a1/6497394',
			artist: 'Aqua, Megumin, Darkness',
			album: 'おうちに帰りたい [Wanna Go Home]',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c9a51f4afc6a4b844c6168d00cf26e7e/11866170',
			artist: 'Arcade Fire',
			album: 'Funeral',
			year: '2004'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a3611809da345d6e0aaf04ec207183d5/6565344',
			artist: 'arigarnon friends',
			album: 'Boy to Man',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/58166ef1eff5fb921ac5eabc6445795e/12570104',
			artist: 'ASIAN KUNG-FU GENERATION',
			album: 'ソルファ [Sol-fa]',
			year: '2004'
		},
		{
			url: 'https://e.snmc.io/i/75/w/189b5a41de5c710298d9f41bf6446cdc/6145414',
			artist: 'Atlantis Airport',
			album: 'A [ ] Passport EP +2',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4a768e21152c4b58349b3ee6c1d0b981/6145412',
			artist: 'Atlantis Airport',
			album: 'a [360°] Cosmic Flight',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/439579a0b70bdac9cff2e730446f43f6/12178265',
			artist: 'At the Drive-In',
			album: 'Relationship of Command',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/260c9037122a3b321039a4771523ee19/6661981',
			artist: 'Angelo Badalamenti',
			album: 'Twin Peaks: Limited Event Series Soundtrack',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/37c453e34c07e42825d7c3c404edecb9/2691946',
			artist: 'Bad Brains',
			album: 'Bad Brains',
			year: '1982'
		},
		{
			url: 'https://e.snmc.io/i/75/w/69643c5b5ecead1d81069d08872f7037/7184761',
			artist: 'Bakyun the everyday',
			album: 'Dosukoi・City Survival',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e8f64d5ba6c5a6479f9a25ae0e493839/5089607',
			artist: 'The Balconies',
			album: 'Fast Motions',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4585e623372292044f7301b6a19f6d6c/12188855',
			artist: 'The Beatles',
			album: 'Abbey Road',
			year: '1969'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2e7f28e83c38781f6519f4391ebc2ee3/12447067',
			artist: 'Lou Bega',
			album: 'A Little Bit of Mambo',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f28ee21d6e44c2e867f4611c3c106aa9/1683607',
			artist: 'Bitch and Animal',
			album: "What's That Smell?",
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a29e6ed165a3b2e95a4b472bc7ef976c/11291371',
			artist: 'Black Sabbath',
			album: 'Sabbath Bloody Sabbath',
			year: '1973'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0988ba8cef2a190583780820a5fb742f/2205023',
			artist: 'The Blue Hearts',
			album: 'The Blue Hearts',
			year: '1987'
		},
		{
			url: 'https://e.snmc.io/i/75/w/221c853c64d30d06238ccc2ee498b1b2/11234052',
			artist: 'Boredoms',
			album: 'Super æ',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5a3c32548ac49078038c348bb607f19a/2529373',
			artist: 'Boredoms',
			album: 'Vision Creation Newsun',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d01ba64559e848f5b254bbda56c0b388/2276345',
			artist: 'Boris',
			album: 'Amplifier Worship',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/db8ea6e3378626349c591b83d6d29fb5/8412761',
			artist: 'Boris',
			album: 'Flood',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7577bd779084bc844f5523e85e997a43/11179357',
			artist: 'Boris',
			album: 'Heavy Rocks',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c1f8f32e94ff524c9c7b284b6ff15c06/7727830',
			artist: 'Boris',
			album: 'Boris at Last -Feedbacker-',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/460a1aa308ea44990f03c847581e0100/5127755',
			artist: 'Boris',
			album: 'Pink',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c7225974491878d8aeba9bc878ad15ed/3577154',
			artist: 'Boris',
			album: 'Heavy Rocks',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/007102a4a3267b77d96e4506c0353e11/6588409',
			artist: 'Boris',
			album: 'Noise',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6db72e0ed5aec2e256ecab9c9443befd/5988154',
			artist: 'Boris With Merzbow',
			album: '現象 [Gensho]',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2a3e80e12dc5b797a2d7020b794990a1/4396206',
			artist: 'Boston',
			album: 'Boston',
			year: '1976'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8c394010068a6eada26c7830710581af/8542182',
			artist: 'David Bowie',
			album: 'The Rise and Fall of Ziggy Stardust and the Spiders From Mars',
			year: '1972'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1bb1127c156a7c16d667876bca967202/4975052',
			artist: 'Brand New',
			album: 'Déjà entendu',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e488546646902089af11d894ef2cc575/4697678',
			artist: 'Brand New',
			album: 'The Devil and God Are Raging Inside Me',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9241fc22a04520db6f7a5cee3fe43a75/6588997',
			artist: 'Bread & Butter',
			album: 'Barbecue',
			year: '1974'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8c3d5cf82744a88f50a6eb9da0cec0af/7674947',
			artist: 'Broken Social Scene',
			album: 'You Forgot It in People',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d6bc04d7c8330bd61e1a6dcb7291e263/6521614',
			artist: 'Broken Social Scene',
			album: 'Hug of Thunder',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/20979a35c8ff58bbeda99ee33da39690/6083528',
			artist: 'Carpenter Brut',
			album: 'Trilogy',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/20c1ca71c0780555d6a918b7745da426/10975213',
			artist: 'Casiopea',
			album: 'Casiopea',
			year: '1979'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8f2de849dc3a630ea5ff97c61b2ae6ba/4151688',
			artist: 'Child Bite',
			album: 'Monomania',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/bba8e35d543a5ef5818b113a2930749f/5006762',
			artist: 'Child Bite',
			album: 'Vision Crimes [yellow/purple vinyl]',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/208fc72455c6dcc87713cd4b1c049b67/5449352',
			artist: 'Child Bite',
			album: 'Strange Waste',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/28aa15b8ac3334aa231c270854db1042/7984376',
			artist: 'The Chinese Stars',
			album: 'Turbo Mattress',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/b43ddb8bd6674daf945617d5d2853277/3611473',
			artist: 'City and Colour',
			album: 'Little Hell',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ebf574a8c8f025905c07eb6d4e449418/10679401',
			artist: 'Coaltar of the Deepers',
			album: 'Yukari Telepath',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1ee49965f9e50192d8ae7da5730014fd/12177606',
			artist: 'Coldplay',
			album: 'A Rush of Blood to the Head',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ba0d595c6425a2b91c8c6503aaa229ba/12322105',
			artist: 'Come',
			album: 'Eleven: Eleven',
			year: '1992'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ca2967c9a8c1aac9dcaed87238ecb10c/1547937',
			artist: 'Graham Coxon',
			album: 'Love Travels at Illegal Speeds',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/48ca9214502a9c116f686ec35b76c784/11121303',
			artist: 'cute',
			album: 'she',
			year: '2023'
		},

		{
			url: 'https://e.snmc.io/i/75/w/e5f45624b026112faca331eee3d9dd5d/12000587',
			artist: 'Daft Punk',
			album: 'Random Access Memories',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/54dec152dfb238c69176fc3fd4d85d9f/11315265',
			artist: 'Dälek',
			album: 'Absence',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3fe12b84605fb381cb7b859f5dee4f28/3484062',
			artist: 'The Darkness',
			album: 'Permission to Land',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/b639a55c81da8df779c7cb34fd13e6b3/4863989',
			artist: 'Deafheaven',
			album: 'Sunbather',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/b796c7f0ff69f972f53998470e4ca129/5570053',
			artist: 'Death From Above 1979',
			album: 'The Physical World',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7060575fc644909f432e56e42661b5f6/6553570',
			artist: 'Death Grips',
			album: 'The Money Store',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4883de126cef00bf000fab540899c860/5036442',
			artist: 'Death Grips',
			album: 'No Love Deep Web',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3301c95b7e8a76ef61f3d08c42a80dac/5794027',
			artist: 'Death Grips',
			album: 'The Powers That B',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/bf071af5598af51daa809b2e095e556a/7574206',
			artist: 'Death Grips',
			album: 'Bottomless Pit',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c7cedc0a1fe8bd7d5ad85b025c61e25b/1895030',
			artist: 'Deep Purple',
			album: 'Deep Purple in Rock',
			year: '1970'
		},
		{
			url: 'https://e.snmc.io/i/75/w/42d27e9c67bfaf0cddc16b3943f93e0a/8975909',
			artist: 'The Delgados',
			album: 'Hate',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fa8416fa17358955214d04050e68f949/3831157',
			artist: 'Dinosaur',
			album: "You're Living All Over Me",
			year: '1987'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e7b26e49593ae7f1fe9f54c2c6842f2d/10695107',
			artist: 'Dio',
			album: 'Holy Diver',
			year: '1983'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7436606937443950fc21e5fa7d5d67de/3506719',
			artist: 'Dio',
			album: 'Dio at Donington UK: Live 1983 & 1987',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/24c0c69acf61a1a6cf732a98d2da9b22/3852658',
			artist: 'The Dismemberment Plan',
			album: 'Emergency & I',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9d30f1eb77dc863942b3d39ff4aa7f88/6336491',
			artist: 'Ramin Djawadi',
			album: 'Westworld: Season 1',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f9ca7e952975cc59efe5244c8d303b0e/10431675',
			artist: 'Nick Drake',
			album: 'Bryter Layter',
			year: '1971'
		},
		{
			url: 'https://e.snmc.io/i/75/w/db4e32292747267e989ee2250fd566f5/3677487',
			artist: 'Bob Dylan',
			album: 'Highway 61 Revisited',
			year: '1965'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4501e003e816b1f384a7064d63897a83/1224198',
			artist: 'Earth, Wind & Fire',
			album: 'The Best of Earth Wind & Fire Vol. I',
			year: '1978'
		},
		{
			url: 'https://e.snmc.io/i/75/w/629509684162bd6b5f3051fb2740b11b/7103459',
			artist: 'eastern youth',
			album: '雲射抜ケ声 [Kumoinukekoe]',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7ae0137d46478a41e05c3365453b4487/2692410',
			artist: 'eastern youth',
			album: '感受性応答セヨ [Kanjyuseioutouseyo]',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a33260430082b0552a584dc5a5a272e5/9718218',
			artist: 'ELO',
			album: 'Time',
			year: '1981'
		},
		{
			url: 'https://e.snmc.io/i/75/w/73b2adc0491a5de2407a363ae4b1324e/12096297',
			artist: 'Eminem',
			album: 'The Eminem Show',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7a78047325d4487c0251f09807b930c1/4939926',
			artist: 'Eminem',
			album: 'The Marshall Mathers LP 2',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c9b4b4fd3894c6cd357927b33649f9ca/1725210',
			artist: 'Jeremy Enigk',
			album: 'Return of the Frog Queen',
			year: '1996'
		},

		{
			url: 'https://e.snmc.io/i/75/w/0f00dc2c7091e23daae1f1ad46a1cbea/1708491',
			artist: 'Jeremy Enigk',
			album: 'World Waits',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/46babc3b7dbbfe0ef11f8e93f9c4929b/10504082',
			artist: 'Fishmans',
			album: 'LONG SEASON',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/181ee9465b812d8ab9874c738e5f81cd/11149766',
			artist: 'Fishmans',
			album: '宇宙 日本 世田谷 [Uchu Nippon Setagaya]',
			year: '1997'
		},
		{
			url: 'https://e.snmc.io/i/75/w/dd6276145314b8be30bcce1b24967e86/12728579',
			artist: 'Fishmans',
			album: '98.12.28 男達の別れ [98.12.28 Otokotachi no wakare]',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/966c6eccda18cc516371f33f435f75d8/9777804',
			artist: 'fripSide',
			album: 'Infinite Synthesis',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2ff5aeafa96c64c6c98b52322ceffd24/3062825',
			artist: 'Rie fu',
			album: 'Rie fu',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3d91c35d3bb02fa0ffac857da3e40246/5427077',
			artist: 'Fugazi',
			album: 'First Demo',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f985e2dfb2c8aad895f1ad79c966056a/12200521',
			artist: 'Fugees',
			album: 'The Score',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/12bc76cb98a8329e3cb0495489213dc1/5641870',
			artist: 'geek sleep sheep',
			album: 'Candy',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/40fca2a0d3e340c9d02c53cedf110e1e/3230744',
			artist: 'Girls Dead Monster',
			album: 'Keep the Beats!',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/08df7aee4c2b1c095e5abdb59890983f/11681270',
			artist: 'Godspeed You Black Emperor!',
			album: 'F♯A♯∞',
			year: '1997'
		},
		{
			url: 'https://e.snmc.io/i/75/w/314a31e28c7682432df2ce29e4f9add5/5610119',
			artist: 'Godspeed You Black Emperor!',
			album: 'Slow Riot for New Zerø Kanada E.P.',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6b788a4f37e5802f858eeac0c47444a0/5662600',
			artist: 'Godspeed You Black Emperor!',
			album: 'Lift Yr. Skinny Fists Like Antennas to Heaven!',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2627ba0b2abd354cc51d964fd69153e6/4422249',
			artist: 'Godspeed You Black Emperor!',
			album: "'Allelujah! Don't Bend! Ascend!",
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a267186290d0cb235db2dc2929c0ce74/9746681',
			artist: 'Godspeed You Black Emperor!',
			album: "'Asunder, Sweet and Other Distress'",
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1836d344347257460a33b0c4e8ed7acd/8478183',
			artist: 'The Go! Team',
			album: 'Thunder, Lightning, Strike',
			year: '2004'
		},
		{
			url: 'https://e.snmc.io/i/75/w/dd3df63bfb7b7bf1650941474945db21/12196089',
			artist: 'Green Day',
			album: 'Dookie',
			year: '1994'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3b6701f4962d9a6b85553d1c93d871cb/2917412',
			artist: "Guns n' Roses",
			album: 'Appetite for Destruction',
			year: '1987'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3e9efcc81f341a7eaf450b827bb1bcb8/2019707',
			artist: 'Hardal',
			album: 'Nasıl? Ne Zaman?',
			year: '1980'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f77516a2d004011d2bbd474f97b5857d/10412343',
			artist: 'The Hatch',
			album: 'Shape of Raw to Come',
			year: '2022'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ceca5a147b16742a7f9809d6e1d87e8a/6579623',
			artist: 'The Horrors',
			album: 'V',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/981eea73e2459cac3cc0484a32daae17/10209246',
			artist: 'Iron Maiden',
			album: 'Killers',
			year: '1981'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d5f9835ed62e20a0154713f64226c574/3703272',
			artist: 'Iron Maiden',
			album: 'Powerslave',
			year: '1984'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c9f4f1f698682625a68be0db2bdbccdc/2792874',
			artist: 'Iron Maiden',
			album: 'Somewhere in Time',
			year: '1986'
		},
		{
			url: 'https://e.snmc.io/i/75/w/72b34ad839ab339ecb02249b89fd550f/11292147',
			artist: 'Iron Maiden',
			album: 'Seventh Son of a Seventh Son',
			year: '1988'
		},

		{
			url: 'https://e.snmc.io/i/75/w/ac420eb40e8ba8ce865683766ef64a9b/2108864',
			artist: 'Nana Kitade',
			album: '18 ~Eighteen~',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/711347ed51f5c7c408c243dae770080e/6338233',
			artist: 'Koutei Camera Girl Zwei',
			album: 'Night on Verse',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f7ddefe477f53ee6af4bcda7b0fff8ed/7210138',
			artist: 'Koyori',
			album: 'World on Color',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8ec8a2613a4e5cbc32a7057f8341b27e/4244641',
			artist: 'Jun Kung',
			album: 'Playback Is a Bitch',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0d477ed6cc9821af4450db655a291b14/1522478',
			artist: 'Fela Kuti',
			album: 'Opposite People / Sorrow Tears and Blood',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/03fa27492971fb7fe43baafc303a99b3/8121875',
			artist: 'Kendrick Lamar',
			album: 'To Pimp a Butterfly',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6508148e178e18ce7376590d7117bacc/5707164',
			artist: 'Led Zeppelin',
			album: 'Led Zeppelin [IV]',
			year: '1971'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7491631133b0ce29d90deae1508ab380/1250250',
			artist: 'Led Zeppelin',
			album: 'Houses of the Holy',
			year: '1973'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0f06e49cf76d5b805b49c690b604d73b/4815873',
			artist: 'Led Zeppelin',
			album: 'Physical Graffiti',
			year: '1975'
		},
		{
			url: 'https://e.snmc.io/i/75/w/43ef275ad1481a182df7185b0992f0bf/2501269',
			artist: 'Led Zeppelin',
			album: 'Presence',
			year: '1976'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4e66868be74e16ba2e36f07979d4929b/2694961',
			artist: 'Led Zeppelin',
			album: 'Mothership',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/79f50a509768083ac71fa7ca21296284/2195432',
			artist: 'The Lemonheads',
			album: 'Car Button Cloth',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/18b076cd969448a5a6955e97f14ffdd7/12299666',
			artist: 'John Lennon',
			album: 'Imagine',
			year: '1971'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4677c36ddf9088bcb08497b9e783f5b7/11235443',
			artist: 'John Lennon',
			album: 'Plastic Ono Band',
			year: 'ohn '
		},
		{
			url: 'https://e.snmc.io/i/75/w/3172ca0b0f0d9e063bee11689a5b92f1/2607814',
			artist: 'Lightning Bolt',
			album: 'Ride the Skies',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f67dd38c2601c26e046ff90d3a71aeac/5550020',
			artist: 'Lightning Bolt',
			album: 'Fantasy Empire',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8decd6ec9b1f2996a4a917c80d24d7bd/8275082',
			artist: 'The Louvin Brothers',
			album: 'Satan Is Real',
			year: '1959'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c377734aa6ce84566af6e3d250c7366a/12308708',
			artist: 'LVHF',
			album: 'En Vue',
			year: '2024'
		},
		{
			url: 'https://e.snmc.io/i/75/w/54d7f2f327372a8841a92f5adecaadee/11464343',
			artist: 'The Magnetic Fields',
			album: '69 Love Songs',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/59a3ea2388714c16ed3427dfaee47c29/3657038',
			artist: 'Jeff Mangum',
			album: "Live at Jittery Joe's",
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2a1c59f1c7d3822295995c312b013e1f/3871819',
			artist: 'Cliff Martinez',
			album: 'Drive',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/96e0020a89baf919703d4e33dc613f80/2691951',
			artist: 'Mass of the Fermenting Dregs',
			album: 'Mass of the Fermenting Dregs',
			year: '2008'
		},
		{
			url: 'https://e.snmc.io/i/75/w/10e8ed2eaf537d8d6f471254e993029a/9305700',
			artist: 'Mastodon',
			album: 'Leviathan',
			year: '2004'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5ce4b61908cccfd30dfee2e4a8a88438/5312650',
			artist: 'Mastodon',
			album: "Once More 'Round the Sun",
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7aae102bdbc382edc726554279fba561/7038353',
			artist: 'Paul McCartney',
			album: 'Egypt Station',
			year: '2018'
		},

		{
			url: 'https://e.snmc.io/i/75/w/2fdc3b10404a952a5d142545bc9786cb/11299229',
			artist: 'Megadeth',
			album: "Peace Sells... But Who's Buying?",
			year: '1986'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a7dbd5632327bec787a3877701832ea5/5748025',
			artist: 'Megadeth',
			album: 'Rust in Peace',
			year: '1990'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ae3aff2671b5f05c0d0f84b7a7deacb1/2768734',
			artist: 'Megadeth',
			album: 'Endgame',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/087b0546ce7b790fad97b57c96350235/5067514',
			artist: 'Megadeth',
			album: 'Rust in Peace Live',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ee458f3e49aaa0a882c9ec301b4ce9d4/3952121',
			artist: 'Megadeth',
			album: 'Th1rt3en',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/47fca3bcf292a98d0f4762162451d93b/10878012',
			artist: 'Melt Banana',
			album: 'MxBx 1998 / 13,000 Miles at Light Velocity',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/86c7b3fa80c3962e68e29f6ed647ad2d/10955540',
			artist: 'Melt-Banana',
			album: 'Scratch or Stitch',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8c94dee4dbc479f00ba28627466ab027/11902406',
			artist: 'Melt-Banana',
			album: 'Cell-Scape',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/cf5e429c45b82aa2634e493c2bf8dc21/9757147',
			artist: 'Melt-Banana',
			album: 'Fetch',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/bada70b7d1056ddb44148c34523f1415/10821765',
			artist: 'Metallica',
			album: 'Ride the Lightning',
			year: '1984'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4a738befba5219e269599b6b401394e1/5094206',
			artist: 'Metallica',
			album: 'Metallica',
			year: '1991'
		},
		{
			url: 'https://e.snmc.io/i/75/w/acafd96f9df6145c3ec3d6075e5e9276/7685176',
			artist: 'Metallica',
			album: 'Death Magnetic',
			year: '2008'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7f991c4129688b0000b252a4ea734827/8024579',
			artist: 'Mingus',
			album: 'The Black Saint and the Sinner Lady',
			year: '1963'
		},
		{
			url: 'https://e.snmc.io/i/75/w/09c31c6edb765b434093a30122c9126f/1501629',
			artist: 'Roscoe Mitchell & The Note Factory',
			album: 'Song for My Sister',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e39f635e1cd94950db6eda23bcf887c8/9613939',
			artist: 'Modest Mouse',
			album: 'The Moon & Antarctica',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d921c8be3ed6925c12503539c18377ff/6541386',
			artist: 'Mogwai',
			album: '4 Satin',
			year: '1997'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c5aaf1b56e9c39cdd4731af009b6d1a4/5470351',
			artist: 'Mother Mother',
			album: 'Very Good Bad Thing',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f1bd234b2f99393312bb8bdd99cfa1bb/6912350',
			artist: 'Mouse on the Keys',
			album: 'Tres',
			year: '2018'
		},
		{
			url: 'https://e.snmc.io/i/75/w/38393379b2d9e685471dc58f22f440d5/2772919',
			artist: 'Mumford & Sons',
			album: 'Sigh No More',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/95afb93bc41169f63eff0858d761b95c/6335538',
			artist: 'Muse',
			album: 'Origin of Symmetry',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/caa9ab5a23a3e8879fa236eab71bc6c4/3447704',
			artist: 'Neutral Milk Hotel',
			album: 'On Avery Island',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c528e1060eabbb2a899b2312d55073ea/12274753',
			artist: 'Neutral Milk Hotel',
			album: 'In the Aeroplane Over the Sea',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0284c02989d64f11f6a46df22ec0b18c/2403537',
			artist: 'NICO Touches the Walls',
			album: 'Who Are You?',
			year: '2008'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1263c6841e98a619e89e48c702d28e6c/12143133',
			artist: 'Nikoん [Nikon]',
			album: 'public melodies',
			year: '2024'
		},
		{
			url: 'https://e.snmc.io/i/75/w/32de312d09decf242e2e908058b1c76e/10474414',
			artist: 'The Notwist',
			album: 'Neon Golden',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fc7eef9cd50fe2045c4f0a9cf89dc7b0/11128037',
			artist: 'Nuito',
			album: 'Unutella',
			year: '2008'
		},
		{
			url: 'https://e.snmc.io/i/75/w/18c9b3768228f0e972d21c05cb82ba72/11961888',
			artist: 'Number Girl',
			album: 'Sappukei',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/02df083ee568f0da6be8126b9574cbf1/2810583',
			artist: 'Number Girl',
			album: 'Omoide in My Head 1: Best & B-Sides',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5054e4f7bcbb22ac27ece85ff6f125e0/2732286',
			artist: 'N.W.A',
			album: 'Straight Outta Compton',
			year: '1989'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ed60e0612d879e56a703962f7a91a339/7009707',
			artist: 'Ozzy Osbourne',
			album: 'Blizzard of Ozz',
			year: '1980'
		},
		{
			url: 'https://e.snmc.io/i/75/w/069a97c93db48e0d11762b9ddb5caddc/1866911',
			artist: "Otomo Yoshihide's New Jazz Quintet",
			album: 'ONJQ Live in Lisbon',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/54f19178a20b519a4f5ede955223156f/2578364',
			artist: 'Otomo Yoshihide Invisible Songs',
			album: 'Sora',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a6cea7ff59fb2ab34d24e1604660aff0/5554070',
			artist: 'Otori',
			album: 'I Wanna Be Your Noise',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/022f8d177811c7149ee85d3eb8b83b1f/12725692',
			artist: 'The Outline',
			album: "You Smash It, We'll Build Around It",
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/cba58a92a796dafb6ccaafca5232ecc7/2202235',
			artist: 'Ozma',
			album: 'Rock and Roll Part Three',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7d05cc3561f190a0cd07b9e37b3dd3c3/6533814',
			artist: 'The Pats Pats',
			album: 'The Pats Pats',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/f8448d208a327b790de62d608b6e83f5/8660574',
			artist: 'Pavement',
			album: 'Crooked Rain, Crooked Rain',
			year: '1994'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8b350e02036199d2c0bc4fac897fa269/1882058',
			artist: 'Penpals',
			album: 'Penpals',
			year: '1997'
		},
		{
			url: 'https://e.snmc.io/i/75/w/64751c7ba563f2f893a28e461dce23df/1882065',
			artist: 'Penpals',
			album: 'Americaman',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/13e5574677d1ac30da73cbd3d6e139e7/1882069',
			artist: 'Penpals',
			album: 'Right Now',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9f8ae709408b97adfe6d7b2f0af3c26d/5947391',
			artist: 'PENs+',
			album: 'RULES!',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0d21b90225508cbcbb8c6f3a057b044b/5947437',
			artist: 'PENs+',
			album: 'Soccer',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/b81aa4b6ed559c6b86fbf53a8aac6105/11673635',
			artist: 'Phantom Planet',
			album: 'The Guest',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6edd10dc255962d306d4512d1b307cb1/2692270',
			artist: 'the pillows',
			album: 'Little Busters: Float Like a Butterfly, Sting Like a Bee',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3d82e7d37dfdeb97e18fc23cace27e11/12206378',
			artist: 'Pink Floyd',
			album: 'The Dark Side of the Moon',
			year: '1973'
		},
		{
			url: 'https://e.snmc.io/i/75/w/71d3ff2d6b866f44f0a8a72a035e7eaa/4184635',
			artist: 'Pink Floyd',
			album: 'Wish You Were Here',
			year: '1975'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5bd6c62e1f8f85fdd6cdab2dd0cb0a34/4175208',
			artist: 'Pink Floyd',
			album: 'Animals',
			year: '1977'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ab47d2863cb49045223bf59db9edbc31/5590709',
			artist: 'Pink Floyd',
			album: 'The Wall',
			year: '1979'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6d81d323d66d31a1330708196378453b/2175710',
			artist: 'Pipe',
			album: '6 Days Till Bellus',
			year: '1994'
		},
		{
			url: 'https://e.snmc.io/i/75/w/19f7d9df70b1f82310f7f70365d57272/9267576',
			artist: 'Pixies',
			album: 'Doolittle',
			year: '1989'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3f1ac564438443e8f54408eaabedd4dc/10546157',
			artist: 'The Presidents of the United States of America',
			album: 'The Presidents of the United States of America',
			year: '1995'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d855f1f53bdd9d28f494caec0255c4b4/7851158',
			artist: 'Primal Scream',
			album: 'Screamadelica',
			year: '1991'
		},
		{
			url: 'https://e.snmc.io/i/75/w/62ddb27bcafe710d8686db615270bba9/2054641',
			artist: 'Puffy',
			album: 'Spike',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a9ecdc4c09455bee96da302af085192c/5009279',
			artist: 'PUP',
			album: 'PUP',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ed8e2c11f65acc6ac78146f98fcbf08c/6074184',
			artist: 'PUP',
			album: 'The Dream Is Over',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0d55045d0cd27be5b508ef9bcc09ee23/10085907',
			artist: 'PUP',
			album: 'Morbid Stuff',
			year: '2019'
		},
		{
			url: 'https://e.snmc.io/i/75/w/74dc2faa7a8a95ed1cc16897490c73aa/9645664',
			artist: 'PUP',
			album: 'The Unraveling of PUPTHEBAND',
			year: '2022'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d5e3110b119c74e1b5900ddcfccb8997/8895103',
			artist: 'Quichua Mashis',
			album: 'Tantanacui',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/587fe86ab184f30e3fc01741979d55a9/6197420',
			artist: 'The Radio Dept.',
			album: 'Running Out of Love',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e56df7895083b8f1b86d111d25328d7f/2354834',
			artist: 'Radiohead',
			album: 'Pablo Honey',
			year: '1993'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0bf115ddf628cf8df489c6393854fb3d/10134177',
			artist: 'Radiohead',
			album: 'The Bends',
			year: '1995'
		},
		{
			url: 'https://e.snmc.io/i/75/w/92dd35ce1e293a2a0cb4ec913bea4826/11993756',
			artist: 'Radiohead',
			album: 'OK Computer',
			year: '1997'
		},
		{
			url: 'https://e.snmc.io/i/75/w/84704ca8b24adf06888eb22aa82d69f0/12580450',
			artist: 'Radiohead',
			album: 'Kid A',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7321c9ebd5e6eedc00b32b5f96941aba/8879640',
			artist: 'Radiohead',
			album: 'Amnesiac',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5e736bfe33a54ee517c211f34bb64840/9934621',
			artist: 'Radiohead',
			album: 'Hail to the Thief',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0edb940ba1d3a52e85875d1315630b57/2214746',
			artist: 'Radiohead',
			album: 'In Rainbows',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/338cb25c3ebe3c717f89e102fd2ee0d4/8718671',
			artist: 'Radiohead',
			album: 'A Moon Shaped Pool',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/548d4101f68be25243ac410ce091c899/11966192',
			artist: 'Rage Against the Machine',
			album: 'Rage Against the Machine',
			year: '1992'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e44bd922e5a407f2a68b551c1e75a185/12329705',
			artist: 'Rage Against the Machine',
			album: 'Evil Empire',
			year: '1996'
		},
		{
			artist: 'Les Rallizes DéNudés',
			album: 'Double Heads: Legendary Live Yaneura Shibuya, Tokyo 1980-1981',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/28f23ad75435b79f763f9741c73c64ef/2074981',
			artist: 'Red Hot Chili Peppers',
			album: 'Californication',
			year: '1999'
		},
		{
			url: 'https://e.snmc.io/i/75/w/29f3e410f05b39c76bab42f9acba36b2/6610101',
			artist: 'Red Hot Chili Peppers',
			album: 'By the Way',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c39fc8d67a0e1a208b6747450cd43031/2025897',
			artist: 'Red Hot Chili Peppers',
			album: 'Stadium Arcadium',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2aa60af612b0fb9ef4e571f691624366/3777490',
			artist: 'Red Hot Chili Peppers',
			album: "I'm With You",
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4f5228e02321f2970854a122756e87da/5243621',
			artist: 'Marc Ribot Trio',
			album: 'Live at the Village Vanguard',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9bee863e8beee7b6ac74d13373203e89/4465139',
			artist: 'Lucy Rose',
			album: 'Like I Used To',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9b86728030ecdbca125d27e43c85e97a/11109650',
			artist: 'Rush',
			album: 'Moving Pictures',
			year: '1981'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3f43886c8694428c600a1b06815c48bc/2924257',
			artist: 'Scorpions',
			album: 'Sting in the Tail',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c500fe9f0f2feb5c5552c9dbe54895f6/2377806',
			artist: 'The Script',
			album: 'The Script',
			year: '2008'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9e94b51f07a5ff3b1ea7e6dacdbb63a8/1442885',
			artist: 'See-Saw',
			album: 'Dream Field',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/82164bc68f93ee1e039b4d7c4a4199bf/7480738',
			artist: 'Shellac',
			album: 'The End of Radio',
			year: '2019'
		},
		{
			url: 'https://e.snmc.io/i/75/w/72e2120399e0dd09342bcd8f8634fcab/2795727',
			artist: 'Sigur Rós',
			album: 'Hvarf / Heim',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1df813611977f8d975e314b5d83d8fd7/11292282',
			artist: 'Sigur Rós',
			album: 'Kveikur',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/dc610545c9d2c34a95f09d5e404d2e53/10435530',
			artist: 'Judee Sill',
			album: 'Judee Sill',
			year: '1971'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ac87380c977f5b1db939ec86b9a4e24f/1232283',
			artist: 'Judee Sill',
			album: 'Heart Food',
			year: '1973'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5e8a4671e4be718e5357cdb4107fd122/10408558',
			artist: 'Frank Sinatra',
			album: 'Nothing but the Best',
			year: '2008'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9e2ec0375efb196150dde2b76707388e/12056415',
			artist: 'The Smiths',
			album: 'The Queen Is Dead',
			year: '1986'
		},
		{
			url: 'https://e.snmc.io/i/75/w/52b57dd1c8630f3579198da1f43e4def/2890336',
			artist: 'Spiritualized®',
			album: 'Ladies and Gentlemen We Are Floating in Space',
			year: '1997'
		},
		{
			url: 'https://e.snmc.io/i/75/w/cdab66db122b75608746fd580838258c/12092505',
			artist: 'Sufjan Stevens',
			album: 'Carrie & Lowell',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/81e472418c47d1b07919c65ffaf4b4dc/10650462',
			artist: 'Sugar Babe',
			album: 'Songs',
			year: '1975'
		},
		{
			url: 'https://e.snmc.io/i/75/w/429fbf92b5cd8ff9e4d0634e81bcdaed/7861915',
			artist: 'Supercar',
			album: 'スリーアウトチェンジ [Three Out Change!!]',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7b3adcaee488fe9b18fb79825ab0a646/3580113',
			artist: 'supercell',
			album: 'Today Is a Beautiful Day',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/48e51c5cf3a6ab2959a30812f4ec389a/8436656',
			artist: 'Swans',
			album: 'Filth',
			year: '1983'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0838ed61c9fa33b900200059dd9edfe3/2000092',
			artist: 'Swans',
			album: 'White Light From the Mouth of Infinity',
			year: '1991'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fe48845b9ee4e93c2739940a2fe3ee62/5220221',
			artist: 'Swans',
			album: 'The Great Annihilator',
			year: '1995'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1ffd4746f50bfa429ff26d17688ff615/1868623',
			artist: 'Swans',
			album: 'Soundtracks for the Blind',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e166d14934d3d739fcb862e22eebab9b/1868622',
			artist: 'Swans',
			album: 'Swans Are Dead',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d7f4b9690f7ef7be733f87036db2403b/9434445',
			artist: 'Swans',
			album: 'The Seer',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/792c01815b9277fc0f6f435d6fb856a5/5247406',
			artist: 'Swans',
			album: 'To Be Kind',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a6d8f67d76be44cb9af4580f986464a4/8591703',
			artist: 'Swans',
			album: 'The Glowing Man',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/92116892288320d7549a4d6a635114cd/10818064',
			artist: 'Swans',
			album: 'The Beggar',
			year: '2023'
		},
		{
			url: 'https://e.snmc.io/i/75/w/dc93455e23ee7797a8bad971d9b793fe/2098382',
			artist: 'Nami Tamaki',
			album: 'Make Progress',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/01fba9ab10d08d853905c9b6007961cc/10884329',
			artist: 'Ian Taylor',
			album: 'RuneScape: Original Soundtrack Classics',
			year: '2018'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c1edfe1024f783345414adc142a2d93a/1670778',
			artist: 'Teengenerate',
			album: 'Get Action!',
			year: '1994'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3bf404d09659ab74b070a0611113bfa6/6278851',
			artist: 'THIS IS JAPAN',
			album: 'Distortion',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1f2a3f2dc0c54c304217ce5cc153f641/5350775',
			artist: 'TK From 凛として時雨 [TK From Ling Tosite Sigure]',
			album: 'Fantastic Magic',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/863650edea39e20052b843a527ef3710/6231383',
			artist: 'TK From 凛として時雨 [TK From Ling Tosite Sigure]',
			album: 'White Noise',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2e24e24b60bcd51eb031d200281d236e/4337835',
			artist: 'The Tragically Hip',
			album: 'Now for Plan A',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7f9d9ffd21e7db698693ec306f261bb3/12479299',
			artist: 'U2',
			album: 'Achtung Baby',
			year: '1991'
		},
		{
			url: 'https://e.snmc.io/i/75/w/704d1f566df4f7945303c9edd1da51c5/2362583',
			artist: 'UFO',
			album: 'Phenomenon',
			year: '1974'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2ebc420ec14a184e772bab957295d946/4034047',
			artist: 'Van Halen',
			album: 'A Different Kind of Truth',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d4f74241b2f44d5f3da9e608083a5380/7520508',
			artist: 'The Velvet Underground',
			album: 'White Light / White Heat',
			year: '1968'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d12f44f2463c176b8ed539da8cffb2c7/6988068',
			artist: 'The Velvet Underground',
			album: 'Nico',
			year: 'he V'
		},
		{
			url: 'https://e.snmc.io/i/75/w/af58f9e3017901a803ccde2d7d17e9e7/8276371',
			artist: 'Tom Waits',
			album: 'Bone Machine',
			year: '1992'
		},
		{
			url: 'https://e.snmc.io/i/75/w/737ee48ee4e0d2e9ff86bf96c0df46f7/6560370',
			artist: 'Roger Waters',
			album: 'Is This the Life We Really Want?',
			year: '2017'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c754e30a0aa9d22e29f288b08b43676a/8050262',
			artist: 'Weezer',
			album: 'Weezer [Blue Album]',
			year: '1994'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e24077f3b40b39e6045406abd0cc1712/12222838',
			artist: 'Weezer',
			album: 'Pinkerton',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2f27617dfec9a8ebeccfe8623e3cdae6/10850435',
			artist: 'Weezer',
			album: 'Make Believe',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c24bd9cfd8d2b032fb6ce189dd5ecb4b/10850465',
			artist: 'Weezer',
			album: 'Weezer [White Album]',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3c3f2d9a18bfa5552728038d8e59806c/6045065',
			artist: 'Kanye West',
			album: 'My Beautiful Dark Twisted Fantasy',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/00acc7ebc4a7201402761846d6d65f39/9558628',
			artist: 'Kanye West',
			album: 'Yeezus',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d96bd73e87ea455bc7420a4d37efc696/11526595',
			artist: 'The Who',
			album: 'Tommy',
			year: '1969'
		},
		{
			url: 'https://e.snmc.io/i/75/w/028643987bf54eac75101c049510ad70/10434801',
			artist: 'The Who',
			album: "Who's Next",
			year: '1971'
		},
		{
			url: 'https://e.snmc.io/i/75/w/e90a5d8a91d2b698c2ea7de6e2dd26cb/6408253',
			artist: 'Wilco',
			album: 'Yankee Hotel Foxtrot',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/68a66cb379bed2856ad0abbc193a1360/6633487',
			artist: 'Wintersleep',
			album: 'The Great Detachment',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6ab81d9f62d5120f7b6aad17f472d6a4/1950569',
			artist: 'Raymond Wong',
			album: 'Shaolin Soccer Soundtrack',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/94c7b9ae7f6d41dbc37f3df1a4aa6f35/10509124',
			artist: "World's End Girlfriend",
			album: 'Hurtbreak Wonderland',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fe3acd2a68e1badf57f79fae1f856045/12206458',
			artist: 'wowaka',
			album: 'アンハッピーリフレイン [Unhappy Refrain]',
			year: '2011'
		},
		{
			url: 'https://e.snmc.io/i/75/w/506fc8b1105819f3d021887f61de368f/10167409',
			artist: 'Tatsuro Yamashita',
			album: 'For You',
			year: '1982'
		},
		{
			url: 'https://e.snmc.io/i/75/w/3bead31fe4b221c9354cf263caccb7d3/6123039',
			artist: 'Yellow Magic Orchestra',
			album: 'Yellow Magic Orchestra',
			year: '1978'
		},
		{
			url: 'https://e.snmc.io/i/75/w/b357ae3bbb4b2a28010eb80484c76cd8/5679712',
			artist: 'Yo La Tengo',
			album: 'And Then Nothing Turned Itself Inside-Out',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/960189959f08f850c9dd89e4fa65be54/5506140',
			artist: 'Hans Zimmer',
			album: 'Interstellar',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/369a89e374ea4be939e8f16d5400a608/11939879',
			artist: 'zts',
			album: 'うみねこのなく頃に Musicbox Red [Umineko no naku koro ni Musicbox Red]',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/57561865cc44aad26c88b9d4af9ce900/5453836',
			artist: 'Kikiyama [ききやま]',
			album: 'INFINITY∞',
			year: 'ゆめのお'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fd4e554d9df82e3fd81ca908468dced7/4217231',
			artist: 'Kinoko Teikoku [きのこ帝国]',
			album: '渦になる (Uzu ni naru)',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1405122031688e94e2da31ebd9370877/4516735',
			artist: 'Kinoko Teikoku [きのこ帝国]',
			album: 'Eureka',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9c7aa6aa59df7bbb5b45110d9e20d7d6/3060504',
			artist: 'Sambomaster',
			album: 'きみのためにつよくなりたい',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/6b98fec2614c1e1cd7dc43435dacd131/5864413',
			artist: 'Spitz',
			album: '空の飛び方 [Sora no Tobikata]',
			year: '1994'
		},
		{
			url: 'https://e.snmc.io/i/75/w/9878e0ac19eeb548ff5c0d1158950042/5864391',
			artist: 'Spitz',
			album: 'ハチミツ [Hachimitsu]',
			year: '1995'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a3c30ee022a6e33b9c0919e459ab89ab/11250090',
			artist: 'Happy End',
			album: '風街ろまん [Kazemachi Roman]',
			year: '1971'
		},
		{
			url: 'https://e.snmc.io/i/75/w/76f14b1bfb5fc6c1f46be859ef34359f/8161272',
			artist: 'Fishmans',
			album: '空中キャンプ [Something in the Air]',
			year: '1996'
		},
		{
			url: 'https://e.snmc.io/i/75/w/37baf2a288e7f0839a1d7bc480d87edd/6314739',
			artist: 'Yukueshirezutsurezure [ゆくえしれずつれづれ]',
			album: 'ポスト過多ストロフィー',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/eb89b92b978ee7685a7860842670a085/4374104',
			artist: '88Kasyo Junrei [八十八ヶ所巡礼]',
			album: '○△□ (Maru sankaku shikaku)',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0182a8ed29817040fcba87d6a8592e18/1919252',
			artist: 'Ling Tosite Sigure [凛として時雨]',
			album: 'Feeling Your U.F.O.',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c031f1487d615e62e71d85cd28eeacee/2865447',
			artist: 'Ling Tosite Sigure [凛として時雨]',
			album: 'Inspiration Is Dead',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/417cde03c871b38e41b0553f52844854/3284853',
			artist: 'Ling Tosite Sigure [凛として時雨]',
			album: 'Still a Sigure Virgin?',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/26be588187bedf4235b3033fe28bec4a/5781619',
			artist: 'Ling Tosite Sigure [凛として時雨]',
			album: 'es or s',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c193aaa01d21b61fcdb5cd8fea510db5/6784803',
			artist: 'Ling Tosite Sigure [凛として時雨]',
			album: '#5',
			year: '2018'
		},
		{
			url: 'https://e.snmc.io/i/75/w/5d4ecfea072cc1bac743ee6e69810d4c/10768077',
			artist: 'Emiri Kato [加藤英美里]',
			album: 'Lucky Star Character Song Featuring Kagami Vol. 002',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0447b7584f68bb7231a1aacaf014026a/2314846',
			artist: 'Kaoru Wada [和田薫]',
			album: 'Inuyasha - OST 2)',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2f54d27d71a1cd1f486c21e18bbaba25/1620225',
			artist: 'Kaoru Wada [和田薫]',
			album: 'Inuyasha - OST 3',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/2a19c96dcfc32b4fc90d264df110b0ce/2415197',
			artist: 'Toshio Masuda [増田俊郎]',
			album: 'Mushishi OST Mushinone Zen)',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7f40d35a27f77326e66f06bc613ac483/2415200',
			artist: 'Toshio Masuda [増田俊郎]',
			album: 'Mushishi OST Mushinone Go)',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/b9071bcadee42ee1887d2aaa2cd9e588/12170340',
			artist: 'Kow Otani [大谷幸]',
			album: 'ワンダと巨像 大地の咆哮 [Wander to kyozō: Daichi no hōkō]',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/7f3fb6187074fe522fdcd49089ca88e9/5040006',
			artist: 'Uchu Conbini [宇宙コンビニ]',
			album: '染まる音を確認したら [Somaru oto wo kakunin shitara]',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ba08a21ca83a7fc2119b5c472c372cee/5326206',
			artist: 'Uchu Conbini [宇宙コンビニ]',
			album: '月の反射でみてた (Tsuki no hansha de miteta)',
			year: '2014'
		},
		{
			url: 'https://e.snmc.io/i/75/w/40f3a17dc4d75207ffb66f2257884df4/9753145',
			artist: 'Hako Yamasaki [山崎ハコ]',
			album: '綱渡り (Tsunawatari)',
			year: '1976'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ed43cbc7d43402ec0fc55feaf3fd56ec/5750222',
			artist: 'Kohmi Hirose [広瀬香美]',
			album: 'Rhapsody',
			year: '1998'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0a54b3cb186e6f046048df246cc6b082/2224606',
			artist: 'Jun Togawa [戸川純]',
			album: '玉姫様 [Tamahime sama]',
			year: '1984'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4aeb9c9d5c6e12b260e2f507518322a0/6397367',
			artist: 'Yubisaki Nohaku [指先ノハク]',
			album: '肴〜Sakana〜',
			year: '2015'
		},
		{
			url: 'https://e.snmc.io/i/75/w/bc6baed092af9150a650b476d3464442/6397379',
			artist: 'Yubisaki Nohaku [指先ノハク]',
			album: 'フルレンジ',
			year: '2016'
		},
		{
			url: 'https://e.snmc.io/i/75/w/cd8b67efbdb1e97b6504e7f8a0e356b1/3334800',
			artist: 'Hokago Tea Time [放課後ティータイム]',
			album: 'Utauyo!!Miracle',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/52b03306e6739171e09afcce0975284c/10444289',
			artist: 'Hokago Tea Time [放課後ティータイム]',
			album: '放課後ティータイムII [Ho-kago Tea Time Second]',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/537a647092e2e5a1f92b0a787e561d6e/12782452',
			artist: 'Sheena Ringo [椎名林檎]',
			album: '勝訴ストリップ [Shouso Strip]',
			year: '2000'
		},
		{
			url: 'https://e.snmc.io/i/75/w/c65a368beed138b40af8c5d701b89137/9625192',
			artist: 'Sheena Ringo [椎名林檎]',
			album: '加爾基 精液 栗ノ花 [Kalk samen kuri no hana]',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/a37134a21a41c932badbea2423ca7a5d/2217207',
			artist: 'Keishi Urata [浦田恵司]',
			album: 'Texhnolyze: The Man of Men',
			year: '2003'
		},
		{
			url: 'https://e.snmc.io/i/75/w/ba1802d6f8d98835663a549a5f0cc4e1/9334887',
			artist: 'Yasuaki Shimizu [清水靖晃]',
			album: '案山子 [Kakashi]',
			year: '1982'
		},
		{
			url: 'https://e.snmc.io/i/75/w/234ce8b5e6f899c0786de85230abcd9b/3061012',
			artist: 'Yui Makino [牧野由依]',
			album: 'もどかしい世界の上で (Modokashii Sekai no Ue de)',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fdc894ab8ae934fc66e003260f16d26b/2571174',
			artist: 'Hyakka [百蚊]',
			album: '刺したい (Sashitai)',
			year: '2006'
		},
		{
			url: 'https://e.snmc.io/i/75/w/654cfd7b7a31c577986906b37e6dd695/3466199',
			artist: 'Hyakka [百蚊]',
			album: '花園 (Hanazono)',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/fb1da44c2d5a1046f52a67856c4d62c7/11597588',
			artist: 'Akiko Yano [矢野顕子]',
			album: 'ただいま。 [Tadaima.]',
			year: '1981'
		},
		{
			url: 'https://e.snmc.io/i/75/w/0fc9f717ee00a2790ad18d4ba23de507/10299132',
			artist: 'Shinsei Kamattechan [神聖かまってちゃん]',
			album: 'つまんね [Tsumanne]',
			year: '2010'
		},
		{
			url: 'https://e.snmc.io/i/75/w/eae2c86d3e88dab69ccc81096f5b1e59/5649137',
			artist: 'Various Artists',
			album: 'とらドラ! キャラクターソングアルバム (Toradora! Character Song Album)',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8ea847b444f13c1970764f6f05fada47/11945629',
			artist: 'Ging Nang Boyz [銀杏BOYZ]',
			album: 'Door',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/07cbc623d1566afc48c59c0d96b3ce12/1864177',
			artist: 'Various Artists',
			album: 'Orange Twin Field Works Volume 1',
			year: '2001'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4268122279782da86d12fdbbbca713e2/12138234',
			artist: 'Various Artists',
			album: '8 Mile',
			year: '2002'
		},
		{
			url: 'https://e.snmc.io/i/75/w/8defca33a665a3eea856a08dde2e2905/8791559',
			artist: 'Various Artists',
			album: 'Beck: Animation Beck Soundtrack',
			year: '2005'
		},
		{
			url: 'https://e.snmc.io/i/75/w/241607d6088bcd9b3efca546fde52f62/4612269',
			artist: 'Various Artists',
			album: 'リトルバスターズ！(Little Busters!): Original Soundtrack',
			year: '2007'
		},
		{
			url: 'https://e.snmc.io/i/75/w/cb59cdc4b8437fe0864e808569efb616/4903132',
			artist: 'Various Artists',
			album: '☆24EFFECTS☆',
			year: '2009'
		},
		{
			url: 'https://e.snmc.io/i/75/w/4c2ec454da25b07489e0ad779e778bfd/10859018',
			artist: 'Various Artists',
			album: 'mikgazer vol.1',
			year: '2012'
		},
		{
			url: 'https://e.snmc.io/i/75/w/1ab689d647e3e23346627dc3968ff252/5071782',
			artist: 'Various Artists',
			album: 'Retro Future Girls',
			year: '2013'
		},
		{
			url: 'https://e.snmc.io/i/75/w/d793e62e5565939daec48b18fe79c497/6533669',
			artist: 'Various Artists',
			album: 'Saigon Supersound Vol. 1',
			year: '2017'
		}
	];
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

	function sort() {
		CDs.sort((a, b) => {
			if (a.artist == b.artist) {
				return a.year - b.year;
			} else {
				let artist = removeThe(a.artist);
				let brtist = removeThe(b.artist);
				return artist > brtist ? 1 : -1;
			}
		});

		let cIndex = 0;
		let artist = '';
		let alphabetStart = {};
		for (let cd of CDs) {
			if (artist !== cd.artist) {
				artist = cd.artist;
				cIndex += 55;
			}
			cd.cIndex = cIndex;
			cd.letter = removeThe(cd.artist).substring(0, 1);
			if (!alphabetStart[cd.letter]) {
				alphabetStart[cd.letter] = cd.letter;
				cd.id = cd.letter.toUpperCase();
			}
		}
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
	sort();
	onMount(() => {
		yup();
	});
</script>

<div class="container">
	<div id="header">
		My collection of CDs
		<hr />
	</div>
	<div id="container" on:scroll={() => yup()}>
		<div id="letterNavContainer">
			<div id="letterNav">
				{#key y}
					{#each alphabet as letter}
						<a href={'#' + letter} style:font-weight={checkWeight(letter)}>{letter}</a>
					{/each}
				{/key}
			</div>
		</div>
		<div id="cdShelf">
			{#each CDs as cd}
				{#if cd.id !== undefined}
					<div id={cd.id} />
				{/if}
				<div class="cdContainer {cd.letter}" style:background={`hsl(${cd.cIndex},60%,40%,0.3)`}>
					<img src={cd.url} alt="art" /><br />
					<div class="artist">{cd.artist}</div>
					<div class="album">{cd.album}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	#container {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		overflow-y: auto;
	}
	#letterNavContainer {
		width: 1rem;
	}
	#letterNav {
		display: flex;
		flex-direction: column;
		position: absolute;
		background: rgba(0, 0, 0, 0.9);
		padding: 2px;
	}
	#letterNav a {
		text-decoration: none;
	}
	#cdShelf {
		display: flex;
		gap: 3px;
		flex-wrap: wrap;
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
		font-size: xx-small;
	}
	.cdContainer .album {
		font-size: xx-small;
	}
</style>
