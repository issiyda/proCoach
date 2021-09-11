import React, { FC, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// utils
import { IntroductionContext } from '@/utils/context';
import { initialIntroduction } from '@/utils/inits';

// export const IntroductionProvider: FC<{ children: ReactNode }> = ({
//   children
// }) => {
//   const [introduction, setIntroduction] = useState(initialIntroduction)

//   useEffect(() => {
//     getIntroduction()
//   }, [])

//   const getIntroduction = async (): Promise<void> => {
//     try {
//       const key = await {
//         headers: { "X-API-KEY": process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY }
//       }
//       const res = await axios.get(
//         "https://engineer-road.microcms.io/api/v1/introduction",
//         key
//         // TODO withCredentialsをグローバルに宣言できるように
//       )
//       setIntroduction(res.data)
//     } catch (error) {
//       console.log("error", error)
//     }
//   }

//   return (
//     <IntroductionContext.Provider
//       value={{
//         getIntroduction,
//         introduction
//       }}
//     >
//       {children}
//     </IntroductionContext.Provider>
//   )
// }

// const useIntroduction = () => {
//   return useContext(IntroductionContext)
// }

// export default useIntroduction
