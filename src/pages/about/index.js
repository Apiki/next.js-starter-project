import Layout from '../../shared/components/layout'
import css from './style.scss'

export default () => (
  <Layout>
    <h1 className={css.title}>About page</h1>
    <img src="https://source.unsplash.com/300/250" className={css.thumbnail} />

    <div className={css.card}>
      <img src="https://source.unsplash.com/300/250" className={css.cardThumbnail} />
      <div className={css.cardContent}>
        <h2 className={css.cardTitle}>Card Title</h2>
      </div>
    </div>
  </Layout>
)