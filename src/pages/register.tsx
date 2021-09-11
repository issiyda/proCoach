import React, { useState } from "react"
import { SubTitle } from "@/components/atoms/subTitle"
import styled, { css } from "styled-components"
import { useRouter } from "next/router"

import axios from "axios"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleClickRegister = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_SERVER}/auth/register`, {
        email,
        password
      })
      .then((res) => {
        console.log("res", res)
        // router.push("/")
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  return (
    <PageContainer>
      <main>
        <SubTitle>新規登録</SubTitle>
        <Form>
          <label htmlFor="email">
            メールアドレス
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id={"email"}
            />
          </label>
          <label htmlFor="password">
            パスワード
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id={"password"}
            />
          </label>
          <button onClick={() => handleClickRegister()}>新規登録</button>
        </Form>
      </main>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 980px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`

const Form = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
