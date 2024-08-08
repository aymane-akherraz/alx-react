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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({user: defaultUser});
      }
    };
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
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  logIn(email, password) {
    this.setState({user: {email, password, isLoggedIn: true}});
  }

  getContextValue() {
    return { user: this.state.user, logOut: this.state.logOut };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.user !== this.state.user || nextState.logOut !== this.state.logOut || 
      nextState.displayDrawer !== this.state.displayDrawer
    );
  }

  render() {
    const { isLoggedIn } = this.state.user;
    const contextValue = this.getContextValue();
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Notifications displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} listNotifications={this.listNotifications} />
          <div className="App">
            <Header />
            <div className={css(styles.AppBody)}>
              { isLoggedIn? (
                <BodySectionWithMarginBottom title={"Course list"}>
                  <CourseList listCourses={this.listCourses}/>
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                  <Login logIn={this.logIn} />
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
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    padding: '2rem'
  }
});
 
export default App;
