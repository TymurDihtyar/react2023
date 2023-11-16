const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes: {
        episodes
    },
    characters: {
        characters,
        byId:(ids)=>`${characters}/${ids}`
    }
}

export {
    baseURL, urls
}