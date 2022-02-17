sessionStorage.clear();
localStorage.clear();

// creamos nuestros objetos a observar
const fideosSecos = new GroundedItem('fideosSecos');
const pollo = new GroundedItem('pollo');
const azucar = new GroundedItem('azucar');
// creamos una lista de nuestros objetos a observar
const ITEMS = [];
ITEMS.push(fideosSecos);
ITEMS.push(pollo);
ITEMS.push(azucar);

const FIDEOS = [
{id: 'fideosSecos', msFromEpoch: Date.parse('04-01-2016') , value: 16.56},
{id: 'fideosSecos', msFromEpoch: Date.parse('05-01-2016') , value: 16.13},
{id: 'fideosSecos', msFromEpoch: Date.parse('06-01-2016') , value: 16.13},
{id: 'fideosSecos', msFromEpoch: Date.parse('07-01-2016') , value: 16.05},
{id: 'fideosSecos', msFromEpoch: Date.parse('08-01-2016') , value: 16.19},
{id: 'fideosSecos', msFromEpoch: Date.parse('09-01-2016') , value: 16.43},
{id: 'fideosSecos', msFromEpoch: Date.parse('10-01-2016') , value: 16.74},
{id: 'fideosSecos', msFromEpoch: Date.parse('11-01-2016') , value: 16.98},
{id: 'fideosSecos', msFromEpoch: Date.parse('12-01-2016') , value: 17.11},
{id: 'fideosSecos', msFromEpoch: Date.parse('01-01-2017')	, value: 17.23},
{id: 'fideosSecos', msFromEpoch: Date.parse('02-01-2017')	, value: 17.84},
{id: 'fideosSecos', msFromEpoch: Date.parse('03-01-2017')	, value: 18.12},
{id: 'fideosSecos', msFromEpoch: Date.parse('04-01-2017')	, value: 18.52},
{id: 'fideosSecos', msFromEpoch: Date.parse('05-01-2017')	, value: 18.78},
{id: 'fideosSecos', msFromEpoch: Date.parse('06-01-2017')	, value: 19.08},
{id: 'fideosSecos', msFromEpoch: Date.parse('07-01-2017')	, value: 19.53},
{id: 'fideosSecos', msFromEpoch: Date.parse('08-01-2017')	, value: 19.73},
{id: 'fideosSecos', msFromEpoch: Date.parse('09-01-2017')	, value: 19.86},
{id: 'fideosSecos', msFromEpoch: Date.parse('10-01-2017') , value: 20.13},
{id: 'fideosSecos', msFromEpoch: Date.parse('11-01-2017') , value: 20.34},
{id: 'fideosSecos', msFromEpoch: Date.parse('12-01-2017') , value: 20.54},
{id: 'fideosSecos', msFromEpoch: Date.parse('01-01-2018')	, value: 21.23},
{id: 'fideosSecos', msFromEpoch: Date.parse('02-01-2018')	, value: 21.56},
{id: 'fideosSecos', msFromEpoch: Date.parse('03-01-2018')	, value: 22.35},
{id: 'fideosSecos', msFromEpoch: Date.parse('04-01-2018')	, value: 22.86},
{id: 'fideosSecos', msFromEpoch: Date.parse('05-01-2018')	, value: 25.03},
{id: 'fideosSecos', msFromEpoch: Date.parse('06-01-2018')	, value: 26.94},
{id: 'fideosSecos', msFromEpoch: Date.parse('07-01-2018')	, value: 28.33},
{id: 'fideosSecos', msFromEpoch: Date.parse('08-01-2018')	, value: 28.88},
{id: 'fideosSecos', msFromEpoch: Date.parse('09-01-2018')	, value: 34.68},
{id: 'fideosSecos', msFromEpoch: Date.parse('10-01-2018') , value: 37.81},
{id: 'fideosSecos', msFromEpoch: Date.parse('11-01-2018') , value: 40.34},
{id: 'fideosSecos', msFromEpoch: Date.parse('12-01-2018') , value: 41.28},
{id: 'fideosSecos', msFromEpoch: Date.parse('01-01-2019')	, value: 42.15},
{id: 'fideosSecos', msFromEpoch: Date.parse('02-01-2019')	, value: 43.21},
{id: 'fideosSecos', msFromEpoch: Date.parse('03-01-2019')	, value: 43.89},
{id: 'fideosSecos', msFromEpoch: Date.parse('04-01-2019')	, value: 46.99},
{id: 'fideosSecos', msFromEpoch: Date.parse('05-01-2019')	, value: 48.3},
{id: 'fideosSecos', msFromEpoch: Date.parse('06-01-2019')	, value: 48.47},
{id: 'fideosSecos', msFromEpoch: Date.parse('07-01-2019')	, value: 49.29},
{id: 'fideosSecos', msFromEpoch: Date.parse('08-01-2019')	, value: 49.95},
{id: 'fideosSecos', msFromEpoch: Date.parse('09-01-2019')	, value: 51.45},
{id: 'fideosSecos', msFromEpoch: Date.parse('10-01-2019') , value: 52.06},
{id: 'fideosSecos', msFromEpoch: Date.parse('11-01-2019') , value: 53.09},
{id: 'fideosSecos', msFromEpoch: Date.parse('12-01-2019') , value: 53.79},
{id: 'fideosSecos', msFromEpoch: Date.parse('01-01-2020')	, value: 56.92},
{id: 'fideosSecos', msFromEpoch: Date.parse('02-01-2020')	, value: 58.85},
{id: 'fideosSecos', msFromEpoch: Date.parse('03-01-2020')	, value: 59.15},
{id: 'fideosSecos', msFromEpoch: Date.parse('04-01-2020')	, value: 59.79},
{id: 'fideosSecos', msFromEpoch: Date.parse('05-01-2020')	, value: 59.1},
{id: 'fideosSecos', msFromEpoch: Date.parse('06-01-2020')	, value: 58.07},
{id: 'fideosSecos', msFromEpoch: Date.parse('07-01-2020')	, value: 59.54},
{id: 'fideosSecos', msFromEpoch: Date.parse('08-01-2020')	, value: 60.08},
{id: 'fideosSecos', msFromEpoch: Date.parse('09-01-2020')	, value: 60.37},
{id: 'fideosSecos', msFromEpoch: Date.parse('10-01-2020') , value: 60.39},
{id: 'fideosSecos', msFromEpoch: Date.parse('11-01-2020') , value: 61.54},
{id: 'fideosSecos', msFromEpoch: Date.parse('12-01-2020') , value: 60.87},
{id: 'fideosSecos', msFromEpoch: Date.parse('01-01-2021')	, value: 61.51},
{id: 'fideosSecos', msFromEpoch: Date.parse('02-01-2021')	, value: 64.04},
{id: 'fideosSecos', msFromEpoch: Date.parse('03-01-2021')	, value: 66.86},
{id: 'fideosSecos', msFromEpoch: Date.parse('04-01-2021')	, value: 68.87},
{id: 'fideosSecos', msFromEpoch: Date.parse('05-01-2021')	, value: 69.45},
{id: 'fideosSecos', msFromEpoch: Date.parse('06-01-2021')	, value: 71.16},
{id: 'fideosSecos', msFromEpoch: Date.parse('07-01-2021')	, value: 73.69},
{id: 'fideosSecos', msFromEpoch: Date.parse('08-01-2021')	, value: 75.19},
{id: 'fideosSecos', msFromEpoch: Date.parse('09-01-2021')	, value: 75.34},
{id: 'fideosSecos', msFromEpoch: Date.parse('10-01-2021') , value: 77.52},
{id: 'fideosSecos', msFromEpoch: Date.parse('11-01-2021') , value: 76.95},
{id: 'fideosSecos', msFromEpoch: Date.parse('12-01-2021') , value: 78.44}
];

for(let log of FIDEOS){
    let tempLog = new GroundedLog(log.id,log.value) // creamos un log temporal para sobrescribir la Date.now()
    tempLog.date = log.msFromEpoch;
    fideosSecos.logs.push(tempLog);
}

sessionStorage.setItem('fideos',JSON.stringify(fideosSecos));

