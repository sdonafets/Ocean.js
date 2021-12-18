import {AppProps} from "next/app";
import Layout from "@/components/Layout";
import "@/styles/tailwind.css";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "@/libs/apollo";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;