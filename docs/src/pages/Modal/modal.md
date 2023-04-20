## Modal

The Modal component is a dialog that appears on top of the main window. It is used to display information or collect information from the user.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Modal"></LeSourceButton></div>

<br />

#### Import

<div>
<ModalImportPreview>
</ModalImportPreview>
</div>

- **Modal** - the main component
- **ModalProps** - the props type
- **ModalContext** - the Modal Service
- **ModalProvider** - the Modal Provider

<br />

#### ModalProvider

The ModalProvider is a component that you can use to wrap your application. It will provide the ModalContext to the wrapped content.

<div>
<ModalProviderPreview>
</ModalProviderPreview>
</div>

<br />

#### ModalContext

The ModalContext is a service that you can use to manage a Modal component. It has the following attributes:

- `modals` - the list of opened Modal components
- `createModal` - create a Modal component
- `closeModal` - close the Modal component
- `openModal` - open the Modal component
- `hasModal` - the current Modal component
- `destroyModal` - destroy the Modal component
- `destroyAllModals` - destroy all Modal components

<div>
<ModalContextPreview>
</ModalContextPreview>
</div>

<br />

#### Usage

There is a simple way to use the Modal component. You can use the `ModalContext` to open a Modal component.

<div>
<ModalUsagePreview>
</ModalUsagePreview>
<div>

<br />

#### onClose, onOK and onCancel

The Modal component has three props that you can use to handle actions of the Modal component the `onClose`, `onOK` and `onCancel`.

The `onOk` and `onCancel` will only be called if the Modal component has a footer with buttons that has the `modalOk` and `modalCancel` ids respectively. The `onClose` will be called after the modal close.

<div>
<ModalActionsPreview>
</ModalActionsPreview>
</div>

<br />

#### Styling

Use the `top`, `left` and `right` props to position and size the Modal component. By using this props the Modal position will be set as `fixed`.

<div>
<ModalPositionPreview>
</ModalPositionPreview>
</div>

Use the `width` to set the width of the Modal component.

<div>
<ModalSizePreview>
</ModalSizePreview>
</div>

The Modal component has also a `zIndex` prop that you can use to set the z-index of the Modal component. The default value is 1000 and it is setted by the ModalContext.

<br />

### API Reference

<div>
<table>
<thead>
<tr>
<th width="20%">Prop</th>
<th width="60%">Type</th>
<th width="20%">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><RequiredProp>id</RequiredProp></td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<tr>
<td><RequiredProp>title</RequiredProp></td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>children</td>
<td><LeHighlighter language="tsx" code="React.ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>visible</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>width</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['width']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'45%'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>zIndex</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['zIndex']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="1000" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>centered</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>top</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['top']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>left</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['left']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>right</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties['right']" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customWrapperClass</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customWrapperStyles</td>
<td><LeHighlighter language="tsx" code="React.CSSProperties" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>closable</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>maskClosable</td>
<td><LeHighlighter language="tsx" code="boolean" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="true" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onClose</td>
<td><LeHighlighter language="tsx" code="() => void" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onOk</td>
<td><LeHighlighter language="tsx" code="ModalFooterFunction | (id:string, onClose: () => void) => void" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>onCancel</td>
<td><LeHighlighter language="tsx" code="ModalFooterFunction | (id:string, onClose: () => void) => void" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>okText</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'Ok'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>okText</td>
<td><LeHighlighter language="tsx" code="string" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="'Cancel'" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>footer</td>
<td><LeHighlighter language="tsx" code="ModalFooterProps | ButtonProps[] | null" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="DEFAULT_BUTTON_PROPS" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
<tr>
<td>customFooter</td>
<td><LeHighlighter language="tsx" code="React.ReactNode" style="soft" copy="'off'"></LeHighlighter></td>
<td><LeHighlighter language="tsx" code="null" style="soft" copy="'off'"></LeHighlighter></td>
</tr>
</tbody>
</table>
</div>

<br />