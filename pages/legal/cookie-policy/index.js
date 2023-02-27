import CookiePolicy from "@components/cookie-policy/CookiePolicy";
import Head from "next/head";
import Layout from "pages/_layout";
import LegalLayout from "pages/legal/LegalLayout";

const CookiePolicies = () => {
	return (
		<>
			<Head>
				<title>FMTL | Cookie Policy</title>
				<meta
					name="description"
					content="Cookie Policy for FMTL"
				/>
			</Head>

			<CookiePolicy />
		</>
	);
};

export default CookiePolicies;

CookiePolicies.getLayout = (page) => {
	return (
		<Layout>
			<LegalLayout>{page}</LegalLayout>
		</Layout>
	);
};
