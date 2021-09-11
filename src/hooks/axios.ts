import axios, { AxiosResponse } from "axios"
import Router from "next/router"
import { useState, useEffect } from "react"

export const httpClient = axios.create({
  withCredentials: true
})

const useAxios = <T>(
  path: string,
  axiosFunc: () => Promise<AxiosResponse<T>>,
  initialState: T,
  handleError: ((res: any) => void) | null = null
): T => {
  const [data, setData] = useState<T>(initialState)
  useEffect(() => {
    const func = async () => {
      const res = await axiosFunc().catch((err) => {
        return err.response
      })
      if (res.status !== 200) {
        handleError ? handleError(res) : Router.push("/error")
      } else {
        setData(res.data)
      }
    }
    func()
  }, [])
  return data
}

export default useAxios
