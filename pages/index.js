import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { teamOne, data } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
// import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="DATOS-CAT"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="About us"
        title="6 institutions towards a shared goal">
        By leveraging the unique strengths and expertise of each cohort, 
        we aim to advance our understanding and generate solutions that 
        have a broad and lasting impact.
      </SectionTitle>
      <Benefits data={teamOne} />
      <SectionTitle
        pretitle="Data"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Benefits imgPos="right" data={data} />
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}
      {/* <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;