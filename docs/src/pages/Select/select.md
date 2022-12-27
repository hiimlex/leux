## Select

Select is a component that allow users to select values from a list of options. This is a custom component and not a native select element.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Select"></LeSourceButton>
</div>

<br/>

#### Import

<div>
<SelectImportPreview>
</SelectImportPreview>
</div>

- **Select** - The custom select field.
- **SelectProps** - The select props types.

</br>

#### Field Key

Use the `fieldKey` prop to set the name and id attributes to select field.

<div>
<SelectKeyPreview>
</SelectKeyPreview>
</div>

<br />

#### Options

Use the `options` prop to pass an array of options to the select field.

<div>
<SelectOptionPreview>
</SelectOptionPreview>
</div>

<br/>

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

#### Action

Use the `onChange` prop to handle the change event from select. The values will be returned as an `string[]`.

<div>
<SelectActionPreview>
</SelectActionPreview>
</div>

<br />

#### State

Use the `state` prop to change the state of the select field.

<div>
<SelectStatePreview>
</SelectStatePreview>
</div>

<br />

#### Multiple

Use the `multiple` prop to allow multiple selection. The input label will display the selected options with a comma separator as default, but you can change it by passing a string to the `valueSeparator` prop.

<div>
<SelectMultiplePreview>
</SelectMultiplePreview>
</div>

<br />

#### Hide Dropdown

There's two props to control when the select dropdown will be hide:

- `clickOptionHide` - to hide when select an option;
- `clickOutsideHide` - to hide when click on field outside.

<div>
<SelectHidePreview>
</SelectHidePreview>
</div>

<br />

#### Custom

As a custom component, you can customize the select field by passing multiples customClasses and customStyles props, like:

- `selectCustomClass` - to add a class to the select field;
- `selectCustomStyles` - to add styles select field;
- `optionCustomClass` - to add a class to the select options;
- `optionCustomStyles` - to add styles to the select options;
- `dropdownCustomClass` - to add a class to the select dropdown;
- `dropdownCustomStyles` - to add styles to the select dropdown;

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
<td><LeHighlighter language="tsx" code="'medium'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>variant</td>
<td><LeHighlighter language="tsx" code="'outlined' | 'filled'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'filled'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>width</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['width']" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
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
<td><LeHighlighter code="(value: string[]) => void" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter code="SelectState | { disabled?: boolean }" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>multiple</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="false" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>defaultValue</td>
<td><LeHighlighter code="string[]" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>options</td>
<td><LeHighlighter code="SelectOption[] | { value: string; label: string; state?: {disabled?: boolean } }[]" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="[]" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>clickOptionHide</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="true" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>clickOutsideHide</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="true" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>valueSeparator</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="', '" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>selectCustomClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>selectCustomStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>optionCustomClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>optionCustomStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>dropdownCustomClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>dropdownCustomStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br />
