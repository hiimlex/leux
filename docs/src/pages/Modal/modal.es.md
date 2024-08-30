## Modal

El componente Modal es un cuadro de diálogo que aparece sobre la ventana principal. Se utiliza para mostrar información o recopilar información del usuario.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Modal"></LeSourceButton></div>

<br />

###### Importación

<div>
<ModalImportPreview>
</ModalImportPreview>
</div>

<br />

###### Uso

Use el hook `useModal` para abrir un componente Modal.

<div>
<ModalUsagePreview>
</ModalUsagePreview>
<div>

<br />

###### onClose, onOK y onCancel

El componente Modal tiene tres propiedades que puedes usar para manejar las acciones del componente Modal: `onClose`, `onOK` y `onCancel`.

Los `onOk` y `onCancel` solo se llamarán si el componente Modal tiene botones de pie de página con las propiedades `ok` y `cancel`. El `onClose` se llamará después de que se cierre el modal.

<br />

###### Estilización

Usa las propiedades `top`, `left` y `right` para posicionar y dimensionar el componente Modal. Al usar estas propiedades, la posición del Modal se establecerá como `fixed`.

<div>
<ModalPositionPreview>
</ModalPositionPreview>
</div>

El componente Modal también tiene una propiedad `zIndex` que puedes usar para establecer el z-index del componente Modal. El valor predeterminado es 1000 y es establecido por el ModalContext.

<br />

### API

<div>
<ModalApiTable>
</ModalApiTable>
</div>

<br />
