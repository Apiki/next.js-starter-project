const Layout = ({ className, children }) => (
  <div className={className ? className : ''}>
    {children}
  </div>
)

export default Layout
