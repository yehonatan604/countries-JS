const getCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    return await res.json();
}

const countriesFull = await getCountries();
let countries = [...countriesFull];

const search = (name) => {
    countries = countries.filter((item) => {
        return item.name.common.includes(name);
    })
}

const reset = () => {
    countries = [...countriesFull];
}

export { countries, search, reset };
