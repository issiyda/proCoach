import {
  Category,
  Movie,
  RequestComment,
  RequestContents,
  RequestLogin,
  Introduction,
  User
} from "@/types/api"

export interface AuthType {
  isAuthenticated: boolean
  user: User
  login: (requestData: RequestLogin) => Promise<void>
  logout: () => Promise<void>
}

export interface CommentType {
  comment: (requestData: RequestComment) => Promise<void>
  item: string
}

export interface ContentsType {
  getContents: (requestData: RequestContents) => Promise<void>
  contents: Movie[]
}

export interface CategoryType {
  getCategory: () => Promise<void>
  category: Category[]
}

export interface IntroductionType {
  getIntroduction: () => Promise<void>
  introduction: Introduction
}
