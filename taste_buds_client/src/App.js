import React, { Component } from 'react';
import { Session } from './requests';
import { User } from './requests'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignInPage from './components/SignInPage';
import RecipeIndexPage from './components/RecipeIndexPage';
import RecipeShowPage from './components/RecipeShowPage';


// function App() {
//   return (
//     <div className='App'>
//       <WelcomePage/>
//     </div>
//   )}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    // this.getCurrentUser()
    Session.create({
      email: 'js@winterfell.gov',
      password: 'supersecret'
    })
    .then(current_user => {
      this.setState((state) => {
        return{
          user: current_user
        }
      })
    })
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      if(user?.id){
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => {
    this.setState({
      user: null
    })
    }

  render() {
    return (
        <BrowserRouter>
            <NavBar currentUser={this.state.user} onSignOut={this.onSignOut}/> 
            <Switch>
                <Route exact path="/sign_in" render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser}/>}/>
                {/* <Route exact path='/sign_up' render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser}/>  */}
                <Route exact path='/recipes'>
                    <RecipeIndexPage />
                </Route>
                <Route path='/recipes/:id' component={RecipeShowPage}></Route>

                {/*
                <AuthRoute
                    isAuthenticated={!!this.state.user}
                    exact path='/questions/new'
                    component={NewQuestionPage}
                />
                <Route component={NotFoundPage} /> */}
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;