import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from 'styled-components';
import palette from 'styles/palette';


const Link = ({ isActive, children, ...props }) => {
	return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

export const StyledNavLink = styled(Link)`
    height: 3rem;
    padding-left: 1.3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: black;
    &:hover{
        background-color: ${palette.activeColor};
    }
`