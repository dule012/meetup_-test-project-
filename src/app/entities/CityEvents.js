class CityEvents {
    constructor(obj) {
        this.name = obj.name
        this.photo = obj.photo_url === undefined ? 'http://static1.squarespace.com/static/554d713de4b026a2b089edaf/554f483de4b089d79aff6602/5b71b14cb8a045cb527494f8/1534178154115/meetup-logo-script-1200x630.png?format=1000w' : obj.photo_url
        this.description = obj.description === undefined ? '': obj.description
        // this.adress = obj.venue.address_1 === undefined ? '' : obj.venue.address_1
    }
}

export default CityEvents