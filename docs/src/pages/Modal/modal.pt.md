## Modal

O componente Modal é um diálogo que aparece sobre a janela principal. Ele é usado para exibir informações ou coletar informações do usuário.

<div><LeSourceButton url="https://github.com/hiimlex/leux/tree/main/src/components/Modal"></LeSourceButton></div>

<br />

###### Importação

<div>
<ModalImportPreview>
</ModalImportPreview>
</div>

<br />

###### Uso

Use o hook `useModal` para abrir um componente Modal.

<div>
<ModalUsagePreview>
</ModalUsagePreview>
<div>

<br />

###### onClose, onOK e onCancel

O componente Modal possui três propriedades que você pode usar para lidar com as ações do componente Modal: `onClose`, `onOK` e `onCancel`.

Os `onOk` e `onCancel` só serão chamados se o componente Modal tiver botões de rodapé com as propriedades `ok` e `cancel`. O `onClose` será chamado após o fechamento do modal.

<br />

###### Estilização

Use as propriedades `top`, `left` e `right` para posicionar e dimensionar o componente Modal. Ao usar essas propriedades, a posição do Modal será definida como `fixed`.

<div>
<ModalPositionPreview>
</ModalPositionPreview>
</div>

O componente Modal também possui uma propriedade `zIndex` que você pode usar para definir o z-index do componente Modal. O valor padrão é 1000 e é definido pelo ModalContext.

<br />

### API

<div>
<ModalApiTable>
</ModalApiTable>
</div>

<br />
