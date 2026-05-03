const colors = {
  northAmerica: "#53b68a",
  southAmerica: "#f0a23a",
  europe: "#d86a89",
  africa: "#c9a84c",
  asia: "#8178dc",
  australia: "#e77f52",
  antarctica: "#e8eef2",
  anglo: "#4ea3e3",
  latin: "#f18a31",
  europeRegion: "#bd68d9",
  russia: "#8ab82e",
  northAfrica: "#e9b783",
  subsaharan: "#5fbd70",
  southwestAsia: "#dba333",
  southAsia: "#4797ad",
  eastAsia: "#cf4233",
  southeastAsia: "#58b7c9",
  pacific: "#94c86b",
  christianity: "#72bdd4",
  islam: "#77c586",
  hinduism: "#efbd4f",
  buddhism: "#c88fe0",
  folk: "#df7950",
  corn: "#79be6e",
  wheat: "#e4c452",
  rust: "#8e9aa2",
  sun: "#ef9f48",
  bible: "#d84545",
  protestant: "#7cc68d",
  catholic: "#e78496",
  lds: "#929fed",
  lutheran: "#f0c84b",
  methodist: "#b88adf",
  baptist: "#67b77a",
  jewish: "#dfbd4f",
  unaffiliated: "#9fb4c6"
};

const continentCountries = {
  northAmerica: ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"],
  southAmerica: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
  europe: ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"],
  africa: ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Cote d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"],
  asia: ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"],
  australia: ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"],
  antarctica: ["No sovereign countries"]
};

const continentInfo = [
  { id: "northAmerica", name: "North America", color: colors.northAmerica, countries: continentCountries.northAmerica.join(", ") },
  { id: "southAmerica", name: "South America", color: colors.southAmerica, countries: continentCountries.southAmerica.join(", ") },
  { id: "europe", name: "Europe", color: colors.europe, countries: continentCountries.europe.join(", ") },
  { id: "africa", name: "Africa", color: colors.africa, countries: continentCountries.africa.join(", ") },
  { id: "asia", name: "Asia", color: colors.asia, countries: continentCountries.asia.join(", ") },
  { id: "australia", name: "Australia / Oceania", color: colors.australia, countries: continentCountries.australia.join(", ") },
  { id: "antarctica", name: "Antarctica", color: colors.antarctica, countries: "No sovereign countries; governed through the Antarctic Treaty System." }
];

const oceans = [
  { id: "pacificOcean", name: "Pacific Ocean", color: "#4fb0d0", point: [-150, 0] },
  { id: "atlanticOcean", name: "Atlantic Ocean", color: "#4fb0d0", point: [-38, 24] },
  { id: "indianOcean", name: "Indian Ocean", color: "#4fb0d0", point: [80, -20] },
  { id: "arcticOcean", name: "Arctic Ocean", color: "#4fb0d0", point: [-35, 58] },
  { id: "southernOcean", name: "Southern Ocean", color: "#4fb0d0", point: [45, -58] }
];

const regionInfo = [
  { id: "anglo", name: "Anglo America", color: colors.anglo, countries: "United States and Canada." },
  { id: "latin", name: "Latin America", color: colors.latin, countries: "Mexico, Central America, the Caribbean, and South America." },
  { id: "europeRegion", name: "Europe", color: colors.europeRegion, countries: "Western, Northern, Southern, and Eastern Europe." },
  { id: "russia", name: "Russia and Central Asia", color: colors.russia, countries: "Russia, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, Tajikistan." },
  { id: "northAfrica", name: "North Africa", color: colors.northAfrica, countries: "Morocco, Algeria, Tunisia, Libya, Egypt, Western Sahara, and Sudan." },
  { id: "subsaharan", name: "Sub-Saharan Africa", color: colors.subsaharan, countries: "African countries south of the Sahara, including Nigeria, Ghana, Kenya, Ethiopia, DRC, and South Africa." },
  { id: "southwestAsia", name: "Southwest Asia", color: colors.southwestAsia, countries: "Turkey, Syria, Iraq, Iran, Saudi Arabia, Israel, Jordan, Yemen, Oman, UAE, Qatar, Bahrain, Kuwait, Georgia, Armenia, Azerbaijan." },
  { id: "southAsia", name: "South Asia", color: colors.southAsia, countries: "India, Pakistan, Bangladesh, Nepal, Bhutan, Sri Lanka, Maldives." },
  { id: "eastAsia", name: "East Asia", color: colors.eastAsia, countries: "China, Japan, North Korea, South Korea, Mongolia, Taiwan." },
  { id: "southeastAsia", name: "Southeast Asia", color: colors.southeastAsia, countries: "Myanmar, Thailand, Vietnam, Cambodia, Laos, Malaysia, Singapore, Indonesia, Philippines, Brunei, Timor-Leste." },
  { id: "pacific", name: "Oceania", color: colors.pacific, countries: "Australia, New Zealand, Papua New Guinea, and Pacific island countries." }
];

