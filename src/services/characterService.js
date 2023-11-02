import axios from "axios";

const characterService={
    getOne:(character) => axios.get(character)
}

export {characterService}