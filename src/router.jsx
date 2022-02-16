import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PublicLayout from './layout/principal';
import CreateRecipe from './screens/create-recipe/create-recipe';
import Home from './screens/home/home';
import Login from './screens/login/login';
import MyRecipes from './screens/my-recipes/my-recipes';
import Register from './screens/register/register';
import UpdateRecipe from './screens/update-recipe/update-recipe';


const Routing = () => {

  return (
    <Router>
      <Switch>
        <PublicLayout>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/create-recipe'>
            <CreateRecipe />
          </Route>
          <Route exact path='/update-recipe'>
            <UpdateRecipe />
          </Route>
          <Route exact path='/my-recipes'>
            <MyRecipes />
          </Route>
          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </PublicLayout>
      </Switch>
    </Router>
  );
};

export default Routing;