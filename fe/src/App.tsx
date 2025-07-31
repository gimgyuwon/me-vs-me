import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components';
import Home from '@pages/Home';
import Link from '@pages/Link';
import Gender from '@pages/Gender';
import Vote from '@pages/Vote';
import Result from '@pages/Result';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/gender" element={<Gender />} />
      <Route path="/link/:id" element={<Link />} />
      <Route path="/vote/:id" element={<Vote />} />
      <Route path="/result/:id" element={<Result />} />
    </Route>
  </Routes>
);
export default App;
