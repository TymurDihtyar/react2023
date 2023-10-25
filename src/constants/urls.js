const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const urls = {
    cars: {
        base: '/cars',
        byId: (id) => `/cars/${id}`
    }
}
export {baseURL, urls}