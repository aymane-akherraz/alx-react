import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext, { defaultUser } from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
      ]
    };
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ]
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  markNotificationAsRead(id) {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(e => e.id !== id)
    }));
  }

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;
    return (
      <>
        <Notifications displayDrawer={displayDrawer} handleDisplayDrawer={displayNotificationDrawer} handleHideDrawer={hideNotificationDrawer} listNotifications={this.state.listNotifications} markNotificationAsRead={this.markNotificationAsRead} />
        <div className="App">
          <Header />
          <div className={css(styles.AppBody)}>
            { isLoggedIn? (
              <BodySectionWithMarginBottom title={"Course list"}>
                <CourseList listCourses={this.listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={"Log in to continue"}>
                <Login logIn={login} />
              </BodySectionWithMarginBottom>
              )}
              <BodySection title={"News from the School"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quas nemo nisi dolorum 
                  earum ea natus eligendi, expedita modi fuga eos nesciunt libero veniam inventore porro vel 
                  esse obcaecati maiores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
                  voluptate perspiciatis fuga doloremque eos voluptatibus quasi minus sapiente nihil neque suscipit
                  quod ipsam provident, optio iure explicabo nobis. Officia, ipsum
                </p>
              </BodySection>
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    padding: '2rem'
  }
});

export const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get("isUserLoggedIn"),
  displayDrawer: state.ui.get("isNotificationDrawerVisible")
})

const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: (email, password) => dispatch(loginRequest(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
