import { Route, Routes } from 'react-router-dom';
import Wrapper from '@components/layout/Wrapper';
import Home from '@pages/Home';

const App = () => (
  <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Wrapper>
);
export default App;
