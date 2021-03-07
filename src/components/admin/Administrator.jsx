import * as React from "react";
import { Admin, Resource } from 'react-admin';
// import {FirebaseAuthProvider} from 'react-admin-firebase';
import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from "../../firebase"
import {MyLoginPage} from './MyLoginPage'
import { ProductsFilter,ProductsList, ProductsEdit, ProductsCreate, ProductsTitle } from './products';
import {UserFilter, UserList ,UserEdit, UserCreate, UserTitle} from './users';
import { OrderList, OrderEdit } from './orders';

import UserIcon from '@material-ui/icons/Group';
import StorageIcon from '@material-ui/icons/Storage';
import Dashboard from './Dashboard';
import ReceiptIcon from '@material-ui/icons/Receipt';

// import {RolesList} from './roles';

// import jsonServerProvider from 'ra-data-json-server'; //The ra-data-json-server data provider translates actions to a query string that JSONPlaceholder understands.


// const authProvider = FirebaseAuthProvider(firebase);
const dataProvider = firebaseDataProvider(firebase,{});
//<Admin> component, which is the root component of a react-admin application
//This component expects a dataProvider prop - a function capable of fetching data from an API.
// console.log(app)
const Administrator = () => (
    
        <Admin loginPage={MyLoginPage} dashboard={Dashboard} dataProvider={dataProvider} >
        {/* <Resource name="users" /> informs react-admin to fetch the “users” records from the https://jsonplaceholder.typicode.com/users */}
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} title={UserTitle} filter={UserFilter} icon={UserIcon}/> 
            {/* <Resource name="roles" list={RolesList}  />  */}
            <Resource name="products" list={ProductsList} edit={ProductsEdit} create={ProductsCreate} title={ProductsTitle} filter={ProductsFilter} icon={StorageIcon}/> 
            <Resource name="orders" list={OrderList} edit={OrderEdit} icon={ReceiptIcon}/>
        </Admin>
    );

export default Administrator;