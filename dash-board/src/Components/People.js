import data from '../got.js';

const People = () => {
  return (
    <ul className='list-people'>
      {data.houses.map((elm) => {
        return elm.people.map((person) => {
          return (
            <li>
              <img className='img' src={person.image} alt='' />
              <h2 className='name'>{person.name} </h2>
              <p>{person.description} </p>
              <a href={person.wikiLink}> Read More</a>
            </li>
          );
        });
      })}
    </ul>
  );
};
export default People;
