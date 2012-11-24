$(document).ready(function(){
  
  // Setup the map
  var element = document.getElementById("map");
  var geocoder = new google.maps.Geocoder();

	var map = new google.maps.Map(element, {
		center: new google.maps.LatLng(55, -4.5),
		zoom: 6,
		disableDefaultUI: true,
		mapTypeControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		mapTypeId: "OSM",
		mapTypeControlOptions: {
			mapTypeIds: ["OSM", google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.SATELLITE]
		}
	});

	map.mapTypes.set("OSM", new google.maps.ImageMapType({
		getTileUrl: function(coord, zoom) {
			return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
		},
		tileSize: new google.maps.Size(256, 256),
		name: "OpenStreetMap",
		maxZoom: 18
	}));

	// Import the Fusion Table for Constituency Boundaries
	var consituencyBoundaries = new google.maps.FusionTablesLayer({
		query: {
			select: "*",
			from: "1m139hcaNfw08TQVMRn-cp4pbCf1yPUdG2cSHuWY"
		},
		styles: [{
			polygonOptions: {
				fillOpacity: -0.1,
				fillColor: "#bb0000",
				strokeWeight: 1.0,
				strokeOpacity: 0.5,
				strokeColor: "#AD1F00"
			}
		}]
	});
	consituencyBoundaries.setMap(map);

	var data = [
		{
		  "lat": 51.248366,
		  "lon": -0.7557509,
		  "name": "Aldershot"
		}, {
		  "lat": 52.61000000000001,
		  "lon": -1.93,
		  "name": "Aldridge-Brownhills"
		}, {
		  "lat": 53.39,
		  "lon": -2.35,
		  "name": "Altrincham and Sale West"
		}, {
		  "lat": 53.0151867,
		  "lon": -1.4823067,
		  "name": "Amber Valley"
		}, {
		  "lat": 51.85599999999999,
		  "lon": -0.5589999999999999,
		  "name": "Arundel and South Downs"
		}, {
		  "lat": 56.211925,
		  "lon": -3.955869,
		  "name": "Ashfield"
		}, {
		  "lat": 51.1464659,
		  "lon": 0.875019,
		  "name": "Ashford"
		}, {
		  "lat": 53.494245,
		  "lon": -2.104057,
		  "name": "Ashton-under-Lyne"
		}, {
		  "lat": 51.815606,
		  "lon": -0.8084,
		  "name": "Aylesbury"
		}, {
		  "lat": 52.0629009,
		  "lon": -1.339775,
		  "name": "Banbury"
		}, {
		  "lat": 52.427445,
		  "lon": -1.842858,
		  "name": "Birmingham, Hall Green"
		}, {
		  "lat": 52.4979579,
		  "lon": -1.81972,
		  "name": "Birmingham, Hodge Hill"
		}, {
		  "lat": 52.477664,
		  "lon": -1.925651,
		  "name": "Birmingham, Ladywood"
		}, {
		  "lat": 52.413813,
		  "lon": -1.962255,
		  "name": "Birmingham, Northfield"
		}, {
		  "lat": 52.5256929,
		  "lon": -1.903035,
		  "name": "Birmingham, Perry Barr"
		}, {
		  "lat": 52.442696,
		  "lon": -1.937655,
		  "name": "Birmingham, Selly Oak"
		}, {
		  "lat": 52.465673,
		  "lon": -1.812345,
		  "name": "Birmingham, Yardley"
		}, {
		  "lat": 54.663822,
		  "lon": -1.678788,
		  "name": "Bishop Auckland"
		}, {
		  "lat": 53.748575,
		  "lon": -2.487529,
		  "name": "Blackburn"
		}, {
		  "lat": 53.51,
		  "lon": -2.202,
		  "name": "Blackley and Broughton"
		}, {
		  "lat": 51.127889,
		  "lon": -3.003632,
		  "name": "Bridgwater and West Somerset"
		}, {
		  "lat": 53.55,
		  "lon": -0.7999999999999999,
		  "name": "Brigg and Goole"
		}, {
		  "lat": 50.82003899999999,
		  "lon": -0.122077,
		  "name": "Brighton, Kemptown"
		}, {
		  "lat": 50.8224707,
		  "lon": -0.1371626,
		  "name": "Brighton, Pavilion"
		}, {
		  "lat": 51.454513,
		  "lon": -2.58791,
		  "name": "Bristol East"
		}, {
		  "lat": 51.50286,
		  "lon": -2.61783,
		  "name": "Bristol North West"
		}, {
		  "lat": 51.42807999999999,
		  "lon": -2.58587,
		  "name": "Bristol South"
		}, {
		  "lat": 51.454513,
		  "lon": -2.58791,
		  "name": "Bristol West"
		}, {
		  "lat": 52.73911769999999,
		  "lon": 1.2409416,
		  "name": "Broadland"
		}, {
		  "lat": 51.406025,
		  "lon": 0.013156,
		  "name": "Bromley and Chislehurst"
		}, {
		  "lat": 50.7,
		  "lon": -3.9,
		  "name": "Central Devon"
		}, {
		  "lat": 52.2,
		  "lon": 1.15,
		  "name": "Central Suffolk and North Ipswich"
		}, {
		  "lat": 52.74012279999999,
		  "lon": -1.1405925,
		  "name": "Charnwood"
		}, {
		  "lat": 51.380952,
		  "lon": 0.52213,
		  "name": "Chatham and Aylesford"
		}, {
		  "lat": 53.394361,
		  "lon": -2.214115,
		  "name": "Cheadle"
		}, {
		  "lat": 51.7355868,
		  "lon": 0.4685497,
		  "name": "Chelmsford"
		}, {
		  "lat": 51.48,
		  "lon": -0.19,
		  "name": "Chelsea and Fulham"
		}, {
		  "lat": 51.897599,
		  "lon": -2.075609,
		  "name": "Cheltenham"
		}, {
		  "lat": 51.6755179,
		  "lon": -0.6072409999999999,
		  "name": "Chesham and Amersham"
		}, {
		  "lat": 53.235048,
		  "lon": -1.421629,
		  "name": "Chesterfield"
		}, {
		  "lat": 54.4305545,
		  "lon": -3.389242,
		  "name": "Copeland"
		}, {
		  "lat": 52.4905789,
		  "lon": -0.6837839,
		  "name": "Corby"
		}, {
		  "lat": 52.43,
		  "lon": -1.47,
		  "name": "Coventry North East"
		}, {
		  "lat": 52.43,
		  "lon": -1.56,
		  "name": "Coventry North West"
		}, {
		  "lat": 52.39000000000001,
		  "lon": -1.51,
		  "name": "Coventry South"
		}, {
		  "lat": 51.1091401,
		  "lon": -0.1872275,
		  "name": "Crawley"
		}, {
		  "lat": 53.10040499999999,
		  "lon": -2.4438209,
		  "name": "Crewe and Nantwich"
		}, {
		  "lat": 51.369,
		  "lon": -0.054,
		  "name": "Croydon Central"
		}, {
		  "lat": 51.376165,
		  "lon": -0.098234,
		  "name": "Croydon North"
		}, {
		  "lat": 51.376165,
		  "lon": -0.098234,
		  "name": "Croydon South"
		}, {
		  "lat": 51.2622513,
		  "lon": -0.4672517,
		  "name": "East Surrey"
		}, {
		  "lat": 50.822,
		  "lon": -0.326,
		  "name": "East Worthing and Shoreham"
		}, {
		  "lat": 53.8215889,
		  "lon": -0.7189977,
		  "name": "East Yorkshire"
		}, {
		  "lat": 50.768035,
		  "lon": 0.290472,
		  "name": "Eastbourne"
		}, {
		  "lat": 50.967182,
		  "lon": -1.374688,
		  "name": "Eastleigh"
		}, {
		  "lat": 53.2168976,
		  "lon": -2.6650518,
		  "name": "Eddisbury"
		}, {
		  "lat": 51.626766,
		  "lon": -0.05794299999999999,
		  "name": "Edmonton"
		}, {
		  "lat": 53.279812,
		  "lon": -2.897404,
		  "name": "Ellesmere Port and Neston"
		}, {
		  "lat": 53.818,
		  "lon": -1.404,
		  "name": "Elmet and Rothwell"
		}, {
		  "lat": 51.452845,
		  "lon": 0.053539,
		  "name": "Eltham"
		}, {
		  "lat": 51.40000000000001,
		  "lon": 0.3666667,
		  "name": "Gravesham"
		}, {
		  "lat": 53.56,
		  "lon": -0.08,
		  "name": "Great Grimsby"
		}, {
		  "lat": 52.598233,
		  "lon": 1.728047,
		  "name": "Great Yarmouth"
		}, {
		  "lat": 51.483,
		  "lon": 0.028,
		  "name": "Greenwich and Woolwich"
		}, {
		  "lat": 51.23622,
		  "lon": -0.570409,
		  "name": "Guildford"
		}, {
		  "lat": 51.56,
		  "lon": -0.06999999999999999,
		  "name": "Hackney North and Stoke Newington"
		}, {
		  "lat": 51.54,
		  "lon": -0.06,
		  "name": "Hackney South and Shoreditch"
		}, {
		  "lat": 52.449845,
		  "lon": -2.050526,
		  "name": "Halesowen and Rowley Regis"
		}, {
		  "lat": 53.72702,
		  "lon": -1.85754,
		  "name": "Halifax"
		}, {
		  "lat": 53.796,
		  "lon": -0.689,
		  "name": "Haltemprice and Howden"
		}, {
		  "lat": 51.8166667,
		  "lon": 0.0166667,
		  "name": "Hertford and Stortford"
		}, {
		  "lat": 51.6666667,
		  "lon": -0.2666667,
		  "name": "Hertsmere"
		}, {
		  "lat": 54.972665,
		  "lon": -2.1121439,
		  "name": "Hexham"
		}, {
		  "lat": 53.57,
		  "lon": -2.21,
		  "name": "Heywood and Middleton"
		}, {
		  "lat": 53.32412799999999,
		  "lon": -1.995317,
		  "name": "High Peak"
		}, {
		  "lat": 51.83,
		  "lon": -0.21,
		  "name": "Hitchin and Harpenden"
		}, {
		  "lat": 51.535,
		  "lon": -0.135,
		  "name": "Holborn and St Pancras"
		}, {
		  "lat": 51.562254,
		  "lon": 0.218605,
		  "name": "Hornchurch and Upminster"
		}, {
		  "lat": 51.59,
		  "lon": -0.133,
		  "name": "Hornsey and Wood Green"
		}, {
		  "lat": 51.062883,
		  "lon": -0.325858,
		  "name": "Horsham"
		}, {
		  "lat": 53.767,
		  "lon": -0.287,
		  "name": "Kingston upon Hull East"
		}, {
		  "lat": 53.7456709,
		  "lon": -0.3367413,
		  "name": "Kingston upon Hull North"
		}, {
		  "lat": 53.747,
		  "lon": -0.411,
		  "name": "Kingston upon Hull West and Hessle"
		}, {
		  "lat": 51.626435,
		  "lon": -2.368647,
		  "name": "Kingswood"
		}, {
		  "lat": 53.454594,
		  "lon": -2.852907,
		  "name": "Knowsley"
		}, {
		  "lat": 53.916661,
		  "lon": -3.035673,
		  "name": "Lancaster and Fleetwood"
		}, {
		  "lat": 53.8019495,
		  "lon": -1.5329619,
		  "name": "Leeds Central"
		}, {
		  "lat": 53.801279,
		  "lon": -1.548567,
		  "name": "Leeds East"
		}, {
		  "lat": 53.84999999999999,
		  "lon": -1.515,
		  "name": "Leeds North East"
		}, {
		  "lat": 53.84999999999999,
		  "lon": -1.6,
		  "name": "Leeds North West"
		}, {
		  "lat": 50.87387200000001,
		  "lon": 0.00878,
		  "name": "Lewes"
		}, {
		  "lat": 51.46134499999999,
		  "lon": -0.011867,
		  "name": "Lewisham East"
		}, {
		  "lat": 51.43,
		  "lon": -0.05,
		  "name": "Lewisham West and Penge"
		}, {
		  "lat": 51.47799999999999,
		  "lon": -0.0265,
		  "name": "Lewisham, Deptford"
		}, {
		  "lat": 51.57100000000001,
		  "lon": 0.013,
		  "name": "Leyton and Wanstead"
		}, {
		  "lat": 52.681602,
		  "lon": -1.831672,
		  "name": "Lichfield"
		}, {
		  "lat": 53.230688,
		  "lon": -0.5405789999999999,
		  "name": "Lincoln"
		}, {
		  "lat": 53.355,
		  "lon": -2.947,
		  "name": "Liverpool, Riverside"
		}, {
		  "lat": 53.449242,
		  "lon": -2.965193,
		  "name": "Liverpool, Walton"
		}, {
		  "lat": 53.39724700000001,
		  "lon": -2.921984,
		  "name": "Liverpool, Wavertree"
		}, {
		  "lat": 51.8786707,
		  "lon": -0.4200255,
		  "name": "Luton South"
		}, {
		  "lat": 53.258663,
		  "lon": -2.119287,
		  "name": "Macclesfield"
		}, {
		  "lat": 51.522414,
		  "lon": -0.7219,
		  "name": "Maidenhead"
		}, {
		  "lat": 51.2,
		  "lon": 0.5499999999999999,
		  "name": "Maidstone and The Weald"
		}, {
		  "lat": 53.524,
		  "lon": -2.676,
		  "name": "Makerfield"
		}, {
		  "lat": 51.73180499999999,
		  "lon": 0.6714479999999999,
		  "name": "Maldon"
		}, {
		  "lat": 53.4790054,
		  "lon": -2.2432224,
		  "name": "Manchester Central"
		}, {
		  "lat": 53.46287299999999,
		  "lon": -2.177212,
		  "name": "Manchester, Gorton"
		}, {
		  "lat": 53.43342999999999,
		  "lon": -2.234214,
		  "name": "Manchester, Withington"
		}, {
		  "lat": 53.147195,
		  "lon": -1.198674,
		  "name": "Mansfield"
		}, {
		  "lat": 50.9,
		  "lon": -1.024,
		  "name": "Meon Valley"
		}, {
		  "lat": 52.438655,
		  "lon": -1.647762,
		  "name": "Meriden"
		}, {
		  "lat": 52.027,
		  "lon": -0.383,
		  "name": "Mid Bedfordshire"
		}, {
		  "lat": 52.95,
		  "lon": -1.4,
		  "name": "Mid Derbyshire"
		}, {
		  "lat": 50.70039999999999,
		  "lon": -2.0693,
		  "name": "Mid Dorset and North Poole"
		}, {
		  "lat": 52.27137700000001,
		  "lon": 1.0721487,
		  "name": "Mid Norfolk"
		}, {
		  "lat": 51.03299999999999,
		  "lon": -0.115,
		  "name": "Mid Sussex"
		}, {
		  "lat": 52.15,
		  "lon": -2.05,
		  "name": "Mid Worcestershire"
		}, {
		  "lat": 54.574227,
		  "lon": -1.234956,
		  "name": "Middlesbrough"
		}, {
		  "lat": 54.54,
		  "lon": -1.139,
		  "name": "Middlesbrough South and East Cleveland"
		}, {
		  "lat": 52.038601,
		  "lon": -0.757072,
		  "name": "Milton Keynes North"
		}, {
		  "lat": 52.021,
		  "lon": -0.6869999999999999,
		  "name": "Milton Keynes South"
		}, {
		  "lat": 50.82,
		  "lon": -1.467,
		  "name": "New Forest East"
		}, {
		  "lat": 50.806,
		  "lon": -1.629,
		  "name": "New Forest West"
		}, {
		  "lat": 53.07497799999999,
		  "lon": -0.805016,
		  "name": "Newark"
		}, {
		  "lat": 51.401409,
		  "lon": -1.3231139,
		  "name": "Newbury"
		}, {
		  "lat": 54.9753348,
		  "lon": -1.6100477,
		  "name": "Newcastle upon Tyne Central"
		}, {
		  "lat": 54.978252,
		  "lon": -1.61778,
		  "name": "Newcastle upon Tyne East"
		}, {
		  "lat": 55.0,
		  "lon": -1.7,
		  "name": "Newcastle upon Tyne North"
		}, {
		  "lat": 53.013208,
		  "lon": -2.2273002,
		  "name": "Newcastle-under-Lyme"
		}, {
		  "lat": 50.52890499999999,
		  "lon": -3.608359999999999,
		  "name": "Newton Abbot"
		}, {
		  "lat": 53.72346599999999,
		  "lon": -1.345968,
		  "name": "Normanton, Pontefract and Castleford"
		}, {
		  "lat": 52.433,
		  "lon": 0.3750000000000001,
		  "name": "North East Cambridgeshire"
		}, {
		  "lat": 53.122322,
		  "lon": -1.5136821,
		  "name": "North East Derbyshire"
		}, {
		  "lat": 51.2,
		  "lon": -0.9099999999999998,
		  "name": "North East Hampshire"
		}, {
		  "lat": 51.9166667,
		  "lon": -0.0333333,
		  "name": "North East Hertfordshire"
		}, {
		  "lat": 51.0587013,
		  "lon": -2.9499066,
		  "name": "North East Somerset"
		}, {
		  "lat": 52.2,
		  "lon": -2.7,
		  "name": "North Herefordshire"
		}, {
		  "lat": 52.6139686,
		  "lon": 0.8864021,
		  "name": "North Norfolk"
		}, {
		  "lat": 52.5864845,
		  "lon": -2.7037501,
		  "name": "North Shropshire"
		}, {
		  "lat": 51.4409659,
		  "lon": -2.7426528,
		  "name": "North Somerset"
		}, {
		  "lat": 51.559,
		  "lon": -1.782,
		  "name": "North Swindon"
		}, {
		  "lat": 51.37500000000001,
		  "lon": 1.2666667,
		  "name": "North Thanet"
		}, {
		  "lat": 55.008,
		  "lon": -1.546,
		  "name": "North Tyneside"
		}, {
		  "lat": 52.2671353,
		  "lon": -1.4675216,
		  "name": "North Warwickshire"
		}, {
		  "lat": 52.453,
		  "lon": 0.2,
		  "name": "North West Cambridgeshire"
		}, {
		  "lat": 54.77525,
		  "lon": -1.584852,
		  "name": "North West Durham"
		}, {
		  "lat": 51.0895203,
		  "lon": -1.216844,
		  "name": "North West Hampshire"
		}, {
		  "lat": 52.74012279999999,
		  "lon": -1.1405925,
		  "name": "North West Leicestershire"
		}, {
		  "lat": 52.6139686,
		  "lon": 0.8864021,
		  "name": "North West Norfolk"
		}, {
		  "lat": 51.2462714,
		  "lon": -1.9922127,
		  "name": "North Wiltshire"
		}, {
		  "lat": 52.25,
		  "lon": -0.8999999999999999,
		  "name": "Northampton North"
		}, {
		  "lat": 52.22,
		  "lon": -0.89,
		  "name": "Northampton South"
		}, {
		  "lat": 52.65,
		  "lon": 1.3,
		  "name": "Norwich North"
		}, {
		  "lat": 52.62,
		  "lon": 1.27,
		  "name": "Norwich South"
		}, {
		  "lat": 52.96,
		  "lon": -1.13,
		  "name": "Nottingham East"
		}, {
		  "lat": 52.95478319999999,
		  "lon": -1.158085,
		  "name": "Nottingham North"
		}, {
		  "lat": 52.95478319999999,
		  "lon": -1.158085,
		  "name": "Nottingham South"
		}, {
		  "lat": 52.520489,
		  "lon": -1.465382,
		  "name": "Nuneaton"
		}, {
		  "lat": 51.439,
		  "lon": 0.12,
		  "name": "Old Bexley and Sidcup"
		}, {
		  "lat": 53.59999999999999,
		  "lon": -2.1,
		  "name": "Oldham East and Saddleworth"
		}, {
		  "lat": 53.59999999999999,
		  "lon": -2.1,
		  "name": "Oldham West and Royton"
		}, {
		  "lat": 51.374843,
		  "lon": 0.09421399999999999,
		  "name": "Orpington"
		}, {
		  "lat": 51.75,
		  "lon": -1.2,
		  "name": "Oxford East"
		}, {
		  "lat": 50.71505,
		  "lon": -1.987248,
		  "name": "Poole"
		}, {
		  "lat": 51.5,
		  "lon": -0.02,
		  "name": "Poplar and Limehouse"
		}, {
		  "lat": 50.8166667,
		  "lon": -1.0833333,
		  "name": "Portsmouth North"
		}, {
		  "lat": 50.787,
		  "lon": -1.079,
		  "name": "Portsmouth South"
		}, {
		  "lat": 53.763201,
		  "lon": -2.70309,
		  "name": "Preston"
		}, {
		  "lat": 53.795467,
		  "lon": -1.662737,
		  "name": "Pudsey"
		}, {
		  "lat": 51.462355,
		  "lon": -0.219872,
		  "name": "Putney"
		}, {
		  "lat": 51.59999999999999,
		  "lon": 0.7,
		  "name": "Rayleigh and Wickford"
		}, {
		  "lat": 51.46,
		  "lon": -0.95,
		  "name": "Reading East"
		}, {
		  "lat": 51.46,
		  "lon": -0.99,
		  "name": "Reading West"
		}, {
		  "lat": 53.708,
		  "lon": -2.24,
		  "name": "Rossendale and Darwen"
		}, {
		  "lat": 53.43000000000001,
		  "lon": -1.357,
		  "name": "Rother Valley"
		}, {
		  "lat": 53.4326035,
		  "lon": -1.3635009,
		  "name": "Rotherham"
		}, {
		  "lat": 52.370878,
		  "lon": -1.265032,
		  "name": "Rugby"
		}, {
		  "lat": 51.595172,
		  "lon": -0.378002,
		  "name": "Ruislip, Northwood and Pinner"
		}, {
		  "lat": 51.3716269,
		  "lon": -0.457904,
		  "name": "Runnymede and Weybridge"
		}, {
		  "lat": 52.9154983,
		  "lon": -1.1260948,
		  "name": "Rushcliffe"
		}, {
		  "lat": 52.7,
		  "lon": -0.7999999999999999,
		  "name": "Rutland and Melton"
		}, {
		  "lat": 52.022593,
		  "lon": 0.239215,
		  "name": "Saffron Walden"
		}, {
		  "lat": 53.51,
		  "lon": -2.34,
		  "name": "Salford and Eccles"
		}, {
		  "lat": 51.068785,
		  "lon": -1.794472,
		  "name": "Salisbury"
		}, {
		  "lat": 54.486335,
		  "lon": -0.613347,
		  "name": "Scarborough and Whitby"
		}, {
		  "lat": 53.588646,
		  "lon": -0.654413,
		  "name": "Scunthorpe"
		}, {
		  "lat": 54.653152,
		  "lon": -1.45019,
		  "name": "Sedgefield"
		}, {
		  "lat": 53.523,
		  "lon": -2.985,
		  "name": "Sefton Central"
		}, {
		  "lat": 53.777,
		  "lon": -1.079,
		  "name": "Selby and Ainsty"
		}, {
		  "lat": 51.27241000000001,
		  "lon": 0.190898,
		  "name": "Sevenoaks"
		}, {
		  "lat": 52.9802279,
		  "lon": -1.1469529,
		  "name": "Sherwood"
		}, {
		  "lat": 53.835927,
		  "lon": -1.776978,
		  "name": "Shipley"
		}, {
		  "lat": 52.681177,
		  "lon": -2.678274,
		  "name": "Shrewsbury and Atcham"
		}, {
		  "lat": 51.34999999999999,
		  "lon": 0.7833333,
		  "name": "Sittingbourne and Sheppey"
		}, {
		  "lat": 54.162,
		  "lon": -1.833,
		  "name": "Skipton and Ripon"
		}, {
		  "lat": 53.05,
		  "lon": -0.5,
		  "name": "Sleaford and North Hykeham"
		}, {
		  "lat": 51.51053839999999,
		  "lon": -0.5950405999999999,
		  "name": "Slough"
		}, {
		  "lat": 52.411811,
		  "lon": -1.77761,
		  "name": "Solihull"
		}, {
		  "lat": 51.2413379,
		  "lon": -2.3007367,
		  "name": "Somerton and Frome"
		}, {
		  "lat": 51.5355,
		  "lon": 0.48,
		  "name": "South Basildon and East Thurrock"
		}, {
		  "lat": 52.2761928,
		  "lon": 0.0965375,
		  "name": "South Cambridgeshire"
		}, {
		  "lat": 53.122322,
		  "lon": -1.5136821,
		  "name": "South Derbyshire"
		}, {
		  "lat": 50.5666,
		  "lon": -2.4541,
		  "name": "South Dorset"
		}, {
		  "lat": 52.131,
		  "lon": 0.31,
		  "name": "South East Cambridgeshire"
		}, {
		  "lat": 50.5036299,
		  "lon": -4.6524982,
		  "name": "South East Cornwall"
		}, {
		  "lat": 52.75,
		  "lon": -0.09999999999999999,
		  "name": "South Holland and The Deepings"
		}, {
		  "lat": 52.74012279999999,
		  "lon": -1.1405925,
		  "name": "South Leicestershire"
		}, {
		  "lat": 52.6139686,
		  "lon": 0.8864021,
		  "name": "South Norfolk"
		}, {
		  "lat": 52.1872472,
		  "lon": 0.9707800999999999,
		  "name": "South Suffolk"
		}, {
		  "lat": 51.559,
		  "lon": -1.782,
		  "name": "South Swindon"
		}, {
		  "lat": 51.3,
		  "lon": 1.3666667,
		  "name": "South Thanet"
		}, {
		  "lat": 51.958,
		  "lon": -0.491,
		  "name": "South West Bedfordshire"
		}, {
		  "lat": 50.395,
		  "lon": -3.992,
		  "name": "South West Devon"
		}, {
		  "lat": 51.7333333,
		  "lon": -0.5333333,
		  "name": "South West Hertfordshire"
		}, {
		  "lat": 52.50000000000001,
		  "lon": 0.6,
		  "name": "South West Norfolk"
		}, {
		  "lat": 51.15,
		  "lon": -0.7,
		  "name": "South West Surrey"
		}, {
		  "lat": 51.26,
		  "lon": -2.186,
		  "name": "South West Wiltshire"
		}, {
		  "lat": 50.9011799,
		  "lon": -1.370049,
		  "name": "Southampton, Itchen"
		}, {
		  "lat": 53.448,
		  "lon": -2.731,
		  "name": "St Helens South and Whiston"
		}, {
		  "lat": 50.2152089,
		  "lon": -5.4777498,
		  "name": "St Ives"
		}, {
		  "lat": 52.806693,
		  "lon": -2.12066,
		  "name": "Stafford"
		}, {
		  "lat": 53.0666667,
		  "lon": -1.9833333,
		  "name": "Staffordshire Moorlands"
		}, {
		  "lat": 53.46,
		  "lon": -2.06,
		  "name": "Stalybridge and Hyde"
		}, {
		  "lat": 51.903761,
		  "lon": -0.196612,
		  "name": "Stevenage"
		}, {
		  "lat": 53.406754,
		  "lon": -2.158843,
		  "name": "Stockport"
		}, {
		  "lat": 54.59699999999999,
		  "lon": -1.312,
		  "name": "Stockton North"
		}, {
		  "lat": 54.523,
		  "lon": -1.322,
		  "name": "Stockton South"
		}, {
		  "lat": 53.0166667,
		  "lon": -2.1833333,
		  "name": "Stoke-on-Trent Central"
		}, {
		  "lat": 51.992265,
		  "lon": -2.15796,
		  "name": "Tewkesbury"
		}, {
		  "lat": 51.6833333,
		  "lon": -2.1666667,
		  "name": "The Cotswolds"
		}, {
		  "lat": 52.66927769999999,
		  "lon": -2.5514444,
		  "name": "The Wrekin"
		}, {
		  "lat": 54.1686071,
		  "lon": -1.1829541,
		  "name": "Thirsk and Malton"
		}, {
		  "lat": 51.573,
		  "lon": -2.477,
		  "name": "Thornbury and Yate"
		}, {
		  "lat": 51.4934557,
		  "lon": 0.3529197,
		  "name": "Thurrock"
		}, {
		  "lat": 50.827,
		  "lon": -3.349,
		  "name": "Tiverton and Honiton"
		}, {
		  "lat": 51.195043,
		  "lon": 0.27568,
		  "name": "Tonbridge and Malling"
		}, {
		  "lat": 51.42984999999999,
		  "lon": -0.161972,
		  "name": "Tooting"
		}, {
		  "lat": 50.4619209,
		  "lon": -3.525315,
		  "name": "Torbay"
		}, {
		  "lat": 51.5347,
		  "lon": 0.00769,
		  "name": "West Ham"
		}, {
		  "lat": 53.9690089,
		  "lon": -2.6276908,
		  "name": "West Lancashire"
		}, {
		  "lat": 52.1872472,
		  "lon": 0.9707800999999999,
		  "name": "West Suffolk"
		}, {
		  "lat": 52.15,
		  "lon": -2.3,
		  "name": "West Worcestershire"
		}, {
		  "lat": 51.525,
		  "lon": -0.18,
		  "name": "Westminster North"
		}, {
		  "lat": 54.312,
		  "lon": -2.88,
		  "name": "Westmorland and Lonsdale"
		}, {
		  "lat": 51.34740499999999,
		  "lon": -2.977255,
		  "name": "Weston-Super-Mare"
		}, {
		  "lat": 53.54544,
		  "lon": -2.637474,
		  "name": "Wigan"
		}, {
		  "lat": 51.42230499999999,
		  "lon": -0.210393,
		  "name": "Wimbledon"
		}, {
		  "lat": 51.059771,
		  "lon": -1.310142,
		  "name": "Winchester"
		}, {
		  "lat": 54.54199999999999,
		  "lon": -7.308999999999999,
		  "name": "Fermanagh and South Tyrone"
		}, {
		  "lat": 55.0098519,
		  "lon": -7.3012143,
		  "name": "Foyle"
		}, {
		  "lat": 54.50600000000001,
		  "lon": -6.044,
		  "name": "Lagan Valley"
		}, {
		  "lat": 54.7355556,
		  "lon": -6.7155556,
		  "name": "Mid Ulster"
		}, {
		  "lat": 54.1453111,
		  "lon": -6.1663833,
		  "name": "Newry and Armagh"
		}, {
		  "lat": 54.71362999999999,
		  "lon": -6.21428,
		  "name": "North Antrim"
		}, {
		  "lat": 54.6397427,
		  "lon": -5.7105256,
		  "name": "North Down"
		}, {
		  "lat": 54.71362999999999,
		  "lon": -6.21428,
		  "name": "South Antrim"
		}, {
		  "lat": 54.3412911,
		  "lon": -5.7484854,
		  "name": "South Down"
		}, {
		  "lat": 54.36979,
		  "lon": -5.555689999999999,
		  "name": "Strangford"
		}, {
		  "lat": 55.9493383,
		  "lon": -2.7704464,
		  "name": "East Lothian"
		}, {
		  "lat": 55.74765,
		  "lon": -4.351420399999999,
		  "name": "East Renfrewshire"
		}, {
		  "lat": 55.953252,
		  "lon": -3.188267,
		  "name": "Edinburgh East"
		}, {
		  "lat": 55.9691667,
		  "lon": -3.1997222,
		  "name": "Edinburgh North and Leith"
		}, {
		  "lat": 55.953252,
		  "lon": -3.188267,
		  "name": "Edinburgh South"
		}, {
		  "lat": 55.8833333,
		  "lon": -3.3088889,
		  "name": "Edinburgh South West"
		}, {
		  "lat": 55.953252,
		  "lon": -3.188267,
		  "name": "Edinburgh West"
		}, {
		  "lat": 58.2436089,
		  "lon": -6.667201899999999,
		  "name": "Na h-Eileanan An Iar"
		}, {
		  "lat": 56.0010918,
		  "lon": -3.783522399999999,
		  "name": "Falkirk"
		}, {
		  "lat": 55.8599073,
		  "lon": -4.2476654,
		  "name": "Glasgow Central"
		}, {
		  "lat": 55.9118089,
		  "lon": -4.7359063,
		  "name": "Inverclyde"
		}, {
		  "lat": 57.477773,
		  "lon": -4.224721,
		  "name": "Inverness, Nairn, Badenoch and Strathspey"
		}, {
		  "lat": 55.5936111,
		  "lon": -4.2963889,
		  "name": "Kilmarnock and Loudoun"
		}, {
		  "lat": 56.114407,
		  "lon": -3.341848,
		  "name": "Kirkcaldy and Cowdenbeath"
		}, {
		  "lat": 55.524,
		  "lon": -3.704,
		  "name": "Lanark and Hamilton East"
		}, {
		  "lat": 55.99299999999999,
		  "lon": -3.663,
		  "name": "Linlithgow and East Falkirk"
		}, {
		  "lat": 55.90070799999999,
		  "lon": -3.518068,
		  "name": "Livingston"
		}, {
		  "lat": 55.8292247,
		  "lon": -3.1338428,
		  "name": "Midlothian"
		}, {
		  "lat": 57.511548,
		  "lon": -3.2483773,
		  "name": "Moray"
		}, {
		  "lat": 55.792547,
		  "lon": -3.99894,
		  "name": "Motherwell and Wishaw"
		}, {
		  "lat": 55.637,
		  "lon": -4.915,
		  "name": "North Ayrshire and Arran"
		}, {
		  "lat": 56.2082078,
		  "lon": -3.1495175,
		  "name": "North East Fife"
		}, {
		  "lat": 56.281,
		  "lon": -3.545,
		  "name": "Ochil and South Perthshire"
		}, {
		  "lat": 60.27070329999999,
		  "lon": -1.6196913,
		  "name": "Orkney and Shetland"
		}, {
		  "lat": 55.847258,
		  "lon": -4.440113999999999,
		  "name": "Paisley and Renfrewshire North"
		}, {
		  "lat": 55.847258,
		  "lon": -4.440113999999999,
		  "name": "Paisley and Renfrewshire South"
		}, {
		  "lat": 56.395,
		  "lon": -3.435,
		  "name": "Perth and North Perthshire"
		}, {
		  "lat": 55.807,
		  "lon": -4.175,
		  "name": "Rutherglen and Hamilton West"
		}, {
		  "lat": 56.116984,
		  "lon": -3.942227,
		  "name": "Stirling"
		}, {
		  "lat": 57.1028621,
		  "lon": -2.6238981,
		  "name": "West Aberdeenshire and Kincardine"
		}, {
		  "lat": 55.9650641,
		  "lon": -4.5063596,
		  "name": "West Dunbartonshire"
		}, {
		  "lat": 52.895471,
		  "lon": -4.087451,
		  "name": "Ynys M?n"
		}, {
		  "lat": 53.01240929999999,
		  "lon": -3.0412927,
		  "name": "Delyn"
		}, {
		  "lat": 53.208,
		  "lon": -3.117,
		  "name": "Alyn and Deeside"
		}, {
		  "lat": 53.04304,
		  "lon": -2.992494,
		  "name": "Wrexham"
		}, {
		  "lat": 51.680886,
		  "lon": -4.160248,
		  "name": "Llanelli"
		}, {
		  "lat": 51.572185,
		  "lon": -4.098154,
		  "name": "Gower"
		}, {
		  "lat": 51.6183333,
		  "lon": -3.9863889,
		  "name": "Swansea West"
		}, {
		  "lat": 51.6502778,
		  "lon": -3.9194444,
		  "name": "Swansea East"
		}, {
		  "lat": 51.594746,
		  "lon": -3.789063,
		  "name": "Aberavon"
		}, {
		  "lat": 51.504,
		  "lon": -3.15,
		  "name": "Cardiff Central"
		}, {
		  "lat": 51.517,
		  "lon": -3.203,
		  "name": "Cardiff North"
		}, {
		  "lat": 51.65954499999999,
		  "lon": -3.505572,
		  "name": "Rhondda"
		}, {
		  "lat": 51.6652667,
		  "lon": -3.0397539,
		  "name": "Torfaen"
		}, {
		  "lat": 51.816132,
		  "lon": -2.714501,
		  "name": "Monmouth"
		}, {
		  "lat": 51.584151,
		  "lon": -2.997664,
		  "name": "Newport East"
		}, {
		  "lat": 51.584151,
		  "lon": -2.997664,
		  "name": "Newport West"
		}, {
		  "lat": 53.083,
		  "lon": -4.042,
		  "name": "Arfon"
		}, {
		  "lat": 53.302,
		  "lon": -3.804999999999999,
		  "name": "Aberconwy"
		}, {
		  "lat": 53.1430556,
		  "lon": -3.4605556,
		  "name": "Clwyd West"
		}, {
		  "lat": 53.2166667,
		  "lon": -3.4,
		  "name": "Vale of Clwyd"
		}, {
		  "lat": 52.849,
		  "lon": -3.983,
		  "name": "Dwyfor Meirionnydd"
		}, {
		  "lat": 52.9402778,
		  "lon": -3.1141667,
		  "name": "Clwyd South"
		}, {
		  "lat": 52.6305556,
		  "lon": -3.4436111,
		  "name": "Montgomeryshire"
		}, {
		  "lat": 52.3815988,
		  "lon": -3.9224817,
		  "name": "Ceredigion"
		}, {
		  "lat": 51.941,
		  "lon": -4.960999999999999,
		  "name": "Preseli Pembrokeshire"
		}, {
		  "lat": 51.90010239999999,
		  "lon": -4.3187691,
		  "name": "Carmarthen West and Pembrokeshire South"
		}, {
		  "lat": 51.9333333,
		  "lon": -4.1,
		  "name": "Carmarthen East and Dinefwr"
		}, {
		  "lat": 52.094,
		  "lon": -3.382,
		  "name": "Brecon and Radnorshire"
		}, {
		  "lat": 51.656991,
		  "lon": -3.805476,
		  "name": "Neath"
		}, {
		  "lat": 51.657,
		  "lon": -3.461,
		  "name": "Cynon Valley"
		}, {
		  "lat": 51.759452,
		  "lon": -3.2853629,
		  "name": "Merthyr Tydfil and Rhymney"
		}, {
		  "lat": 51.7875779,
		  "lon": -3.2043931,
		  "name": "Blaenau Gwent"
		}, {
		  "lat": 51.504286,
		  "lon": -3.576945,
		  "name": "Bridgend"
		}, {
		  "lat": 51.47939599999999,
		  "lon": -3.608934,
		  "name": "Ogmore"
		}, {
		  "lat": 53.55263,
		  "lon": -1.479726,
		  "name": "Barnsley East"
		}, {
		  "lat": 54.108967,
		  "lon": -3.218894,
		  "name": "Barrow and Furness"
		}, {
		  "lat": 51.57608399999999,
		  "lon": 0.488736,
		  "name": "Basildon and Billericay"
		}, {
		  "lat": 51.26255099999999,
		  "lon": -1.093609,
		  "name": "Basingstoke"
		}, {
		  "lat": 53.4,
		  "lon": -0.95,
		  "name": "Bassetlaw"
		}, {
		  "lat": 51.375801,
		  "lon": -2.3599039,
		  "name": "Bath"
		}, {
		  "lat": 53.717,
		  "lon": -1.635,
		  "name": "Batley and Spen"
		}, {
		  "lat": 51.46966500000001,
		  "lon": -0.165295,
		  "name": "Battersea"
		}, {
		  "lat": 51.602396,
		  "lon": -0.6442409,
		  "name": "Beaconsfield"
		}, {
		  "lat": 51.40817,
		  "lon": -0.025813,
		  "name": "Beckenham"
		}, {
		  "lat": 53.8,
		  "lon": -1.79,
		  "name": "Bradford West"
		}, {
		  "lat": 51.880087,
		  "lon": 0.5509269,
		  "name": "Braintree"
		}, {
		  "lat": 51.55,
		  "lon": -0.25,
		  "name": "Brent Central"
		}, {
		  "lat": 51.57,
		  "lon": -0.29,
		  "name": "Brent North"
		}, {
		  "lat": 51.467121,
		  "lon": -0.329003,
		  "name": "Brentford and Isleworth"
		}, {
		  "lat": 51.68,
		  "lon": 0.23,
		  "name": "Brentwood and Ongar"
		}, {
		  "lat": 52.335589,
		  "lon": -2.061906,
		  "name": "Bromsgrove"
		}, {
		  "lat": 51.74347299999999,
		  "lon": -0.021151,
		  "name": "Broxbourne"
		}, {
		  "lat": 52.974507,
		  "lon": -1.217772,
		  "name": "Broxtowe"
		}, {
		  "lat": 51.999326,
		  "lon": -0.987645,
		  "name": "Buckingham"
		}, {
		  "lat": 50.83761000000001,
		  "lon": -0.774936,
		  "name": "Chichester"
		}, {
		  "lat": 51.617,
		  "lon": 0.003,
		  "name": "Chingford and Woodford Green"
		}, {
		  "lat": 51.458058,
		  "lon": -2.1160739,
		  "name": "Chippenham"
		}, {
		  "lat": 51.6200285,
		  "lon": -0.2124033,
		  "name": "Chipping Barnet"
		}, {
		  "lat": 53.653511,
		  "lon": -2.632596,
		  "name": "Chorley"
		}, {
		  "lat": 50.735777,
		  "lon": -1.778586,
		  "name": "Christchurch"
		}, {
		  "lat": 51.51000000000001,
		  "lon": -0.13,
		  "name": "Cities of London and Westminster"
		}, {
		  "lat": 53.193392,
		  "lon": -2.893075,
		  "name": "City of Chester"
		}, {
		  "lat": 54.77525,
		  "lon": -1.584852,
		  "name": "City of Durham"
		}, {
		  "lat": 51.789534,
		  "lon": 1.153035,
		  "name": "Clacton"
		}, {
		  "lat": 51.5323,
		  "lon": 0.0554,
		  "name": "East Ham"
		}, {
		  "lat": 51.0895203,
		  "lon": -1.216844,
		  "name": "East Hampshire"
		}, {
		  "lat": 51.66699999999999,
		  "lon": -0.075,
		  "name": "Enfield North"
		}, {
		  "lat": 51.63227999999999,
		  "lon": -0.126463,
		  "name": "Enfield, Southgate"
		}, {
		  "lat": 51.7043936,
		  "lon": 0.1656224,
		  "name": "Epping Forest"
		}, {
		  "lat": 51.3362231,
		  "lon": -0.2688232,
		  "name": "Epsom and Ewell"
		}, {
		  "lat": 52.9,
		  "lon": -1.32,
		  "name": "Erewash"
		}, {
		  "lat": 51.494,
		  "lon": 0.132,
		  "name": "Erith and Thamesmead"
		}, {
		  "lat": 51.369487,
		  "lon": -0.365927,
		  "name": "Esher and Walton"
		}, {
		  "lat": 50.718412,
		  "lon": -3.533899,
		  "name": "Exeter"
		}, {
		  "lat": 54.691745,
		  "lon": -1.212926,
		  "name": "Hartlepool"
		}, {
		  "lat": 51.91999999999999,
		  "lon": 1.02,
		  "name": "Harwich and North Essex"
		}, {
		  "lat": 50.91,
		  "lon": 0.6569999999999999,
		  "name": "Hastings and Rye"
		}, {
		  "lat": 50.859216,
		  "lon": -0.9839960000000001,
		  "name": "Havant"
		}, {
		  "lat": 51.48729600000001,
		  "lon": -0.434749,
		  "name": "Hayes and Harlington"
		}, {
		  "lat": 53.376299,
		  "lon": -2.112004,
		  "name": "Hazel Grove"
		}, {
		  "lat": 51.753241,
		  "lon": -0.448632,
		  "name": "Hemel Hempstead"
		}, {
		  "lat": 53.61542799999999,
		  "lon": -1.352693,
		  "name": "Hemsworth"
		}, {
		  "lat": 51.58780900000001,
		  "lon": -0.223855,
		  "name": "Hendon"
		}, {
		  "lat": 51.535764,
		  "lon": -0.902894,
		  "name": "Henley"
		}, {
		  "lat": 52.65,
		  "lon": -1.16,
		  "name": "Leicester West"
		}, {
		  "lat": 53.496115,
		  "lon": -2.518727,
		  "name": "Leigh"
		}, {
		  "lat": 53.431082,
		  "lon": -2.909981,
		  "name": "Liverpool, West Derby"
		}, {
		  "lat": 52.772099,
		  "lon": -1.206166,
		  "name": "Loughborough"
		}, {
		  "lat": 53.3590953,
		  "lon": -0.0148168,
		  "name": "Louth and Horncastle"
		}, {
		  "lat": 52.367749,
		  "lon": -2.7139129,
		  "name": "Ludlow"
		}, {
		  "lat": 51.902,
		  "lon": -0.446,
		  "name": "Luton North"
		}, {
		  "lat": 51.402869,
		  "lon": -0.166709,
		  "name": "Mitcham and Morden"
		}, {
		  "lat": 51.26600000000001,
		  "lon": -0.328,
		  "name": "Mole Valley"
		}, {
		  "lat": 54.089,
		  "lon": -2.824,
		  "name": "Morecambe and Lunesdale"
		}, {
		  "lat": 53.614086,
		  "lon": -2.161814,
		  "name": "Rochdale"
		}, {
		  "lat": 51.39247,
		  "lon": 0.4784970000000001,
		  "name": "Rochester and Strood"
		}, {
		  "lat": 51.55,
		  "lon": 0.8099999999999999,
		  "name": "Rochford and Southend East"
		}, {
		  "lat": 51.577076,
		  "lon": 0.178319,
		  "name": "Romford"
		}, {
		  "lat": 50.986,
		  "lon": -1.465,
		  "name": "Romsey and Southampton North"
		}, {
		  "lat": 53.380031,
		  "lon": -1.4670674,
		  "name": "Sheffield Central"
		}, {
		  "lat": 53.36199999999999,
		  "lon": -1.429,
		  "name": "Sheffield South East"
		}, {
		  "lat": 53.41099999999999,
		  "lon": -1.452,
		  "name": "Sheffield, Brightside and Hillsborough"
		}, {
		  "lat": 53.3849689,
		  "lon": -1.5083191,
		  "name": "Sheffield, Hallam"
		}, {
		  "lat": 53.360059,
		  "lon": -1.470052,
		  "name": "Sheffield, Heeley"
		}, {
		  "lat": 50.644536,
		  "lon": -2.519029,
		  "name": "Tatton"
		}, {
		  "lat": 51.015344,
		  "lon": -3.106849,
		  "name": "Taunton Deane"
		}, {
		  "lat": 52.678419,
		  "lon": -2.445258,
		  "name": "Telford"
		}, {
		  "lat": 50.715,
		  "lon": -4.263,
		  "name": "Torridge and West Devon"
		}, {
		  "lat": 50.433741,
		  "lon": -3.685797,
		  "name": "Totnes"
		}, {
		  "lat": 51.585067,
		  "lon": -0.073022,
		  "name": "Tottenham"
		}, {
		  "lat": 50.197,
		  "lon": -5.016,
		  "name": "Truro and Falmouth"
		}, {
		  "lat": 51.132377,
		  "lon": 0.263695,
		  "name": "Tunbridge Wells"
		}, {
		  "lat": 51.44458100000001,
		  "lon": -0.335246,
		  "name": "Twickenham"
		}, {
		  "lat": 55.0175869,
		  "lon": -1.4255819,
		  "name": "Tynemouth"
		}, {
		  "lat": 50.7390661,
		  "lon": -2.3382346,
		  "name": "West Dorset"
		}, {
		  "lat": 51.4817279,
		  "lon": -0.613576,
		  "name": "Windsor"
		}, {
		  "lat": 53.3342,
		  "lon": -3.0334,
		  "name": "Wirral South"
		}, {
		  "lat": 53.3801,
		  "lon": -3.159,
		  "name": "Wirral West"
		}, {
		  "lat": 51.7978049,
		  "lon": 0.6372179,
		  "name": "Witham"
		}, {
		  "lat": 51.787009,
		  "lon": -1.482147,
		  "name": "Witney"
		}, {
		  "lat": 51.316774,
		  "lon": -0.5600349,
		  "name": "Woking"
		}, {
		  "lat": 51.410457,
		  "lon": -0.833861,
		  "name": "Wokingham"
		}, {
		  "lat": 52.61000000000001,
		  "lon": -2.11,
		  "name": "Wolverhampton North East"
		}, {
		  "lat": 52.56,
		  "lon": -2.1,
		  "name": "Wolverhampton South East"
		}, {
		  "lat": 55.6346116,
		  "lon": -4.6763983,
		  "name": "Central Ayrshire"
		}, {
		  "lat": 55.816761,
		  "lon": -4.026536,
		  "name": "Coatbridge, Chryston and Bellshill"
		}, {
		  "lat": 55.9723666,
		  "lon": -4.092158899999999,
		  "name": "Cumbernauld, Kilsyth and Kirkintilloch East"
		}, {
		  "lat": 54.988285,
		  "lon": -3.8577839,
		  "name": "Dumfries and Galloway"
		}, {
		  "lat": 56.52222219999999,
		  "lon": -2.8336111,
		  "name": "Dundee East"
		}, {
		  "lat": 56.5041667,
		  "lon": -3.0847222,
		  "name": "Dundee West"
		}, {
		  "lat": 56.071741,
		  "lon": -3.452151,
		  "name": "Dunfermline and West Fife"
		}, {
		  "lat": 55.9755216,
		  "lon": -4.2105149,
		  "name": "East Dunbartonshire"
		}, {
		  "lat": 51.536563,
		  "lon": 0.075766,
		  "name": "Barking"
		}, {
		  "lat": 53.55399999999999,
		  "lon": -1.48,
		  "name": "Barnsley Central"
		}, {
		  "lat": 52.1359783,
		  "lon": -0.4666513,
		  "name": "Bedford"
		}, {
		  "lat": 51.48999999999999,
		  "lon": -0.06999999999999999,
		  "name": "Bermondsey and Old Southwark"
		}, {
		  "lat": 55.770242,
		  "lon": -2.005395,
		  "name": "Berwick-upon-Tweed"
		}, {
		  "lat": 51.52722,
		  "lon": -0.05547999999999999,
		  "name": "Bethnal Green and Bow"
		}, {
		  "lat": 53.8,
		  "lon": -0.156,
		  "name": "Beverley and Holderness"
		}, {
		  "lat": 50.886,
		  "lon": 0.47,
		  "name": "Bexhill and Battle"
		}, {
		  "lat": 51.453003,
		  "lon": 0.179097,
		  "name": "Bexleyheath and Crayford"
		}, {
		  "lat": 53.38999099999999,
		  "lon": -3.023009,
		  "name": "Birkenhead"
		}, {
		  "lat": 53.607,
		  "lon": -2.299,
		  "name": "Bury North"
		}, {
		  "lat": 53.58,
		  "lon": -2.299,
		  "name": "Bury South"
		}, {
		  "lat": 52.248726,
		  "lon": 0.7059329999999999,
		  "name": "Bury St Edmunds"
		}, {
		  "lat": 53.705,
		  "lon": -1.937,
		  "name": "Calder Valley"
		}, {
		  "lat": 51.47499999999999,
		  "lon": -0.06999999999999999,
		  "name": "Camberwell and Peckham"
		}, {
		  "lat": 50.21277,
		  "lon": -5.2947749,
		  "name": "Camborne and Redruth"
		}, {
		  "lat": 52.205337,
		  "lon": 0.121817,
		  "name": "Cambridge"
		}, {
		  "lat": 52.687071,
		  "lon": -2.026485,
		  "name": "Cannock Chase"
		}, {
		  "lat": 51.280233,
		  "lon": 1.0789089,
		  "name": "Canterbury"
		}, {
		  "lat": 54.892473,
		  "lon": -2.932931,
		  "name": "Carlisle"
		}, {
		  "lat": 51.3489069,
		  "lon": -1.994828,
		  "name": "Devizes"
		}, {
		  "lat": 53.689833,
		  "lon": -1.6296949,
		  "name": "Dewsbury"
		}, {
		  "lat": 53.492,
		  "lon": -1.133,
		  "name": "Don Valley"
		}, {
		  "lat": 53.511,
		  "lon": -1.122,
		  "name": "Doncaster Central"
		}, {
		  "lat": 53.57700000000001,
		  "lon": -1.055,
		  "name": "Doncaster North"
		}, {
		  "lat": 51.126371,
		  "lon": 1.316198,
		  "name": "Dover"
		}, {
		  "lat": 52.512255,
		  "lon": -2.081112,
		  "name": "Dudley North"
		}, {
		  "lat": 52.48999999999999,
		  "lon": -2.13,
		  "name": "Dudley South"
		}, {
		  "lat": 51.447,
		  "lon": -0.08399999999999999,
		  "name": "Dulwich and West Norwood"
		}, {
		  "lat": 51.51000000000001,
		  "lon": -0.28,
		  "name": "Ealing Central and Acton"
		}, {
		  "lat": 51.549,
		  "lon": -0.194,
		  "name": "Hampstead and Kilburn"
		}, {
		  "lat": 52.478389,
		  "lon": -0.920459,
		  "name": "Harborough"
		}, {
		  "lat": 51.767787,
		  "lon": 0.087806,
		  "name": "Harlow"
		}, {
		  "lat": 53.99212,
		  "lon": -1.541812,
		  "name": "Harrogate and Knaresborough"
		}, {
		  "lat": 51.580559,
		  "lon": -0.341995,
		  "name": "Harrow East"
		}, {
		  "lat": 51.585,
		  "lon": -0.364,
		  "name": "Harrow West"
		}, {
		  "lat": 52.0,
		  "lon": -2.7,
		  "name": "Hereford and South Herefordshire"
		}, {
		  "lat": 54.85833330000001,
		  "lon": -1.4416667,
		  "name": "Houghton and Sunderland South"
		}, {
		  "lat": 50.8279319,
		  "lon": -0.168749,
		  "name": "Hove"
		}, {
		  "lat": 53.645792,
		  "lon": -1.785035,
		  "name": "Huddersfield"
		}, {
		  "lat": 50.77721349999999,
		  "lon": -3.999461,
		  "name": "North Devon"
		}, {
		  "lat": 50.7390661,
		  "lon": -2.3382346,
		  "name": "North Dorset"
		}, {
		  "lat": 54.77525,
		  "lon": -1.584852,
		  "name": "North Durham"
		}, {
		  "lat": 52.221,
		  "lon": -0.574,
		  "name": "North East Bedfordshire"
		}, {
		  "lat": 51.75,
		  "lon": -1.3,
		  "name": "Oxford West and Abingdon"
		}, {
		  "lat": 53.845,
		  "lon": -2.204,
		  "name": "Pendle"
		}, {
		  "lat": 53.508,
		  "lon": -1.607,
		  "name": "Penistone and Stocksbridge"
		}, {
		  "lat": 54.7,
		  "lon": -2.7,
		  "name": "Penrith and The Border"
		}, {
		  "lat": 52.56949849999999,
		  "lon": -0.2405299,
		  "name": "Peterborough"
		}, {
		  "lat": 50.411,
		  "lon": -4.14,
		  "name": "Plymouth, Moor View"
		}, {
		  "lat": 51.42683,
		  "lon": -0.135679,
		  "name": "Streatham"
		}, {
		  "lat": 53.45,
		  "lon": -2.33,
		  "name": "Stretford and Urmston"
		}, {
		  "lat": 51.745734,
		  "lon": -2.217758,
		  "name": "Stroud"
		}, {
		  "lat": 52.15,
		  "lon": 1.5,
		  "name": "Suffolk Coastal"
		}, {
		  "lat": 54.904,
		  "lon": -1.381,
		  "name": "Sunderland Central"
		}, {
		  "lat": 51.29670729999999,
		  "lon": -0.6543707,
		  "name": "Surrey Heath"
		}, {
		  "lat": 51.3615179,
		  "lon": -0.21897,
		  "name": "Sutton and Cheam"
		}, {
		  "lat": 52.57038499999999,
		  "lon": -1.824042,
		  "name": "Sutton Coldfield"
		}, {
		  "lat": 52.633584,
		  "lon": -1.691032,
		  "name": "Tamworth"
		}, {
		  "lat": 51.54,
		  "lon": -0.44,
		  "name": "Uxbridge and South Ruislip"
		}, {
		  "lat": 52.54,
		  "lon": -1.98,
		  "name": "West Bromwich East"
		}, {
		  "lat": 52.53,
		  "lon": -2.05,
		  "name": "West Bromwich West"
		}, {
		  "lat": 52.59,
		  "lon": -2.17,
		  "name": "Wolverhampton South West"
		}, {
		  "lat": 52.193636,
		  "lon": -2.221575,
		  "name": "Worcester"
		}, {
		  "lat": 54.643569,
		  "lon": -3.542752,
		  "name": "Workington"
		}, {
		  "lat": 53.50956,
		  "lon": -2.385972,
		  "name": "Worsley and Eccles South"
		}, {
		  "lat": 50.81787,
		  "lon": -0.372882,
		  "name": "Worthing West"
		}, {
		  "lat": 51.638511,
		  "lon": -0.8078596,
		  "name": "Wycombe"
		}, {
		  "lat": 53.903,
		  "lon": -2.772,
		  "name": "Wyre and Preston North"
		}, {
		  "lat": 52.4038046,
		  "lon": -2.2537632,
		  "name": "Wyre Forest"
		}, {
		  "lat": 55.8555556,
		  "lon": -4.1469444,
		  "name": "Glasgow East"
		}, {
		  "lat": 55.864237,
		  "lon": -4.251806,
		  "name": "Glasgow North"
		}, {
		  "lat": 55.8883333,
		  "lon": -4.215833300000001,
		  "name": "Glasgow North East"
		}, {
		  "lat": 55.8911111,
		  "lon": -4.3513889,
		  "name": "Glasgow North West"
		}, {
		  "lat": 55.8127778,
		  "lon": -4.2722222,
		  "name": "Glasgow South"
		}, {
		  "lat": 55.8336111,
		  "lon": -4.3386111,
		  "name": "Glasgow South West"
		}, {
		  "lat": 56.20084199999999,
		  "lon": -3.15986,
		  "name": "Glenrothes"
		}, {
		  "lat": 55.680488,
		  "lon": -2.562334,
		  "name": "Gordon"
		}, {
		  "lat": 51.60077399999999,
		  "lon": -3.342314,
		  "name": "Pontypridd"
		}, {
		  "lat": 52.81402809999999,
		  "lon": -1.6371359,
		  "name": "Burton"
		}, {
		  "lat": 51.365018,
		  "lon": -0.164921,
		  "name": "Carshalton and Wallington"
		}, {
		  "lat": 51.54,
		  "lon": 0.57,
		  "name": "Castle Point"
		}, {
		  "lat": 53.557378,
		  "lon": -0.029435,
		  "name": "Cleethorpes"
		}, {
		  "lat": 51.895927,
		  "lon": 0.8918740000000001,
		  "name": "Colchester"
		}, {
		  "lat": 51.5715452,
		  "lon": 0.2647694,
		  "name": "Colne Valley"
		}, {
		  "lat": 53.162856,
		  "lon": -2.218923,
		  "name": "Congleton"
		}, {
		  "lat": 51.517732,
		  "lon": 0.194831,
		  "name": "Dagenham and Rainham"
		}, {
		  "lat": 54.52361,
		  "lon": -1.559458,
		  "name": "Darlington"
		}, {
		  "lat": 51.44621,
		  "lon": 0.216872,
		  "name": "Dartford"
		}, {
		  "lat": 51.3666667,
		  "lon": 0.5666667,
		  "name": "Gillingham and Rainham"
		}, {
		  "lat": 51.8642449,
		  "lon": -2.238156,
		  "name": "Gloucester"
		}, {
		  "lat": 50.794995,
		  "lon": -1.117547,
		  "name": "Gosport"
		}, {
		  "lat": 52.8,
		  "lon": -0.5,
		  "name": "Grantham and Stamford"
		}, {
		  "lat": 53.34902719999999,
		  "lon": -2.7136913,
		  "name": "Halton"
		}, {
		  "lat": 51.49063400000001,
		  "lon": -0.224992,
		  "name": "Hammersmith"
		}, {
		  "lat": 52.33146,
		  "lon": -0.182552,
		  "name": "Huntingdon"
		}, {
		  "lat": 53.768,
		  "lon": -2.382,
		  "name": "Hyndburn"
		}, {
		  "lat": 51.594,
		  "lon": 0.08499999999999999,
		  "name": "Ilford North"
		}, {
		  "lat": 51.564,
		  "lon": 0.086,
		  "name": "Ilford South"
		}, {
		  "lat": 51.55,
		  "lon": 0.6599999999999999,
		  "name": "Southend West"
		}, {
		  "lat": 53.645708,
		  "lon": -3.010113,
		  "name": "Southport"
		}, {
		  "lat": 51.4320568,
		  "lon": -0.5110549999999999,
		  "name": "Spelthorne"
		}, {
		  "lat": 51.75153,
		  "lon": -0.333892,
		  "name": "St Albans"
		}, {
		  "lat": 50.375,
		  "lon": -4.926,
		  "name": "St Austell and Newquay"
		}, {
		  "lat": 53.486,
		  "lon": -2.714,
		  "name": "St Helens North"
		}, {
		  "lat": 53.05,
		  "lon": -2.2,
		  "name": "Stoke-on-Trent North"
		}, {
		  "lat": 52.9833333,
		  "lon": -2.15,
		  "name": "Stoke-on-Trent South"
		}, {
		  "lat": 52.907932,
		  "lon": -2.144045,
		  "name": "Stone"
		}, {
		  "lat": 52.456891,
		  "lon": -2.148731,
		  "name": "Stourbridge"
		}, {
		  "lat": 54.59744329999999,
		  "lon": -5.9340683,
		  "name": "Belfast North"
		}, {
		  "lat": 54.59744329999999,
		  "lon": -5.9340683,
		  "name": "Belfast South"
		}, {
		  "lat": 54.59744329999999,
		  "lon": -5.9340683,
		  "name": "Belfast West"
		}, {
		  "lat": 54.71362999999999,
		  "lon": -6.21428,
		  "name": "East Antrim"
		}, {
		  "lat": 54.94600000000001,
		  "lon": -6.952999999999999,
		  "name": "East Londonderry"
		}, {
		  "lat": 54.45700000000001,
		  "lon": -6.38,
		  "name": "Upper Bann"
		}, {
		  "lat": 54.60296,
		  "lon": -7.0941,
		  "name": "West Tyrone"
		}, {
		  "lat": 57.149717,
		  "lon": -2.094278,
		  "name": "Aberdeen North"
		}, {
		  "lat": 57.095,
		  "lon": -2.133,
		  "name": "Aberdeen South"
		}, {
		  "lat": 55.845,
		  "lon": -3.892,
		  "name": "Airdrie and Shotts"
		}, {
		  "lat": 55.127,
		  "lon": -1.523,
		  "name": "Blyth Valley"
		}, {
		  "lat": 50.799,
		  "lon": -0.599,
		  "name": "Bognor Regis and Littlehampton"
		}, {
		  "lat": 53.231044,
		  "lon": -1.2897209,
		  "name": "Bolsover"
		}, {
		  "lat": 53.587,
		  "lon": -2.41,
		  "name": "Bolton North East"
		}, {
		  "lat": 53.566,
		  "lon": -2.4,
		  "name": "Bolton South East"
		}, {
		  "lat": 53.57700000000001,
		  "lon": -2.451,
		  "name": "Bolton West"
		}, {
		  "lat": 53.44325500000001,
		  "lon": -2.998895,
		  "name": "Bootle"
		}, {
		  "lat": 53.0,
		  "lon": 0.02,
		  "name": "Boston and Skegness"
		}, {
		  "lat": 55.04053829999999,
		  "lon": -1.5709388,
		  "name": "Bosworth"
		}, {
		  "lat": 50.72499999999999,
		  "lon": -1.803,
		  "name": "Bournemouth East"
		}, {
		  "lat": 51.7818576,
		  "lon": -2.5765283,
		  "name": "Forest of Dean"
		}, {
		  "lat": 53.7669515,
		  "lon": -2.9030322,
		  "name": "Fylde"
		}, {
		  "lat": 53.400575,
		  "lon": -0.774465,
		  "name": "Gainsborough"
		}, {
		  "lat": 53.358,
		  "lon": -2.87,
		  "name": "Garston and Halewood"
		}, {
		  "lat": 54.95268,
		  "lon": -1.603411,
		  "name": "Gateshead"
		}, {
		  "lat": 52.97345499999999,
		  "lon": -1.0800559,
		  "name": "Gedling"
		}, {
		  "lat": 52.056736,
		  "lon": 1.14822,
		  "name": "Ipswich"
		}, {
		  "lat": 50.69271759999999,
		  "lon": -1.3167103,
		  "name": "Isle of Wight"
		}, {
		  "lat": 51.561,
		  "lon": -0.114,
		  "name": "Islington North"
		}, {
		  "lat": 51.52603000000001,
		  "lon": -0.10347,
		  "name": "Islington South and Finsbury"
		}, {
		  "lat": 53.683298,
		  "lon": -1.505924,
		  "name": "Wakefield"
		}, {
		  "lat": 53.426521,
		  "lon": -3.066215,
		  "name": "Wallasey"
		}, {
		  "lat": 52.61000000000001,
		  "lon": -2.01,
		  "name": "Walsall North"
		}, {
		  "lat": 52.57,
		  "lon": -1.98,
		  "name": "Walsall South"
		}, {
		  "lat": 51.59054099999999,
		  "lon": -0.021407,
		  "name": "Walthamstow"
		}, {
		  "lat": 55.18395870000001,
		  "lon": -1.5794639,
		  "name": "Wansbeck"
		}, {
		  "lat": 51.588868,
		  "lon": -1.426453,
		  "name": "Wantage"
		}, {
		  "lat": 51.606081,
		  "lon": 0.301624,
		  "name": "Warley"
		}, {
		  "lat": 53.4,
		  "lon": -2.5666667,
		  "name": "Warrington North"
		}, {
		  "lat": 53.3666667,
		  "lon": -2.55,
		  "name": "Warrington South"
		}, {
		  "lat": 51.4443584,
		  "lon": -3.4151166,
		  "name": "Vale of Glamorgan"
		}, {
		  "lat": 51.486,
		  "lon": -3.214,
		  "name": "Cardiff West"
		}, {
		  "lat": 51.469,
		  "lon": -3.127,
		  "name": "Cardiff South and Penarth"
		}, {
		  "lat": 52.46490900000001,
		  "lon": -1.931542,
		  "name": "Birmingham, Edgbaston"
		}, {
		  "lat": 52.523611,
		  "lon": -1.837778,
		  "name": "Birmingham, Erdington"
		}, {
		  "lat": 53.863,
		  "lon": -2.914,
		  "name": "Blackpool North and Cleveleys"
		}, {
		  "lat": 53.8175053,
		  "lon": -3.0356748,
		  "name": "Blackpool South"
		}, {
		  "lat": 54.962993,
		  "lon": -1.71867,
		  "name": "Blaydon"
		}, {
		  "lat": 50.717,
		  "lon": -1.913,
		  "name": "Bournemouth West"
		}, {
		  "lat": 51.41604,
		  "lon": -0.75398,
		  "name": "Bracknell"
		}, {
		  "lat": 51.5004,
		  "lon": -0.1909,
		  "name": "Kensington"
		}, {
		  "lat": 52.396322,
		  "lon": -0.7302489999999999,
		  "name": "Kettering"
		}, {
		  "lat": 51.39400999999999,
		  "lon": -0.302662,
		  "name": "Kingston and Surbiton"
		}, {
		  "lat": 53.801279,
		  "lon": -1.548567,
		  "name": "Leeds West"
		}, {
		  "lat": 52.64,
		  "lon": -1.08,
		  "name": "Leicester East"
		}, {
		  "lat": 52.59999999999999,
		  "lon": -1.14,
		  "name": "Leicester South"
		}, {
		  "lat": 53.749,
		  "lon": -1.602,
		  "name": "Morley and Outwood"
		}, {
		  "lat": 50.5036299,
		  "lon": -4.6524982,
		  "name": "North Cornwall"
		}, {
		  "lat": 50.37,
		  "lon": -4.141,
		  "name": "Plymouth, Sutton and Devonport"
		}, {
		  "lat": 54.615604,
		  "lon": -1.053212,
		  "name": "Redcar"
		}, {
		  "lat": 53.41,
		  "lon": -2.27,
		  "name": "Wythenshawe and Sale East"
		}, {
		  "lat": 50.942061,
		  "lon": -2.633308,
		  "name": "Yeovil"
		}, {
		  "lat": 53.957,
		  "lon": -1.082,
		  "name": "York Central"
		}, {
		  "lat": 53.958,
		  "lon": -1.082,
		  "name": "York Outer"
		}, {
		  "lat": 54.59744329999999,
		  "lon": -5.9340683,
		  "name": "Belfast East"
		}, {
		  "lat": 56.7969965,
		  "lon": -2.9206818,
		  "name": "Angus"
		}, {
		  "lat": 56.37004630000001,
		  "lon": -5.0318965,
		  "name": "Argyll and Bute"
		}, {
		  "lat": 55.4706858,
		  "lon": -4.2847563,
		  "name": "Ayr, Carrick and Cumnock"
		}, {
		  "lat": 57.68534889999999,
		  "lon": -2.0261414,
		  "name": "Banff and Buchan"
		}, {
		  "lat": 51.517,
		  "lon": -2.538,
		  "name": "Filton and Bradley Stoke"
		}, {
		  "lat": 51.57226,
		  "lon": -0.19401,
		  "name": "Finchley and Golders Green"
		}, {
		  "lat": 51.071739,
		  "lon": 1.081937,
		  "name": "Folkestone and Hythe"
		}, {
		  "lat": 54.980297,
		  "lon": -1.482757,
		  "name": "Jarrow"
		}, {
		  "lat": 53.867795,
		  "lon": -1.912358,
		  "name": "Keighley"
		}, {
		  "lat": 52.25,
		  "lon": -1.4,
		  "name": "Kenilworth and Southam"
		}, {
		  "lat": 52.30897,
		  "lon": -1.940936,
		  "name": "Redditch"
		}, {
		  "lat": 51.237276,
		  "lon": -0.205883,
		  "name": "Reigate"
		}, {
		  "lat": 53.873,
		  "lon": -2.391,
		  "name": "Ribble Valley"
		}, {
		  "lat": 54.403465,
		  "lon": -1.732618,
		  "name": "Richmond (Yorks)"
		}, {
		  "lat": 53.795984,
		  "lon": -1.759398,
		  "name": "Bradford East"
		}, {
		  "lat": 53.76666669999999,
		  "lon": -1.7666667,
		  "name": "Bradford South"
		}, {
		  "lat": 53.789397,
		  "lon": -2.255003,
		  "name": "Burnley"
		}, {
		  "lat": 52.257473,
		  "lon": -1.164947,
		  "name": "Daventry"
		}, {
		  "lat": 53.4378,
		  "lon": -2.1598,
		  "name": "Denton and Reddish"
		}, {
		  "lat": 52.95,
		  "lon": -1.49,
		  "name": "Derby North"
		}, {
		  "lat": 52.9225301,
		  "lon": -1.4746186,
		  "name": "Derby South"
		}, {
		  "lat": 53.15,
		  "lon": -1.65,
		  "name": "Derbyshire Dales"
		}, {
		  "lat": 51.537,
		  "lon": -0.345,
		  "name": "Ealing North"
		}, {
		  "lat": 51.511073,
		  "lon": -0.377232,
		  "name": "Ealing, Southall"
		}, {
		  "lat": 53.6902763,
		  "lon": -2.7034809,
		  "name": "South Ribble"
		}, {
		  "lat": 54.999424,
		  "lon": -1.427406,
		  "name": "South Shields"
		}, {
		  "lat": 52.7697957,
		  "lon": -2.1045243,
		  "name": "South Staffordshire"
		}, {
		  "lat": 50.93333330000001,
		  "lon": -1.4166667,
		  "name": "Southampton, Test"
		}, {
		  "lat": 52.1378192,
		  "lon": -1.6091232,
		  "name": "Stratford-on-Avon"
		}, {
		  "lat": 51.48574000000001,
		  "lon": -0.12418,
		  "name": "Vauxhall"
		}, {
		  "lat": 52.3,
		  "lon": -1.6,
		  "name": "Warwick and Leamington"
		}, {
		  "lat": 54.891,
		  "lon": -1.499,
		  "name": "Washington and Sunderland West"
		}, {
		  "lat": 51.656489,
		  "lon": -0.39032,
		  "name": "Watford"
		}, {
		  "lat": 51.7742353,
		  "lon": -0.4515082,
		  "name": "Waveney"
		}, {
		  "lat": 55.637634,
		  "lon": -3.88657,
		  "name": "East Kilbride, Strathaven and Lesmahagow"
		}, {
		  "lat": 51.578829,
		  "lon": -3.218134,
		  "name": "Caerphilly"
		}, {
		  "lat": 51.68323909999999,
		  "lon": -4.1129179,
		  "name": "Islwyn"
		}, {
		  "lat": 54.784853,
		  "lon": -1.3515,
		  "name": "Easington"
		}, {
		  "lat": 50.7602826,
		  "lon": -4.2553326,
		  "name": "East Devon"
		}, {
		  "lat": 50.8548464,
		  "lon": -1.1865868,
		  "name": "Fareham"
		}, {
		  "lat": 51.25,
		  "lon": 0.7999999999999999,
		  "name": "Faversham and Mid Kent"
		}, {
		  "lat": 51.46,
		  "lon": -0.412,
		  "name": "Feltham and Heston"
		}, {
		  "lat": 51.44638579999999,
		  "lon": -0.2757693,
		  "name": "Richmond Park"
		}, {
		  "lat": 52.27299439999999,
		  "lon": -0.8755514999999999,
		  "name": "South Northamptonshire"
		}, {
		  "lat": 51.106589,
		  "lon": 0.4440458,
		  "name": "Wealden"
		}, {
		  "lat": 53.26,
		  "lon": -2.531,
		  "name": "Weaver Vale"
		}, {
		  "lat": 52.302419,
		  "lon": -0.6939639999999999,
		  "name": "Wellingborough"
		}, {
		  "lat": 51.209347,
		  "lon": -2.6445979,
		  "name": "Wells"
		}, {
		  "lat": 51.7465017,
		  "lon": -0.2133693,
		  "name": "Welwyn Hatfield"
		}, {
		  "lat": 53.509,
		  "lon": -1.41,
		  "name": "Wentworth and Dearne"
		}, {
		  "lat": 55.7752205,
		  "lon": -2.3564827,
		  "name": "Berwickshire, Roxburgh and Selkirk"
		}, {
		  "lat": 58.27699999999999,
		  "lon": -3.778999999999999,
		  "name": "Caithness, Sutherland and Easter Ross"
		}, {
		  "lat": 55.0650807,
		  "lon": -3.6143594,
		  "name": "Dumfriesshire, Clydesdale and Tweeddale"
		}, {
		  "lat": 51.91445,
		  "lon": -2.582446,
		  "name": "Ross, Skye and Lochaber"
		}
	];

	// Markers for each Constituency
	function addMarker(data) {
		geocoder.geocode({'address': data.name + ', UK'}, function(results, status) {
			var marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(data.lat, data.lon),
				title: data.name
			});
			var infowindow = new google.maps.InfoWindow({
				content: data.name
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		});
	}

	for (var i = data.length - 1; i >= 0; i--) {
		addMarker(data[i]);
	}

});