import supabase from '../services/Supabase';

function Cabins() {
  async function getCabins() {
    let { data: cabinsData, error } = await supabase.from('cabins').select('*');
    if (error) {
      console.error(error);
      throw new Error('Cabins could not be loaded');
    }
    return cabinsData;
  }

  function getCabins() {
    return supabase.from('cabins').select('*');
  }
  const cabinsData = getCabins();
  console.log(cabinsData);

  return <div>Cabins</div>;
}

export default Cabins;
