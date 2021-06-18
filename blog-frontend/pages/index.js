import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import Homehero from "../components/homehero";


export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title> NERR - Northeast Rod Run </title>
        </Head>
        <Homehero />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
