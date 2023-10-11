import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WhoWeAre from './pages/WhoWeAre';
import Products from './pages/Products';
import Services from './pages/Services';
import LatestNews from './pages/LatestNews';
import JoinUs from './pages/JoinUs';
import ContactUs from './pages/ContactUs';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductDetail from './pages/ProductDetail';
import NewsDetail from './pages/NewsDetail';
import JobDetail from './pages/JobDetail';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/latest" element={<LatestNews />} />
            <Route path="/latest/:postId" element={<NewsDetail/>} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/join-us/:jobId" element={<JobDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
