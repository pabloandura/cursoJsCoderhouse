// request a la api de info actualizada
url = 'https://api.bluelytics.com.ar/v2/latest'

fetch(url)
  .then(response => response.json())
  .then(formatedResponse =>  console.log(formatedResponse))

// valor del dolar blue hasta que entienda como guardar el objeto json
const dolarBlue = 217;
