import supabase from '../services/Supabase';
export async function getCabins() {
  let { data: cabinsData, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  console.log(cabinsData);
  return cabinsData;
}
