import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography
} from "@material-ui/core";
import { useRouter } from 'next/router';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Category() {
  const router = useRouter();

  const handleWheelUp = (e) => {
    e.preventDefault();
    router.push('/wishlist');
  }

  const handleWheelDown = (e) => {
    e.preventDefault();
    router.push('/help');
  }

  return (
    <ReactScrollWheelHandler  upHandler={handleWheelUp} downHandler={handleWheelDown}>
      <Layout location='category' background="/uniqlo-category.jpg">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150}}>
          <Grid item xs={4}>
            <Typography style={{color: '#000', fontFamily: 'Helvetica', fontSize: 20, fontWeight: 300, marginLeft: 70, marginTop: 135, textAlign: 'center'}}>
              New Arrivals
              <br/><br/>
              Limited Offers
              <br/><br/>
              Value Buy
              <br/><br/>
              Coming Soon
              <br/><br/>
              Featured News
              <br/><br/>
              UT Graphic T-Shirts
              <br/><br/>
              Styling Book
              <br/><br/>
              About LifeWear
              <br/><br/>
              Modest Wear
            </Typography>
          </Grid>
        </Grid>

        <div style={{position: 'relative', opacity: 0.6, background: '#E2D8E0', height: "200%", width: "35%", marginTop: -1000}}>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
}
