import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Link from '@pages/Link';
import Name from '@pages/Name';
import { Layout } from '@components';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/name" element={<Name />} />
      <Route path="/link/:id" element={<Link />} />
    </Route>
  </Routes>
);
export default App;
