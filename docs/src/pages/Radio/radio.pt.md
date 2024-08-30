## Radio

O componente Radio permite que o usuário selecione uma opção de um conjunto. É comumente usado em formulários.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Radio"></LeSourceButton></div>

<br />

##### Importação

<div>
<RadioImportPreview>
</RadioImportPreview>
</div>

<br />

##### Chave do Campo

A prop `name` do input do tipo radio é usada para agrupar os botões de rádio. Assim, a prop `fieldKey` é usada para identificar o botão de rádio, configurando os atributos `id`, `name` do input e o atributo `htmlFor` do rótulo. O `id` final é a prop `fieldKey` mais `#` mais a prop `value`.

<div>
<RadioFieldKeyPreview>
</RadioFieldKeyPreview>
</div>

<br />

##### Tamanhos

Use a prop `size` para alterar o tamanho do botão de rádio.

<div>
<RadioSizePreview>
</RadioSizePreview>
</div>

<br />

##### Ação

Use a prop `onChange` para obter o valor da opção selecionada.

<div>
<RadioActionPreview>
</RadioActionPreview>
</div>

<br />

##### Estado

Use a prop `state` para alterar o estado do botão de rádio.

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
