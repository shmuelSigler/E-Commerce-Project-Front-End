import * as React from "react";
import { Fragment } from 'react';
import RichTextInput from 'ra-input-rich-text';
import DeleteWithCustomConfirmButton from 'ra-delete-with-custom-confirm-button';
import Delete from '@material-ui/icons/Delete';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import {
    List,
    required,
    Datagrid,
    TextField,
    ImageField ,
    NumberField,
    // ReferenceField,
    // DeleteButton,
    NumberInput ,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    Filter,
    // ReferenceInput,
    // SelectInput,
    TextInput,
    SimpleShowLayout,
    RichTextField,
    // useTranslate,
    ArrayInput,
    SimpleFormIterator,
    SaveButton,
    Toolbar,
    RefreshButton,
    ExportButton,
    CreateButton,
    BulkDeleteWithConfirmButton,
} from 'react-admin';


const ProductBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const ProductActionsButtons = props => (
    <div>
        <RefreshButton {...props} />
        <CreateButton {...props} />
        <ExportButton {...props} />
    </div>
);

const DeleteConfirmContent = props => {
    return (
        <>
        <SimpleShowLayout {...props} >
            <TextField source='title' label='title' />
            <TextField source='sku' label='sku' />
            <RichTextField source='productDescription' label='description' />
        </SimpleShowLayout>
        </>
    );
  };

  const ProductEditToolbar = props => (
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

export const ProductsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ProductsList = props => {
    // const translate = useTranslate();

   return (
   <List {...props} filters={<ProductsFilter />} actions={<ProductActionsButtons/>} bulkActionButtons={<ProductBulkActionButtons />}>
        <Datagrid rowClick="edit">
            <TextField source="sku" />
            <ImageField source="thumbnail" title="title" />
            <TextField source="title" />
            <NumberField source="price" />
            <NumberField source="previousPrice" />
            <NumberField source="rating" />
            <NumberField source="stock" />
            <EditButton />  
            <DeleteWithCustomConfirmButton
                title='Are you sure you want to delete this product?' 
                content={DeleteConfirmContent}  // your custom contents of delete confirm dialog
                label='Delete'                  // label of delete button (default: 'Delete')
                confirmColor='warning'          // color of delete button ('warning' or 'primary', default: 'warning')
                ConfirmIcon={Delete}            // icon of delete button (default: 'Delete')
                cancel='Cancel'                 // label of cancel button (default: 'Cancel')
                CancelIcon={ErrorOutline}       // icon of cancel button (default: 'ErrorOutline')
                undoable={true}                 // undoable (default: true)
                />                
        </Datagrid>
    </List>)
    };

export const ProductsTitle = ({ record }) => {
    return <span>Products {record ? `"${record.title}"` : ''}</span>;
};

export const ProductsEdit = props => (
    //<Edit> responsible for fetching the record, and displaying the page title. It passes the record down to the <SimpleForm> component, which is responsible for the form layout, default values, and validation
    <Edit {...props} title={<ProductsTitle />}  undoable={false}>
        <SimpleForm toolbar={<ProductEditToolbar />}>
            <TextInput source="sku" />
            <TextInput source="title" />
            <TextInput source="description" validate={[required()]}/>
            <TextInput source="productDescription" validate={[required()]}/>
            <TextInput label="source image"  source="src" validate={[required()]}/>
            <ArrayInput  source="filter" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput  source="related" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput  source="price"  validate={[required()]}/>
            <NumberInput  source="previousPrice"  validate={[required()]}/>
            <NumberInput source="rating"  validate={[required()]}/>
            <NumberInput  source="stock"  validate={[required()]}/>
            <TextInput source="special" validate={[required()]}/>
            <NumberInput source="printingTime" validate={[required()]}/>
            <TextInput source="productDescription" validate={[required()]}/>
            <TextInput source="size" validate={[required()]}/>
            <TextInput source="note" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);


export const ProductsCreate = props => (
    <Create {...props}>
        <SimpleForm  redirect="list">
            <TextInput source="sku" validate={[required()]}/>
            <TextInput source="title" validate={[required()]}/>
            <TextInput source="description" validate={[required()]}/>
            <RichTextInput label="product description" source="productDescription" validate={[required()]}/>
            <TextInput label="source image"  source="src" validate={[required()]}/>
            <ArrayInput  source="filter" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput  source="related" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput  source="price" validate={[required()]}/>
            <NumberInput  source="previousPrice" validate={[required()]}/>
            <NumberInput source="rating" validate={[required()]}/>
            <NumberInput  source="stock" validate={[required()]}/>
            <TextInput source="special" validate={[required()]}/>
            <NumberInput source="printingTime" validate={[required()]}/>
            <TextInput source="size" validate={[required()]}/>
            <TextInput source="note" validate={[required()]}/>
            
        </SimpleForm>
    </Create>
);