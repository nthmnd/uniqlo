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
    label: "HELP",
    path: "/help"
  },
  {
    label: "WISHLIST",
    path: "/wishlist"
  },
  {
    label: "CATEGORY",
    path: "/category"
  }
];

const NavBarHelp = (props) => {
  return (
    <div className="container">
    <Grid container justifyContent="center">
      <Container maxWidth="xl" disableGutters>
        <Grid
          container
          style={{ paddingLeft: 32, paddingRight: 32, marginTop: 20 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {navButtons.map((button, i) => (
            <Fragment key={i}>
              { i == 0 &&
                <Grid item key={i} style={{marginRight: 25, marginTop: -36, marginLeft: "13%"}}>
                  <NavButton
                    key={button.path}
                    path={button.path || ""}
                    label={button.label}
                  />
                </Grid>
              }
            </Fragment>
          ))}

          <Grid item justifyContent="space-around" container spacing={0} style={{marginTop: -36, marginLeft: 270, marginRight: 330}} xs>
          {navButtons.map((button, i) => (
              <Fragment key={i}>
                { i != 0 &&
                  <Grid item key={i} style={{marginRight: 25}}>
                    <NavButton
                      key={button.path}
                      path={button.path || ""}
                      label={button.label}
                    />
                  </Grid>
                }
              </Fragment>
            ))}
          </Grid>

          <Grid>
            <Link href="/">
              <a>
                <img
                  style={{ width: 50 }}
                  src="/logo.png"
                  alt=""
                />
              </a>
            </Link>
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

export default NavBarHelp
