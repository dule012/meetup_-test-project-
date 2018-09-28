class CityEvents {
    constructor(obj) {
        this.name = obj.name
        this.photo = obj.photo_url
        this.description = obj.description
        // this.adress = obj.venue.address_1 == undefined ? '' : obj.venue.address_1
    }
}

export default CityEvents