import * as React from "react";
import { Fragment } from 'react';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import {
    List,
    Datagrid,
    TextField,
    EmailField,
    ReferenceField,
    AutocompleteInput,
    NumberInput,
    NumberField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    Filter,
    ReferenceInput,
    SelectInput,
    TextInput,
    BooleanInput,
    required,
    email,
    RefreshButton,
    ExportButton,
    CreateButton,
    SaveButton,
    DeleteButton,
    Toolbar,
    SimpleShowLayout,
    RichTextField,
    BulkDeleteWithConfirmButton,
} from 'react-admin';

import { auth, db } from "../../firebase"
// import MyUrlField from './MyUrlField';

const ProductBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const DeleteConfirmContent = props => {
    return (
        <>
        <SimpleShowLayout {...props} >
            <TextField source='name' label='name' />
            <TextField source='email' label='email' />
            <TextField source='role' label='role' />
        </SimpleShowLayout>
        </>
    );
  };

const MyActiveField = ({ record = {}, source }) => {
    return (
        <>
            {record[source] ? <span style={{color: "green"}}>Yes</span> : <span style={{color: "red"}}>No</span>}
        </>
    );
}

const UserActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <CreateButton {...props} />
        <ExportButton {...props}/>
    </div>
);

const UserEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithCustomConfirmButton
                title='Are you sure you want to delete this user?' 
                content={DeleteConfirmContent}  // your custom contents of delete confirm dialog
                label='Delete'                  // label of delete button (default: 'Delete')
                confirmColor='warning'          // color of delete button ('warning' or 'primary', default: 'warning')
                ConfirmIcon={Delete}            // icon of delete button (default: 'Delete')
                cancel='Cancel'                 // label of cancel button (default: 'Cancel')
                CancelIcon={ErrorOutline}       // icon of cancel button (default: 'ErrorOutline')
                undoable={true}                 // undoable (default: true)
                />  
    </Toolbar>
);

export const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="name" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


export const UserList = props => (
    <List {...props} filters={<UserFilter />} actions={<UserActionsButtons/>} bulkActionButtons={<ProductBulkActionButtons />}>
        <Datagrid rowClick="edit">
        <TextField source="id" />
            <TextField source="name" />
            <TextField source="role" />
            <MyActiveField source="active" />
            {/* <ActiveTextField  source="active" /> */}
            <EmailField source="email" />
            <TextField source="password" />
            <TextField source="phone" />
             {/* <MyUrlField source="website" /> */}
            <TextField source="address" /> 
            <TextField source="city" />
            <EditButton /> 
            <DeleteWithCustomConfirmButton
                title='Are you sure you want to delete this user?' 
                content={DeleteConfirmContent} // your custom contents of delete confirm dialog
                label='Delete'                  // label of delete button (default: 'Delete')
                confirmColor='warning'          // color of delete button ('warning' or 'primary', default: 'warning')
                ConfirmIcon={Delete}            // icon of delete button (default: 'Delete')
                cancel='Cancel'                 // label of cancel button (default: 'Cancel')
                CancelIcon={ErrorOutline}       // icon of cancel button (default: 'ErrorOutline')
                undoable={true}                 // undoable (default: true)
                /> 
        </Datagrid>
    </List>
);

//<List> component, responsible for grabbing the information from the API, displaying the page title, and handling pagination. 

//<Datagrid> component, which renders a table with one row for each record. The Datagrid uses its child components (here, a list of <TextField> and <EmailField>) to determine the columns to render. Each Field component maps a different field in the API response, specified by the source prop.

export const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = props => (
    //<Edit> responsible for fetching the record, and displaying the page title. It passes the record down to the <SimpleForm> component, which is responsible for the form layout, default values, and validation
    <Edit {...props}  title={<UserTitle />} >
        <SimpleForm toolbar={<UserEditToolbar />}>
            <TextInput source="id" disabled />
            <TextInput source="name" validate={[required()]} />
            <AutocompleteInput source="role" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
                { id: 'coustomer', name: 'Coustomer' },
            ]} />
            <BooleanInput
                source="active"
                label="active"
                defaultValue={true}
            />
             
            {/* <ReferenceInput source="role" reference="roles">
                <SelectInput optionText="role" />
            </ReferenceInput> */}
            <TextInput source="email" validate={[required(), email()]} disabled/>
            <TextInput source="password" validate={[required()]} disabled/>
            
            <TextInput source="phone" validate={[required()]}/>
            <TextInput source="address" />
            <TextInput source="city" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => {
    const signup = (obj)=> auth.createUserWithEmailAndPassword(obj.email, obj.password)
    .then(userCredential =>{
      // const uid = userCredential.user.uid
      console.log(userCredential);
      const autoId = db.ref("users").push().key
      let data ={
          id: autoId,
        role: obj.role,
        name: obj.name,
        email:obj.email,
        password:obj.password,
        active: obj.active, 
        phone: obj.phone,
        address:obj.address,
        city:obj.city
      }
      db.ref('users').child(autoId).set(data)
    }).catch(err => console.log(err))


    return (
    
    <Create {...props}  >
        <SimpleForm save={(data) => {console.log(data);signup(data)}}>
            <TextInput source="name" validate={[required()]} />
            <AutocompleteInput source="role" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
                { id: 'coustomer', name: 'Coustomer' },
            ]} validate={[required()]} />
            <BooleanInput 
                source="active"
                label="active"
                defaultValue={true}
            />
            <TextInput source="email" validate={[required(), email()]}/>
            <TextInput source="password" validate={[required()]}/>
            <TextInput  source="phone" validate={[required()]} />
            <TextInput  source="address" validate={[required()]} />
            <TextInput  source="city" validate={[required()]} />
            {/* <ReferenceInput source="role" reference="roles">
                <SelectInput optionText="role" />
            </ReferenceInput> */}
            
        </SimpleForm>
    </Create>
    )
};