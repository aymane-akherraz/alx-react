import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn = true }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]
  return (
    <>
      <Notifications /> 
      <div className="App">
        <Header />
        <div className="App-body">
          { isLoggedIn? <CourseList listCourses={listCourses}/> : <Login /> }
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
