import {AppProps} from "next/app";
import dynamic from "next/dynamic";
import 'antd/dist/antd.css';
import {ApolloProvider} from "@apollo/client";
import {useApollo} from "@/libs/apollo";

function MyApp({Component, pageProps}: AppProps) {
    const apolloClient = useApollo(pageProps);
    const DynamicLayout = dynamic(() => import("../components/Layout"))

    return (
        <ApolloProvider client={apolloClient}>
            <DynamicLayout>
                <Component {...pageProps} />
            </DynamicLayout>
        </ApolloProvider>
    );
}

export default MyApp;