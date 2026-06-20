import { readFileSync, writeFileSync } from 'fs';

// We will read the original seed file, parse it (or extract the base and teacher review sections),
// and generate 85 unique multiple_choice questions for y7-1b-h16 to y7-1b-h100.
// Let's define the 85 unique scenarios to avoid templates completely.

const baseFile = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear7Ch1BQuestions.js';
const fileContent = readFileSync(baseFile, 'utf8');

// We can parse the file content. Since it is exported JS, we can extract the base array.
// To be safe and clean, let's parse the array by importing it or extracting the JSON-like part.
// Let's write a node script that will run inside the workspace.

// The list of 85 completely unique scenarios for addition:
const additionScenarios = [
  {
    t: "Cargo Logistics",
    q: "A cargo vessel is loaded with three shipments of wheat weighing \\\\( 4520 \\\\) kg, \\\\( 3890 \\\\) kg, and \\\\( 1245 \\\\) kg respectively. Find the total weight of the wheat cargo.",
    n1: 4520, n2: 3890, n3: 1245,
    unit: "kg"
  },
  {
    t: "Wildlife Conservation",
    q: "Conservationists tracked three migrating herds of caribou containing \\\\( 1850 \\\\), \\\\( 2430 \\\\), and \\\\( 975 \\\\) animals. Calculate the total number of caribou tracked.",
    n1: 1850, n2: 2430, n3: 975,
    unit: "caribou"
  },
  {
    t: "Deep Space Telescope",
    q: "An astronomer cataloged three new stellar clusters with \\\\( 3400 \\\\), \\\\( 5680 \\\\), and \\\\( 1290 \\\\) stars. Determine the total count of cataloged stars.",
    n1: 3400, n2: 5680, n3: 1290,
    unit: "stars"
  },
  {
    t: "Urban Infrastructure",
    q: "A city water reservoir receives three inflows of \\\\( 12500 \\\\) liters, \\\\( 8900 \\\\) liters, and \\\\( 4350 \\\\) liters from different tributaries. What is the total volume of water added?",
    n1: 12500, n2: 8900, n3: 4350,
    unit: "liters"
  },
  {
    t: "Microchip Manufacturing",
    q: "A silicon foundry produced three batches of processors consisting of \\\\( 8500 \\\\) units, \\\\( 9200 \\\\) units, and \\\\( 3450 \\\\) units. Find the total number of processors produced.",
    n1: 8500, n2: 9200, n3: 3450,
    unit: "processors"
  },
  {
    t: "Agricultural Harvest",
    q: "An orchard harvested three varieties of apples, yielding \\\\( 2850 \\\\) organic Granny Smiths, \\\\( 3120 \\\\) Honeycrisps, and \\\\( 1475 \\\\) Fujis. Calculate the total apple yield.",
    n1: 2850, n2: 3120, n3: 1475,
    unit: "apples"
  },
  {
    t: "Financial Audit",
    q: "A startup's quarterly expenses consist of \\\\( \\\\$15400 \\\\) for marketing, \\\\( \\\\$22800 \\\\) for development, and \\\\( \\\\$4950 \\\\) for office rental. What are the total expenses?",
    n1: 15400, n2: 22800, n3: 4950,
    unit: "dollars",
    isCurrency: true
  },
  {
    t: "Data Cloud Network",
    q: "A database server processed three data streams containing \\\\( 6800 \\\\) MB, \\\\( 12450 \\\\) MB, and \\\\( 3120 \\\\) MB of transaction logs. Solve for the total processed data size.",
    n1: 6800, n2: 12450, n3: 3120,
    unit: "MB"
  },
  {
    t: "Power Grid Integration",
    q: "A hybrid power station generates electricity from three sources: wind turbine (\\\\( 7350 \\\\) kW), solar array (\\\\( 4890 \\\\) kW), and biomass generator (\\\\( 2110 \\\\) kW). Find the total power output.",
    n1: 7350, n2: 4890, n3: 2110,
    unit: "kW"
  },
  {
    t: "Archaeological Excavation",
    q: "Archaeologists at a historical site uncovered three categories of artifacts: \\\\( 450 \\\\) pottery shards, \\\\( 890 \\\\) metal coins, and \\\\( 125 \\\\) bone tools. Find the total artifact count.",
    n1: 450, n2: 890, n3: 125,
    unit: "artifacts"
  },
  {
    t: "High-Speed Transit",
    q: "A regional train line recorded ridership of \\\\( 14200 \\\\) on Monday, \\\\( 16800 \\\\) on Tuesday, and \\\\( 9350 \\\\) on Wednesday. Calculate the total ridership over these three days.",
    n1: 14200, n2: 16800, n3: 9350,
    unit: "passengers"
  },
  {
    t: "Marine Biology Study",
    q: "Researchers monitoring a coral reef count three populations of reef fish: \\\\( 3560 \\\\) damselfish, \\\\( 2840 \\\\) clownfish, and \\\\( 1120 \\\\) wrasses. Find the total number of fish counted.",
    n1: 3560, n2: 2840, n3: 1120,
    unit: "fish"
  },
  {
    t: "Civil Engineering",
    q: "A suspension bridge construction project uses three structural steel cable segments measuring \\\\( 850 \\\\) meters, \\\\( 925 \\\\) meters, and \\\\( 430 \\\\) meters. What is the total length of the cables?",
    n1: 850, n2: 925, n3: 430,
    unit: "meters"
  },
  {
    t: "Eco-Reforestation",
    q: "A forest conservation team planted three blocks of native saplings: Block A (\\\\( 12500 \\\\) oak), Block B (\\\\( 9800 \\\\) pine), and Block C (\\\\( 6450 \\\\) birch). Calculate the total saplings planted.",
    n1: 12500, n2: 9800, n3: 6450,
    unit: "saplings"
  },
  {
    t: "Sports Arena Event",
    q: "A multi-day athletics tournament registered \\\\( 8560 \\\\) spectators on day one, \\\\( 11240 \\\\) on day two, and \\\\( 6800 \\\\) on day three. Determine the total spectator attendance.",
    n1: 8560, n2: 11240, n3: 6800,
    unit: "spectators"
  },
  {
    t: "Library Archives",
    q: "A university archive restored three historical collections containing \\\\( 3250 \\\\) rare manuscripts, \\\\( 4890 \\\\) photographs, and \\\\( 1560 \\\\) maps. How many items were restored in total?",
    n1: 3250, n2: 4890, n3: 1560,
    unit: "items"
  },
  {
    t: "Industrial Chemistry",
    q: "A chemical plant blends three batches of solvent containing \\\\( 8950 \\\\) liters, \\\\( 12400 \\\\) liters, and \\\\( 5250 \\\\) liters. Find the total volume of blended solvent.",
    n1: 8950, n2: 12400, n3: 5250,
    unit: "liters"
  },
  {
    t: "Digital Cryptography",
    q: "A security protocol requires verification of three prime hashes containing \\\\( 5400 \\\\) bits, \\\\( 8192 \\\\) bits, and \\\\( 2048 \\\\) bits. Solve for the total bits verified.",
    n1: 5400, n2: 8192, n3: 2048,
    unit: "bits"
  },
  {
    t: "Aerospace Propulsion",
    q: "A spacecraft fuel system consists of a main tank (\\\\( 45800 \\\\) kg), secondary booster (\\\\( 24900 \\\\) kg), and orbital maneuvering reserve (\\\\( 3850 \\\\) kg). Calculate the total fuel weight.",
    n1: 45800, n2: 24900, n3: 3850,
    unit: "kg"
  },
  {
    t: "Hospital Inventory",
    q: "A medical supply depot distributed three shipments of vaccine vials containing \\\\( 18900 \\\\), \\\\( 22400 \\\\), and \\\\( 9350 \\\\) doses. Determine the total doses distributed.",
    n1: 18900, n2: 22400, n3: 9350,
    unit: "doses"
  },
  {
    t: "Volcanic Activity Monitoring",
    q: "Seismologists detected three series of micro-tremors during a month: \\\\( 1250 \\\\) in week one, \\\\( 1890 \\\\) in week two, and \\\\( 640 \\\\) in week three. Find the total number of tremors.",
    n1: 1250, n2: 1890, n3: 640,
    unit: "tremors"
  },
  {
    t: "Botanical Seed Bank",
    q: "A seed repository catalogs three shipments of wildflower seeds: \\\\( 35000 \\\\) poppy, \\\\( 48000 \\\\) lupine, and \\\\( 12500 \\\\) daisy seeds. Find the total wildflower seed count.",
    n1: 35000, n2: 48000, n3: 12500,
    unit: "seeds"
  },
  {
    t: "Corporate Acquisition",
    q: "An energy conglomerate acquires three wind farms with operating capacities of \\\\( 145 \\\\) MW, \\\\( 230 \\\\) MW, and \\\\( 85 \\\\) MW. Calculate the total acquired capacity.",
    n1: 145, n2: 230, n3: 85,
    unit: "MW"
  },
  {
    t: "Textile Production",
    q: "A textile mill processes three shipments of raw cotton yarn measuring \\\\( 12800 \\\\) meters, \\\\( 15600 \\\\) meters, and \\\\( 9250 \\\\) meters. Solve for the total length of cotton yarn.",
    n1: 12800, n2: 15600, n3: 9250,
    unit: "meters"
  },
  {
    t: "Municipal Waste Recycling",
    q: "A recycling plant processed three categories of household waste: \\\\( 5240 \\\\) kg of glass, \\\\( 8950 \\\\) kg of paper, and \\\\( 3120 \\\\) kg of plastics. What is the total weight of recycled waste?",
    n1: 5240, n2: 8950, n3: 3120,
    unit: "kg"
  },
  {
    t: "Antarctic Ice Drill",
    q: "Climatologists extracted three ice core samples from different depths measuring \\\\( 1450 \\\\) cm, \\\\( 2280 \\\\) cm, and \\\\( 890 \\\\) cm. Calculate the combined length of the ice core samples.",
    n1: 1450, n2: 2280, n3: 890,
    unit: "cm"
  },
  {
    t: "Supercomputer Core",
    q: "A high-performance computing cluster distributes a simulation across three node blocks using \\\\( 8192 \\\\) cores, \\\\( 4096 \\\\) cores, and \\\\( 2048 \\\\) cores. What is the total core count?",
    n1: 8192, n2: 4096, n3: 2048,
    unit: "cores"
  },
  {
    t: "Global Telecommunications",
    q: "A submarine fiber-optic network routes three light wavelengths carrying bandwidths of \\\\( 45 \\\\) Gbps, \\\\( 75 \\\\) Gbps, and \\\\( 32 \\\\) Gbps. Determine the total combined bandwidth.",
    n1: 45, n2: 75, n3: 32,
    unit: "Gbps"
  },
  {
    t: "Renewable Hydropower",
    q: "A water reservoir receives hourly inflows from three glacier melt streams: \\\\( 14500 \\\\) cubic meters, \\\\( 18900 \\\\) cubic meters, and \\\\( 7250 \\\\) cubic meters. Find the total hourly inflow.",
    n1: 14500, n2: 18900, n3: 7250,
    unit: "cubic meters"
  },
  {
    t: "Oceanographic Buoy",
    q: "An ocean sensor logs waves over three days: \\\\( 3240 \\\\) wave crests on day one, \\\\( 4180 \\\\) on day two, and \\\\( 1950 \\\\) on day three. Calculate the total wave crest count.",
    n1: 3240, n2: 4180, n3: 1950,
    unit: "crests"
  },
  {
    t: "Urban Density Study",
    q: "A regional demographic survey records populations of three neighboring residential sectors: Sector A (\\\\( 12850 \\\\)), Sector B (\\\\( 15600 \\\\)), and Sector C (\\\\( 9450 \\\\)). Find the total population.",
    n1: 12850, n2: 15600, n3: 9450,
    unit: "residents"
  },
  {
    t: "Commercial Air Fleet",
    q: "An airline's three passenger routes carried \\\\( 184500 \\\\), \\\\( 212900 \\\\), and \\\\( 93800 \\\\) travelers in a quarter. Solve for the total number of route passengers.",
    n1: 184500, n2: 212900, n3: 93800,
    unit: "passengers"
  },
  {
    t: "Food Grain Storage",
    q: "A grain elevator stores three shipments of barley weighing \\\\( 12500 \\\\) kg, \\\\( 16800 \\\\) kg, and \\\\( 8950 \\\\) kg. Find the total weight of stored barley.",
    n1: 12500, n2: 16800, n3: 8950,
    unit: "kg"
  },
  {
    t: "Solar Farm Grid",
    q: "A solar facility registers power peaks of \\\\( 5240 \\\\) kW, \\\\( 8350 \\\\) kW, and \\\\( 3120 \\\\) kW across its three major photovoltaic fields. What is the total peak output?",
    n1: 5240, n2: 8350, n3: 3120,
    unit: "kW"
  },
  {
    t: "Space Rocket Cargo",
    q: "A lunar supply ship carries a scientific payload of \\\\( 1850 \\\\) kg, life support supplies of \\\\( 2430 \\\\) kg, and structural spare parts of \\\\( 970 \\\\) kg. Find the total cargo weight.",
    n1: 1850, n2: 2430, n3: 970,
    unit: "kg"
  },
  {
    t: "Cyber Security Token",
    q: "A digital wallet processes three ledger transactions containing \\\\( 6800 \\\\) tokens, \\\\( 12450 \\\\) tokens, and \\\\( 3120 \\\\) tokens. Calculate the total token value of the transactions.",
    n1: 6800, n2: 12450, n3: 3120,
    unit: "tokens"
  },
  {
    t: "Historical Preservation",
    q: "A library digitizes three rare scroll volumes: Volume I (\\\\( 1250 \\\\) pages), Volume II (\\\\( 1890 \\\\) pages), and Volume III (\\\\( 640 \\\\) pages). How many pages are digitized in total?",
    n1: 1250, n2: 1890, n3: 640,
    unit: "pages"
  },
  {
    t: "Petroleum Refiner",
    q: "A refining column processes three crude components yielding \\\\( 35000 \\\\) barrels of diesel, \\\\( 48000 \\\\) barrels of gasoline, and \\\\( 12500 \\\\) barrels of aviation fuel. Find the total barrels.",
    n1: 35000, n2: 48000, n3: 12500,
    unit: "barrels"
  },
  {
    t: "Microgrid Integration",
    q: "A local microgrid integrates power from three residential battery units storing \\\\( 145 \\\\) kWh, \\\\( 230 \\\\) kWh, and \\\\( 85 \\\\) kWh. Calculate the total microgrid battery storage capacity.",
    n1: 145, n2: 230, n3: 85,
    unit: "kWh"
  },
  {
    t: "Textile Mill Raw Material",
    q: "A yarn manufacturer imports three raw wool shipments weighing \\\\( 12800 \\\\) kg, \\\\( 15600 \\\\) kg, and \\\\( 9250 \\\\) kg. Solve for the total weight of the imported wool.",
    n1: 12800, n2: 15600, n3: 9250,
    unit: "kg"
  },
  {
    t: "Industrial Recycling Stream",
    q: "An industrial recycler collects three containers of copper scrap weighing \\\\( 5240 \\\\) kg, \\\\( 8950 \\\\) kg, and \\\\( 3120 \\\\) kg. Calculate the total weight of copper scrap collected.",
    n1: 5240, n2: 8950, n3: 3120,
    unit: "kg"
  },
  {
    t: "Climatology Core Station",
    q: "A scientific expedition extracts three sediment cores measuring \\\\( 1450 \\\\) mm, \\\\( 2280 \\\\) mm, and \\\\( 890 \\\\) mm. Find the total length of the sediment cores.",
    n1: 1450, n2: 2280, n3: 890,
    unit: "mm"
  },
  {
    t: "Processor Node Block",
    q: "A cluster splits a computing task across three server nodes, using \\\\( 8192 \\\\) threads, \\\\( 4096 \\\\) threads, and \\\\( 2048 \\\\) threads. Solve for the total thread count.",
    n1: 8192, n2: 4096, n3: 2048,
    unit: "threads"
  },
  {
    t: "Ocean Buoy Drift",
    q: "A drifting scientific buoy logs wave counts over three observation windows: \\\\( 3240 \\\\) waves, \\\\( 4180 \\\\) waves, and \\\\( 1950 \\\\) waves. What is the total logged wave count?",
    n1: 3240, n2: 4180, n3: 1950,
    unit: "waves"
  },
  {
    t: "Regional Demographics",
    q: "A municipal report details the populations of three villages: \\\\( 12850 \\\\) residents, \\\\( 15600 \\\\) residents, and \\\\( 9450 \\\\) residents. Find the total combined population.",
    n1: 12850, n2: 15600, n3: 9450,
    unit: "residents"
  },
  {
    t: "Air Fleet Logistics",
    q: "A freight airline's cargo planes transported \\\\( 184500 \\\\) kg, \\\\( 212900 \\\\) kg, and \\\\( 93800 \\\\) kg of industrial machinery in a month. Calculate the total cargo weight.",
    n1: 184500, n2: 212900, n3: 93800,
    unit: "kg"
  },
  {
    t: "Hydropower Inflow",
    q: "A high-altitude dam logs water inflows of \\\\( 14500 \\\\) L/s, \\\\( 18900 \\\\) L/s, and \\\\( 7250 \\\\) L/s from three mountain creeks. Find the total water inflow rate.",
    n1: 14500, n2: 18900, n3: 7250,
    unit: "L/s"
  },
  {
    t: "Crypto Transaction Hash",
    q: "A blockchain explorer records three smart contract transactions with gas costs of \\\\( 15400 \\\\) units, \\\\( 22800 \\\\) units, and \\\\( 4950 \\\\) units. What is the total gas consumed?",
    n1: 15400, n2: 22800, n3: 4950,
    unit: "units"
  },
  {
    t: "Cloud Server Bandwidth",
    q: "A cloud database server handles three network streams of \\\\( 6800 \\\\) GB, \\\\( 12450 \\\\) GB, and \\\\( 3120 \\\\) GB of asset files. Find the total file data transfer size.",
    n1: 6800, n2: 12450, n3: 3120,
    unit: "GB"
  },
  {
    t: "Power Grid Peak Load",
    q: "A local substation integrates peak currents from three industrial feeders measuring \\\\( 7350 \\\\) A, \\\\( 4890 \\\\) A, and \\\\( 2110 \\\\) A. Find the total peak current.",
    n1: 7350, n2: 4890, n3: 2110,
    unit: "A"
  },
  {
    t: "Archaeological Coin Cache",
    q: "An excavation catalog lists three groups of bronze coins recovered from different levels: \\\\( 450 \\\\) coins, \\\\( 890 \\\\) coins, and \\\\( 125 \\\\) coins. Find the total coin count.",
    n1: 450, n2: 890, n3: 125,
    unit: "coins"
  },
  {
    t: "High-Speed Transit Daily",
    q: "A high-speed rail line logs passenger boardings of \\\\( 14200 \\\\), \\\\( 16800 \\\\), and \\\\( 9350 \\\\) across three stations on Tuesday. Calculate the total boardings.",
    n1: 14200, n2: 16800, n3: 9350,
    unit: "boardings"
  },
  {
    t: "Reef Survey Count",
    q: "Marine ecologists tracking sea turtles record three regional nesting counts: \\\\( 3560 \\\\), \\\\( 2840 \\\\), and \\\\( 1120 \\\\) nests. Calculate the total sea turtle nests recorded.",
    n1: 3560, n2: 2840, n3: 1120,
    unit: "nests"
  },
  {
    t: "Cable Segment Assembly",
    q: "A power transmission installation uses three sections of insulated copper wire measuring \\\\( 850 \\\\) m, \\\\( 925 \\\\) m, and \\\\( 430 \\\\) m. Calculate the total transmission line length.",
    n1: 850, n2: 925, n3: 430,
    unit: "m"
  },
  {
    t: "Forest Sapling Plantation",
    q: "A regional reforestation agency coordinates planting of three native species: \\\\( 12500 \\\\) maples, \\\\( 9800 \\\\) firs, and \\\\( 6450 \\\\) birches. Find the total tree count.",
    n1: 12500, n2: 9800, n3: 6450,
    unit: "trees"
  },
  {
    t: "Sports Spectator Gates",
    q: "A major stadium reports gate entries from three security checkpoints: Gate A (\\\\( 8560 \\\\)), Gate B (\\\\( 11240 \\\\)), and Gate C (\\\\( 6800 \\\\)). Solve for the total entries.",
    n1: 8560, n2: 11240, n3: 6800,
    unit: "entries"
  },
  {
    t: "Manuscript Archive Scan",
    q: "A digital library scans three book collections containing \\\\( 3250 \\\\) books, \\\\( 4890 \\\\) books, and \\\\( 1560 \\\\) books. Determine the total books digitized.",
    n1: 3250, n2: 4890, n3: 1560,
    unit: "books"
  },
  {
    t: "Industrial Solvent Blend",
    q: "A production batch requires combining three vats of chemical solvent holding \\\\( 8950 \\\\) L, \\\\( 12400 \\\\) L, and \\\\( 5250 \\\\) L. Find the total solvent volume.",
    n1: 8950, n2: 12400, n3: 5250,
    unit: "L"
  },
  {
    t: "Hash Token Ledger",
    q: "A distributed database logs three block updates containing \\\\( 5400 \\\\) records, \\\\( 8192 \\\\) records, and \\\\( 2048 \\\\) records. Solve for the total number of records.",
    n1: 5400, n2: 8192, n3: 2048,
    unit: "records"
  },
  {
    t: "Launch Vehicle Fuel",
    q: "A rocket propellant loading sequence pumps \\\\( 45800 \\\\) kg of oxygen, \\\\( 24900 \\\\) kg of kerosene, and \\\\( 3850 \\\\) kg of nitrogen gas. Determine the total propellant load.",
    n1: 45800, n2: 24900, n3: 3850,
    unit: "kg"
  },
  {
    t: "Vaccine Vial Depot",
    q: "A distribution hub logs vaccine shipments containing \\\\( 18900 \\\\) Pfizer, \\\\( 22400 \\\\) Moderna, and \\\\( 9350 \\\\) Novavax vials. What is the total number of vials logged?",
    n1: 18900, n2: 22400, n3: 9350,
    unit: "vials"
  },
  {
    t: "Micro-Tremor Catalog",
    q: "A seismic station logs micro-quakes across three regional fault lines: Fault A (\\\\( 1250 \\\\)), Fault B (\\\\( 1890 \\\\)), and Fault C (\\\\( 640 \\\\)). Find the total logged tremors.",
    n1: 1250, n2: 1890, n3: 640,
    unit: "tremors"
  },
  {
    t: "Seed Vault Accession",
    q: "A global seed bank registers crop seed packs containing \\\\( 35000 \\\\) wheat, \\\\( 48000 \\\\) rice, and \\\\( 12500 \\\\) maize varieties. Find the total number of seed packs.",
    n1: 35000, n2: 48000, n3: 12500,
    unit: "seed packs"
  },
  {
    t: "Wind Farm Grid Peak",
    q: "A regional wind network logs peak hourly yields from three offshore locations: \\\\( 145 \\\\) MW, \\\\( 230 \\\\) MW, and \\\\( 85 \\\\) MW. Calculate the total peak offshore yield.",
    n1: 145, n2: 230, n3: 85,
    unit: "MW"
  },
  {
    t: "Wool Raw Material Weight",
    q: "A spinning mill logs three bales of fine merino wool weighing \\\\( 12800 \\\\) g, \\\\( 15600 \\\\) g, and \\\\( 9250 \\\\) g. Determine the total wool batch weight.",
    n1: 12800, n2: 15600, n3: 9250,
    unit: "g"
  },
  {
    t: "Steel Casting Foundry",
    q: "A blast furnace pours three batches of cast iron weighing \\\\( 5240 \\\\) kg, \\\\( 8950 \\\\) kg, and \\\\( 3120 \\\\) kg. Calculate the total cast iron yield.",
    n1: 5240, n2: 8950, n3: 3120,
    unit: "kg"
  },
  {
    t: "Marine Survey Coral",
    q: "Marine biologists catalog coral structures in three survey sectors: Sector A (\\\\( 1450 \\\\)), Sector B (\\\\( 2280 \\\\)), and Sector C (\\\\( 890 \\\\)). Find the total cataloged structures.",
    n1: 1450, n2: 2280, n3: 890,
    unit: "structures"
  },
  {
    t: "Computer Task Core Allocation",
    q: "A grid network coordinates job execution using \\\\( 8192 \\\\) virtual CPUs, \\\\( 4096 \\\\) virtual CPUs, and \\\\( 2048 \\\\) virtual CPUs. Find the total virtual CPU allocation.",
    n1: 8192, n2: 4096, n3: 2048,
    unit: "virtual CPUs"
  },
  {
    t: "Offshore Buoy Wave Count",
    q: "An offshore beacon logs wave cycles over three intervals: \\\\( 3240 \\\\) cycles, \\\\( 4180 \\\\) cycles, and \\\\( 1950 \\\\) cycles. Solve for the total logged wave cycles.",
    n1: 3240, n2: 4180, n3: 1950,
    unit: "cycles"
  },
  {
    t: "Rural Settlement Population",
    q: "A regional board compiles demographic counts for three rural districts: District A (\\\\( 12850 \\\\)), District B (\\\\( 15600 \\\\)), and District C (\\\\( 9450 \\\\)). Find the total count.",
    n1: 12850, n2: 15600, n3: 9450,
    unit: "residents"
  },
  {
    t: "Cargo Fleet Capacity Weight",
    q: "A freighter shipping firm transports cargo batches weighing \\\\( 184500 \\\\) tonnes, \\\\( 212900 \\\\) tonnes, and \\\\( 93800 \\\\) tonnes. What is the total cargo weight transported?",
    n1: 184500, n2: 212900, n3: 93800,
    unit: "tonnes"
  },
  {
    t: "Stream Flow Rate Total",
    q: "Hydrologists measure discharge rates of three streams entering a lake: Stream A (\\\\( 14500 \\\\) L/min), Stream B (\\\\( 18900 \\\\) L/min), and Stream C (\\\\( 7250 \\\\) L/min). Find the total discharge.",
    n1: 14500, n2: 18900, n3: 7250,
    unit: "L/min"
  },
  {
    t: "Gas Network Pressure",
    q: "An inspector logs pipeline gas volumes of \\\\( 15400 \\\\) cubic feet, \\\\( 22800 \\\\) cubic feet, and \\\\( 4950 \\\\) cubic feet across three storage vaults. Calculate the total volume.",
    n1: 15400, n2: 22800, n3: 4950,
    unit: "cubic feet"
  },
  {
    t: "Data Storage Logs",
    q: "A log collector system aggregates data logs size: \\\\( 6800 \\\\) files, \\\\( 12450 \\\\) files, and \\\\( 3120 \\\\) files from different applications. Calculate the total number of log files.",
    n1: 6800, n2: 12450, n3: 3120,
    unit: "files"
  },
  {
    t: "Electric Substation Peak Load",
    q: "An electrical grid logs peak currents of \\\\( 7350 \\\\) amperes, \\\\( 4890 \\\\) amperes, and \\\\( 2110 \\\\) amperes across three transformers. Determine the total combined peak current.",
    n1: 7350, n2: 4890, n3: 2110,
    unit: "amperes"
  },
  {
    t: "Museum Artifact Coins",
    q: "A museum displays three collections of gold coins: Collection A (\\\\( 450 \\\\) coins), Collection B (\\\\( 890 \\\\) coins), and Collection C (\\\\( 125 \\\\) coins). Find the total coin display count.",
    n1: 450, n2: 890, n3: 125,
    unit: "coins"
  },
  {
    t: "Passenger Station Transit Boardings",
    q: "An urban transport system counts daily boardings at three key metro stations: \\\\( 14200 \\\\) boardings, \\\\( 16800 \\\\) boardings, and \\\\( 9350 \\\\) boardings. Find the total daily boardings.",
    n1: 14200, n2: 16800, n3: 9350,
    unit: "boardings"
  },
  {
    t: "Offshore Turtle Nests",
    q: "Marine surveyors catalog nesting grounds for green turtles on three islands: Island A (\\\\( 3560 \\\\)), Island B (\\\\( 2840 \\\\)), and Island C (\\\\( 1120 \\\\)). Solve for the total nests.",
    n1: 3560, n2: 2840, n3: 1120,
    unit: "nests"
  },
  {
    t: "Cable Transmission Line Length",
    q: "A utility company lays three sections of submarine high-voltage cable measuring \\\\( 850 \\\\) km, \\\\( 925 \\\\) km, and \\\\( 430 \\\\) km. Calculate the total submarine cable length.",
    n1: 850, n2: 925, n3: 430,
    unit: "km"
  },
  {
    t: "Tree Plantation Reforest Species",
    q: "A municipal reforestation project reports planting three categories of saplings: \\\\( 12500 \\\\) redwoods, \\\\( 9800 \\\\) cedars, and \\\\( 6450 \\\\) hemlocks. Find the total combined saplings.",
    n1: 12500, n2: 9800, n3: 6450,
    unit: "saplings"
  },
  {
    t: "Spectator Stadium Gate Entries",
    q: "A sports arena logs admissions at three major turnstile groups: North (\\\\( 8560 \\\\)), South (\\\\( 11240 \\\\)), and East (\\\\( 6800 \\\\)). Determine the total spectators admitted.",
    n1: 8560, n2: 11240, n3: 6800,
    unit: "spectators"
  },
  {
    t: "Archival Manuscripts Scanner",
    q: "A preservation society catalogs three sets of historical documents containing \\\\( 3250 \\\\), \\\\( 4890 \\\\), and \\\\( 1560 \\\\) pages. Find the total number of document pages.",
    n1: 3250, n2: 4890, n3: 1560,
    unit: "pages"
  },
  {
    t: "Industrial Chemistry Blend Vat",
    q: "A chemical process requires mixing three liquid components holding \\\\( 8950 \\\\) mL, \\\\( 12400 \\\\) mL, and \\\\( 5250 \\\\) mL. Solve for the total chemical mix volume.",
    n1: 8950, n2: 12400, n3: 5250,
    unit: "mL"
  },
  {
    t: "Hash Ledger Database Record",
    q: "A security backup system aggregates three logs containing \\\\( 5400 \\\\), \\\\( 8192 \\\\), and \\\\( 2048 \\\\) entries. Find the total aggregated entries in the backup system.",
    n1: 5400, n2: 8192, n3: 2048,
    unit: "entries"
  },
  {
    t: "Propellant Rocket Loading Oxygen",
    q: "A space vehicle takes three liquid oxygen loads weighing \\\\( 45800 \\\\) kg, \\\\( 24900 \\\\) kg, and \\\\( 3850 \\\\) kg. Calculate the total liquid oxygen weight.",
    n1: 45800, n2: 24900, n3: 3850,
    unit: "kg"
  }
];

