/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Start from "../components/main/start";
import Main from "../components/mainUser/Main";

const IndexPage: React.FC = (props: any) => {
	if (props.location.pathname !== "/") {
		const username = props.location.pathname.substring(1);
		return (
			<Layout>
				<SEO title={"Regalame un Cafe | " + username} />
				<Main></Main>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<SEO title="Regalame un Cafe" />
				<Start></Start>
				<Link to="/page-2/"></Link>
			</Layout>
		);
	}
};

export default IndexPage;
