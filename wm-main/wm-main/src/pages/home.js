import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomersComponent from "../components/home/home"

const Home = () => (
  <Layout>
    <SEO title="Page two" />
    <CustomersComponent />
  </Layout>
)

export default Home
