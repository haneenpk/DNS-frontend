import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Category from './components/Category'
import Content from './components/Content';
import "@fontsource/oswald";
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Category />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
