import { AppBar } from "@mui/material";
import styled from "styled-components";

const NavbarContainer = styled(AppBar)`
  background-color: #3f51b5;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.img`
  margin-left: 20px;
`

const NavBarHeaderTitle = styled.h3`
  color: "black";
  margin: 0px;
`

export {
    ImageContainer,
    NavLinks,
    NavbarContainer,
    NavBarHeaderTitle
}