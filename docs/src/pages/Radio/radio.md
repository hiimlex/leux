## Radio

The Radio component allow the user to select one option from a set. It is commonly used in forms.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Radio"></LeSourceButton></div>

<br />

#### Import

<div>
<RadioImportPreview>
</RadioImportPreview>
</div>

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
<RadioApiTable>
</RadioApiTable>
</div>

<br/>
