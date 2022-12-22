## Input

Input component is used to that allows users enter text.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Input"></LeSourceButton></div>

<br/>

#### Import

<div>
<InputImportPreview>
</InputImportPreview>
</div>

- **Input** - the main component.
- **InputProps** - the prop types.

<br/>

#### Field Key

Use the `fieldKey` prop to set the name and id of the input.

<div>
<InputKeyPreview>
</InputKeyPreview>
</div>

<br />

#### Variant

Use the `variant` prop to change the appearance of the input field.

<div>
<InputVariantPreview>
</InputVariantPreview>
</div>

<br/>

#### Size

Use the `size` prop to change the size of the input field.

<div>
<InputSizePreview>
</InputSizePreview>
</div>

#### Action

Use the `onChange` prop to handle the change event from input.

<div>
<InputActionPreview>
</InputActionPreview>
</div>

<br/>

#### Focus Style

Use the `focusStyle` prop to apply the focused style on the field.

<div>
<InputFocusPreview>
</InputFocusPreview>
</div>

<br />

#### State

Use the `state` prop to control the field state.

<div>
<InputStatePreview>
</InputStatePreview>
</div>

<br />

#### Custom

Use the `customClass` and `customStyles` prop to add custom CSS to the Input component.

<div>
<InputCustomPreview>
</InputCustomPreview>
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
<td>type</td>
<td><LeHighlighter language="tsx" code="'text' | 'password' | 'email'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'filled'" style="soft" copy="'off'"></LeHighlighter></td>
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
<td><LeHighlighter code="(value: string, event?: React.ChangeEvent< HTMLInputElement > => void" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
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

<br/>
