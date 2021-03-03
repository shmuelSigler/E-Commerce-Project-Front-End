import * as React from "react";
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource } from 'react-admin';
import Dashboard from './Dashboard';
// import { PostFilter,PostList, PostEdit, PostCreate, PostTitle } from './posts';
import {UserFilter, UserList ,UserEdit, UserCreate, UserTitle} from './users';
// import {RolesList} from './roles';

// import jsonServerProvider from 'ra-data-json-server'; //The ra-data-json-server data provider translates actions to a query string that JSONPlaceholder understands.

import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from "../../firebase"

const dataProvider = firebaseDataProvider(firebase,{});
//<Admin> component, which is the root component of a react-admin application
//This component expects a dataProvider prop - a function capable of fetching data from an API.
// console.log(app)
const Administrator = () => (
    
        <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        {/* <Resource name="users" /> informs react-admin to fetch the “users” records from the https://jsonplaceholder.typicode.com/users */}
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} title={UserTitle} filter={UserFilter} icon={UserIcon}/> 
            {/* <Resource name="roles" list={RolesList}  />  */}
            {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} title={PostTitle} filter={PostFilter} icon={PostIcon}/>  */}
            
        </Admin>
    );

export default Administrator;