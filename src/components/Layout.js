import React from "react";
import NavBar from "./NavBar";
import NavBarWishlist from "./NavBarWishlist";
import NavBarCategory from "./NavBarCategory";
import NavBarHelp from "./NavBarHelp";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const sectionMargin = margin => margin * 15;
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center"
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div className="background">
      { props.location == "home" &&
        <NavBar />
      }

      { props.location == "wishlist" &&
        <NavBarWishlist />
      }

      { props.location == "category" &&
        <NavBarCategory />
      }

      { props.location == "help" &&
        <NavBarHelp />
      }
      <main className={classes.mainWrap} style={{ minHeight: "100vh" }}>
        <Container maxWidth="xl" disableGutters>{props.children}</Container>
      </main>
      <style jsx>{`
        .background {
          background-image: url('${props.background}');
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Layout;
