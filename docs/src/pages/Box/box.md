## Box

The Box component is a simple wrapper component that can be used to display data and is easy to style.

<div>
	<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Box"></LeSourceButton>
</div>

<br/>

#### Import

<div>
	<ImportPreview></ImportPreview>
</div>

- **Box**: the main component.
- **BoxProps**: the prop types.

<br/>

#### Full usage

Example using all possible props from Box component.

<div>
	<BoxCompletePreview></BoxCompletePreview>
</div>

<br/>

#### CSS

Some of the CSS properties that can be used to style the Box component as props. Like the `width`, `height`, `margin`, `padding` and `borderRadius`.

<div>
	<BoxCssPreview></BoxCssPreview>
</div>

<br/>

#### Centered

The content of Box component can be centered using the `center` prop.

<div>
	<BoxCenteredPreview></BoxCenteredPreview>
</div>

<br/>

#### Grid Span

The Box component can be used to create a grid layout. Check <NavLink to="/layout/grid#span">this</NavLink> session to see how to create a grid layout.

<br/>

#### Custom

Use the `customClass` and `customStyles` prop to add custom CSS to the Box component.

<div>
	<BoxCustomPreview></BoxCustomPreview>
</div>

<br/>

### API Reference

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
<td>centered</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>bgColor</td>
<td><LeHighlighter code="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>width</td>
<td><LeHighlighter code="React.CSSProperties['width']" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td><LeHighlighter code="React.CSSProperties['height']" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>margin</td>
<td><LeHighlighter code="React.CSSProperties['margin']" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>borderRadius</td>
<td><LeHighlighter code="React.CSSProperties['borderRadius']" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>textColor</td>
<td><LeHighlighter code="'dark' | 'light' | 'darker' | 'lighter'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>gridSpan</td>
<td><LeHighlighter code="{ 'row': 1, 'col': 0 }" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br/>
