## Button

Button component is used to fire events. Commom used on forms, modals, panels and more.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Button"></LeSourceButton>
</div>

<br/>

#### Import

<div><ButtonImportPreview></ButtonImportPreview></div>

- **Button** is the main component
- **LeButtonProps** is the props type

<br/>

#### Types

Use the `type` prop to change the button type.

<div><ButtonTypePreview></ButtonTypePreview></div>

<br/>

#### Variants

Use the `variant` prop to change the button color theme.

<div><ButtonVariantPreview></ButtonVariantPreview><div>

<br/>

#### Sizes

Use the `size` prop to change the size of the button.

<div><ButtonSizePreview></ButtonSizePreview></div>

<br/>

#### State

Use the `state` prop object to control that visual states from button.

<div><ButtonStatePreview></ButtonStatePreview></div>

<br/>

#### Action

Use the `onClick` prop to trigger an action when the button is clicked.

<div><ButtonActionPreview></ButtonActionPreview></div>

<br/>

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
<td>type</td>
<td><LeHighlighter language="tsx" code="'filled' | 'outlined' | 'ghost'" style="soft"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'filled'" style="soft"></td>
</tr>
<tr>
<td>variant</td>
<td><LeHighlighter language="tsx" code="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'" style="soft"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'primary'" style="soft"></td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter language="tsx" code="'small' | 'medium' | 'large'" style="soft"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'medium'" style="soft"></td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter language="tsx" code="{ disabled: boolean }" style="soft"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="{}" style="soft"></td>
</tr>
<tr>
<td>onClick</td>
<td><LeHighlighter language="tsx" code="() => void" style="soft"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter code="'string'" language="tsx" style="soft"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br/>
