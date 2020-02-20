import React from 'react';
import { render, cleanup, fireEvent } from 'test/provider';

import Card from './Card';

afterEach(cleanup);

test('<Card /> - Nome do test', () => {
    const hero = {
        "id": 1,
        "name": "3-D Man",
        "description": "Descrição",
        "modified": "2014-04-29T14:18:17-0400",
        "thumbnail": {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
        "comics": {
            "available": 12,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
                    "name": "Quadrinho 1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
                    "name": "Quadrinho 2"
                },
            ],
            "returned": 12
        },
        "series": {
            "available": 3,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                    "name": "Serie 1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
                    "name": "Serie 2"
                },
            ],
            "returned": 2
        },
        "stories": {
            "available": 21,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                    "name": "Storie 1",
                    "type": "cover"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                    "name": "Storie 2",
                    "type": "interiorStory"
                },
            ],
            "returned": 2
        },
        "events": {
            "available": 1,
            "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
            "items": [
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                    "name": "Event 1"
                },
                {
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                    "name": "Event 2"
                }
            ],
            "returned": 2
        },
        "urls": [
            {
                "type": "detail",
                "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=d2834d013f6cff8d68227dfa4545b650"
            },
            {
                "type": "wiki",
                "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=d2834d013f6cff8d68227dfa4545b650"
            },
            {
                "type": "comiclink",
                "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=d2834d013f6cff8d68227dfa4545b650"
            }
        ]

    };

    const { getByTestId, queryByTestId, getByRole } = render(<Card hero={hero} />);

    expect(getByTestId('1_name')).toHaveTextContent('3-D Man');
    expect(getByRole('img')).toHaveAttribute('src', 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg');
    expect(getByRole('button')).toHaveTextContent('Ver mais');
    expect(queryByTestId('1_description')).toBeFalsy();
    fireEvent.click(getByRole('button'));
    expect(getByTestId('1_description')).toHaveTextContent('Descrição');
    expect(getByTestId('1_quadrinhos')).toHaveTextContent('Quadrinhos');
    expect(getByTestId('1_quadrinhos')).toHaveAttribute('href', 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=d2834d013f6cff8d68227dfa4545b650');
    expect(getByTestId('1_biografia')).toHaveTextContent('Biografia');
    expect(getByTestId('1_biografia')).toHaveAttribute('href', 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=d2834d013f6cff8d68227dfa4545b650');
    expect(getByTestId('1_series')).toHaveTextContent('Algumas séries');
    expect(getByTestId('1_series')).toHaveTextContent('Serie 1, Serie 2');
    expect(getByTestId('1_stories')).toHaveTextContent('Algumas estórias');
    expect(getByTestId('1_stories')).toHaveTextContent('Storie 1, Storie 2');
    expect(getByTestId('1_event')).toHaveTextContent('Alguns eventos');
    expect(getByTestId('1_event')).toHaveTextContent('Event 1, Event 2');
    expect(getByTestId('modalTitle')).toHaveTextContent('3-D Man');

    fireEvent.click(getByTestId('closeModalButton'));
    expect(queryByTestId('1_description')).toBeFalsy();
});