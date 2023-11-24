import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

interface ICard{
  children:ReactNode
}

export const Layout = ({ children }: ICard) => {
  return(
    <>
      <Header titulo="Dio Bank" />
      { children }
      <Footer />
    </>
  )
}
