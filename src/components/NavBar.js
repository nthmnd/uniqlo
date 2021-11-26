import {
  ButtonBase,
  Grid,
  Container,
} from "@material-ui/core";
import Link from "next/link";
import NavButton from "./NavButton";
import { Fragment } from "react";

const navButtons = [
  {
    label: "WISHLIST",
    path: "/wishlist"
  },
  {
    label: "CATEGORY",
    path: "/category"
  },
  {
    label: "HELP",
    path: "/help"
  }
];

const NavBar = () => {
  return (
    <div className="container">
    <Grid container justifyContent="center">
      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          style={{ paddingLeft: 300, paddingRight: 300, marginTop: 10 }}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item justifyContent="space-evenly" container spacing={0} xs>
            {navButtons.map((button, i) => (
              <Fragment key={i}>
                  <Grid item key={i}>
                    <NavButton
                      key={button.path}
                      path={button.path || ""}
                      label={button.label}
                    />
                  </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>

    <style jsx>{`
        .container {
          width: 100%;
          height: 88px;
          background-color: transparent;
          position: fixed;
          display: flex;
          z-index: 300;
        }
      `}</style>
    </div>
  )
}

export default NavBar
