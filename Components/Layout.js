import Header from './Header'
import Footer from './Footer'
import TabBar from './TabBar'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <TabBar />
    </div>
  )
}

export default Layout
