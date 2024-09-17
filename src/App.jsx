import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The wild oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                onClick={() => alert('check in')}
              >
                Check in
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert('check in')}
              >
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

Row.defaultProps = {
  type: 'vertical',
};

export default App;
