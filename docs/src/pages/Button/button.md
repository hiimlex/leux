## Button

Button component is used to fire events. Commom used on forms, modals, panels and more.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Button"></LeSourceButton>
</div>

<br/>

#### Import

<div><ButtonImportPreview></ButtonImportPreview></div>

- **Button** - the main component
- **ButtonProps** - the props type

<br/>

#### Variant

Use the `variant` prop to change the button style.

<div><ButtonVariantPreview></ButtonVariantPreview></div>

<br/>

#### Theme

Use the `theme` prop to change the button color theme.

<div><ButtonThemePreview></ButtonThemePreview><div>

<br/>

#### Sizes

Use the `size` prop to change the size of the button.

<div><ButtonSizePreview></ButtonSizePreview></div>

<br/>

#### State

Use the `state` prop object to control the button state, the `disabled` prop allows you to change when the button can be activate.

<div><ButtonStatePreview></ButtonStatePreview></div>

<br/>

#### Usage

Use the `onClick` prop to trigger an action when the button is clicked.

<div><ButtonActionPreview></ButtonActionPreview></div>

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
<td>variant</td>
<td><LeHighlighter language="tsx" code="'filled' | 'outlined' | 'ghost'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'filled'" style="soft" copy="'off'"></td>
</tr>
<tr>
<td>theme</td>
<td><LeHighlighter language="tsx" code="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'primary'" style="soft" copy="'off'"></td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter language="tsx" code="'small' | 'medium' | 'large'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'medium'" style="soft" copy="'off'"></td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter language="tsx" code="{ disabled: boolean }" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="{}" style="soft" copy="'off'"></td>
</tr>
<tr>
<td>onClick</td>
<td><LeHighlighter language="tsx" code="() => void" style="soft" copy="'off'"></LeHighlighter></td>
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
