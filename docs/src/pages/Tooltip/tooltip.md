## Tooltip

The Tooltip component displays informative text when users hover over an element.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Tooltip"></LeSourceButton></div>

<br/>

#### Import

<div>
<TooltipImportPreview>
</TooltipImportPreview>
</div>

- **Select** - The main component.
- **SelectProps** - The props types.

<br/>

#### Usage

The Tooltip works by wrapping the Element that you want to display the Tooltip on. It considers the **margin, padding and position** from the main **Element** to display the **Tooltip** outside them.

<div>
<TooltipUsagePreview>
</TooltipUsagePreview>
</div>

<br/>

#### Direction

Use the `direction` prop to change the diplay direction of the tooltip.

<div>
<TooltipDirectionPreview>
</TooltipDirectionPreview>
</div>

<br/>

#### Theme

Use the `theme` prop to change the theme of the tooltip.

<div>
<TooltipThemePreview>
</TooltipThemePreview>
</div>

<br/>

#### Custom

Use the `custom` prefix props to change the tooltip style.

<div>
<TooltipCustomPreview>
</TooltipCustomPreview>
</div>

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
<td>children</td>
<td><LeHighlighter code="React.ReactNode" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>title</td>
<td><LeHighlighter code="string" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td>-</td>
</tr>
<tr>
<td>theme</td>
<td><LeHighlighter code="'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="'default'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>direction</td>
<td><LeHighlighter code="'top'|'right'|'bottom'|'left'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter code="'top'" language="tsx" style="soft" copy="'off'"></LeHighlighter></td>
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
</tbody>
</table>
</div>

<br/>
