import React, { FC, ReactNode, useContext, useState } from "react"
import axios from "axios"
import { CommentContext } from "@/utils/context"
import { RequestComment } from "@/types/api"

export const CommentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [item, setItem] = useState("")
  const comment = async (requestData: RequestComment): Promise<void> => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_SERVER}/comment`,
        {
          ...requestData
        },
        // TODO withCredentialsをグローバルに宣言できるように
        { withCredentials: true }
      )
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <CommentContext.Provider
      value={{
        comment,
        item
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}

const useComment = () => {
  return useContext(CommentContext)
}

export default useComment
