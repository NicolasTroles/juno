// Modules
import React, { } from 'react'
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import StackGrid from 'react-stack-grid';
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types'

// Components
import Card from './Card/Card';

const StackGridStyled = styled(StackGrid)`
    ${({ theme }) => `
        span {
            z-index: 1 !important;
        }
    `}
`;

const Wrapper = styled('div')`
    ${({ theme }) => `
        margin: 30px 0 10px;
`};`

const Align = styled('div')`
    ${({ theme }) => `
        margin: ${theme.spacing.px30} 0;
        display: flex;
        justify-content: center;
`};`



function Cards({ heroes, loading, fetchMoreHeroes }) {

    let currentHeroes = [];

    heroes.forEach((hero, index) => {
        currentHeroes.push(<Card key={index} hero={hero} />);
    })

    return (

        <Wrapper>
            <InfiniteScroll
                dataLength={heroes.length + 1}
                next={fetchMoreHeroes}
                hasMore={true}
                loader={
                    loading &&
                    <Align data-testid='loading'>
                        <BeatLoader
                            size={15}
                            color={'#555'}
                            loading={loading}
                        />
                    </Align>
                }
            >
                <StackGridStyled columnWidth={window.innerWidth <= 400 ? 250 : 305}>{currentHeroes}</StackGridStyled>
            </InfiniteScroll>
        </Wrapper>
    )
}

Cards.propTypes = {
    heroes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchMoreHeroes: PropTypes.func.isRequired,
}

Cards.deafultProps = {
    heroes: [],
    loading: false,
    fetchMoreHeroes: () => { },
}

export default Cards
