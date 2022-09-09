## LeButton

Button component is used to fire events. Commom used on forms, modals, panels and more.

##### Usage

<div>
	<ImportCode></ImportCode>
</div>

- **Button**: the button component
- **LeButtonProps**: the button props

##### Variants

Use the `variant` prop to change the button color theme. The default variant is `primary`.

<div>
<VariantPreview></VariantPreview>
<div>

##### Sizes

Use the `size` prop to change the size of the button. The default size is `medium`

<div>
<SizePreview></SizePreview>
</div>

##### State Object

Use the `state` prop object to control that visual states from button. The default state is `{}`.

<div>
<StatePreview></StatePreview>
</div>

### API Reference

Props summary

<div>
<table width="100%" border="0">
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td width="30%">variant</td>
<td>primary, secondary, success, danger, warning, default</td>
</tr>
<tr>
<td width="30%">size</td>
<td>small, medium, large</td>
</tr>
<tr>
<td width="30%">state</td>
<td><Code language="jsx" children="{ disabled: boolean }"></Code></td>
</tr>
<tr>
<td width="30%">onClick</td>
<td><Code language="jsx" children="() => void"></Code></td>
</tr>
<tr>
<td width="30%">type</td>
<td>filled</td>
</tr>
</tbody>
</table>
</div>
