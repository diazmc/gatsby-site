import * as React from "react"
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
};

export const Head = () => (
  <>
    <title>About</title>
    <meta name="description" content="Your description" />
  </>
)

export default About;