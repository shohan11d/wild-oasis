const data = {
  name: 'Mohammad Shohan',
  role: 'Front-end Developer',
  company: 'TIC Advisor',
  location: 'Dhaka, Bangladesh',
};

const List = ({render}) => {
  return <div>{Object.values(data).map(render)}</div>;
};

export default List;
