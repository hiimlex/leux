## Dropdown

The Dropdown component is used to display a list of items that can be selected.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Badge"></LeSourceButton></div>

<br />

#### Import

<div>
<DropdownImportPreview>
</DropdownImportPreview>
</div>

- **Dropdown** - the main component.
- **DropdownProps** - the prop types.

<br />

#### Anchor

The Dropdown component work with the `DropdownItem` component. The `DropdownItem` component is used to display a list of items that can be selected. The `DropdownItem` component can be used as a child of the `Dropdown` component.

To show the `Dropdown` component needs an `Anchor` component. The `Dropdown` component will be shown when the user clicks on the `Anchor` component that will be wrapped to handle the actions.

<div>
<DropdownAnchorPreview>
</DropdownAnchorPreview>
</div>

<br />

#### Variant

Use the `variant` prop to change the style of the `Dropdown` component.

<div>
<DropdownVariantPreview>
</DropdownVariantPreview>
</div>

<br />

#### Size

Use the `size` prop to change the size of the `Dropdown` component.

<div>
<DropdownSizePreview>
</DropdownSizePreview>
</div>

<br />

#### Position

Use the `position` prop to change the position of the `Dropdown` component. To use the centered position you might need to set a `width` to the Menu.

<div>
<DropdownPositionPreview>
</DropdownPositionPreview>
</div>

<br />

#### Triggers

Use the `trigger` prop to change how to trigger the `Dropdown` component.

<div>
<DropdownTriggerPreview>
</DropdownTriggerPreview>
</div>

<br />

#### Item

Use the `onClick` prop to handle the click event of the `DropdownItem` component.

<div>
<DropdownItemPreview>
</DropdownItemPreview>
</div>

<br />

#### Disabled

Use the `disabled` prop to disable the `DropdownItem` component.

<div>
<DropdownItemDisabledPreview>
</DropdownItemDisabledPreview>
</div>

<br/>

#### Separator

Use the `DropdownSeparator` prop to add a separator between the `DropdownItem` components.

<div>
<DropdownSeparatorPreview>
</DropdownSeparatorPreview>
</div>

<br />

### API Reference

#### Dropdown Props

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
<td>position</td>
<td><LeHighlighter language="tsx" code="'bl' | 'br' | 'tl' | 'tr'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'bl'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>trigger</td>
<td><LeHighlighter language="tsx" code="'click' | 'hover'" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'click'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onClick</td>
<td><LeHighlighter language="tsx" code="() => void" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="() => void" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>children</td>
<td><LeHighlighter language="tsx" code="ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>clickOutside</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>closeOnClick</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>width</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['width']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'100%'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>anchor</td>
<td><LeHighlighter language="tsx" code="ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="<Button />" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customWrapperClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customWrapperStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customMenuClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customMenuStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>menuProps</td>
<td><LeHighlighter code="React.HTMLAttributes<HTMLUListElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
</tbody>
</table>
</div>

<br/>

#### DropdownItem Props

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
<td>noBreakWord</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>children</td>
<td><LeHighlighter language="tsx" code="ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>closeOnClick</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>disabled</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>centered</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onClick</td>
<td><LeHighlighter language="tsx" code="(event?: ReactMouseEvent<HTMLLIElement, MouseEvent) => void" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter code="React.CSSProperties" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>itemProps</td>
<td><LeHighlighter code="React.HTMLAttributes<HTMLLIElement>" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
</tbody>
</table>
</div>

<br />
