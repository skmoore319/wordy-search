import * as React from 'react';

// import { FirstComponent } from './components/first.component';
// import { NavComponent } from './components/nav.component';
import './include/bootstrap';

import './App.css';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
// import { HashRouter, Switch, Route } from 'react-router-dom';
// import { SecondComponent } from './components/second.component';
// import { TicTacToeContainer } from './components/tic-tac-toe/tic-tac-toe.container';
// import { Provider } from 'react-redux';
// import { store } from './Store';
// import { ClickerContainer } from './components/clicker/clicker.container';
// import { SignInContainer } from './components/sign-in/sign-in.container';
// import { MoviesContainer } from './components/movies/movies.container';
// import { MovieAddContainer } from './components/movies/movie-add.container';

class App extends React.Component<any, any> {

  public render() {
    return (
      <div>
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    );
  }
}

export default App;
