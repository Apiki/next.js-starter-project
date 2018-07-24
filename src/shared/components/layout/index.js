import Header from '../header'

const layoutStyle = {
  margin: 20,
  padding: 20
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout