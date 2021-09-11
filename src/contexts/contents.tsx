import React, { FC, ReactNode, useContext, useEffect, useState } from "react"
import axios from "axios"
import useAxios, { httpClient } from "@/hooks/axios"

import { ContentsContext } from "@/utils/context"
import { RequestContents } from "@/types/api"
import { initialContents } from "@/utils/inits"

export const ContentsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [contents, setContents] = useState(initialContents)

  const getContents = async (requestData: RequestContents): Promise<void> => {
    try {
      const key = await {
        headers: { "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY }
      }
      const res = await axios.get(
        "https://engineer-road.microcms.io/api/v1/movie" +
          `?filters=categoryId[equals]${requestData.categoryId}`,
        key
      )
      setContents(res.data.contents)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <ContentsContext.Provider
      value={{
        getContents,
        contents
      }}
    >
      {children}
    </ContentsContext.Provider>
  )
}

const useContents = () => {
  return useContext(ContentsContext)
}

export default useContents
