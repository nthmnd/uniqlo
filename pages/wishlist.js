import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography,
  ButtonBase
} from "@material-ui/core";
import { useRouter } from 'next/router';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const wishlist = [
  {
    path: "/wishlist-1.png"
  },
  {
    path: "/wishlist-2.png"
  },
  {
    path: "/wishlist-3.png"
  },
  {
    path: "/wishlist-4.png"
  },
  {
    path: "/wishlist-5.png"
  },
  {
    path: "/wishlist-6.png"
  }
];

export default function Wishlist() {
  const router = useRouter();
  
  const handleWheelUp = (e) => {
    e.preventDefault();
    router.push('/');
  }

  const handleWheelDown = (e) => {
    e.preventDefault();
    router.push('/category');
  }

  return (
    <ReactScrollWheelHandler  upHandler={handleWheelUp} downHandler={handleWheelDown}>
      <Layout location='wishlist' background="/uniqlo-wishlist.jpg">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150, marginLeft: 60, marginTop: 60}}>
          <Grid item xs={4}>
            { wishlist.map((value, i) => (
              <ButtonBase
                style={{
                  textTransform: "none",
                }}
                disableRipple
              >
                <img
                  style={{ width: 150, margin: 20 }}
                  src={value.path}
                  alt=""
                />
              </ButtonBase>
            ))}
          </Grid>
        </Grid>

        <div style={{position: 'relative', opacity: 0.6, background: '#CFCAB4', height: "200%", width: "35%", marginTop: -1000}}>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
}
