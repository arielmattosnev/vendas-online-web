import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImg,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(`USER:${userName}, PASSWORD:${password}`);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImg src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="Usuário" margin="32px 0px 0px" value={userName} onChange={handleUserName} />
          <Input
            type="password"
            title="Senha"
            margin="32px 0px 0px"
            value={password}
            onChange={handlePassword}
          />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
