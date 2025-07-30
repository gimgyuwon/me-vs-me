import { useLocation, useParams } from 'react-router-dom';

const Link = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');

  return (
    <>
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h2>Hello lINK PAGE</h2>
    </>
  );
};

export default Link;
