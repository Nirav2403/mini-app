import axios from "axios"

const KEY = 'AIzaSyDdwXv6aWu_LHfKzaa4vJyS8mmirKWFF9g'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})