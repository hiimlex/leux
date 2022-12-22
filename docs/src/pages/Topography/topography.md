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

#### Type

Use the `type` prop to change the text variant. There's no default type.

<div>
<Topography type="h1">h1. Heading</Topography>
<Topography type="h2">h2. Heading</Topography>
<Topography type="h3">h3. Heading</Topography>
<Topography type="h4">h4. Heading</Topography>
<Topography type="h5">h5. Heading</Topography>
<Topography type="h6">h6. Heading</Topography>
<Topography type="subtitle-1">subtitle-1. Subtitle</Topography>
<Topography type="subtitle-2">subtitle-2. Subtitle</Topography>
<Topography type="body-1">body-1. Body</Topography>
<Topography type="caption">caption. Caption</Topography>
<Topography type="button">button. Button</Topography>
<Topography type="overline">overline. Overline</Topography>
</div>

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
