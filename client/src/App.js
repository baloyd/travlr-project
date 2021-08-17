import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient,InMemoryCache, ApolloProvider} from '@apollo/client';
import NavBar from './component/NavBar'
import Homepage from './component/pages/Homepage'
import LocationPage from './component/pages/LocationPage'
// import BodyContainer from './component/BodyContainer';


const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem('id_token');
  
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

  function App() {
    return (
<ApolloProvider client={client}>
<Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/rec' component={LocationPage} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>

</ApolloProvider>
  );
}

export default App;
