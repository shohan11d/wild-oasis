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

export async function createCabin(newCabin) {
  console.log(newCabin);
  const { data, error } = await supabase
    .from('cabins')
    .insert(newCabin)
    .select();
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }
  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }
  return data;
}
