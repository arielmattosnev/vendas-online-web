import {
  BackgroundImg,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImg src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo_transparent.png" />
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
