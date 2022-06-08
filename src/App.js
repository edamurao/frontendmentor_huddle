import './custom.scss';
import Header from './components/header/header';
import Content from './components/content/content';
import CardsMain from './components/cards/cards_main';
import Footer from './components/footer/footer';
import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <div className='background-content'>
        <Header />
        <Content />
      </div>
      <CardsMain />
      <Footer />
    </React.Fragment>
  );
}

export default App;
