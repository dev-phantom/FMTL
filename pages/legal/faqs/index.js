import Faqs from "@components/faqs/Faqs";
import Head from "next/head";
import Layout from "pages/_layout";
import LegalLayout from "pages/legal/LegalLayout";

const Faq = () => {
	return (
		<>
			<Head>
				<title>FMTL | Faq</title>
				<meta
					name="description"
					content="Frequently asked questions about FMTL"
				/>
			</Head>

			<Faqs />
		</>
	);
};

export default Faq;

Faq.getLayout = (page) => {
	return (
		<Layout>
			<LegalLayout>{page}</LegalLayout>
		</Layout>
	);
};
