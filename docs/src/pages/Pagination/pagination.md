## Pagination

The Pagination component is used to split content into multiple pages.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Pagination"></LeSourceButton></div>

<br />

#### Import

<div>
<PaginationImportPreview>
</PaginationImportPreview>
</div>

- **Pagination** - the main component
- **PaginationProps** - the props type

<br />

#### Simple

The following attributes shows how to configure the pagination.

- `currentPage` - The current page number
- `totalPages` - The total number of pages
- `totalItems` - The total number of items
- `itemsPerPage` - The number of items per page

<div>
<PaginationConfigurationPreview>
</PaginationConfigurationPreview>
</div>

<br />

#### Action

Use the `onPageChange` prop to handle the page change.

<div>
<PaginationActionPreview>
</PaginationActionPreview>
</div>

<br />

#### Buttons

Use the `paginationButtons` prop to configure the pagination buttons. The following attributes are available:

- `previous` - The previous button
- `next` - The previous button
- `limit` - The number of buttons to display

<div>
<PaginationButtonsPreview>
</PaginationButtonsPreview>
</div>

<br />

#### Label

Use the `showPaginationLabel` prop to show the pagination label. The following attributes are available:

- `currentPage` - The current page number
- `itemsPerPage` - The number of items per page
- `totalItems` - The total number of items

<div>
<PaginationLabelPreview>
</PaginationLabelPreview>
</div>

<br />

### API Reference

<div>
<table>
<thead>
<tr>
<th width="20%">Prop</td>
<th width="60%">Type</td>
<th width="20%">Default</td>
</tr>
</thead>
<tbody>
<tr>
<td>currentPage</td>
<td><LeHighlighter language="tsx" code="number" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="0" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<td>totalPages</td>
<td><LeHighlighter language="tsx" code="number" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="0" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<td>totalItems</td>
<td><LeHighlighter language="tsx" code="number" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="0" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<tr>
<td>itemsPerPage</td>
<td><LeHighlighter language="tsx" code="number" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="0" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter language="tsx" code="'small' | 'medium' | 'large'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'medium'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onPageChange</td>
<td><LeHighlighter language="tsx" code="(page: number) => void" style="soft" copy="off"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>justifyContent</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['justifyContent']" style="soft" copy="off"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>simplePagination</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<td>paginationButtons</td>
<td><LeHighlighter language="tsx" code="PaginationButtons | {
	previous?: boolean;
	next?: boolean;
	limit?: number;
};" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="{ previous: true, { next: true }" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<td>showPaginationLabel</td>
<td><LeHighlighter language="tsx" code="PaginationLabel | (props: {
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
}) => string;" style="soft" copy="off"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="{ previous: true, { next: true }" style="soft" copy="off"></LeHighlighter></td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="off"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="off"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br />
