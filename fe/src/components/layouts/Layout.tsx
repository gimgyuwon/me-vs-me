import { Outlet } from 'react-router-dom';
import Wrapper from '@components/layouts/Wrapper';
import Footer from '@components/Footer';
import Main from '@components/layouts/Main';

const Layout = () => {
  return (
    <Wrapper>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
