## TextArea

TextArea is a component that allows the user to enter multiple lines of text.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/TextArea"></LeSourceButton>
</div>

<br/>

#### Import

<div>
<TextAreaImportPreview>
</TextAreaImportPreview>
</div>

- **TextArea** - The main component.
- **TextAreaProps** - The props types.

<br/>

#### Field Key

Use the `fieldKey` prop to set the name and id property on the field.

<div>
<TextAreaFieldKeyPreview>
</TextAreaFieldKeyPreview>
</div>

<br />

#### Variant

Use the `variant` prop to set the variant of the field.

<div>
<TextAreaVariantPreview>
</TextAreaVariantPreview>
</div>

<br />

#### Sizes

Use the `size` prop to set the height and padding of the field. It work's like rows in a textarea, each row is `the fontSize + the lineHeight + the top and bottom padding` from the **TextArea** style.

<div>
<TextAreaSizePreview>
</TextAreaSizePreview>
</div>

<br />

#### Rows, MinRows and Resize

Use the `rows` props to set the quantity of line rows for the field height. Use the `minRows` props to set the minimum quantity of line rows for the field height. Use the `resize` props to set the resize behavior of the field.

<div>
<TextAreaRowsPreview>
</TextAreaRowsPreview>
</div>

<br/>

#### Usage

Use the `onChange` prop to set the action when the field is changed.

<div>
<TextAreaActionPreview>
</TextAreaActionPreview>
</div>

<br />

#### State

Use the `state` prop to set the state of the field. Pass `disabled` to disable the field.

<div>
<TextAreaStatePreview>
</TextAreaStatePreview>
</div>

<br/>

#### TextArea Props

Use the `textAreaProps` prop to set the rest of the props from the TextArea. The values passed into this prop will be merged with the default props and if there is a conflict, it will be the final value.

<div>
<TextAreaPropsPreview>
</TextAreaPropsPreview>
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
<td>defaultValue</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>onChange</td>
<td><LeHighlighter code="(value: ChangeEvent<HTMLTextAreaElement>) => void" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td><LeHighlighter code="TextAreaState | { disabled?: boolean }" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>minRows</td>
<td><LeHighlighter code="number" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="2" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>rows</td>
<td><LeHighlighter code="number" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="3" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>resize</td>
<td><LeHighlighter code="boolean" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="false" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
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
<td>textAreaProps</td>
<td><LeHighlighter code="React.TextareaHTMLAttributes<HTMLTextAreaElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>textAreaRef</td>
<td><LeHighlighter code="React.Ref<HTMLTextAreaElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
</tbody>
</table>
</div>

<br />
