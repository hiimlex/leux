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

- **Table** - The Table component
- **TableProps** - The Table props type
- **TableBody** - The Table Body component
- **TableBodyProps** - The Table Body props type
- **TableHeader** - The Table Header component
- **TableHeadProps** - The Table Header props type

<br />

#### Configuration

A simple Table with a header and a body using the `TableProps` as a configuration object.

<div>
<TableConfigurationPreview>
</TableConfigurationPreview>
</div>

<br />

#### Children

A simple table with a header and a body using the `children` prop.

<div>
<TableChildrenPreview>
</TableChildrenPreview>
</div>

<br />

#### Variants

Use the `variant` prop to change the table style.

<div>
<TableVariantPreview>
</TableVariantPreview>
</div>

<br />

#### Sizes

Use the `size` prop to change the table size.

<div>
<TableSizePreview>
</TableSizePreview>
</div>

<br />

#### Filters

Use the `order` and `orderFn` props on header to add a order to the Table Header.

<div>
<TableOrderPreview>
</TableOrderPreview>
</div>

<br />

#### Pagination

Use the `pagination` prop to add a pagination to the Table.

<div>
<TablePaginationPreview>
</TablePaginationPreview>
</div>

<br />

#### State

Use the `state` prop to change the table state. The state prop is an object with the following properties:

- `loading` - Boolean to show the loading state
- `empty` - Boolean to show the empty state
- `disabled` - Boolean to show the empty state

It's possible to change the default empty value by using the `emptyValue` attribute on `TableBodyProps`.

<div>
<TableStatePreview>
</TableStatePreview>
</div>

<br />

### API Reference

<div>
<TableApiTable>
</TableApiTable>
</div>

<br />
