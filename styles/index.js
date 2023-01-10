import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: ${({ theme }) => theme.spacing.s};
`

export const Navigation = styled.nav`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.m} 0;
    margin-bottom: ${({ theme }) => theme.spacing.m};
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
`

export const Hero = styled.div`
    margin-top: 4em;
    margin-bottom: -6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    padding: ${({ theme }) => theme.spacing.m};
    p {
        margin: -10px 0 0 0;
    }
    h1 {
        margin-top: 0;
        word-spacing: 0.35rem;
    }
    @media (min-width: 769px) {
        margin-top: 1em;
    }
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.h1};
    margin-bottom: ${({ theme }) => theme.spacing.s};
`

export const Link = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.p};
    margin: 0 ${({ theme }) => theme.spacing.s};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export const Hamburger = styled.button`
    display: none;
    border: none;
    user-select: none;
    padding: 0;
    margin: 0;
    color: black;
    @media (max-width: 768px) {
        display: block;
        width: 30px;
        height: 30px;
        position: relative;
        cursor: pointer;
        background-color: transparent;
    }
    button {
        position: absolute;
        background-color: transparent;
        color: black;
        border: none;
        user-select: none;
        cursor: pointer;
        outline: none;
    }
`


export const Menu = styled.div.attrs(props => ({
    'open': props.open,
  }))`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: ${({ theme }) => theme.spacing.l};
    z-index: 1;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.2s;
    @media (min-width: 769px) {
        display: none;
    }
    button {
        position: absolute;
        top: ${({ theme }) => theme.spacing.s};
        right: ${({ theme }) => theme.spacing.s};
        font-size: ${({ theme }) => theme.fontSizes.p};
        background: transparent;
        border: none;
        cursor: pointer;
        user-select: none;
        outline: none;
        color: black;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.m};
    width: 100%;
    max-width: 1200px;
`

export const GridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
        max-width: 100%;
        object-fit: cover;
        padding: 0;
    }
    h3 {
        font-size: 0.5em;
        padding: ${({ theme }) => theme.spacing.xs} 0;
        max-height: 20px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const SocialLinksWrapper = styled.div`
    width: 64vw;
    margin-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: ${({ theme }) => theme.spacing.l};
    @media (min-width: 769px) {
        width: 15vw;
    }
`

export const SocialLink = styled.a`
    margin-right: ${({ theme }) => theme.spacing.xs};
    &:last-child {
        margin-right: 0;
    }
    svg {
        color: ${({ theme }) => theme.colors.socialLink};
        transition: color 0.2s ease;
        &:hover {
            color: ${({ theme }) => theme.colors.socialLinkHover};
        }
    }
`

export const FooterWrapper = styled.footer`
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.m};
    font-size: 0.7em;
    position: fixed;
    bottom: 0;
    width: 100%;
    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`