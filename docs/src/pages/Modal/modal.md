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

<br />

#### Overlay

The Toast component uses the OverlayProvider to render the ModalProvider and pass ModalContext to the children.

The OverlayProvider is used to render components on top of the page. The OverlayProvider is used by the Toast component as well. Check this session <NavLink to="/components/overlay">Overlay Provider</NavLink>

<br />

#### ModalContext

The ModalContext is a service that you can use to manage a Modal component. It has the following attributes:

- `openModals` - the list of opened Modal components
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
<ModalApiTable>
</ModalApiTable>
</div>

<br />
