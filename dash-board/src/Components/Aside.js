import { Link } from 'react-router-dom';
const Aside = () => {
  return (
    <div>
      <ul>
        <Link to='/people'>
          <li className='nav-list'>people </li>
        </Link>

        <Link to='/book'>
          <li className='nav-list'>book </li>
        </Link>

        <Link to='/article'>
          <li className='nav-list'>article </li>
        </Link>
      </ul>
    </div>
  );
};
export default Aside;
