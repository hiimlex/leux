## Avatar

Avatar is a component that represents a user, either as an image or as a placeholder.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Avatar"></LeSourceButton>
</div>
<br/>

#### Import

<div>
<AvatarImportPreview>
</AvatarImportPreview>
</div>

- **Avatar** - the main component.
- **AvatarProps** - the prop types.

<br/>

#### Src

Use the `src` prop to set the image source.

<div>
<AvatarSrcPreview>
</AvatarSrcPreview>
</div>

<br/>

#### asText

Use the `asText` prop to render the `src` as a text. The text displayed is the capital letters from `src` prop.

<div>
<AvatarAsTextPreview>
</AvatarAsTextPreview>

</div>

<br/>

#### Sizes

Use the `size` prop to change the avatar size.

<div>
<AvatarSizePreview>
</AvatarSizePreview>
</div>

<br/>

#### Custom

Use the `customSize` prop to change the CSS width and height property, and the `customClass` and `customStyles` to apply your styles directly on the avatar component.

<div>
<AvatarCustomPreview>
</AvatarCustomPreview>
</div>

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
<td>src</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter code="'small' | 'medium' | 'large'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="'medium'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customSize</td>
<td><LeHighlighter code="React.CSSProperties['width']" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customClasses</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br/>
