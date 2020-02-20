// Modules
import React from 'react'
import styled from 'styled-components';

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
                    <p data-testid={`${hero.id}_description`}>
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
                        <a data-testid={`${hero.id}_quadrinhos`} href={comics.url} target='_blank'>
                            <strong>Quadrinhos</strong>
                        </a>
                        <br />
                    </>
                }

                {!!hero.urls.some(item => item.type === 'wiki') &&
                    <>
                        <a data-testid={`${hero.id}_biografia`} href={hero.urls.find(item => item.type === 'wiki').url} target='_blank'>
                            <strong>Biografia</strong>
                        </a>
                        <br />
                    </>
                }

                {!!hero.series.returned &&
                    <p data-testid={`${hero.id}_series`}>
                        <strong>Algumas séries ({hero.series.returned}): </strong><br />
                        {hero.series.items.map((item, index) => <span key={index}>{index > 0 && `, `}{item.name}</span>)}
                    </p>
                }

                {!!hero.stories.returned &&
                    <p data-testid={`${hero.id}_stories`}>
                        <strong>Algumas estórias ({hero.stories.returned}): </strong><br />
                        {hero.stories.items.map((item, index) => <span key={index}>{index > 0 && `, `}{item.name}</span>)}
                    </p>
                }

                {!!hero.events.returned &&
                    <p data-testid={`${hero.id}_event`}>
                        <strong>Alguns eventos ({hero.events.returned}): </strong><br />
                        {hero.events.items.map((item, index) => <span key={index}>{index > 0 && `, `}{item.name}</span>)}
                    </p>
                }
            </ContainerModal>
        </Modal>
    )
}

export default HeroInfo
