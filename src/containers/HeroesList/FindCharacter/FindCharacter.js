// Modules
import React, { Component } from 'react'
import styled from 'styled-components';
import { debounce } from 'lodash';

const FieldStyled = styled('input')`
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

class FindCharacter extends Component {
    state = {
        value: '',
    }

    setSearch = value => {
        this.setState({
            value,
        });
        this.searchValue(value);
    };

    searchValue = debounce(value => {
        const { props: { searchCharacter } } = this;
        searchCharacter(value);
    }, 1000)

    render() {
        const { state } = this;
        return (
            <FieldStyled
                name="name"
                id="name"
                type="text"
                value={state.value}
                onChange={e => this.setSearch(e.target.value)}
                placeholder='Qual o nome do personagem?'
            />
        )
    }
}

export default FindCharacter
