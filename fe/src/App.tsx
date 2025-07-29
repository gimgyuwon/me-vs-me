import { Route, Routes } from 'react-router-dom';
import Wrapper from '@components/layout/Wrapper';
import Home from '@pages/Home';
import Link from '@pages/Link';
import Name from '@pages/Name';
import Footer from '@components/Footer';

const App = () => (
  <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/name" element={<Name />} />
      <Route path="/link" element={<Link />} />
    </Routes>

    <Footer />
  </Wrapper>
);
export default App;