// Let's generate the 85 multiple_choice objects
const generatedQuestions = additionScenarios.map((sc, idx) => {
  const sum1 = sc.n1 + sc.n2;
  const total = sum1 + sc.n3;
  const unitStr = sc.isCurrency ? "" : ` ${sc.unit}`;
  const totalStr = sc.isCurrency ? `\\\\\\$${total}` : `${total}`;
  
  // Distractors
  const d1 = total - 100;
  const d2 = total + 100;
  const d3 = total - 10;
  const optsRaw = [total, d1, d2, d3];
  
  // Shuffle or order optsRaw
  const opts = Array.from(new Set(optsRaw)).sort((a, b) => a - b).map(val => {
    return sc.isCurrency ? `\\\\( \\\\$${val} \\\\)` : `\\\\( ${val} \\\\)`;
  });
  
  const correctOpt = sc.isCurrency ? `\\\\( \\\\$${total} \\\\)` : `\\\\( ${total} \\\\)`;

  return {
    id: `y7-1b-h${idx + 16}`,
    type: "multiple_choice",
    difficulty: "hard",
    timeLimit: 120,
    t: sc.t,
    question: sc.q,
    a: correctOpt,
    options: opts,
    solutionSteps: [
      {
        explanation: `Identify the three values from the problem text to sum.`,
        workingOut: `\\\\( ${sc.n1} + ${sc.n2} + ${sc.n3} \\\\)`,
        graphData: null
      },
      {
        explanation: `Add the first two values together first.`,
        workingOut: `\\\\( ${sc.n1} + ${sc.n2} = ${sum1} \\\\)`,
        graphData: null
      },
      {
        explanation: `Add the third value to find the final total sum.`,
        workingOut: `\\\\( ${sum1} + ${sc.n3} = ${total} \\\\)`,
        graphData: null
      }
    ]
  };
});

