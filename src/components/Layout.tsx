import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Header titulo="Dio Bank" />
      { children }
      <Footer />
    </>
  )
}
