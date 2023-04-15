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

#### Table Props

<div>
<table>
<thead>
<tr>
<th width="10%">Prop</th>
<th width="70%">Type</th>
<th width="20%">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>variant</td>
<td><LeHighlighter language="tsx" code="'bordered' | 'default'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'default'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter language="tsx" code="'small' | 'medium' | 'large'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'medium'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>width</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['width']" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['height']" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter language="tsx" code="TableState | { loading?: boolean; disabled?: boolean; empty?: boolean }" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customWrapperClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customWrapperStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</table>
</div>

<br />

#### Table Body Props

<table>
<thead>
<tr>
<th width="10%">Prop</th>
<th width="70%">Type</th>
<th width="20%">Default</th>
</tr> 
</thead>
<tbody>
<tr>
<td>children</td>
<td><LeHighlighter language="tsx" code="React.ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>rows</td>
<td><LeHighlighter language="tsx" code="TableRow | {
	[key: string]: string | number | boolean | undefined;
}" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>keys</td>
<td><LeHighlighter language="tsx" code="string[]" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>gridTemplateColumns</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['gridTemplateColumns']" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>emptyValue</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customBodyClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customBodyStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>

<br />

#### Table Header Props

<table>
<thead>
<tr>
<th width="10%">Prop</th>
<th width="70%">Type</th>
<th width="20%">Default</th>
</tr> 
</thead>
<tbody>
<tr>
<td>children</td>
<td><LeHighlighter language="tsx" code="React.ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>columns</td>
<td><LeHighlighter language="tsx" code="TableColumn | {
	header: string;
	key: string;
	orderActive?: boolean;
	order?: TableOrder;
	orderFn?: (order: TableColumn) => void;
}" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>gridTemplateColumns</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['gridTemplateColumns']" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customBodyClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customBodyStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>

<br />
