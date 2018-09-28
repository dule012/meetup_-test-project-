import Cities from '../entities/Cities'

const fetchCities = () => {
    return fetch('https://cors-anywhere.herokuapp.com/api.meetup.com/2/cities?&sign=true&photo-host=public&country=rs&radius=10&page=70')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return data.results.map((el) => {
                return new Cities(el)
            })
        })
}

export default fetchCities