const regionCountryNames = {
  anglo: new Set(["United States of America", "Canada", "Greenland", "Bermuda", "St. Pierre and Miquelon"]),
  latin: new Set(["Mexico", "Belize", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama", "Cuba", "Jamaica", "Haiti", "Dominican Rep.", "Puerto Rico", "Bahamas", "Barbados", "Dominica", "Grenada", "Saint Lucia", "St. Kitts and Nevis", "St. Vin. and Gren.", "Trinidad and Tobago", "Antigua and Barb.", "Colombia", "Venezuela", "Guyana", "Suriname", "Ecuador", "Peru", "Brazil", "Bolivia", "Paraguay", "Chile", "Argentina", "Uruguay", "Aruba", "Curaçao", "CuraÃ§ao", "Sint Maarten", "St-Martin", "St-Barthélemy", "St-BarthÃ©lemy", "Anguilla", "British Virgin Is.", "U.S. Virgin Is.", "Cayman Is.", "Turks and Caicos Is.", "Montserrat", "Falkland Is."]),
  europeRegion: new Set(["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herz.", "Bulgaria", "Croatia", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican", "Faeroe Is.", "Guernsey", "Jersey", "Isle of Man", "Åland", "Ã…land"]),
  russia: new Set(["Russia", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Kyrgyzstan", "Tajikistan"]),
  northAfrica: new Set(["Morocco", "W. Sahara", "Algeria", "Tunisia", "Libya", "Egypt", "Sudan"]),
  subsaharan: new Set(["Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Rep.", "Chad", "Comoros", "Congo", "Dem. Rep. Congo", "Côte d'Ivoire", "CÃ´te d'Ivoire", "Djibouti", "Eq. Guinea", "Eritrea", "eSwatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "São Tomé and Principe", "SÃ£o TomÃ© and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "Somaliland", "South Africa", "S. Sudan", "Tanzania", "Togo", "Uganda", "Zambia", "Zimbabwe", "Saint Helena"]),
  southwestAsia: new Set(["Armenia", "Azerbaijan", "Bahrain", "Cyprus", "N. Cyprus", "Georgia", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Palestine", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates", "Yemen"]),
  southAsia: new Set(["Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Nepal", "Pakistan", "Sri Lanka", "Siachen Glacier", "Br. Indian Ocean Ter."]),
  eastAsia: new Set(["China", "Hong Kong", "Japan", "Macao", "Mongolia", "North Korea", "South Korea", "Taiwan"]),
  southeastAsia: new Set(["Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Timor-Leste", "Vietnam"]),
  pacific: new Set(["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Kiribati", "Marshall Is.", "Micronesia", "Nauru", "Palau", "Samoa", "Solomon Is.", "Tonga", "Tuvalu", "Vanuatu", "American Samoa", "Cook Is.", "Fr. Polynesia", "Guam", "N. Mariana Is.", "New Caledonia", "Niue", "Norfolk Island", "Pitcairn Is.", "Wallis and Futuna Is.", "Indian Ocean Ter.", "Ashmore and Cartier Is."])
};

const religionInfo = [
  { id: "christianity", name: "Christianity", color: colors.christianity, symbol: "✝", countries: "Largest faith tradition across the Americas, Europe, Australia, and much of Sub-Saharan Africa. Global share is roughly about one-third of people." },
  { id: "islam", name: "Islam", color: colors.islam, symbol: "☪", countries: "Dominant across North Africa, Southwest Asia, parts of Central Asia, Pakistan, Bangladesh, Indonesia, and Malaysia. Global share is roughly about one-quarter." },
  { id: "hinduism", name: "Hinduism", color: colors.hinduism, symbol: "Om", countries: "Concentrated primarily in India and Nepal, with diaspora communities worldwide. Global share is roughly 15%." },
  { id: "buddhism", name: "Buddhism", color: colors.buddhism, symbol: "☸", countries: "Important in East and Southeast Asia, including Thailand, Myanmar, Cambodia, Sri Lanka, Japan, China, Korea, and Vietnam. Global share is roughly 6-7%." },
  { id: "folk", name: "Ethnic / Folk Religions", color: colors.folk, symbol: "◆", countries: "Includes traditional, Indigenous, and syncretic traditions, especially visible in parts of Africa, East Asia, and Indigenous communities." }
];

const usBelts = [
  { id: "corn", name: "Corn Belt", symbol: "🌽", color: colors.corn, states: ["Iowa", "Illinois", "Indiana", "Nebraska", "Minnesota", "Ohio", "Missouri"], explanation: "Iowa, Illinois, Indiana, Nebraska, Minnesota, Ohio, and nearby states specialize in corn because of rich prairie soils, flat land, mechanized farming, livestock feed demand, and ethanol production." },
  { id: "wheat", name: "Wheat Belt", symbol: "🌾", color: colors.wheat, states: ["North Dakota", "South Dakota", "Kansas", "Oklahoma", "Montana", "Colorado", "Texas"], explanation: "The Great Plains from the Dakotas through Kansas, Oklahoma, Montana, and parts of Texas have dry climates and wide flat fields suited to wheat farming." },
  { id: "rust", name: "Rust Belt", symbol: "🏭 vacant", color: colors.rust, states: ["Michigan", "Ohio", "Pennsylvania", "Indiana", "Illinois", "Wisconsin", "New York", "West Virginia"], explanation: "The Great Lakes and Northeast manufacturing core declined as factories faced automation, cheaper overseas labor, high fixed costs, union conflicts, and movement toward lower-cost Sun Belt locations." },
  { id: "sun", name: "Sun Belt", symbol: "☀️ 🛢️", color: colors.sun, states: ["California", "Nevada", "Arizona", "New Mexico", "Texas", "Oklahoma", "Louisiana", "Mississippi", "Alabama", "Georgia", "Florida", "South Carolina", "North Carolina", "Tennessee"], explanation: "The southern tier grew because of air conditioning, defense and tech jobs, cheap oil and land, weaker unions, ports, tourism, and fewer snow days than the industrial North." },
  { id: "bible", name: "Bible Belt", symbol: "✝", color: colors.bible, states: ["Texas", "Oklahoma", "Arkansas", "Louisiana", "Mississippi", "Alabama", "Georgia", "Tennessee", "Kentucky", "South Carolina", "North Carolina"], explanation: "The Bible Belt overlaps much of the South, where evangelical Protestant churches have historically had strong cultural and political influence." }
];

const usReligions = [
  { id: "baptist", name: "Baptist / Evangelical Protestant", color: colors.baptist, states: ["Alabama", "Arkansas", "Georgia", "Kentucky", "Mississippi", "Missouri", "North Carolina", "Oklahoma", "South Carolina", "Tennessee", "Texas", "West Virginia"], explanation: "The South has a strong Baptist and evangelical Protestant presence tied to settlement history, revival movements, rural church networks, and the cultural region often called the Bible Belt. This is not 100% of the population; it marks a dominant or highly visible tradition. Texas is a mixed case: Catholics are a very large group there, but Pew's 2023-24 data lists Evangelical Protestant at about 27% and Catholic at about 22% statewide." },
  { id: "methodist", name: "Methodist / Mainline Protestant", color: colors.methodist, states: ["Delaware", "Indiana", "Iowa", "Kansas", "Maryland", "Nebraska", "Ohio", "Virginia"], explanation: "Methodist and other mainline Protestant traditions are especially visible across parts of the Midwest, Mid-Atlantic, and Upper South. Patterns reflect 19th-century settlement, circuit riders, town-centered churches, and long-standing Protestant institutions." },
  { id: "lutheran", name: "Lutheran", color: colors.lutheran, states: ["Minnesota", "North Dakota", "South Dakota", "Wisconsin"], explanation: "Lutheran concentration is strongest in the Upper Midwest, shaped by German and Scandinavian immigration and rural settlement patterns." },
  { id: "catholic", name: "Catholic", color: colors.catholic, states: ["Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Louisiana", "New Mexico", "California", "Illinois"], explanation: "Catholic presence is strongest in the Northeast, parts of the Midwest, Louisiana, New Mexico, California, and many urban areas, shaped by immigration from Ireland, Italy, Poland, Latin America, and other Catholic regions." },
  { id: "lds", name: "Mormon / Latter-day Saint", color: colors.lds, states: ["Utah", "Idaho"], explanation: "The Mormon or Latter-day Saint core is centered on Utah and nearby western states because of 19th-century migration and settlement by members of The Church of Jesus Christ of Latter-day Saints." },
  { id: "jewish", name: "Jewish Urban Concentrations", color: colors.jewish, states: ["New York", "New Jersey", "Florida"], explanation: "Jewish populations are highly urban and especially visible in metro areas such as New York, South Florida, Los Angeles, and Chicago. These are concentrations, not statewide 100% majorities." },
  { id: "unaffiliated", name: "Higher Unaffiliated Share", color: colors.unaffiliated, states: ["Washington", "Oregon", "Nevada", "Colorado", "Vermont", "New Hampshire", "Maine"], explanation: "The Pacific Northwest, parts of the Mountain West, and northern New England have higher shares of people reporting no religious affiliation, shaped by migration, urbanization, education levels, and regional political culture." }
];

const fipsNames = {
  "01": "Alabama", "02": "Alaska", "04": "Arizona", "05": "Arkansas", "06": "California", "08": "Colorado", "09": "Connecticut", "10": "Delaware", "11": "District of Columbia", "12": "Florida", "13": "Georgia", "15": "Hawaii", "16": "Idaho", "17": "Illinois", "18": "Indiana", "19": "Iowa", "20": "Kansas", "21": "Kentucky", "22": "Louisiana", "23": "Maine", "24": "Maryland", "25": "Massachusetts", "26": "Michigan", "27": "Minnesota", "28": "Mississippi", "29": "Missouri", "30": "Montana", "31": "Nebraska", "32": "Nevada", "33": "New Hampshire", "34": "New Jersey", "35": "New Mexico", "36": "New York", "37": "North Carolina", "38": "North Dakota", "39": "Ohio", "40": "Oklahoma", "41": "Oregon", "42": "Pennsylvania", "44": "Rhode Island", "45": "South Carolina", "46": "South Dakota", "47": "Tennessee", "48": "Texas", "49": "Utah", "50": "Vermont", "51": "Virginia", "53": "Washington", "54": "West Virginia", "55": "Wisconsin", "56": "Wyoming"
};

const mapTypes = [
  { id: "thematic", name: "Thematic Map", image: "assets/map-types/thematic.jpg", def: "A thematic map shows one topic or theme, such as religion, language, income, population growth, climate, migration, or land use. In AP Human Geography, we use thematic maps to see spatial patterns and ask why those patterns exist. They are useful for comparing regions, finding clusters, and connecting human activity to place." },
  { id: "choropleth", name: "Choropleth", image: "assets/map-types/choropleth.jpg", def: "A choropleth map shades political or statistical areas, such as countries, states, counties, or census tracts. The color usually represents a rate, percentage, density, or other normalized data value. In AP Human Geography, choropleth maps are useful for comparing places, but students should watch for misleading patterns caused by large area sizes or raw counts." },
  { id: "graduated", name: "Graduated Symbol", image: "assets/map-types/graduated-symbols.jpg", def: "A graduated symbol map uses symbols of different sizes to show how much of something exists at specific locations. Larger symbols mean larger values. In AP Human Geography, this is useful for cities, population totals, resource production, migration flows, or economic activity because it shows magnitude without shading entire regions." },
  { id: "isoline", name: "Isoline", image: "assets/map-types/isoline.gif", def: "An isoline map uses lines to connect points of equal value. Examples include contour lines for elevation, isotherms for temperature, and isobars for air pressure. In AP Human Geography, isoline maps help students read physical patterns that influence settlement, agriculture, transportation, and population distribution." },
  { id: "cartogram", name: "Cartogram", image: "assets/map-types/cartogram.jpg", def: "A cartogram changes the size or shape of places to represent data instead of land area. A country with a larger population, GDP, or number of internet users may appear larger than it is geographically. In AP Human Geography, cartograms are useful because they force students to compare importance or quantity, not just physical size." },
  { id: "dot", name: "Dot Density", image: "assets/map-types/dot-density.jpg", def: "A dot density map uses dots to represent a number of people, events, or objects. One dot might equal 1,000 people, 100 farms, or another chosen value. In AP Human Geography, dot density maps are useful for showing distribution, concentration, and clustering, especially with population, agriculture, disease, or settlement patterns." }
];

const texasReligionNote = "Texas note: Catholics are a very large group, but Pew's 2023-24 data lists Texas as about 27% Evangelical Protestant and 22% Catholic statewide, so this map treats Texas as a mixed case in the Baptist / Evangelical Protestant region.";

let state = { selected: null, stats: null, timer: null, startTime: 0, wrongStreak: 0 };
let atlas = { world: null, countries: null, us: null, states: null };

const app = document.querySelector("#app");
const viewSelect = document.querySelector("#viewSelect");
const popOutBtn = document.querySelector("#popOutBtn");
const startBtn = document.querySelector("#startBtn");
const imageModal = document.querySelector("#imageModal");
const imageModalImg = document.querySelector("#imageModalImg");
const imageModalTitle = document.querySelector("#imageModalTitle");
const imageModalClose = document.querySelector("#imageModalClose");

startBtn.addEventListener("click", () => {
  popOutBtn.classList.remove("flashing");
  popOutBtn.classList.add("stopped");
});

popOutBtn.addEventListener("click", () => {
  window.open(location.href, "apMapsPopOut", "width=1180,height=820");
});

viewSelect.addEventListener("change", render);
imageModalClose.addEventListener("click", closeImageModal);
imageModal.addEventListener("click", event => {
  if (event.target === imageModal) closeImageModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeImageModal();
});

loadAtlases().then(render).catch(error => {
  app.innerHTML = `<section class="map-panel"><h2>Map data did not load</h2><p class="map-note">This version uses real geographic map data from online map atlases. Check the internet connection, then refresh.</p><pre>${error.message}</pre></section>`;
});

async function loadAtlases() {
  if (!window.d3 || !window.topojson) throw new Error("D3 or TopoJSON did not load.");
  const world = window.WORLD_ATLAS;
  const us = window.US_ATLAS;
  if (!world || !us) throw new Error("Local map atlases did not load.");
  atlas.world = world;
  atlas.countries = topojson.feature(world, world.objects.countries).features;
  atlas.us = us;
  atlas.states = topojson.feature(us, us.objects.states).features.map(feature => {
    const id = String(feature.id).padStart(2, "0");
    feature.properties.name = feature.properties.name || fipsNames[id] || id;
    return feature;
  });
}

function render() {
  clearInterval(state.timer);
  state = { selected: null, stats: null, timer: null, startTime: 0, wrongStreak: 0 };
  if (!atlas.countries) return;
  const view = viewSelect.value;
  if (view === "base") renderWorld({ title: "AP Human Geography Maps", scheme: "base", labels: false, side: introSide() });
  if (view === "continents") renderWorld({ title: "Continents Map", scheme: "continents", labels: true, side: infoSide("Click a continent", "Names, oceans, and country examples appear here.") });
  if (view === "continentsQuiz") renderQuiz({ title: "Continents Quiz", items: [...continentInfo, ...oceans], kind: "world", scheme: "continents", includeOceans: true, showOceanLabels: false, showSwatches: false });
  if (view === "regions") renderWorld({ title: "AP Human Geography Regions", scheme: "regions", labels: true, side: legendSide(regionInfo, "Legend", "Click a region for countries and AP Human Geography context.") });
  if (view === "regionsQuiz") renderQuiz({ title: "Regions Quiz", items: regionInfo, kind: "world", scheme: "regions", showSwatches: false });
  if (view === "religion") renderWorld({ title: "Religion Map", scheme: "religions", labels: true, side: legendSide(religionInfo, "Legend", "Click a religion region. These are simplified majority or concentration patterns.", true), religion: true });
  if (view === "religionQuiz") renderQuiz({ title: "Religions Quiz", items: religionInfo, kind: "world", scheme: "religions", showSwatches: false });
  if (view === "usBase") renderUSBase();
  if (view === "usBelts") renderUSOverlay({ title: "US Belts Map", overlays: usBelts, scheme: "belts", quiz: false });
  if (view === "usBeltsQuiz") renderQuiz({ title: "US Belts Quiz", items: usBelts, kind: "us", scheme: "belts", showSwatches: false });
  if (view === "usReligion") renderUSOverlay({ title: "US Religion Map", overlays: usReligions, scheme: "usReligion", quiz: false });
  if (view === "usReligionQuiz") renderQuiz({ title: "US Religion Map Quiz", items: usReligions, kind: "us", scheme: "usReligion", showSwatches: false });
  if (view === "types") renderTypes(false);
  if (view === "typesQuiz") renderTypes(true);
}

function introSide() {
  return `<aside class="side-panel"><h2>Base Map</h2><p>World maps use Natural Earth 1:50m country boundary data, a public-domain classroom/cartography base map. US maps use US state boundary atlas data.</p><p>Use the drop down tab to move between maps and quiz modes.</p></aside>`;
}

function infoSide(title, text) {
  return `<aside class="side-panel" id="info"><h2>${title}</h2><p>${text}</p></aside>`;
}

function legendSide(items, title, text, more = false, showSwatches = true) {
  return `<aside class="side-panel" id="info"><h2>${title}</h2><p>${text}</p><div class="legend-list">${items.map(item => `<div class="legend-item">${showSwatches ? `<span class="swatch" style="background:${item.color}"></span>` : ""}<span>${item.symbol ? `<span class="religion-symbol">${item.symbol}</span> ` : ""}${item.name}</span></div>`).join("")}</div>${more ? `<p><a class="more" target="_blank" rel="noopener" href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNDV8GjzfScxgEe4OgIlh3c">More</a></p>` : ""}</aside>`;
}

function renderWorld({ title, scheme, labels, side, religion = false }) {
  app.className = "layout";
  app.innerHTML = `<section class="map-panel"><h2>${title}</h2><div id="mapMount" class="map-svg"></div><p class="map-note">Base map: Natural Earth 1:50m public-domain country boundaries.</p></section>${side}`;
  drawWorldMap({ scheme, labels, religion });
}

function drawWorldMap({ scheme, labels, religion, showOceanLabels = true }) {
  const mount = document.querySelector("#mapMount");
  const width = 1120;
  const height = 650;
  const projection = d3.geoNaturalEarth1().fitExtent([[18, 18], [width - 18, height - 18]], { type: "Sphere" });
  const path = d3.geoPath(projection);
  const svg = d3.select(mount).append("svg").attr("viewBox", `0 0 ${width} ${height}`).attr("role", "img").attr("aria-label", "World map");
  svg.append("path").datum(d3.geoGraticule10()).attr("class", "graticule").attr("d", path);
  svg.append("path").datum({ type: "Sphere" }).attr("fill", "transparent").attr("stroke", "#74bad0").attr("stroke-width", 1.2).attr("d", path);

  svg.append("g").selectAll("path")
    .data(atlas.countries)
    .join("path")
    .attr("class", "land target coast-shadow")
    .attr("data-id", d => worldGroup(d, scheme).id)
    .attr("fill", d => worldGroup(d, scheme).color)
    .attr("d", path)
    .on("click", (event, d) => showWorldInfo(worldGroup(d, scheme), religion));

  oceans.forEach(ocean => {
    const p = projection(ocean.point);
    if (!p) return;
    if (showOceanLabels) {
      svg.append("text").attr("class", `ocean-label ${ocean.id}`).attr("x", p[0]).attr("y", p[1]).text(ocean.name);
    }
    svg.append("circle").attr("class", "target ocean-target").attr("data-id", ocean.id).attr("cx", p[0]).attr("cy", p[1] - 8).attr("r", 38).attr("fill", "transparent");
  });

  if (labels) {
    const labelSource = scheme === "regions" ? regionInfo : scheme === "religions" ? religionInfo : continentInfo;
    labelSource.forEach(item => {
      const p = projection(worldLabelPoint(item.id, scheme));
      if (p) svg.append("text").attr("class", `label ${religion ? `religion-map-label ${item.id}-label` : ""}`).attr("x", p[0]).attr("y", p[1]).text(`${religion && item.symbol ? item.symbol + " " : ""}${item.name}`);
    });
  }
}

function showWorldInfo(item, religion) {
  const info = document.querySelector("#info");
  if (!info || item.id === "base") return;
  info.innerHTML = `<h2>${item.symbol ? `${item.symbol} ` : ""}${item.name}</h2><p>${item.countries || ""}</p>${religion ? `<p><a class="more" target="_blank" rel="noopener" href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNDV8GjzfScxgEe4OgIlh3c">More</a></p>` : ""}`;
}

function worldGroup(feature, scheme) {
  if (scheme === "base") return { id: "base", name: "Land", color: "#d9e6c3" };
  if (scheme === "continents") return byId(continentInfo, continentFromFeature(feature));
  if (scheme === "regions") return byId(regionInfo, regionFromFeature(feature));
  if (scheme === "religions") return byId(religionInfo, religionFromFeature(feature));
  return { id: "base", name: "Land", color: "#d9e6c3" };
}

function byId(items, id) {
  return items.find(item => item.id === id) || { id: "unassigned", name: "Not part of this AP region map", color: "#edf2f4", countries: "Not part of this map category." };
}

function lonLat(feature) {
  return d3.geoCentroid(feature);
}

function continentFromFeature(feature) {
  const [lon, lat] = lonLat(feature);
  if (lat < -60) return "antarctica";
  if (lon < -25 && lat > 8) return "northAmerica";
  if (lon < -30 && lat <= 15) return "southAmerica";
  if (lon > 110 && lat < 0) return "australia";
  if (lon >= -25 && lon < 55 && lat >= 35) return "europe";
  if (lon >= -20 && lon < 55 && lat < 35) return "africa";
  return "asia";
}

function regionFromFeature(feature) {
  const name = feature.properties.name || "";
  const [lon, lat] = lonLat(feature);
  if (lat < -60 || ["Antarctica", "Fr. S. Antarctic Lands", "Heard I. and McDonald Is.", "S. Geo. and the Is."].includes(name)) return "unassigned";
  for (const [regionId, names] of Object.entries(regionCountryNames)) {
    if (names.has(name)) return regionId;
  }
  if (["United States of America", "Canada"].includes(name)) return "anglo";
  if (lon < -30 && lat < 35) return "latin";
  if (["Russia", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Kyrgyzstan", "Tajikistan"].includes(name)) return "russia";
  if (lon >= 25 && lon < 72 && lat >= 12 && lat < 42) return "southwestAsia";
  if (lon >= -25 && lon < 45 && lat >= 35) return "europeRegion";
  if (lon >= -20 && lon < 45 && lat >= 12 && lat < 35) return "northAfrica";
  if (lon >= -20 && lon < 52 && lat < 12) return "subsaharan";
  if (lon >= 65 && lon < 92 && lat >= 3 && lat < 36) return "southAsia";
  if (lon >= 92 && lon < 146 && lat >= 20) return "eastAsia";
  if (lon >= 92 && lon < 146 && lat < 20) return "southeastAsia";
  if (lon > 110 && lat < 5) return "pacific";
  return continentFromFeature(feature) === "africa" ? "subsaharan" : "eastAsia";
}

function religionFromFeature(feature) {
  const region = regionFromFeature(feature);
  const continent = continentFromFeature(feature);
  const name = feature.properties.name || "";
  if (["India", "Nepal"].includes(name)) return "hinduism";
  if (["Thailand", "Myanmar", "Cambodia", "Laos", "Sri Lanka", "Mongolia", "Bhutan", "Japan", "South Korea", "North Korea", "Vietnam"].includes(name)) return "buddhism";
  if (["China", "Taiwan"].includes(name)) return "folk";
  if (["northAfrica", "southwestAsia"].includes(region) || ["Pakistan", "Bangladesh", "Indonesia", "Malaysia", "Afghanistan", "Tajikistan", "Uzbekistan", "Turkmenistan", "Kazakhstan", "Kyrgyzstan"].includes(name)) return "islam";
  if (continent === "africa" && region !== "northAfrica") return lonLat(feature)[0] > 25 ? "christianity" : "folk";
  if (continent === "asia") return "buddhism";
  return "christianity";
}

function worldLabelPoint(id, scheme) {
  const points = {
    northAmerica: [-105, 46], southAmerica: [-60, -18], europe: [15, 52], africa: [20, 3], asia: [88, 42], australia: [138, -25], antarctica: [20, -75],
    anglo: [-100, 48], latin: [-70, -8], europeRegion: [15, 52], russia: [75, 57], northAfrica: [12, 25], subsaharan: [22, -8], southwestAsia: [45, 28], southAsia: [78, 20], eastAsia: [112, 36], southeastAsia: [108, 7], pacific: [138, -25],
    christianity: [-80, 35], islam: [45, 25], hinduism: [78, 22], buddhism: [103, 17], folk: [105, 34]
  };
  return points[id] || [0, 0];
}

function renderUSBase() {
  app.className = "layout";
  app.innerHTML = `<section class="map-panel"><h2>US Base Map</h2><div id="mapMount" class="map-svg"></div><p class="map-note">Boundaries are actual US state shapes from map atlas data.</p></section><aside class="side-panel"><h2>United States Base Map</h2><p>State abbreviations and large bodies of water are labeled on a real state-boundary map.</p></aside>`;
  drawUSMap({ scheme: "base", labels: true });
}

function renderUSOverlay({ title, overlays, scheme }) {
  app.className = "layout";
  const note = scheme === "usReligion" ? `<p class="teacher-note">${texasReligionNote}</p>` : "";
  app.innerHTML = `<section class="map-panel"><h2>${title}</h2><div id="mapMount" class="map-svg"></div><p class="map-note">Boundaries are actual US state shapes from map atlas data.</p></section>${legendSide(overlays.map(displayUSItem), "Legend", "Click a state in a colored region for details.")}`;
  document.querySelector("#info")?.insertAdjacentHTML("beforeend", note);
  drawUSMap({ scheme, labels: true });
}

function drawUSMap({ scheme, labels }) {
  const mount = document.querySelector("#mapMount");
  const width = 1000;
  const height = 620;
  const projection = d3.geoAlbersUsa().fitExtent([[24, 24], [width - 24, height - 36]], { type: "FeatureCollection", features: atlas.states });
  const path = d3.geoPath(projection);
  const svg = d3.select(mount).append("svg").attr("viewBox", `0 0 ${width} ${height}`).attr("role", "img").attr("aria-label", "United States map");
  svg.append("text").attr("class", "ocean-label").attr("x", 95).attr("y", 315).text("Pacific Ocean");
  svg.append("text").attr("class", "ocean-label").attr("x", 875).attr("y", 330).text("Atlantic Ocean");
  svg.append("text").attr("class", "ocean-label").attr("x", 630).attr("y", 570).text("Gulf of Mexico");
  svg.append("text").attr("class", "ocean-label").attr("x", 665).attr("y", 145).text("Great Lakes");

  svg.append("g").selectAll("path")
    .data(atlas.states)
    .join("path")
    .attr("class", "land target coast-shadow")
    .attr("data-id", d => usGroup(d, scheme).id)
    .attr("data-alt", d => usAltGroups(d, scheme).join(","))
    .attr("fill", d => usGroup(d, scheme).color)
    .attr("d", path)
    .on("click", (event, d) => showUSInfo(usGroup(d, scheme), scheme));

  if (scheme === "belts") drawBibleCrosses(svg, path);

  if (labels) {
    svg.append("g").selectAll("text.state")
      .data(atlas.states)
      .join("text")
      .attr("class", "small-label")
      .attr("x", d => path.centroid(d)[0])
      .attr("y", d => path.centroid(d)[1] + 3)
      .text(d => stateAbbr(d.properties.name));
  }
}

function displayUSItem(item) {
  return { ...item, name: item.symbol ? `${item.symbol} ${item.name}` : item.name };
}

function usGroup(feature, scheme) {
  const fallback = { id: "base", name: feature.properties.name, color: "#d9e6c3", explanation: "State boundary." };
  if (scheme === "base") return fallback;
  const source = scheme === "belts" ? usBelts : usReligions;
  return source.find(item => item.states.includes(feature.properties.name)) || fallback;
}

function usAltGroups(feature, scheme) {
  if (scheme !== "belts") return [usGroup(feature, scheme).id];
  return usBelts.filter(item => item.states.includes(feature.properties.name)).map(item => item.id);
}

function showUSInfo(item, scheme) {
  const info = document.querySelector("#info");
  if (!info || item.id === "base") return;
  const source = scheme === "belts" ? usBelts.map(displayUSItem) : usReligions;
  info.innerHTML = `<h2>${item.symbol ? `${item.symbol} ` : ""}${item.name}</h2><p>${item.explanation}</p><div class="legend-list">${source.map(legendItem).join("")}</div>`;
}

function drawBibleCrosses(svg, path) {
  const bible = usBelts.find(item => item.id === "bible");
  atlas.states.filter(state => bible.states.includes(state.properties.name)).forEach(feature => {
    const [x, y] = path.centroid(feature);
    svg.append("text").attr("data-id", "bible").attr("class", "small-label cross-label").attr("x", x).attr("y", y - 13).attr("fill", colors.bible).text("✝");
  });
}

function stateAbbr(name) {
  const pairs = Object.entries(fipsNames);
  const fips = pairs.find(([, value]) => value === name)?.[0];
  const abbr = { "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI", "56": "WY" };
  return abbr[fips] || name.slice(0, 2).toUpperCase();
}

function renderQuiz({ title, items, kind, scheme, includeOceans = false, showOceanLabels = true, showSwatches = true }) {
  state.stats = { correct: 0, attempts: 0, wrong: 0 };
  state.startTime = Date.now();
  app.className = "layout";
  const note = scheme === "usReligion" ? `<p class="teacher-note">${texasReligionNote}</p>` : "";
  app.innerHTML = `<section class="map-panel"><h2>${title}</h2><div id="mapMount" class="map-svg"></div><p class="map-note">Select a name, then click the matching real map area.</p></section><aside class="side-panel"><h2>Choose, Then Click</h2><div class="stats"><div class="stat">Score<b id="score">0%</b></div><div class="stat">Attempts<b id="attempts">0</b></div><div class="stat">Correct<b id="correct">0</b></div><div class="stat">Timer<b id="timer">0:00</b></div></div>${note}<div id="choices" class="choice-list"></div><div id="feedback" class="feedback">Select a choice, then click its location on the map.</div></aside>`;
  kind === "world" ? drawWorldMap({ scheme, labels: false, religion: scheme === "religions", showOceanLabels }) : drawUSMap({ scheme, labels: false });
  drawChoices(items.map(item => item.symbol ? { ...item, name: `${item.symbol} ${item.name}` } : item), showSwatches);
  state.timer = setInterval(updateTimer, 1000);
  app.querySelectorAll(".target").forEach(node => node.addEventListener("click", () => checkAnswer(node.dataset.id, items, node.dataset.alt)));
}

function drawChoices(items, showSwatches = true) {
  const choices = document.querySelector("#choices");
  choices.dataset.showSwatches = showSwatches ? "true" : "false";
  choices.innerHTML = shuffle([...items]).map(item => `<button class="choice" type="button" data-choice="${item.id}">${showSwatches ? `<span class="swatch" style="background:${item.color || "#4fb0d0"}"></span>` : ""}${item.name}</button>`).join("");
  wireChoiceButtons(choices);
}

function drawChoicesInOrder(items, showSwatches = true) {
  const choices = document.querySelector("#choices");
  choices.dataset.showSwatches = showSwatches ? "true" : "false";
  choices.innerHTML = items.map(item => `<button class="choice" type="button" data-choice="${item.id}">${showSwatches ? `<span class="swatch" style="background:${item.color || "#4fb0d0"}"></span>` : ""}${item.name}</button>`).join("");
  wireChoiceButtons(choices);
}

function wireChoiceButtons(choices) {
  choices.querySelectorAll(".choice").forEach(btn => btn.addEventListener("click", () => {
    state.selected = btn.dataset.choice;
    choices.querySelectorAll(".choice").forEach(x => x.classList.toggle("selected", x === btn));
  }));
}

function checkAnswer(id, items, alt = "") {
  const feedback = document.querySelector("#feedback");
  if (!state.selected) {
    feedback.textContent = "Pick a name from the right first.";
    feedback.className = "feedback bad";
    return;
  }
  const ids = [id, ...alt.split(",").filter(Boolean)];
  state.stats.attempts++;
  if (ids.includes(state.selected)) {
    state.stats.correct++;
    state.wrongStreak = 0;
    feedback.textContent = "Correct match!";
    feedback.className = "feedback good";
    celebrate("🎉", "👏");
  } else {
    state.stats.wrong++;
    state.wrongStreak++;
    feedback.textContent = state.wrongStreak >= 3 ? "Incorrect. Three wrong answers in a row: choices shuffled." : "Incorrect. Try another location.";
    feedback.className = "feedback bad";
    celebrate("😢", "👎");
    if (state.wrongStreak >= 3) {
      if (viewSelect.value === "typesQuiz") {
        shuffleTypeTiles();
        feedback.textContent = "Incorrect. Three wrong answers in a row: map tiles shuffled.";
      } else {
        drawChoices(items.map(item => item.symbol ? { ...item, name: `${item.symbol} ${item.name}` } : item), document.querySelector("#choices")?.dataset.showSwatches !== "false");
      }
      state.wrongStreak = 0;
    }
  }
  updateStats();
}

function legendItem(item) {
  return `<div class="legend-item"><span class="swatch" style="background:${item.color}"></span><span>${item.name}</span></div>`;
}

function updateStats() {
  document.querySelector("#attempts").textContent = state.stats.attempts;
  document.querySelector("#correct").textContent = state.stats.correct;
  document.querySelector("#score").textContent = `${Math.round((state.stats.correct / state.stats.attempts) * 100)}%`;
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = String(elapsed % 60).padStart(2, "0");
  const timer = document.querySelector("#timer");
  if (timer) timer.textContent = `${mins}:${secs}`;
}

function celebrate(primary, secondary) {
  const effects = document.querySelector("#effects");
  for (let i = 0; i < 42; i++) {
    const span = document.createElement("span");
    span.className = "fall";
    span.textContent = i % 3 === 0 ? secondary : primary;
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * .45}s`;
    span.style.fontSize = `${20 + Math.random() * 20}px`;
    effects.appendChild(span);
    setTimeout(() => span.remove(), 2200);
  }
  tone(primary === "🎉");
}

function tone(good) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const notes = good ? [523, 659, 784] : [220, 196, 175];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.type = good ? "triangle" : "sawtooth";
    gain.gain.setValueAtTime(.001, ctx.currentTime + i * .11);
    gain.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + i * .11 + .02);
    gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + i * .11 + .16);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + i * .11);
    osc.stop(ctx.currentTime + i * .11 + .18);
  });
}

function renderTypes(quiz) {
  state.stats = quiz ? { correct: 0, attempts: 0, wrong: 0 } : null;
  state.startTime = Date.now();
  app.className = "layout";
  const tiles = quiz ? shuffle([...mapTypes]) : mapTypes;
  app.innerHTML = `<section class="tile-panel"><h2>${quiz ? "Types of Maps Quiz" : "Types of Maps"}</h2><div class="tiles">${tiles.map(item => typeCard(item, quiz)).join("")}</div></section>${quiz ? `<aside class="side-panel"><h2>Match Type</h2><div class="stats"><div class="stat">Score<b id="score">0%</b></div><div class="stat">Attempts<b id="attempts">0</b></div><div class="stat">Correct<b id="correct">0</b></div><div class="stat">Timer<b id="timer">0:00</b></div></div><div id="choices" class="choice-list"></div><div id="feedback" class="feedback">Select a type, then click its tile.</div></aside>` : `<aside class="side-panel" id="info"><h2>Map Types</h2><p>Click a tile for a short AP Human Geography definition.</p></aside>`}`;
  if (quiz) {
    drawChoicesInOrder(mapTypes.map(x => ({ ...x, color: "#9cc6d7" })), false);
    state.timer = setInterval(updateTimer, 1000);
    app.querySelectorAll(".map-card").forEach(card => card.addEventListener("click", () => checkAnswer(card.dataset.id, mapTypes)));
  } else {
    app.querySelectorAll(".map-card").forEach(card => card.addEventListener("click", () => {
      const item = mapTypes.find(x => x.id === card.dataset.id);
      document.querySelector("#info").innerHTML = `<h2>${item.name}</h2><p>${item.def}</p><button class="more" type="button" data-preview="${item.id}">Pop Out Picture</button>`;
      openImageModal(item);
      document.querySelector("[data-preview]")?.addEventListener("click", () => openImageModal(item));
    }));
  }
}

function typeCard(item, quiz = false) {
  return `<article class="map-card" data-id="${item.id}"><figure><img src="${item.image}" alt="${quiz ? "Map type quiz tile" : item.name}"></figure>${quiz ? "" : `<h3>${item.name}</h3><p>${item.def}</p>`}</article>`;
}

function shuffleTypeTiles() {
  const tiles = document.querySelector(".tiles");
  if (!tiles) return;
  tiles.innerHTML = shuffle([...mapTypes]).map(item => typeCard(item, true)).join("");
  tiles.querySelectorAll(".map-card").forEach(card => card.addEventListener("click", () => checkAnswer(card.dataset.id, mapTypes)));
}

function openImageModal(item) {
  imageModalImg.src = item.image;
  imageModalImg.alt = item.name;
  imageModalTitle.textContent = item.name;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
