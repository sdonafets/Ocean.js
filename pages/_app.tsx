import {AppProps} from "next/app";
import {UserProvider} from '@auth0/nextjs-auth0';
import dynamic from "next/dynamic";
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "@/libs/apollo";
import 'antd/dist/antd.css';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    const apolloClient = useApollo(pageProps);
    const DynamicLayout = dynamic(() => import("../components/Layout"))

    return (<>
            <Head>
                <title>Ocean.js</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/assets/wave.ico" />
            </Head>
            <UserProvider>
                <ApolloProvider client={apolloClient}>
                    <DynamicLayout>
                        <Component {...pageProps} />
                    </DynamicLayout>
                </ApolloProvider>
            </UserProvider>
        </>
    );
}

export default MyApp;