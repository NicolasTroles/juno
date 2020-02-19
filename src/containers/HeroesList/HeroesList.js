// Modules
import React, { useState, useEffect, useReducer } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { translate } from 'react-translate';
import CryptoJS from 'crypto-js';

// Components
import FindCharacter from './FindCharacter/FindCharacter';
import Cards from './Cards/Cards';

// Utils
import { publicKey, privateKey } from 'utils/keys';

// Services
import MarvelService from 'services/marvel'

const NotFound = styled('div')`
    ${({ theme }) => `
        text-align: center;
        margin: ${theme.spacing.px30} 0;
        font-weight: bold;
    `}
`;

function HeroesList() {
    const [heroes, setHeroes] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nameStartsWith, setNameStartsWith] = useState('');
    const [offset, setOffset] = useState(12);
    const [_, forceUpdate] = useReducer(x => x + 1, 0);

    const timestamp = new Date().getTime();
    const info = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(info).toString(CryptoJS.enc.Hex);

    useEffect(() => {
        fetchHeroes();
    }, []);

    useEffect(() => {
        // Utilizado para o stackgrid detectar a mudança da altura da imagem caso ainda não tenha renderizado
        const updateThreeTimes = async () => {
            for (let i = 0; i < 3; i++) {
                await sleep(2000);
                forceUpdate();
            }
        };

        const sleep = ms => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
        updateThreeTimes();
    }, [heroes]);

    const fetchHeroes = async (nameStartsWith) => {
        setLoading(true);
        try {
            const response = await MarvelService.getCharacters(timestamp, publicKey, hash, nameStartsWith, 12);
            setHeroes(response.data.data.results);
            if (!response.data.data.results.length) {
                setNotFound(true);
            }
        } catch (e) {
            setHeroes([]);
        }
        setLoading(false);
    }

    const fetchMoreHeroes = async () => {
        setLoading(true);
        try {
            const response = await MarvelService.getCharacters(timestamp, publicKey, hash, nameStartsWith, 12, offset + 12);
            setHeroes([...heroes, ...response.data.data.results]);
            setOffset(offset + 12);
        } catch (e) {
            setHeroes([]);
        }
        setLoading(false);
    }

    const searchCharacter = search => {
        setHeroes([]);
        setNameStartsWith(search);
        setOffset(12);
        setNotFound(false);
        fetchHeroes(search, 12);
    }

    return (<>
        <FindCharacter searchCharacter={searchCharacter} />
        {notFound ?
            <NotFound>Não foram encontrados heróis com este nome</NotFound>
            :
            <Cards heroes={heroes} fetchMoreHeroes={fetchMoreHeroes} loading={loading} />
        }
    </>)
}

function mapStateToProps(state) {
    return {
        authenticationReducer: state.authenticationReducer,
    }
}

export default translate('Header')(connect(mapStateToProps)(HeroesList));
