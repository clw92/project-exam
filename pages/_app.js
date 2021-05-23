import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Router from "next/router"
import Layout from '../components/Layout'
import { Component } from 'react';
import { parseCookies} from "nookies"


const url = "http://localhost:1337/";



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component { ...pageProps} />
    </Layout>
    )
}

function redirectUser(ctx,location) {
  if(ctx.req) {
    ctx.res.writeHead(302, { Location: location});
    ctx.res.end();
  } else {
    Router.push(location)
  }
}



export default MyApp
