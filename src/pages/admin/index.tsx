import { AuthContext } from '@/utils/context';
import { getUserEmail } from '@/utils/firebase';
import { Input, Button, Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import router from 'next/router';
import { useContext, useEffect, useState } from 'react';

const Admin = () => {
  const [auth, setAuth] = useState(false);
  const [twitterId, setTwitterId] = useState('');

  useEffect(() => {
    console.log(getUserEmail);
    getUserEmail === undefined ? router.push('/admin/login') : setAuth(true);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTwitterId(event.target.value);
  };

  const { logout } = useContext(AuthContext);

  const submitId = () => {
    // firebaseに送信する処理
  };

  return (
    auth && (
      <AdminContainer>
        <button onClick={logout}>ログアウト</button>
        <InputLabel htmlFor="twitterId">ツイッターID</InputLabel>
        <Input
          id="twitterId"
          type="text"
          placeholder="ツイッターID"
          onChange={(e) => handleChange(e)}
        />
        <Center m={8}>
          <Button onClick={submitId}>登録</Button>
        </Center>
      </AdminContainer>
    )
  );
};

const AdminContainer = styled.div`
  padding: 16px;
`;

const InputLabel = styled.label`
  margin-left: 16px;
`;

export default Admin;
