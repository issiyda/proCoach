import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Center,
  Stack,
} from '@chakra-ui/react';
import color from '@/constants/color';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/utils/context';
import { getUserEmail } from '@/utils/firebase';
import router from 'next/router';

const Login = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (getUserEmail) router.push('/admin');
  }, []);

  const { login } = useContext(AuthContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email: state.email, password: state.password });
  };

  return (
    <LoginContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack spacing={4}>
          <InputGroup size="sm">
            <InputLeftAddon children="メールアドレス" />
            <Input
              type="mail"
              name="email"
              placeholder="proCoarch@gmail.com"
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="パスワード" />
            <Input
              type="password"
              name="password"
              placeholder="proCoarch@gmail.com"
              onChange={(e) => handleChange(e)}
              outline=""
            />
          </InputGroup>
        </Stack>
        <Center m={8}>
          <Button type="submit">ログイン</Button>
        </Center>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  padding: 16px;
`;

export default Login;
