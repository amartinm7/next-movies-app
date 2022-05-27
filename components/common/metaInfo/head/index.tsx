import Head from "next/head";

interface EchHeadProps {
  title: string;
  description: string;
}

// @ts-ignore
const EchHead = ({ title, description }: EchHeadProps) => {
  return (
    <Head>
      <title>Estrenos Cine Hoy: {title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default EchHead;
