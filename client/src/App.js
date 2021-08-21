import React from 'react';
// import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import NavBar from './component/NavBar';
import Homepage from './component/pages/Homepage';
import LocationPage from './component/pages/LocationPage';
import SignupPage from './component/pages/SignupPage';
import background from '../src/images/background.jpg';
import Footer from './component/Footer';



const client = new ApolloClient({
<<<<<<< HEAD
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
    const sectionStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      margin: '0',
      height:'100vh'
    } 
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
=======
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
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    margin: '0',
    height: '100vh'
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
>>>>>>> 6c673f447d3ffdef9ed92bf512654356f26a6273
          <NavBar />
          <Switch>
            <div className='bg-image' style={sectionStyle}>
              <Route exact path='/' component={SignupPage} />
              <Route exact path='/LocationPage' component={LocationPage} />
              <Route exact path='/HomePage' component={Homepage} />
            </div>
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />

          </Switch>

          <Footer />
        </>
      </Router>

    </ApolloProvider>
  );
}

export default App;
