## Grid

Grid component allows you to create a grid layout. It is based on the CSS Grid.

<div>
	<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Grid"></LeSourceButton>
</div>

#### Import

<div>
	<ImportPreview></ImportPreview>
</div>

- **Grid**: grid container
- **Box**: recommended component to use as grid items

#### Col

Use the `col` prop to change the number of the cols, can be used as number or as `gridTemplateColumns` CSS Properties.

<div>
	<GridColPreview></GridColPreview>
</div>

#### Row

Use the `row` prop to change the number of the rows, can be used as number or as `gridTemplateRows` CSS Properties.

<div>
	<GridRowPreview></GridRowPreview>
</div>

#### Gap

Use the `gap` prop to change the space between the grid cols and rows.

<div>
	<GridGapPreview></GridGapPreview>
</div>

#### Span

To increase the size of a item on grid, use the `gridSpan` props from <NavLink to="/layout/box#gridSpan">Box component</NavLink>.

<div>
	<GridSpanPreview></GridSpanPreview>
</div>

### API Reference

<div>
<table width="100%" border="0">
<thead>
<tr>
<th width="10%">Prop</th>
<th width="70%">Type</th>
<th width="20%">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td width="10%">cols</td>
<td width="70%"><Code language="jsx" children="React.CSSProperties['gridTemplateColumns']"></Code></td>
<td width="20%">-</td>
</tr>
<tr>
<td width="10%">rows</td>
<td width="70%"><Code language="jsx" children="React.CSSProperties['gridTemplateRows']"></Code></td>
<td width="20%">-</td>
</tr>
<tr>
<td width="10%">gap</td>
<td width="70%"><Code language="jsx" children="{ 'col': React.CSSProperties['columnGap'], 'row': React.CSSProperties['rowGap'] }"></Code></td>
<td width="20%">-</td>
</tr>
<tr>
<td width="10%">width</td>
<td width="70%"><Code language="jsx" children="React.CSSProperties['width']"></Code></td>
<td width="20%"><Code language="jsx" children="'100%'"></Code></td>
</tr>
<tr>
<td width="10%">padding</td>
<td width="70%"><Code language="jsx" children="React.CSSProperties['padding']"></Code></td>
<td width="20%">-</td>
</tr>
</tbody>
</table>
</div>
