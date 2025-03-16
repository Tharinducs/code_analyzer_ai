import { Toolbar, Stack } from "@mui/material";
import { ImageContainer, NavbarContainer, NavBarHeaderTitle } from "./header.style";

const Header = () => {
  return (
    <>
      <NavbarContainer position="sticky">
        <Toolbar>
          <Stack direction="row" useFlexGap spacing={2} sx={{ alignItems: 'center' }}>
            <ImageContainer src="/logo.webp" alt="Logo" width={30} height={30} />
            <NavBarHeaderTitle>Ai code Analyzer</NavBarHeaderTitle>
          </Stack>
        </Toolbar>
      </NavbarContainer>
    </>
  );
}

export default Header;
