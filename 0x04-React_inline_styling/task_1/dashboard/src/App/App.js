import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
    this.listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
    ]
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          <div className={css(styles.body)}>
            { isLoggedIn? (
              <BodySectionWithMarginBottom title={"Course list"}>
                <CourseList listCourses={this.listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={"Log in to continue"}>
                <Login />
              </BodySectionWithMarginBottom>
              )}
              <BodySection title={"News from the School"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quas nemo nisi dolorum 
                  earum ea natus eligendi, expedita modi fuga eos nesciunt libero veniam inventore porro vel 
                  esse obcaecati maiores?
                </p>
              </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: '2rem'
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    borderTop: '3px solid #e1003c'
  }
});

export default App;
