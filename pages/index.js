import Head from "next/head";
import Layout from "../src/components/Layout";
import { useRouter } from 'next/router'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Home() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/wishlist');
  }

  const handleWheelDown = (e) => {
    e.preventDefault();
    router.push('/wishlist');
  }

  return (
    <ReactScrollWheelHandler downHandler={handleWheelDown}>
      <Layout location='home' background="/uniqlo-home.jpg">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Layout>
    </ReactScrollWheelHandler>
  );
}
