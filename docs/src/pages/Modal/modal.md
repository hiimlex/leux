## Modal

The Modal component is a dialog that appears on top of the main window. It is used to display information or collect information from the user.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Modal"></LeSourceButton></div>

<br />

##### Import

<div>
<ModalImportPreview>
</ModalImportPreview>
</div>

<br />

##### Usage

Use the `useModal` hook to open a Modal component.

<div>
<ModalUsagePreview>
</ModalUsagePreview>
<div>

<br />

##### onClose, onOK and onCancel

The Modal component has three props that you can use to handle actions of the Modal component the `onClose`, `onOK` and `onCancel`.

The `onOk` and `onCancel` will only be called if the Modal component has footer buttons with `ok` and `cancel` props. The `onClose` will be called after the modal close.

<br />

##### Styling

Use the `top`, `left` and `right` props to position and size the Modal component. By using this props the Modal position will be set as `fixed`.

<div>
<ModalPositionPreview>
</ModalPositionPreview>
</div>

The Modal component has also a `zIndex` prop that you can use to set the z-index of the Modal component. The default value is 1000 and it is setted by the ModalContext.

<br />

### API Reference

<div>
<ModalApiTable>
</ModalApiTable>
</div>

<br />
