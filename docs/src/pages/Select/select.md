## Select

Select is a component that allow users to select values from a list of options.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Select"></LeSourceButton>
</div>

<br/>

#### Import

<div>
<SelectImportPreview>
</SelectImportPreview>
</div>

- **Select** - The select component.
- **SelectProps** - The select props types.
- **Option** - The select option component.
- **OptionProps** - The option props types.

</br>

#### Options

Use the `options` prop to pass an array of options to the select component.

<div>
<SelectOptionPreview>
</SelectOptionPreview>
</div>

<br/>

#### Field Key

Use the `fieldKey` prop to set the name and id of the select.

<div>
<SelectKeyPreview>
</SelectKeyPreview>
</div>

<br />

#### Variant

Use the `variant` prop to change the appearance of the select field.

<div>
<SelectVariantPreview>
</SelectVariantPreview>
</div>

<br />

#### Size

Use the `size` prop to change the size of the select field.

<div>
<SelectSizePreview>
</SelectSizePreview>
</div>

<br />

#### Focus Style

Use the `focusStyle` prop to apply the focused style on the field.

<div>
<SelectFocusStylePreview>
</SelectFocusStylePreview>
</div>

</br>

#### Action

Use the `onChange` prop to handle the change event from select.

<div>
<SelectActionPreview>
</SelectActionPreview>
</div>

<br />

#### Multiple

Use the `multiple` prop to allow multiple selection.

<div>
<SelectMultiplePreview>
</SelectMultiplePreview>
</div>

<br />

#### Custom

Use the `customClass` and `customStyles` props to style the select field

<div>
<SelectCustomPreview>
</SelectCustPreview>
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
<td>fieldKey</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter language="tsx" code="'small' | 'medium' | 'large'" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>variant</td>
<td><LeHighlighter language="tsx" code="'outlined' | 'filled'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'filled'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>width</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['width']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'auto'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>placeholder</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>focusStyle</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="true" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onChange</td>
<td><LeHighlighter code="(value: string, event?: React.ChangeEvent<HTMLInputElement) => void" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter code="{ disabled?: boolean; }" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
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
