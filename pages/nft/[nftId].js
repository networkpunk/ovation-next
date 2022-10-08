import Head from "next/head";
import Image from "next/image";
import metaData from "../../public/metadata.json";

export default function Product({ nftId, nft }) {
  console.log(nft);
  return (
    <>
      <Head>
        <title>{nft.name} | Ovation NFT</title>
        <meta name="description" content={nft.description} />
        <meta property="og:title" content={nft.name} />
        <meta property="og:description" content={nft.description} />
        <meta
          property="og:url"
          content={`https://myclothingstore.com/products/${nftId}`}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <div className="mx-auto px-4 lg:max-w-6xl">
            <section className="py-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                <div className="lg:col-span-2 bg-gray-50/20 rounded-md p-2">
                  <Image src={nft.image} width={300} height={300}></Image>
                  {nft.description}
                </div>
                <div className="lg:col-span-2 bg-gray-50/20 rounded-lg p-2">
                  {nft.name}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      nftId: params.nftId,
      nft: metaData[params.nftId],
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(45)].map((i, index) => {
    return {
      params: {
        nftId: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
