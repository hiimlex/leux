## Box

The Box component is a simple wrapper component that can be used to display data and is easy to style.

<div>
	<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Box"></LeSourceButton>
</div>

#### Import

<div>
	<ImportPreview></ImportPreview>
</div>

- **Box** - The Box component

#### Full usage

Example using all possible props from Box component.

<div>
	<BoxCompletePreview></BoxCompletePreview>
</div>

#### CSS

Some of the CSS properties that can be used to style the Box component as props. Like the `width`, `height`, `margin`, `padding` and `borderRadius`.

<div>
	<BoxCssPreview></BoxCssPreview>
</div>

#### Custom

The Box component can also be styled using custom CSS and classes.

<div>
	<BoxCustomPreview></BoxCustomPreview>
</div>

#### Centered

The content of Box component can be centered using the `center` prop.

<div>
	<BoxCenteredPreview></BoxCenteredPreview>
</div>

#### Grid Span

The Box component can be used to create a grid layout. Check <NavLink to="/layout/grid#span">this</NavLink> session to see how to create a grid layout.

### API Reference

<div>
<table width="100%">
<thead>
<tr>
<th width="10%">Key</th>
<th width="70%">Prop</th>
<th width="20%">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>centered</td>
<td><Code children="'boolean'" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>bgColor</td>
<td><Code children="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td><Code children="React.CSSProperties['width']" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td><Code children="React.CSSProperties['height']" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>margin</td>
<td><Code children="React.CSSProperties['margin']" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>borderRadius</td>
<td><Code children="React.CSSProperties['borderRadius']" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>textColor</td>
<td><Code children="'dark' | 'light' | 'darker' | 'lighter'" language="jsx"></Code></td>
<td>-</td>
</tr>
<tr>
<td>gridSpan</td>
<td><Code children="{ 'row': 1, 'col': 0 }" language="jsx"></Code></td>
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
