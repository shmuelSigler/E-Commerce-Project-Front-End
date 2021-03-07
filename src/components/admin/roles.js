import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    ReferenceField,
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

export const RolesList = props => (
    <List  {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="role" />
          
            {/* <EditButton />  */}
        </Datagrid>
    </List>
);