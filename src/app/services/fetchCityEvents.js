import CityEvents from '../entities/CityEvents'

const fetchCityEvents = () => {
    return fetch(`https://cors-anywhere.herokuapp.com/api.meetup.com/2/concierge?country=rs&offset=0&city=belgrade&format=json&photo-host=public&page=500&radius=10&sig_id=264213508&sig=8e3309e46260e6663549b378f1983b9f0ed6a1e0`)
        .then((data) => {
    return data.json()
})
    .then((data) => {
        return data.results.map((el) => {
            return new CityEvents(el)
        })
    })
}

export default fetchCityEvents