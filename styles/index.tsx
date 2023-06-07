import styled from 'styled-components'

interface ContainerProps {
    open: boolean;
    size: number; 
}

export const Container = styled.div.attrs<ContainerProps>(props => ({
    'open': props.open,
    'size': props.size
}))<ContainerProps>`
    height: ${props => props.open ? '0' : 'auto'};
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.s};
    // background-color: ${({ theme }) => theme.colors.secondary};
`

export const Navigation = styled.nav`
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.m} 0;   
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: 2;
    color: transparent;
`

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0 1em;
    padding-bottom: 0;
    p {
        margin: -10px 0 0 0;
        font-size: 0.76em;
    }
    h1 {
        margin-top: 0;
        font-size: 1.76em;
        word-spacing: 0.1em;
        text-align: center;
    }
    @media (min-width: 769px) {
        ${({ theme }) => theme.spacing.l}
    }
`

export const PageWrapper = styled.div`
    z-index: -2;
    max-width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: space-between; 
    min-height: 100%;
`

export const RA = styled.p`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 2% 4%;
    font-size: 0.6em;
    font-weight: 100;
`

export const Title = styled.h1`
    font-size: 2.0em;
    word-spacing: 0.4rem;
    margin-bottom: ${({ theme }) => theme.spacing.s};
`

export const Link = styled.a`
    font-size: ${({ theme }) => theme.fontSizes.p};
    margin: 0.5em ${({ theme }) => theme.spacing.m};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
        text-decoration: underline;
    }
`

export const Underline = styled.span`
    padding: 5px;
    border: 1px solid black;
`

export const Small = styled.p`
    letter-spacing: 1em;
    line-break: anywhere;
    font-size: 0.35em;
    max-width: 25vw;
    display: inline-block;
`

export const Image = styled.img`
    margin: .8em 0 2.2em 0;
`

export const Hamburger = styled.button`
    display: none;
    border: none;
    user-select: none;
    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
    @media (max-width: 768px) {
        display: flex;
        position: relative;
        cursor: pointer;
        background-color: transparent;
    }
    button {
        position: absolute;
        background-color: transparent;;
        border: none;s
        user-select: none;
        cursor: pointer;
        outline: none;
        text-transform: none;
    }
`

export const TextBlob = styled.div`
    max-width: 90%;
    line-break: strict;
    letter-spacing: 0.018rem;
    word-spacing: -0.1rem;
    font-size: 0.81em;
    @media (min-width: 769px) {
        max-width: 35%;
    }
`

export const Menu = styled.div.attrs<ContainerProps>(props => ({
    'open': props.open,
    'size': props.size
  }))<ContainerProps>`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    width: 100vw;
    height: ${props => (props.size) + 'px'};
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
        * {
            color: #8F8F8F;
            opacity: 0.5;
        }

        position: absolute;
        bottom: 20px;
        left: 2px;
        width: 100vw;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSizes.p};
        background: transparent;
        border: none;
        cursor: pointer;
        user-select: none;
        font-size:22px;
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
    width: 75vw;
    margin-top: ${({ theme }) => theme.spacing.m};
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    margin-left: -12px;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing.m};

    @media (min-width: 550px) {
        width: 45vw;
    }
    @media (min-width: 780px) {
        width: 30vw;
    }
    @media (min-width: 1024px) {
        width: 20vw;
    }
`

export const SocialLink = styled.a`
    margin: 0 3.5%;
    color: black;
    @media (min-width: 1024px) {
        margin: 0 4%
    }
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
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    display: flex;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.m};
    font-size: 0.7em;
    flex-shrink: 0;
    width: 100%;
    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        &:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`