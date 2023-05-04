## Radio

The Radio component allow the user to select one option from a set. It is commonly used in forms.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Radio"></LeSourceButton></div>

<br />

#### Import

<div>
<RadioImportPreview>
</RadioImportPreview>
</div>

- **Radio** - The main component
- **RadioProps** - The props type

<br />

#### Field Key

The input type radio `name` prop is used to group the radio buttons together. So the `fieldKey` prop is used to identify the radio button, it sets the `id`, `name` attributes from the input and the `htmlFor` attributes of the label. The final `id` is the `fieldKey` prop plus `#` plus the `value` prop.

<div>
<RadioFieldKeyPreview>
</RadioFieldKeyPreview>
</div>

<br />

#### Sizes

Use the `size` prop to change the size of the radio button.

<div>
<RadioSizePreview>
</RadioSizePreview>
</div>

<br />

#### Action

Use the `onChange` prop to get the value of the selected option.

<div>
<RadioActionPreview>
</RadioActionPreview>
</div>

<br />

#### State

Use the `state` prop to change the state of the radio button.

<div>
<RadioStatePreview>
</RadioStatePreview>
</div>

<br />

#### Custom

Use the `custom` prefixed props to customize the radio, label and container elements style.

<div>
<RadioCustomPreview>
</RadioCustomPreview>
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
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>value</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>label</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>size</td>
<td><LeHighlighter code="'small' | 'medium' | 'large'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="'medium'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onChange</td>
<td><LeHighlighter code="(event: React.ChangeEvent<HTMLInputElement>) => void" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<tr>
<td>defaultChecked</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="false" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter code="RadioState | {
	disabled?: false
}" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customInputStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customInputClasses</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customLabelStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customLabelClasses</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>radioProps</td>
<td><LeHighlighter code="React.InputHTMLAttributes<HTMLInputElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>radioRef</td>
<td><LeHighlighter code="React.Ref<HTMLInputElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
</tbody>
</table>
</div>

<br/>
