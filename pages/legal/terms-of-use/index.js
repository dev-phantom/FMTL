import Terms from "@components/terms-of-use/Terms";
import Head from "next/head";
import Layout from "pages/_layout";
import LegalLayout from "pages/legal/LegalLayout";

const TermsofUse = () => {
	return (
		<>
			<Head>
				<title>FMTL | Terms of Use</title>
				<meta
					name="description"
					content="Terms of Use for FMTL"
				/>
			</Head>

			<Terms />
		</>
	);
};

export default TermsofUse;

TermsofUse.getLayout = (page) => {
	return (
		<Layout>
			<LegalLayout>{page}</LegalLayout>
		</Layout>
	);
};
