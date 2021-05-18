import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://cms.shcars.local/api',
    cache: new InMemoryCache()
});

export default client;