/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Start from "../components/main/start";

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<Start></Start>
		<Link to="/page-2/"></Link>
	</Layout>
);

export default IndexPage;
