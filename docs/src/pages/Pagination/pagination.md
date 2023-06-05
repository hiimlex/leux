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

#### Sizes

Use the `size` prop to configure the pagination size.

<div>
<PaginationSizePreview>
</PaginationSizePreview>
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
<PaginationApiTable>
</PaginationApiTable>
</div>

<br />
