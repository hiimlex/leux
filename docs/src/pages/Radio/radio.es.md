## Radio

El componente Radio permite al usuario seleccionar una opción de un conjunto. Se usa comúnmente en formularios.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Radio"></LeSourceButton></div>

<br />

##### Importación

<div>
<RadioImportPreview>
</RadioImportPreview>
</div>

<br />

##### Clave de Campo

La prop `name` del tipo de input radio se usa para agrupar los botones de radio. Por lo tanto, la prop `fieldKey` se usa para identificar el botón de radio, configurando los atributos `id`, `name` del input y el atributo `htmlFor` de la etiqueta. El `id` final es la prop `fieldKey` más `#` más la prop `value`.

<div>
<RadioFieldKeyPreview>
</RadioFieldKeyPreview>
</div>

<br />

##### Tamaños

Usa la prop `size` para cambiar el tamaño del botón de radio.

<div>
<RadioSizePreview>
</RadioSizePreview>
</div>

<br />

##### Acción

Usa la prop `onChange` para obtener el valor de la opción seleccionada.

<div>
<RadioActionPreview>
</RadioActionPreview>
</div>

<br />

##### Estado

Usa la prop `state` para cambiar el estado del botón de radio.

<div>
<RadioStatePreview>
</RadioStatePreview>
</div>

<br />

### API

<div>
<RadioApiTable>
</RadioApiTable>
</div>

<br/>
