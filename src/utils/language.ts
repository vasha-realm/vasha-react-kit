import useLocalStorage from "./storage";

const VASHA_STORAGE_KEY_SET = {
  LANGUAGE: 'language',
}

const VASHA_COMMON_PROJECT_KEY = 'common'

// const useTranslation = (key: string) => {
//   const { getItem } = useLocalStorage(VASHA_COMMON_PROJECT_KEY)
//   const language = getItem(VASHA_STORAGE_KEY_SET.LANGUAGE)

//   const translations = getTranslations(language);

//   const keys = key.split('.') as Array<keyof typeof translations>;

//   let result: any = translations;
//   for (const key of keys) {
//     result = result?.[key];
//     if (!result) {
//       result = key;
//       break
//     }
//   }

//   return result;
// };