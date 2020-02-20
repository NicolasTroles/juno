// Modules
import React, { useState } from 'react'
import styled from 'styled-components';

// Components
import Button from 'components/Button/Button'
import HeroInfo from './HeroInfo/HeroInfo';

const Wrapper = styled('div')`
    ${({ theme }) => `
        margin-bottom: ${theme.spacing.px40};
        cursor: pointer;
        :hover {
            img {
                transform: scale(1.1) rotate(5deg);
            }
        }
    `}
`;

const MediaCardWrapper = styled('div')`
    ${({ theme }) => `
        background: ${theme.colors.white};
        overflow: hidden;
        position: relative;
        margin-left: ${theme.spacing.px10};
        margin-right: ${theme.spacing.px10};
        border-radius: ${theme.rounded.px10} ${theme.rounded.px10} ${theme.rounded.none} ${theme.rounded.none};
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        border-radius: ${theme.rounded.px10};
    `}
`;

const MediaImage = styled('div')`
    ${({ theme, showImageBg }) => `
        position: relative;
        line-height: 0.8;
        overflow: hidden;
        img {
            width: ${theme.spacing.full};
            height: ${theme.spacing.full};
            transition: all .3s;
        }
    `}
`;

const BodyWrapper = styled('div')`
    ${({ theme }) => `
        position: absolute;
        padding: ${theme.spacing.px12} ${theme.spacing.px16};
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
    `}
`;

const Name = styled('p')`
    ${({ theme }) => `
        padding: ${theme.spacing.px12} ${theme.spacing.px16};
        font-weight: bold;
    `}
`;

function Cards({ hero }) {
    const [showHeroInfo, setShowHeroInfo] = useState(false);

    return (
        <Wrapper>
            <MediaCardWrapper onClick={() => setShowHeroInfo(true)}>
                <Name data-testid={`${hero.id}_name`}>
                    {hero.name}
                </Name>
                <MediaImage>
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} onError={() => { }} />
                </MediaImage>
                <BodyWrapper>
                    <Button fontColor='white' backgroundColor='blue2'>Ver mais</Button>
                </BodyWrapper>
            </MediaCardWrapper>
            {showHeroInfo &&
                <HeroInfo hero={hero} closeModal={() => setShowHeroInfo(false)} />
            }
        </Wrapper>
    )
}

export default Cards
