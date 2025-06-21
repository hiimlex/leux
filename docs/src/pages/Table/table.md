## Table

The Table component is used to display data in a tabular format. This table is build using the `table` element and is fully responsive. There are two ways to use the Table component, either by using the `TableProps` as a configuration object or by using the `children` prop.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Table"></LeSourceButton>
</div>

<br />

#### Import

<div>
<TableImportPreview>
</TableImportPreview>
<div>

<br />

#### Variants

Use the `variant` prop to change the appearance of the table. The available variants are `default` and `bordered`.

<div>
<TableVariantsPreview>
</TableVariantsPreview>
</div>

<br />

#### Sizes

Use the `size` prop to change the size of the table. The available sizes are `small`, `medium`, and `large`.

<div>
<TableSizesPreview>
</TableSizesPreview>
</div>

<br />

#### Configuration

In config mode, pass the `columns` and `rows` props with the data, use the `keysOrder` prop to define the order of the columns. Most of Table component can accept a generic type object that defines the type of the data to be displayed in the table.

<div>
<TableUsagePreview>
</TableUsagePreview>
</div>

<br />

#### Sort & Pagination

You can enable sorting on the table by passing the `sortable` prop on `HeaderColumn`. This will allow users to sort the table by clicking on the column headers.

Use the `sortFn` and `HeaderColumn.onClick` props to handle the sorting logic.

Use the table with the Pagination component to paginate the data.

<div>
<TableSortingPreview>
</TableSortingPreview>
</div>

<br />

### API Reference

<div>
<TableApiTable>
</TableApiTable>
</div>

<br />
