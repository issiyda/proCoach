import { createContext } from "react"

import {
  AuthType,
  CommentType,
  CategoryType,
  ContentsType,
  IntroductionType
} from "@/types/contexts"

export const AuthContext = createContext({} as AuthType)
export const CommentContext = createContext({} as CommentType)
export const ContentsContext = createContext({} as ContentsType)
export const CategoryContext = createContext({} as CategoryType)
export const IntroductionContext = createContext({} as IntroductionType)
