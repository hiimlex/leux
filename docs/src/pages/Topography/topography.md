## Topography

Topography is a layout component. It is used to create headings, paragraphs, and other text elements overriding the parent style.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Topography"></LeSourceButton>
</div>

<br/>

#### Import

<div>
<ImportPreview></ImportPreview>
</div>

- **Topography** - the main component.
- **TopographyProps** - the prop types.

<br/>

#### Variant

Use the `variant` prop to change the text variant. There's no default variant.

<div>
<CodePreview></CodePreview>
</div>

<br/>

#### Custom

Use the `customClass` and `customStyles` prop to add custom CSS to the component.

<div>
<TopographyCustomPreview></TopographyCustomPreview>
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
<td>type</td>
<td><LeHighlighter code="'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle-1' |
'subtitle-2' | 'body-1' | 'body-2' | 'caption' | 'overline' | 'button'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
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

<br />
