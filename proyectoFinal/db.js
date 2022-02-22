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
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-04-01') , date:'2016-04-01', value: 16.56},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-05-01') , date:'2016-05-01', value: 16.13},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-06-01') , date:'2016-06-01', value: 16.13},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-07-01') , date:'2016-07-01', value: 16.05},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-08-01') , date:'2016-08-01', value: 16.19},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-09-01') , date:'2016-09-01', value: 16.43},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-10-01') , date:'2016-10-01', value: 16.74},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-11-01') , date:'2016-11-01', value: 16.98},
{id: 'fideosSecos', msFromEpoch: Date.parse('2016-12-01') , date:'2016-12-01', value: 17.11},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-01-01') , date:'2017-01-01', value: 17.23},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-02-01') , date:'2017-02-01', value: 17.84},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-03-01') , date:'2017-03-01', value: 18.12},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-04-01') , date:'2017-04-01', value: 18.52},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-05-01') , date:'2017-05-01', value: 18.78},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-06-01') , date:'2017-06-01', value: 19.08},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-07-01') , date:'2017-07-01', value: 19.53},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-08-01') , date:'2017-08-01', value: 19.73},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-09-01') , date:'2017-09-01', value: 19.86},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-10-01') , date:'2017-10-01', value: 20.13},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-11-01') , date:'2017-11-01', value: 20.34},
{id: 'fideosSecos', msFromEpoch: Date.parse('2017-12-01') , date:'2017-12-01', value: 20.54},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-01-01') , date:'2018-01-01', value: 21.23},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-02-01') , date:'2018-02-01', value: 21.56},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-03-01') , date:'2018-03-01', value: 22.35},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-04-01') , date:'2018-04-01', value: 22.86},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-05-01') , date:'2018-05-01', value: 25.03},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-06-01') , date:'2018-06-01', value: 26.94},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-07-01') , date:'2018-07-01', value: 28.33},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-08-01') , date:'2018-08-01', value: 28.88},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-09-01') , date:'2018-09-01', value: 34.68},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-10-01') , date:'2018-10-01', value: 37.81},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-11-01') , date:'2018-11-01', value: 40.34},
{id: 'fideosSecos', msFromEpoch: Date.parse('2018-12-01') , date:'2018-12-01', value: 41.28},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-01-01') , date:'2019-01-01', value: 42.15},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-02-01') , date:'2019-02-01', value: 43.21},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-03-01') , date:'2019-03-01', value: 43.89},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-04-01') , date:'2019-04-01', value: 46.99},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-05-01') , date:'2019-05-01', value: 48.3},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-06-01') , date:'2019-06-01', value: 48.47},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-07-01') , date:'2019-07-01', value: 49.29},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-08-01') , date:'2019-08-01', value: 49.95},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-09-01') , date:'2019-09-01', value: 51.45},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-10-01') , date:'2019-10-01', value: 52.06},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-11-01') , date:'2019-11-01', value: 53.09},
{id: 'fideosSecos', msFromEpoch: Date.parse('2019-12-01') , date:'2019-12-01', value: 53.79},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-01-01') , date:'2020-01-01', value: 56.92},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-02-01') , date:'2020-02-01', value: 58.85},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-03-01') , date:'2020-03-01', value: 59.15},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-04-01') , date:'2020-04-01', value: 59.79},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-05-01') , date:'2020-05-01', value: 59.1},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-06-01') , date:'2020-06-01', value: 58.07},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-07-01') , date:'2020-07-01', value: 59.54},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-08-01') , date:'2020-08-01', value: 60.08},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-09-01') , date:'2020-09-01', value: 60.37},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-10-01') , date:'2020-10-01', value: 60.39},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-11-01') , date:'2020-11-01', value: 61.54},
{id: 'fideosSecos', msFromEpoch: Date.parse('2020-12-01') , date:'2020-12-01', value: 60.87},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-01-01') , date:'2021-01-01', value: 61.51},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-02-01') , date:'2021-02-01', value: 64.04},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-03-01') , date:'2021-03-01', value: 66.86},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-04-01') , date:'2021-04-01', value: 68.87},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-05-01') , date:'2021-05-01', value: 69.45},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-06-01') , date:'2021-06-01', value: 71.16},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-07-01') , date:'2021-07-01', value: 73.69},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-08-01') , date:'2021-08-01', value: 75.19},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-09-01') , date:'2021-09-01', value: 75.34},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-10-01') , date:'2021-10-01', value: 77.52},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-11-01') , date:'2021-11-01', value: 76.95},
{id: 'fideosSecos', msFromEpoch: Date.parse('2021-12-01') , date:'2021-12-01', value: 78.44}
];

for(let log of FIDEOS){
    let tempLog = new GroundedLog(log.id,log.value) // creamos un log temporal para sobrescribir la Date.now()
    tempLog.order = log.msFromEpoch;
    tempLog.date = log.date;
    fideosSecos.logs.push(tempLog);
}
sessionStorage.setItem('fideos',JSON.stringify(fideosSecos));

