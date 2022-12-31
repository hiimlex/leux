## Checkbox

Checkbox is a component that allows the user to select one or more options from a set.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Checkbox"></LeSourceButton>
</div>

<br/>

#### Import

<div>
<CheckboxImportPreview>
</CheckboxImportPreview>
</div>

- **Checkbox** - the main component
- **CheckboxProps** - the props type

<br />

#### Sizes

Use the `size` prop to change the size of the checkbox.

<div>
<CheckboxSizePreview>
</CheckboxSizePreview>
</div>

<br />

#### Action

Use the `onChange` prop to trigger an action when the checkbox is clicked.

<div>
<CheckboxActionPreview>
</CheckboxActionPreview>
</div>

<br />

#### Custom

Use the `custom` props to customize the checkbox. You can customize the container, the input and the label.

<div>
<CheckboxCustomPreview>
</CheckboxCustomPreview>
</div>

<br />

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
<tr>
<td>fieldKey</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter code="'small' | 'medium' | 'large'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="'medium'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onChange</td>
<td><LeHighlighter code="(event: React.ChangeEvent<HTMLInputElement>) => void" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="'medium'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<tr>
<td>defaultChecked</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="false" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter code="CheckboxState | { disabled?: false }" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
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
<tr>
<td>customInputStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customInputClasses</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customLabelStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>customLabeClasses</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br/>
