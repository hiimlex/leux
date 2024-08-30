## Grid

El componente Grid te permite crear un diseño de cuadrícula. Está basado en CSS Grid.

<div>
	<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Grid"></LeSourceButton>
</div>

<br/>

##### Importación

<div>
	<GridImportPreview></GridImportPreview>
</div>

- **Grid** - el contenedor de cuadrícula.
- **GridProps** - los tipos de prop de la cuadrícula.
- **Box** - el ítem de la cuadrícula.

<br/>

##### Columna

Usa la prop `col` para cambiar el número de columnas, se puede usar como número o como propiedades CSS `gridTemplateColumns`.

<div>
	<GridColPreview></GridColPreview>
</div>

<br/>

##### Fila

Usa la prop `row` para cambiar el número de filas, se puede usar como número o como propiedades CSS `gridTemplateRows`.

<div>
	<GridRowPreview></GridRowPreview>
</div>

<br/>

##### Espaciado

Usa la prop `gap` para cambiar el espacio entre las columnas y filas de la cuadrícula.

<div>
	<GridGapPreview></GridGapPreview>
</div>

<br/>

##### Span

Para aumentar el tamaño de un ítem en la cuadrícula, usa la prop `gridSpan` del <NavLink to="/layout/box">componente Box</NavLink>.

<div>
	<GridSpanPreview></GridSpanPreview>
</div>

<br/>

### API

<div>
<GridApiTable>
</GridApiTable>
</div>

<br/>
