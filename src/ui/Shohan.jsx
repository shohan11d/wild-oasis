import { useParams } from 'react-router';

function Shohan() {
  let params = useParams();
  return <div> {params}Shohan</div>;
}

export default Shohan;
