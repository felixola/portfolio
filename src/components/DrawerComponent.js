import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";


function DrawerComponent() {
    return (
      <>
        <Drawer>

          <List>

            {/* Nav item 1 */}
           <ListItem>

              <ListItemText>

                <Link to="/">Home</Link>

              </ListItemText>

            </ListItem>
            {/* Nav item 2 */}
            <ListItem>

              <ListItemText>

                <Link to="/about">About</Link>

              </ListItemText>

            </ListItem>
            {/* Nav item 3 */}
            <ListItem>

              <ListItemText>

                <Link to="/contact">Contact</Link>

              </ListItemText>

            </ListItem>
            {/* Nav item 4 */}
            <ListItem >

              <ListItemText>

                <Link to="/about">Faq</Link>

              </ListItemText>

            </ListItem>

          </List>

        </Drawer>
        
        </>
    );
  }
  export default DrawerComponent;
  