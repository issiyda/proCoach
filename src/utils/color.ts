import CategoryColor from "@/constants/color"

/**
 * カテゴリーカラー表示
 * @param type
 */
export const showColor = (type: number): string => {
  switch (type) {
    case 1:
      return CategoryColor.JAVASCRIPT
    case 2:
      return CategoryColor.EXPRESS
    default:
      return "#fff;"
  }
}

/**
 * カテゴリーラベル表示
 * @param type
 */
export const showCategoryLabel = (type: number) => {
  let style = ""
  switch (type) {
    case 1:
      style = "background: " + CategoryColor.JAVASCRIPT + "; color: black; "
      break
    case 2:
      style = "background: " + CategoryColor.EXPRESS + "; color: #fff; "
      break
    default:
      style = "background: #fff; color: #707070; "
  }
  return style
}
