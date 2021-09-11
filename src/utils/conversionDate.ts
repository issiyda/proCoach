export const conversionDate = (targetDate: Date) => {
  const newDate = new Date(targetDate)
  return `${newDate.getFullYear()}年${newDate.getMonth()}月${newDate.getDay()}日`
}
