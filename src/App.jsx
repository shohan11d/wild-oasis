import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        <Button onClick={() => alert('check in')}>Check in</Button>
        <Button onClick={() => alert('check in')}>Check out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
