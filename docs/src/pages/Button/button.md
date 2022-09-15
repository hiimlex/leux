## Button

Button component is used to fire events. Commom used on forms, modals, panels and more.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/LeButton"></LeSourceButton>
</div>

#### Import

<div><ButtonImportPreview></ButtonImportPreview></div>

- **Button**: the button component
- **LeButtonProps**: the button props

##### Types

Use the `type` prop to change the button type.

<div><ButtonTypePreview></ButtonTypePreview></div>

##### Variants

Use the `variant` prop to change the button color theme.

<div><ButtonVariantPreview></ButtonVariantPreview><div>

##### Sizes

Use the `size` prop to change the size of the button.

<div><ButtonSizePreview></ButtonSizePreview></div>

##### State

Use the `state` prop object to control that visual states from button.

<div><ButtonStatePreview></ButtonStatePreview></div>

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
<td width="10%">type</td>
<td width="70%"><Code language="jsx" children="'filled' | 'outlined' | 'ghost'"></Code></td>
<td width="20%"><Code language="jsx" children="'filled'"></td>
</tr>
<tr>
<td width="10%">variant</td>
<td width="70%"><Code language="jsx" children="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'"></Code></td>
<td width="20%"><Code language="jsx" children="'primary'"></td>
</tr>
<tr>
<td width="10%">size</td>
<td width="70%"><Code language="jsx" children="'small' | 'medium' | 'large'"></Code></td>
<td width="20%"><Code language="jsx" children="'medium'"></td>
</tr>
<tr>
<td width="10%">state</td>
<td width="70%"><Code language="jsx" children="{ disabled: boolean }"></Code></td>
<td width="20%"><Code language="jsx" children="{}"></td>
</tr>
<tr>
<td width="10%">onClick</td>
<td width="70%"><Code language="jsx" children="() => void"></Code></td>
<td width="70%">-</td>
</tr>
</tbody>
</table>
</div>
