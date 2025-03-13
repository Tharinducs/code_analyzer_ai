import { useState } from "react";
import { Toolbar, Drawer, List, ListItem, ListItemText, Stack, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NAV_ITEMS } from "@/lib/constants";
import { ImageContainer, MobileMenuButton, NavbarContainer, NavBarHeaderTitle, NavLinks } from "./headerStyles";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavbarContainer position="sticky">
        <Toolbar>
          <MobileMenuButton edge="end" onClick={() => setOpen(true)}>
            <MenuIcon />
          </MobileMenuButton>
          <Stack direction="row" useFlexGap spacing={2} sx={{alignItems:'center'}}>
            <ImageContainer src="/logo.webp" alt="Logo" width={30} height={30} />
            <NavBarHeaderTitle>Ai code Analyzer</NavBarHeaderTitle>
          </Stack>
        </Toolbar>
      </NavbarContainer>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
