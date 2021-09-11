import { LinkName } from "@/constants/linkName"

export const getLabelName = (name: string): string => {
  switch (name) {
    case LinkName.LOGIN:
      return "ログイン"
    case LinkName.REGISTER:
      return "新規登録"
    case LinkName.LOGOUT:
      return "ログアウト"
    case LinkName.MAILADDRESS:
      return "メールアドレス"
    case LinkName.PASSWORD:
      return "パスワード"
    default:
      return ""
  }
}
