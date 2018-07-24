import {withRouter} from 'next/router'
import Layout from '../shared/components/layout'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
    <style jsx>{`
      h1 {
        color: #07a;
        border-bottom: 2px solid #ccc;
        font-size: 20px;
      }
    `}</style>
  </div>
))

const Page = (props) => (
    <Layout>
       <Content />
    </Layout>
)

export default Page