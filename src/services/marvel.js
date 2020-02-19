
// Api
import { Api } from 'utils/api';

class MarvelService {
    static getCharacters(timestamp, publicKey, hash, nameStartsWith, limit, offset) {
        nameStartsWith = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : '';
        limit = limit ? `&limit=${limit}` : '';
        offset = offset ? `&offset=${offset}` : '';
        return Api.get(`characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}${nameStartsWith + limit + offset}`);
    }

    static getCharacter(idCharacter, timestamp, publicKey, hash) {
        return Api.get(`characters/${idCharacter}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
    }
}

export default MarvelService;