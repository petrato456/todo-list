import styled from 'styled-components'


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 200px;

    background-color: ${props => props.theme.colors.background_header};

    padding: 72px 0 80px 0;
`

export const Search = styled.div`
    p {

        &.concluded {
            color: red;
        }
    }
`