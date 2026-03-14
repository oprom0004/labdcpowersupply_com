import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Price from './pages/Price';
import HowToChoose from './pages/HowToChoose';
import WhereToBuy from './pages/WhereToBuy';
import TopPicks from './pages/TopPicks';
import Applications from './pages/Applications';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="price" element={<Price />} />
          <Route path="how-to-choose" element={<HowToChoose />} />
          <Route path="where-to-buy" element={<WhereToBuy />} />
          <Route path="top-picks" element={<TopPicks />} />
          <Route path="applications" element={<Applications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
