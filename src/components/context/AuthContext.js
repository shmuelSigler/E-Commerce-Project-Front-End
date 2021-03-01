import React, { useContext, useState, useEffect } from "react"
import { auth } from "../../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)

  }

  function sendEmailVerifaction(email,actionCodeSettings) {
    return auth.sendSignInLinkToEmail(email,actionCodeSettings).then(() => {
      // Save the users email to verify it after they access their email
    })
    .catch((err) => {
      console.log(err);
    })
    
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateProfile(name, photoURL){
    console.log('yes');
    return currentUser.updateProfile({
      displayName: name? name : currentUser.displayName,
      photoURL: photoURL? photoURL: currentUser.photoURL,
    })
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    sendEmailVerifaction,
    logout,
    resetPassword,
    updateProfile,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

