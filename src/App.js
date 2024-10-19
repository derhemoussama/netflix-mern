import React, { useEffect } from "react";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { auth } from "./app/firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={user ? <Navigate to="/home"  /> : <LoginScreen />}
          />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={user ? <HomeScreen /> : <Navigate to="/" />}

          />

          <Route
            path="/profile"
            element={user ? <ProfileScreen /> : <Navigate to="/" />}
          />

          {/* Redirects any unknown path to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
