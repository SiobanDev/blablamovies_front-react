import React from 'react';
// import './css/App.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import MainContainer from "./components/layouts/MainContainer";

function App() {
  return (
    <>
      <header className="row App-header">
        <Header />
      </header>

        <MainContainer />

      <footer className="row">
        <Footer />>
      </footer>

    </>
  );
}

export default App;
