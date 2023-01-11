import Footer from './footer'
import PrimaryNav from './navbar/PrimaryNav'

export default function Layout({ children }) {
  return(
    <>
      <PrimaryNav type="header" />
      <main>{ children }</main>
      <Footer />
    </>
  )
}