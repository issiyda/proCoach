/**
 * Login時のリクエストデータ
 */
export interface RequestLogin {
  email: string
  password: string
}

/**
 * コメント時のリクエストデータ
 */
export interface RequestComment {
  movieId: string
  userId: string
  subject: string
  comment: string
}

/**
 * コンテンツ取得のリクエストデータ
 */
export interface RequestContents {
  categoryId?: string
}

export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date | null
  updatedAt?: Date | null
}

export interface Movie {
  id: string
  title: string
  description: string
  categoryId: number
  thumbnail: {
    url: string
    height: string
    width: string
  }
  contents: string
  createdAt: Date
  updatedAt: Date
  revisedAt: Date
}

export interface Category {
  id: string
  image: string
  name: string
  description: string
  imagePath: string
  show_flag: boolean
  color: number
  createdAt: Date
  updatedAt: Date
}

export interface Introduction {
  name: string
  description: string
  twitterId?: string
  facebookId?: string
  siteUrl: string
  instagramId: string
  tiktokId: string
  youtubeId: string
  image: {
    url: string
    height: string
    width: string
  }
  createdAt: Date | null
  updatedAt: Date | null
}
