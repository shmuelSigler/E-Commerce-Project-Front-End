import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    ReferenceField,
    AutocompleteInput,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    Filter,
    ReferenceInput,
    SelectInput,
    TextInput,
    BooleanInput,
} from 'react-admin';

// import MyUrlField from './MyUrlField';

export const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="name" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid >
            <TextField source="name" />
            <TextField source="role" />
            
            {/* <TextField source="role" /> */}
            <TextField source="active" />
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            {/* <TextField source="address.street" /> */}
            <TextField source="phone" />
             {/* <MyUrlField source="website" /> */}
            <TextField source="address" /> 
            <TextField source="city" />
            <EditButton /> 
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
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <BooleanInput
                source="active"
                label="active"
            />
             <AutocompleteInput source="role" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
                { id: 'coustomer', name: 'Coustomer' },
            ]} />
            {/* <ReferenceInput source="role" reference="roles">
                <SelectInput optionText="role" />
            </ReferenceInput> */}
            
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="address" />
            <TextInput source="city" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <AutocompleteInput source="role" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
                { id: 'coustomer', name: 'Coustomer' },
            ]} />
            <BooleanInput
                source="active"
                label="active"
            />
            <TextInput source="email" />
            <TextInput  source="phone" />
            <TextInput  source="address" />
            <TextInput  source="city" />
            {/* <ReferenceInput source="role" reference="roles">
                <SelectInput optionText="role" />
            </ReferenceInput> */}
            
        </SimpleForm>
    </Create>
);