import List from '../ui/List';

function Home() {
  return (
    <div>
      <p>Home</p>
      <List render={(value, index) => <h1 className='bg-black' key={index}>{value}</h1>} />
      <List render={(value, index) => <p key={index}>{value}</p>} />
    </div>
  );
}

export default Home;
