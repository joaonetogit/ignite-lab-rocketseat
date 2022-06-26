import { ApolloProvider } from '@apollo/client';
import { Router } from './components/Router';
import { client } from './lib/apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
