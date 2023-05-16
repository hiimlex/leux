## Toast

The Toast component is used to show messages to the user for a short period of time and then disappear.

<div>
<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/TextArea"></LeSourceButton>
</div>

<br />

#### Import

<div>
<ToastImportPreview>
</ToastImportPreview>
</div>

- **Toast** - The main component.
- **ToastProps** - The props type.
- **ToastProvider** - The toast provider.
- **ToastContext** - The toast context.

<br />

#### Overlay

The Toast component uses the `OverlayProvider` to render the `ToastProvider` and pass `ToastContext` to the children.

The `OverlayProvider` is used to render components on top of the page. The `OverlayProvider` is used by the Modal component as well. Check this session <NavLink to="/components/overlay">Overlay Provider</NavLink>

<br />

#### ToastContext

The ToastContext is a service that you can use to manage a Modal component. It has the following attributes:

- `toasts` - the list of opened toasts
- `createToast` - create a Toast component

<div>
<ToastContextPreview>
</ToastContextPreview>
</div>

<br />

#### Usage

A simple usage of Toast component

<div>
<ToastUsagePreview>
</ToastUsagePreview>
</div>

<br />

#### Size

Use the `size` prop to change the size of the Toast component.

<div>
<ToastSizePreview>
</ToastSizePreview>
</div>

<br />

#### Theme 

Use the `theme` prop to change the color scheme of the Toast component.

<div>
<ToastThemePreview>
</ToastThemePreview>
</div>

<br />

#### Position

Use the `position` prop to change the position of the Toast component.

<div>
<ToastPositionPreview>
</ToastPositionPreview>
</div>

<br />

#### Duration

Use the `duration` prop to change the duration of the Toast component.

<div>
<ToastDurationPreview>
</ToastDurationPreview>
</div>

<br />

#### Closable

Use the `closable` prop to set if Toast component can be closed before the duration ends.

<div>
<ToastClosablePreview>
</ToastClosablePreview>
</div>

<br />

#### onClose

Use the `onClose` prop to set a callback when the Toast component is closed.

<div>
<ToastActionPreview>
</ToastActionPreview>
</div>

<br />

#### Custom

Use the `custom` prefixed props to customize the Toast component.

<div>
<ToastCustomPreview>
</ToastCustomPreview>
</div>

<br />