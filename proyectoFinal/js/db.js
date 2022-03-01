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

const POLLO = [
{id: 'pollo', msFromEpoch: Date.parse('2016-04-01'), date:'2016-04-01', value: 34.990},
{id: 'pollo', msFromEpoch: Date.parse('2016-05-01'), date:'2016-05-01', value: 33.360},
{id: 'pollo', msFromEpoch: Date.parse('2016-06-01'), date:'2016-06-01', value: 33.230},
{id: 'pollo', msFromEpoch: Date.parse('2016-07-01'), date:'2016-07-01', value: 32.950},
{id: 'pollo', msFromEpoch: Date.parse('2016-08-01'), date:'2016-08-01', value: 34.390},
{id: 'pollo', msFromEpoch: Date.parse('2016-09-01'), date:'2016-09-01', value: 35.140},
{id: 'pollo', msFromEpoch: Date.parse('2016-10-01'), date:'2016-10-01', value: 36.140},
{id: 'pollo', msFromEpoch: Date.parse('2016-11-01'), date:'2016-11-01', value: 35.850},
{id: 'pollo', msFromEpoch: Date.parse('2016-12-01'), date:'2016-12-01', value: 37.290},
{id: 'pollo', msFromEpoch: Date.parse('2017-01-01'), date:'2017-01-01', value: 34.880},
{id: 'pollo', msFromEpoch: Date.parse('2017-02-01'), date:'2017-02-01', value: 34.730},
{id: 'pollo', msFromEpoch: Date.parse('2017-03-01'), date:'2017-03-01', value: 38.490},
{id: 'pollo', msFromEpoch: Date.parse('2017-04-01'), date:'2017-04-01', value: 37.130},
{id: 'pollo', msFromEpoch: Date.parse('2017-05-01'), date:'2017-05-01', value: 35.610},
{id: 'pollo', msFromEpoch: Date.parse('2017-06-01'), date:'2017-06-01', value: 34.450},
{id: 'pollo', msFromEpoch: Date.parse('2017-07-01'), date:'2017-07-01', value: 35.510},
{id: 'pollo', msFromEpoch: Date.parse('2017-08-01'), date:'2017-08-01', value: 36.210},
{id: 'pollo', msFromEpoch: Date.parse('2017-09-01'), date:'2017-09-01', value: 38.570},
{id: 'pollo', msFromEpoch: Date.parse('2017-10-01'), date:'2017-10-01', value: 39.300},
{id: 'pollo', msFromEpoch: Date.parse('2017-11-01'), date:'2017-11-01', value: 38.190},
{id: 'pollo', msFromEpoch: Date.parse('2017-12-01'), date:'2017-12-01', value: 39.630},
{id: 'pollo', msFromEpoch: Date.parse('2018-01-01'), date:'2018-01-01', value: 41.780},
{id: 'pollo', msFromEpoch: Date.parse('2018-02-01'), date:'2018-02-01', value: 45.320},
{id: 'pollo', msFromEpoch: Date.parse('2018-03-01'), date:'2018-03-01', value: 47.360},
{id: 'pollo', msFromEpoch: Date.parse('2018-04-01'), date:'2018-04-01', value: 44.750},
{id: 'pollo', msFromEpoch: Date.parse('2018-05-01'), date:'2018-05-01', value: 44.040},
{id: 'pollo', msFromEpoch: Date.parse('2018-06-01'), date:'2018-06-01', value: 46.500},
{id: 'pollo', msFromEpoch: Date.parse('2018-07-01'), date:'2018-07-01', value: 47.410},
{id: 'pollo', msFromEpoch: Date.parse('2018-08-01'), date:'2018-08-01', value: 51.580},
{id: 'pollo', msFromEpoch: Date.parse('2018-09-01'), date:'2018-09-01', value: 59.710},
{id: 'pollo', msFromEpoch: Date.parse('2018-10-01'), date:'2018-10-01', value: 61.370},
{id: 'pollo', msFromEpoch: Date.parse('2018-11-01'), date:'2018-11-01', value: 62.770},
{id: 'pollo', msFromEpoch: Date.parse('2018-12-01'), date:'2018-12-01', value: 64.280},
{id: 'pollo', msFromEpoch: Date.parse('2019-01-01'), date:'2019-01-01', value: 66.320},
{id: 'pollo', msFromEpoch: Date.parse('2019-02-01'), date:'2019-02-01', value: 72.080},
{id: 'pollo', msFromEpoch: Date.parse('2019-03-01'), date:'2019-03-01', value: 90.410},
{id: 'pollo', msFromEpoch: Date.parse('2019-04-01'), date:'2019-04-01', value: 91.780},
{id: 'pollo', msFromEpoch: Date.parse('2019-05-01'), date:'2019-05-01', value: 84.650},
{id: 'pollo', msFromEpoch: Date.parse('2019-06-01'), date:'2019-06-01', value: 84.000},
{id: 'pollo', msFromEpoch: Date.parse('2019-07-01'), date:'2019-07-01', value: 80.720},
{id: 'pollo', msFromEpoch: Date.parse('2019-08-01'), date:'2019-08-01', value: 83.880},
{id: 'pollo', msFromEpoch: Date.parse('2019-09-01'), date:'2019-09-01', value: 95.890},
{id: 'pollo', msFromEpoch: Date.parse('2019-10-01'), date:'2019-10-01', value: 98.320},
{id: 'pollo', msFromEpoch: Date.parse('2019-11-01'), date:'2019-11-01', value: 101.17},
{id: 'pollo', msFromEpoch: Date.parse('2019-12-01'), date:'2019-12-01', value: 102.48},
{id: 'pollo', msFromEpoch: Date.parse('2020-01-01'), date:'2020-01-01', value: 107.04},
{id: 'pollo', msFromEpoch: Date.parse('2020-02-01'), date:'2020-02-01', value: 108.47},
{id: 'pollo', msFromEpoch: Date.parse('2020-03-01'), date:'2020-03-01', value: 118.62},
{id: 'pollo', msFromEpoch: Date.parse('2020-04-01'), date:'2020-04-01', value: 118.37},
{id: 'pollo', msFromEpoch: Date.parse('2020-05-01'), date:'2020-05-01', value: 111.93},
{id: 'pollo', msFromEpoch: Date.parse('2020-06-01'), date:'2020-06-01', value: 111.67},
{id: 'pollo', msFromEpoch: Date.parse('2020-07-01'), date:'2020-07-01', value: 114.78},
{id: 'pollo', msFromEpoch: Date.parse('2020-08-01'), date:'2020-08-01', value: 119.25},
{id: 'pollo', msFromEpoch: Date.parse('2020-09-01'), date:'2020-09-01', value: 122.10},
{id: 'pollo', msFromEpoch: Date.parse('2020-10-01'), date:'2020-10-01', value: 132.42},
{id: 'pollo', msFromEpoch: Date.parse('2020-11-01'), date:'2020-11-01', value: 133.55},
{id: 'pollo', msFromEpoch: Date.parse('2020-12-01'), date:'2020-12-01', value: 154.99},
{id: 'pollo', msFromEpoch: Date.parse('2021-01-01'), date:'2021-01-01', value: 160.99},
{id: 'pollo', msFromEpoch: Date.parse('2021-02-01'), date:'2021-02-01', value: 168.60},
{id: 'pollo', msFromEpoch: Date.parse('2021-03-01'), date:'2021-03-01', value: 175.11},
{id: 'pollo', msFromEpoch: Date.parse('2021-04-01'), date:'2021-04-01', value: 178.41},
{id: 'pollo', msFromEpoch: Date.parse('2021-05-01'), date:'2021-05-01', value: 180.57},
{id: 'pollo', msFromEpoch: Date.parse('2021-06-01'), date:'2021-06-01', value: 190.58},
{id: 'pollo', msFromEpoch: Date.parse('2021-07-01'), date:'2021-07-01', value: 193.66},
{id: 'pollo', msFromEpoch: Date.parse('2021-08-01'), date:'2021-08-01', value: 198.66},
{id: 'pollo', msFromEpoch: Date.parse('2021-09-01'), date:'2021-09-01', value: 205.53},
{id: 'pollo', msFromEpoch: Date.parse('2021-10-01'), date:'2021-10-01', value: 208.68},
{id: 'pollo', msFromEpoch: Date.parse('2021-11-01'), date:'2021-11-01', value: 217.62},
{id: 'pollo', msFromEpoch: Date.parse('2021-12-01'), date:'2021-12-01', value: 223.64}
];

for(let log of FIDEOS){
    let tempLog = new GroundedLog(log.id,log.value) // creamos un log temporal para sobrescribir la Date.now()
    tempLog.order = log.msFromEpoch;
    tempLog.date = log.date;
    fideosSecos.logs.push(tempLog);
}
sessionStorage.setItem('fideos',JSON.stringify(fideosSecos));

for(let log of POLLO){
    let tempLog = new GroundedLog(log.id,log.value) // creamos un log temporal para sobrescribir la Date.now()
    tempLog.order = log.msFromEpoch;
    tempLog.date = log.date;
    pollo.logs.push(tempLog);
}
sessionStorage.setItem('pollo',JSON.stringify(pollo));