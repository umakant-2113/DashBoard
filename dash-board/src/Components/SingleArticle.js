import { Link } from 'react-router-dom';
let data = [
  {
    title: 'How to handle state in React. The missing FAQ.',
    author: 'Osmel Mora',
    slug: 'handle-state-in-react',
  },
  {
    title: 'You might not need React Router',
    author: 'Konstantin Tarkus',
    slug: 'no-need-to-use-react-router',
  },
  {
    title: 'Mixins Considered Harmful',
    author: 'Dan Abramov',
    slug: 'mixins-considered-harmful',
  },
  {
    title: 'React Design Principles',
    author: 'Dan Abramov',
    slug: 'react-design-principles',
  },
  {
    title: "Don't use .bind() when passing props",
    author: 'Dave Ceddia',
    slug: 'don-use-bind-when-passing-props',
  },
];

const Single = (props) => {
  let value = props.match.params.slug;
  let article = data.filter((elm) => {
    if (elm.slug === value) {
      return elm;
    }
  });
  console.log(article);
  return (
    <>
      <Link to='/article'>
        <smal> 👈 go back to article page </smal>
      </Link>

      <h2 className='single-art-h2'>{article[0].title} </h2>
      <p className='single-art-p'>{article[0].author} </p>
    </>
  );
};

export default Single;
