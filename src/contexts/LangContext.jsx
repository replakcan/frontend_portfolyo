import { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { langData } from '../data'
import { toast } from 'react-toastify'
import { useMainData } from '../services/tanStack'

export const LangContext = createContext()

let locale = navigator.language

locale = locale.split('-')[0]
console.log('locale:', locale)

// eslint-disable-next-line react/prop-types
export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage('X-lang', locale === 'en' ? 'EN' : 'TR')
  const { data: mainData } = useMainData()
  const [data, setData] = useState(locale === 'en' ? langData.en : langData.tr)

  const notify_tr = () =>
    toast.info("sayfa dili tr_TR'ye çevrildi", {
      autoClose: 2000,
    })
  const notify_en = () =>
    toast.info('page language is set to en_US', {
      autoClose: 2000,
    })

  const toggleLang = () => {
    if (lang === 'TR') {
      setLang('EN')
      setData(mainData.en)
      notify_en()
    } else {
      setLang('TR')
      setData(mainData.tr)
      notify_tr()
    }
  }

  return <LangContext.Provider value={{ lang, setLang, toggleLang, data }}>{children}</LangContext.Provider>
}
