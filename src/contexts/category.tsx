import React, { FC, ReactNode, useContext, useEffect, useState } from "react"
import axios from "axios"
import { CategoryContext } from "@/utils/context"
import { initCategories } from "@/utils/inits"

export const CategoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [category, setCategories] = useState(initCategories)

  useEffect(() => {
    getCategory()
  }, [])
  const getCategory = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_SERVER}/category`,
        // TODO withCredentialsをグローバルに宣言できるように
        { withCredentials: true }
      )
      setCategories(res.data)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <CategoryContext.Provider
      value={{
        getCategory,
        category
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

const useCategory = () => {
  return useContext(CategoryContext)
}

export default useCategory
