import './App.css';

import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledDiv isBlue={count > 4} className="app">
      <h1>Olá mundo!</h1>
      <p>Contagem: {count}</p>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        Aumentar a contagem
      </Button>
    </StyledDiv>
  );
}

interface PStyledLink {
  isBlue?: boolean;
}

const StyledDiv = styled.div<PStyledLink>`
  color: ${(props) => (props.isBlue ? 'blue' : 'red')};
  font-weight: bold;
`;

export default App;
