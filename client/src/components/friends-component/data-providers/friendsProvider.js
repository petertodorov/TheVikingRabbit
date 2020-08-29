
import ghibliEndpoints from './ghibliEndpoints'
async function friendsProvider() {
    try {
        let request = await fetch(ghibliEndpoints.mainUrl + ghibliEndpoints.friends)
        if (request.status !== 200) return
        let data = await request.json()
        return data
    } catch (error) {
        return console.log(error)

    }
}
export default friendsProvider
