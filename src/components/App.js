import React from 'react';
import Header from './Header';
import Main from './Main';
import Contacts from './Contacts';
import Footer from './Footer';
import Work from './Work';
import PageNotFound from './PageNotFound';
import { Route, Switch } from 'react-router-dom';
import data from '../utils/data';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/work/:id">
        <Work data={data} />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
    <Contacts />
    <Footer />
  </>
  );
}

export default App;
