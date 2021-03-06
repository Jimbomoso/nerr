import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";
import Image from "next/image";

// import rodrun2 from "/rodrun2.jpeg";
// import rodrun1 from "/rodrun1.jpg";
// import rodrun5 from "/rodrun5.jpg";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title> NERR - Northeast Rod Run </title>
        </Head>
        <Container>
          <section class="container mx-auto px-6 p-10">
            <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
              About
            </h2>
            <div class="flex items-center flex-wrap mb-20">
              <div class="w-full md:w-1/2">
                <h4 class="text-3xl text-gray-800 font-bold mb-3">Founded</h4>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Ornare quam viverra orci sagittis eu volutpat odio.
                  Urna nunc id cursus metus aliquam. Aliquam purus sit amet
                  luctus venenatis. Amet nisl purus in mollis nunc. Sociis
                  natoque penatibus et magnis dis parturient montes nascetur
                  ridiculus. Eget est lorem ipsum dolor sit. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu dictum. Quam nulla
                  porttitor massa id neque. Facilisi etiam dignissim diam quis
                  enim. Aliquam faucibus purus in massa tempor. Sed libero enim
                  sed faucibus. Neque laoreet suspendisse interdum consectetur.
                  Sagittis orci a scelerisque purus semper eget duis at tellus.
                </p>
              </div>
              <div class="w-full md:w-1/2">
                <Image
                  className="md:w-full lg:w-full"
                  src="/rodrun2.jpeg"
                  height={500}
                  width={500}
                />
              </div>
            </div>

            <div class="flex items-center flex-wrap mb-20">
              <div class="w-full md:w-1/2">
                <Image
                  className="md:w-full lg:w-full"
                  src="/rodrun5.JPG"
                  height={500}
                  width={500}
                />
              </div>
              <div class="w-full md:w-1/2 pl-10">
                <h4 class="text-3xl text-gray-800 font-bold mb-3">Events</h4>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Ornare quam viverra orci sagittis eu volutpat odio.
                  Urna nunc id cursus metus aliquam. Aliquam purus sit amet
                  luctus venenatis. Amet nisl purus in mollis nunc. Sociis
                  natoque penatibus et magnis dis parturient montes nascetur
                  ridiculus. Eget est lorem ipsum dolor sit. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu dictum. Quam nulla
                  porttitor massa id neque. Facilisi etiam dignissim diam quis
                  enim. Aliquam faucibus purus in massa tempor. Sed libero enim
                  sed faucibus. Neque laoreet suspendisse interdum consectetur.
                  Sagittis orci a scelerisque purus semper eget duis at tellus.
                </p>
              </div>
            </div>

            <div class="flex items-center flex-wrap mb-20">
              <div class="w-full md:w-1/2">
                <h4 class="text-3xl text-gray-800 font-bold mb-3">Charity</h4>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Elementum eu facilisis sed odio morbi quis commodo odio
                  aenean. Ornare quam viverra orci sagittis eu volutpat odio.
                  Urna nunc id cursus metus aliquam. Aliquam purus sit amet
                  luctus venenatis. Amet nisl purus in mollis nunc. Sociis
                  natoque penatibus et magnis dis parturient montes nascetur
                  ridiculus. Eget est lorem ipsum dolor sit. Tincidunt lobortis
                  feugiat vivamus at augue eget arcu dictum. Quam nulla
                  porttitor massa id neque. Facilisi etiam dignissim diam quis
                  enim. Aliquam faucibus purus in massa tempor. Sed libero enim
                  sed faucibus. Neque laoreet suspendisse interdum consectetur.
                  Sagittis orci a scelerisque purus semper eget duis at tellus.
                </p>
              </div>
              <div class="w-full md:w-1/2">
                <Image
                  className="md:w-full lg:w-full"
                  src="/rodrun1.jpg"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
