import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient,InMemoryCache, ApolloProvider} from '@apollo/client';
import NavBar from './component/NavBar'
import Homepage from './component/pages/Homepage'
import LocationPage from './component/pages/LocationPage'
import SignupPage from './component/pages/SignupPage'
import background from '../src/images/background.jpg'
import Footer from './component/Footer'

const sectionStyle = {
width: "100%",
height: "400px",
backgroundImage: `url(${background})`,
backgroundSize: "cover"
}

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
        <section style={sectionStyle}></section>
          <Route exact path='/' component={SignupPage} />
          <Route exact path='/LocationPage' component={LocationPage} />
          <Route exact path='/HomePage' component={Homepage} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
        
        <Footer />
      </>
    </Router>

</ApolloProvider>
  );
}

export default App;
