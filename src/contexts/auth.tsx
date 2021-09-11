import React, { FC, ReactNode, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { AuthContext } from "@/utils/context"
import axios from "axios"
import { RequestLogin } from "@/types/api"

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    createdAt: null,
    updatedAt: null
  }
}

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(initialState.user)
  const [errMsg, setErrMsg] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (!Object.keys(user).length) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_SERVER}/user`, { withCredentials: true })
        .then((res) => {
          setUser(res.data)
          setIsAuthenticated(true)
        })
        .catch((err) => {
          console.log("err", err.response.data.message)
          setIsAuthenticated(true)
        })
    } else {
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (requestData: RequestLogin): Promise<void> => {
    try {
      const { email, password } = requestData
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_SERVER}/auth/login`,
          {
            email,
            password
          },
          // TODO withCredentialsをグローバルに宣言できるように
          { withCredentials: true }
        )
        .then((res) => {
          setUser(res.data.user)
          setIsAuthenticated(!!res.data)
          router.push("/")
        })
        .catch((err) => {
          console.log("error", err.response.data.error)
          if (err.response.data.error.statusCode === 400) {
            alert("メールアドレスもしくはパスワードが一致しません。")
          }
        })
    } catch (error) {
      console.log("error", error)
    }
  }

  const logout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER}/auth/logout`,
      {},
      {
        withCredentials: true
      }
    )
    setUser(initialState.user)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
