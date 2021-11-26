import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography,
  Button
} from "@material-ui/core";
import { useRouter } from 'next/router';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Help() {
  const router = useRouter();

  const handleWheelUp = (e) => {
    e.preventDefault();
    router.push('/category');
  }

  return (
    <ReactScrollWheelHandler  upHandler={handleWheelUp}>
      <Layout location='help' background="/uniqlo-help.jpg">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150}}>
          <Grid item xs={4}>
            <Typography style={{color: '#000', fontFamily: 'Helvetica', fontSize: 25, fontWeight: 400, marginLeft: 30, marginTop: 250, textAlign: 'center'}}>
              Tanyakan kepada Chatbot kami
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{
                background: "#ED1D24",
                borderRadius: 50,
                textTransform: "none",
                alignItems: 'center',
                marginLeft: '13%',
                width: '80%',
                height: 80,
                marginTop: 15
              }}
              disableRipple
            >
              <span style={{fontFamily: 'TheBold', fontSize: 25}}>CHATBOT</span>
            </Button>

            <Typography style={{color: '#000', fontFamily: 'Helvetica', fontSize: 12, fontWeight: 400, marginLeft: 30, marginTop: 15, textAlign: 'center'}}>
              Jawaban 24/7 dalam format chat untuk pertanyaan yang sering diajukan.
            </Typography>

            <Typography style={{color: '#000', fontFamily: 'Helvetica', fontSize: 12, fontWeight: 400, marginLeft: 30, marginTop: 15, textAlign: 'center'}}>
              Mohon diperhatikan bahwa informasi spesifik seperti nomor pesanan, informasi personal, dan nama produk tidak dapat dikenali.
            </Typography>
          </Grid>
        </Grid>

        <div style={{position: 'relative', opacity: 0.6, background: '#CD977D', height: "200%", width: "35%", marginTop: -1000}}>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
}
