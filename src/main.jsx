import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from "./components/scrollToTop";
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'transition-style';
import Layout from './layout';

ReactDOM.createRoot(document.querySelector("#app")).render(
  <Router>
    <ScrollToTop>
      <Layout />
    </ScrollToTop>
  </Router>
  );
