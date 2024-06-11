import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ITEM } from "../data/commons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuHeader = () => {
  const [Open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Box>
      <IconButton
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        edge="start"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={Open}
        onClose={() => setOpen(false)}
      >
        <List>
          {ITEM.map((list) => {
            return (
              <ListItem key={list.title} disablePadding sx={{ my: 1 }}>
                <ListItemButton
                  sx={{ flexDirection: "column" }}
                  component={Link}
                  to={list.path}
                >
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    {list.icon}
                  </ListItemIcon>
                  {t(list.title)}
                  </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};

export default MenuHeader;
