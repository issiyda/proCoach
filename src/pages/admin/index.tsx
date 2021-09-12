import { AuthContext } from '@/utils/context';
import { getUserEmail, writeTwitterUser } from '@/utils/firebase';
import { Input, Button, Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import router from 'next/router';
import { useContext, useEffect, useState } from 'react';

const initialState = {
  name: '',
  twitterId: '',
};

const Admin = () => {
  const [auth, setAuth] = useState(false);
  const [twitter, setTwitter] = useState(initialState);

  // useEffect(() => {
  //   console.log('getUserEmail', getUserEmail);
  //   getUserEmail === undefined ? router.push('/admin/login') : setAuth(true);
  // }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setTwitter({
      ...twitter,
      [event.target.name]: event.target.value,
    });
    console.log(twitter);
  };

  const { logout } = useContext(AuthContext);

  const handleSubmit = () => {
    console.log('twitter', twitter);
    writeTwitterUser(twitter);
  };

  return (
    // auth && (
    <AdminContainer>
      <button onClick={logout}>ログアウト</button>
      <InputLabel htmlFor="name">名前</InputLabel>
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="石田さん"
        onChange={(e) => handleChange(e)}
      />
      <InputLabel htmlFor="twitterId">ツイッターID</InputLabel>
      <Input
        id="twitterId"
        name="twitterId"
        type="text"
        placeholder="ツイッターID"
        onChange={(e) => handleChange(e)}
      />
      <Center m={8}>
        <Button onClick={handleSubmit}>登録</Button>
      </Center>
    </AdminContainer>
    // )
  );
};

const AdminContainer = styled.div`
  padding: 16px;
`;

const InputLabel = styled.label`
  margin-left: 16px;
`;

export default Admin;
