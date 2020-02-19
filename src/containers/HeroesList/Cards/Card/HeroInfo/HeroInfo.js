// Modules
import React, { useEffect } from 'react'
import styled from 'styled-components';
import CryptoJS from 'crypto-js';

// Components
import Modal from 'components/Modal/Modal';

const ContainerModal = styled('div')`
    ${({ theme }) => `
        padding: ${theme.spacing.px30} ${theme.spacing.px50};
        p, a {
            margin: ${theme.spacing.px10} 0;
        }
    `}
`;

function HeroInfo({ closeModal, hero }) {
    const comics = hero.urls.find(item => item.type === 'detail') || hero.urls.find(item => item.type === 'comiclink');

    return (
        <Modal
            visible={true}
            effect='fadeInDown'
            width={530}
            onClickAway={closeModal}
            title={hero.name}
            noFooter
            iconClose={['fal', 'times']}
        >
            <ContainerModal>
                {hero.description &&
                    <p>
                        <strong>Descrição</strong><br />
                        {hero.description}
                    </p>
                }

                {/* {!!hero.comics.returned &&
                    <p>
                        <strong>Alguns quadrinhos ({hero.comics.returned}): </strong><br />
                        {hero.comics.items.map((item, index) => <>{index > 0 && `, `}{item.name}</>)}
                    </p>
                } */}

                {comics &&
                    <>
                        <a href={comics.url} target='_blank'>
                            <strong>Quadrinhos</strong>
                        </a>
                        <br />
                    </>
                }

                {!!hero.urls.some(item => item.type === 'wiki') &&
                    <>
                        <a href={hero.urls.find(item => item.type === 'wiki').url} target='_blank'>
                            <strong>Biografia</strong>
                        </a>
                        <br />
                    </>
                }

                {!!hero.series.returned &&
                    <p>
                        <strong>Algumas séries ({hero.series.returned}): </strong><br />
                        {hero.series.items.map((item, index) => <span key={index}>{index > 0 && `, `}{item.name}</span>)}
                    </p>
                }

                {!!hero.stories.returned &&
                    <p>
                        <strong>Algumas estórias ({hero.stories.returned}): </strong><br />
                        {hero.stories.items.map((item, index) => <span key={index}>{index > 0 && `, `}{item.name}</span>)}
                    </p>
                }

                {!!hero.events.returned &&
                    <p>
                        <strong>Alguns eventos ({hero.events.returned}): </strong><br />
                        {hero.events.items.map((item, index) => <span key={index}>{index > 0 && `, `}{item.name}</span>)}
                    </p>
                }
            </ContainerModal>
        </Modal>
    )
}

export default HeroInfo
