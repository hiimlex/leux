## Select

The select component is used to select a single value from a list of options.

<div>
<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Select"></LeSourceButton></div>
</div>

#### Import

<div>
<SelectImportPreview>
</SelectImportPreview>
</div>

- **Select** - The main component
- **SelectProps** - The props type

<br />

#### Options

Use the `options` prop to set the options of the select. The options can be used as `children` too, but the `options` prop is the default way to set the options.

<div>
<SelectOptionsPreview>
</SelectOptionsPreview>
</div>

<br />

#### Sizes

Use the `size` prop to set the the select size.

<div>
<SelectSizePreview>
</SelectSizePreview>
</div>

<br />

#### Variants

Use the `variant` prop to set the the select variant style.

<div>
<SelectVariantPreview>
</SelectVariantPreview>
</div>

<br />

#### Action

Use the `onChange` prop to handle the select change event.

<div>
<SelectActionPreview>
</SelectActionPreview>
</div>

<br />

#### State

Use the `state` prop to set the the select state.

<div>
<SelectStatePreview>
</SelectStatePreview>
</div>

<br />

#### Custom

Use the custom prefixed props to customize Select style.

<div>
<SelectCustomPreview>
</SelectCustomPreview>
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
<td>showPlaceholderAsOption</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="false" style="soft" copy="'off'"></LeHighlighter></td>
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
<tr>
<td>customStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>selectRef</td>
<td><LeHighlighter code="React.Ref<HTMLSelectElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>selectProps</td>
<td><LeHighlighter code="React.HTMLProps<HTMLSelectElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br/>
