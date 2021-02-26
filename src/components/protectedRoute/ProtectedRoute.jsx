import React from "react";
import { Route, Redirect } from "react-router-dom";
import {auth} from '../../firebase'

export default function ProtectedRoute ({component: Component,...rest}) {
  return (
    <Route
      {...rest}
      render={props => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log("protected true")
                return <Component {...props} />
            }  
            else {
                console.log("protected false")
                return (
                <Redirect
                  to={{
                    pathname: "/",
                    state: {
                      from: props.location,
                    },
                  }}/>)}
          })
      }}
    />
  );
};

// export default function ProtectedRoute({component: Component, ...rest}) {

//   return (
//       <Route {...rest} render={props => (true) ? <Component {...props}/> : <Redirect to={{pathname: "/login", state: {from: props.location}}}/>}/>
//   )
// }

// auth.onAuthStateChanged((user)=>{
//   if(user){
//       console.log("protected true")
//       return <Component {...props} />
     
//   }
     
//   else {
//       console.log("protected false")
//        return (
//       <Redirect
//         to={{
//           pathname: "/sign-in",
//           state: {
//             from: props.location,
//           },
//         }}/>)}
// })

// if (auth.isAuthenticated()) {
//   return <Component {...props} />;
// } 
// else {
//   return (
//     <Redirect
//       to={{
//         pathname: "/",
//         state: {
//           from: props.location
//         }
//       }}
//     />
//   );
// }