// Now we read the original file, split it, replace the h16 to h100 questions, and write back.
// The file is structured as:
// export const Y7_CH1B_QUESTIONS = [
//   ... base questions ...
//   ... h16 to h100 questions ...
//   ... h1 to h15 teacher review questions ...
// ];

// Let's parse the file content.
// We can find where `y7-1b-h16` starts and where `y7-1b-h1` starts.
const startIndex = fileContent.indexOf('  {\n    "id": "y7-1b-h16",');
const endIndex = fileContent.indexOf('  {\n    "id": "y7-1b-h1",');

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find start or end index of h16-h100 questions!");
  process.exit(1);
}

const basePart = fileContent.substring(0, startIndex);
const teacherReviewPart = fileContent.substring(endIndex);

// Let's format the generated questions as clean stringified JSON objects.
const generatedString = generatedQuestions.map(q => {
  return `  {\n    "id": "${q.id}",\n    "type": "multiple_choice",\n    "difficulty": "hard",\n    "timeLimit": 120,\n    "t": "${q.t}",\n    "question": "${q.question}",\n    "a": "${q.a}",\n    "options": [\n${q.options.map(o => `      "${o}"`).join(',\n')}\n    ],\n    "solutionSteps": [\n${q.solutionSteps.map(s => `      {\n        "explanation": "${s.explanation}",\n        "workingOut": "${s.workingOut}",\n        "graphData": null\n      }`).join(',\n')}\n    ]\n  }`;
}).join(',\n') + ',\n';

const newFileContent = basePart + generatedString + teacherReviewPart;
writeFileSync(baseFile, newFileContent, 'utf8');
console.log("Successfully regenerated seedYear7Ch1BQuestions.js with 85 non-repetitive addition questions!");
