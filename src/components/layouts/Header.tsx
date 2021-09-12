import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

// Atom
import { BEFORE_LINK } from '@/constants/link';
import useAuth from '@/contexts/auth';

// Constants
import { headerWords } from '@/constants/words/header';

// メディアクエリ用
import { sp } from '@/media';

type backgroundProps = {
  black?: boolean;
  white?: boolean;
  accent?: boolean;
};

export const Header: FC = () => {
  const { user, logout } = useAuth();

  const handleClickLogout = async () => {
    await logout();
  };

  return (
    <HeaderContainer black>
      <Nav>
        <Logo>logo</Logo>
        <ButtonContainer>
          {user.id !== undefined ? (
            <NavLink accent onClick={() => handleClickLogout()}>
              {headerWords.logout}
            </NavLink>
          ) : (
            <>
              <Link href={BEFORE_LINK.LOGIN}>
                <NavLink white>{headerWords.login}</NavLink>
              </Link>
              <Link href={BEFORE_LINK.REGISTER}>
                <NavLink accent>{headerWords.register}</NavLink>
              </Link>
            </>
          )}
        </ButtonContainer>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<backgroundProps>`
  background: black;
  width: 100%;
  padding: 32px 80px;
  position: fixed;

  ${sp`
    padding: 24px 12px;
  `}

  ${({ black }) =>
    black
      ? css`
          background: black;
        `
      : ''};
`;

const Nav = styled.ul`
  margin: 0 auto;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const NavLink = styled.li<backgroundProps>`
width
  cursor: pointer;
  height: 40px;
  border-radius: 3px;
  list-style: none;
  display: flex;
  align-items: center;
  padding:10px 40px;
  &: first-of-type {
    margin-right: 48px;
  ${sp`
      margin-right:12px;
  `}
  }
  ${sp`
  font-size:  10px;
  width: 80px;
  padding: 3px 12px;
  height: 30px;
  display: flex;
  justify-content: center;
  `}
  ${({ white }) =>
    white
      ? css`
          background: #fff;
        `
      : ''};
  ${({ accent }) =>
    accent
      ? css`
          color: #fff;
          background: #be5b55;
        `
      : ''};
`;
