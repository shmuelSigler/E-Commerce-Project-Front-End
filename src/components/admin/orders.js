import { Fragment } from 'react';
import { BulkDeleteWithConfirmButton } from 'react-admin';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { 
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton,
    Edit,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    SelectInput,
    RefreshButton,
    ExportButton,
    Filter,
    CreateButton,
    ArrayField,
    SingleFieldList,
    ArrayInput,
    SimpleFormIterator,
    SimpleShowLayout,
} from 'react-admin';

const OrderBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const OrderActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <CreateButton {...props} />
        <ExportButton {...props}/>
    </div>
);


const OrderFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);


const DeleteConfirmContent = props => {
    return (
        <>
        <SimpleShowLayout {...props} >
            <TextField source='id' label='id' />
            <TextField source='total' label='total' />
            <TextField source='status' label='status' />
        </SimpleShowLayout>
        </>
    );
  };

const OrderEditToolbar = props => (
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

export const OrderList = props => (
    <List {...props} filters={<OrderFilter/>} actions={<OrderActionsButtons/>} bulkActionButtons={<OrderBulkActionButtons />} >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="datetime" />
            <TextField label="User Id" source="uid" />
            {/* <ArrayField source="coupons" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            {/* <ArrayField source="shipping" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            <TextField source="payment" />
            <TextField source="total" />
            <TextField source="status" />
            <EditButton />
            
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<OrderEditToolbar />} redirect="list">
            <TextInput source="id" disabled />
            <TextInput source="datetime" disabled />
            <TextInput label="User Id" source="uid" disabled />
            <ArrayInput source="productsInCart" disabled>
                <SimpleFormIterator>
                    <TextInput label="Product" source="prodId"/>
                    <TextInput label="Quantity" source="prodQuantity" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="coupons" disabled>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="shipping" disabled>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="payment" disabled />
            <TextInput source="total" disabled />
            <SelectInput source="status" validate={[required()]} choices={[
                { id: 'Received', name: 'Received' },
                { id: 'In progress', name: 'In progress' },
                { id: 'Confirmed', name: 'Confirmed' },
                { id: 'Dispatched', name: 'Dispatched' },
                { id: 'Delivered', name: 'Delivered' },
                { id: 'Canceled', name: 'Canceled' }
            ]}/>
        </SimpleForm>
    </Edit>
);