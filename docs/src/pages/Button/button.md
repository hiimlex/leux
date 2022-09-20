## Button

Button component is used to fire events. Commom used on forms, modals, panels and more.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Button"></LeSourceButton>
</div>

#### Import

<div><ButtonImportPreview></ButtonImportPreview></div>

- **Button** is the main component
- **LeButtonProps** is the props type

#### Types

Use the `type` prop to change the button type.

<div><ButtonTypePreview></ButtonTypePreview></div>

#### Variants

Use the `variant` prop to change the button color theme.

<div><ButtonVariantPreview></ButtonVariantPreview><div>

#### Sizes

Use the `size` prop to change the size of the button.

<div><ButtonSizePreview></ButtonSizePreview></div>

#### State

Use the `state` prop object to control that visual states from button.

<div><ButtonStatePreview></ButtonStatePreview></div>

#### Action

Use the `onClick` prop to trigger an action when the button is clicked.

<div><ButtonActionPreview></ButtonActionPreview></div>

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
<td><Code language="jsx" children="'filled' | 'outlined' | 'ghost'"></Code></td>
<td><Code language="jsx" children="'filled'"></td>
</tr>
<tr>
<td>variant</td>
<td><Code language="jsx" children="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'"></Code></td>
<td><Code language="jsx" children="'primary'"></td>
</tr>
<tr>
<td>size</td>
<td><Code language="jsx" children="'small' | 'medium' | 'large'"></Code></td>
<td><Code language="jsx" children="'medium'"></td>
</tr>
<tr>
<td>state</td>
<td><Code language="jsx" children="{ disabled: boolean }"></Code></td>
<td><Code language="jsx" children="{}"></td>
</tr>
<tr>
<td>onClick</td>
<td><Code language="jsx" children="() => void"></Code></td>
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

<hr />
