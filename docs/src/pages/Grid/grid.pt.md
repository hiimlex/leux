## Grid

O componente Grid permite criar um layout de grade. Ele é baseado no CSS Grid.

<div>
	<LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Grid"></LeSourceButton>
</div>

<br/>

##### Importação

<div>
	<GridImportPreview></GridImportPreview>
</div>

- **Grid** - o contêiner da grade.
- **GridProps** - os tipos de props da grade.
- **Box** - o item da grade.

<br/>

##### Coluna

Use a prop `col` para alterar o número de colunas, que pode ser usado como número ou como propriedades CSS `gridTemplateColumns`.

<div>
	<GridColPreview></GridColPreview>
</div>

<br/>

##### Linha

Use a prop `row` para alterar o número de linhas, que pode ser usado como número ou como propriedades CSS `gridTemplateRows`.

<div>
	<GridRowPreview></GridRowPreview>
</div>

<br/>

##### Espaçamento

Use a prop `gap` para alterar o espaço entre as colunas e linhas da grade.

<div>
	<GridGapPreview></GridGapPreview>
</div>

<br/>

##### Span

Para aumentar o tamanho de um item na grade, use a prop `gridSpan` do <NavLink to="/layout/box">componente Box</NavLink>.

<div>
	<GridSpanPreview></GridSpanPreview>
</div>

<br/>

### Referência da API

<div>
<GridApiTable>
</GridApiTable>
</div>

<br/>
