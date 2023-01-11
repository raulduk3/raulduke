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
    margin-bottom: ${({ theme }) => theme.spacing.s};
    position: absolute;
    top: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
`

export const Hero = styled.div`
    margin-top: 2em;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
    padding: ${({ theme }) => theme.spacing.m};
    padding-bottom: 0;
    p {
        margin: -10px 0 0 0;
    }
    h1 {
        margin-top: 0;
        font-size: 2em;
        word-spacing: 0.1em;
        text-align: center;
    }
    @media (min-width: 769px) {
        margin-top: 1.5em;
    }
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.h1};
    margin-bottom: ${({ theme }) => theme.spacing.s};
`

export const Link = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.p};
    margin: 0.5em ${({ theme }) => theme.spacing.m};
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
    color: ${({ theme }) => theme.colors.primary};
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
        color: ${({ theme }) => theme.colors.primary};
        border: none;
        user-select: none;
        cursor: pointer;
        outline: none;
        text-transform: none;
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
        font-size: 2em;
        font-weight: 100;
        opacity: 1;
        outline: none;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${({ theme }) => theme.spacing.m};
    width: 100%;
    max-width: 1200px;
    margin-top: 0em;
`

export const GridItem = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    img {
        max-width: 100%;
        object-fit: cover;
    }
    h3 {
        font-size: 0.55em;
        height: 20px;
        padding: 0;
        margin: 0;
        text-align: left;
        text-decoration: none;
        font-weight: 500;
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
        width: 16.5vw;
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