import React from 'react';
import { render, cleanup } from 'test/provider';

import Cards from './Cards';

afterEach(cleanup);

test('<Cards /> - Testando exibição de cards', () => {
    const heroes = [
        {
            "id": 1,
            "name": "3-D Man",
            "description": "",
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
                        "name": "Avengers: The Initiative (2007) #18"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
                        "name": "Marvel Premiere (1972) #35"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
                        "name": "Marvel Premiere (1972) #36"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
                        "name": "Marvel Premiere (1972) #37"
                    }
                ],
                "returned": 12
            },
            "series": {
                "available": 3,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                        "name": "Avengers: The Initiative (2007 - 2010)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
                        "name": "Deadpool (1997 - 2002)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
                        "name": "Marvel Premiere (1972 - 1981)"
                    }
                ],
                "returned": 3
            },
            "stories": {
                "available": 21,
                "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                        "name": "Cover #19947",
                        "type": "cover"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                        "name": "The 3-D Man!",
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
                        "name": "Secret Invasion"
                    }
                ],
                "returned": 1
            },
            "urls": [
                {
                    "type": "detail",
                    "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=d2834d013f6cff8d68227dfa4545b650"
                },
            ]
        },
    ];

    const fetchMoreHeroes = jest.fn();

    const { getByTestId, queryByTestId } = render(<Cards heroes={heroes} loading={false} fetchMoreHeroes={fetchMoreHeroes} />);
    expect(queryByTestId('loading')).toBeFalsy();
});

test('<Cards /> - Testando exibição de loading', () => {

    const fetchMoreHeroes = jest.fn();

    const { getByTestId } = render(<Cards heroes={[]} loading={true} fetchMoreHeroes={fetchMoreHeroes} />);
    expect(getByTestId('loading')).toBeTruthy();
});


// expect(getByTestId('title').textContent).toBe('Identificamos um problema no servidor');
// fireEvent.click(getByTestId('button'));