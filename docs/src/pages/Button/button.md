## LeButton

Button component is used to fire events. Commom used on forms, modals, panels and more.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/LeButton"></LeSourceButton>
</div>

#### Import

<div><ButtonImportPreview></ButtonImportPreview></div>

- **Button**: the button component
- **LeButtonProps**: the button props


##### Types

Use the `type` prop to change the button type. The default type is `filled`.

<div><ButtonTypePreview></ButtonTypePreview></div>

##### Variants

Use the `variant` prop to change the button color theme. The default variant is `primary`.

<div><ButtonVariantPreview></ButtonVariantPreview><div>

##### Sizes

Use the `size` prop to change the size of the button. The default size is `medium`

<div><ButtonSizePreview></ButtonSizePreview></div>

##### State

Use the `state` prop object to control that visual states from button. The default state is `{}`.

<div><ButtonStatePreview></ButtonStatePreview></div>

### API Reference


<div>
<table width="100%" border="0">
<thead>
<tr>
<th width="30%">Prop</th>
<th width="70%">Type</th>
</tr>
</thead>
<tbody>
<tr>
<td width="30%">type</td>
<td width="70%">filled, outlined, ghost</td>
</tr>
<tr>
<td width="30%">variant</td>
<td width="70%">primary, secondary, success, danger, warning, default</td>
</tr>
<tr>
<td width="30%">size</td>
<td width="70%">small, medium, large</td>
</tr>
<tr>
<td width="30%">state</td>
<td width="70%"><Code language="jsx" children="{ disabled: boolean }"></Code></td>
</tr>
<tr>
<td width="30%">onClick</td>
<td width="70%"><Code language="jsx" children="() => void"></Code></td>
</tr>
</tbody>
</table>
</div>
