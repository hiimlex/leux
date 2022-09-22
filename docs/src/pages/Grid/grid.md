## Grid

Grid component allows you to create a grid layout. It is based on the CSS Grid.

<div>
	<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Grid"></LeSourceButton>
</div>

<br/>

#### Import

<div>
	<GridImportPreview></GridImportPreview>
</div>

- **Grid** is the grid container
- **GridProps** is the props type
- **Box** is the recommended component to use as grid item

<br/>

#### Col

Use the `col` prop to change the number of the cols, can be used as number or as `gridTemplateColumns` CSS Properties.

<div>
	<GridColPreview></GridColPreview>
</div>

<br/>

#### Row

Use the `row` prop to change the number of the rows, can be used as number or as `gridTemplateRows` CSS Properties.

<div>
	<GridRowPreview></GridRowPreview>
</div>

<br/>

#### Gap

Use the `gap` prop to change the space between the grid cols and rows.

<div>
	<GridGapPreview></GridGapPreview>
</div>

<br/>

#### Span

To increase the size of a item on grid, use the `gridSpan` props from <NavLink to="/layout/box">Box component</NavLink>.

<div>
	<GridSpanPreview></GridSpanPreview>
</div>

<br/>

### API Reference

<div>
<table width="100%" border="0">
<thead>
<tr>
<th width="10%">Prop</th>
<th>Type</th>
<th width="20%">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>cols</td>
<td><Code language="jsx" children="React.CSSProperties['gridTemplateColumns']"></Code></td>
<td width="20%">-</td>
</tr>
<tr>
<td>rows</td>
<td><Code language="jsx" children="React.CSSProperties['gridTemplateRows']"></Code></td>
<td>-</td>
</tr>
<tr>
<td>gap</td>
<td><Code language="jsx" children="{ 'col': React.CSSProperties['columnGap'], 'row': React.CSSProperties['rowGap'] }"></Code></td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td><Code language="jsx" children="React.CSSProperties['width']"></Code></td>
<td><Code language="jsx" children="'100%'"></Code></td>
</tr>
<tr>
<td>padding</td>
<td><Code language="jsx" children="React.CSSProperties['padding']"></Code></td>
<td>-</td>
</tr>
<tr>
<td>customClass</td>
<td><Code children="'string'" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>customStyles</td>
<td><Code children="React.CSSProperties" language="jsx"></Code></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br/>
