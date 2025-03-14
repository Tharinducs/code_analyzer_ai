import { AppBar, IconButton } from "@mui/material";
import styled from "styled-components";

// Styled components
const NavbarContainer = styled(AppBar)`
  background-color: #3f51b5; // MUI Primary Color
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: block;
  color: #ffffff;

  @media (max-width: 768px) {
    display: block;
    margin-right: 20px;
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
    MobileMenuButton,
    NavLinks,
    NavbarContainer,
    NavBarHeaderTitle
}