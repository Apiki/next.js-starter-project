import React from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import {
  Layout,
  Navbar,
  Countdown,
  Hero,
  Cta,
  Speakers,
  Ticket,
  Programing,
  FAQ,
  Sponsors,
  Apiki,
  Footer,
} from '@components';
import { fetchExample } from 'reducers/example/action-creators';
import '../components/container/container.scss';

const currentDate = new Date();
const year = (currentDate.getMonth() === 12 && currentDate.getDate() > 5)
  ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const Home = () => (
  <Layout className="home">
    <StickyContainer>
      <Sticky>
        {
          ({ style }) => (
            <div className="fixed-header" style={style}>
              <Navbar />
            </div>
          )
        }
      </Sticky>

      <div className="page-content">
        <Countdown date={`${year}-12-06T00:00:00`} />
        <Hero />
        <Cta />
        <Speakers />
        <Ticket />
        <Programing />
        <FAQ />
        <Sponsors />
        <Apiki />
        <Footer />
      </div>
    </StickyContainer>
  </Layout>
);

const mapStateToProps = ({ example }) => ({
  title: example.title,
});

const mapDispatchToProps = dispatch => ({
  fetchTest() {
    dispatch(fetchExample('Sending Title to Dispatch'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
