## Tematização

Aprenda a personalizar a aparência do seu aplicativo com nosso `ThemeProvider` e o hook `useTheme`. Alterne rapidamente entre temas claro, escuro ou personalizados com facilidade. Vamos começar!

<Box>
<div><LeSourceButton label="ThemeProvider" url="https://github.com/hiimlex/leux/tree/main/src/providers/ThemeProvider"></LeSourceButton></div>
<div><LeSourceButton label="useTheme" url="https://github.com/hiimlex/leux/tree/main/src/hooks/useTheme"></LeSourceButton></div>
</Box>

<br/>

##### Theme Provider

O `ThemeProvider` é um componente React que fornece gerenciamento de temas para seu aplicativo usando variáveis CSS e contexto React. Ele permite que o aplicativo alterne entre diferentes temas dinamicamente e aplica os estilos do tema selecionado globalmente.

<br/>

###### Props

- **`themes?: LeThemeMapper`**  
  Temas personalizados definidos pelo usuário. Se não for fornecido, os temas padrão (`light` e `dark`) serão usados.

- **`defaultTheme?: string`**  
  O tema padrão a ser aplicado quando o aplicativo for carregado. Se não for fornecido, o tema `light` será usado.

- **`persistThemeKey`**  
  A chave a ser usada ao armazenar o tema atual no armazenamento local. O padrão é `le-theme`.

<br/>

###### Ex. de Uso

<div>
<ThemingUsage></ThemingUsage>
</div>

<br/>

###### Métodos e Propriedades Principais

- **`swap(newTheme: LeThemes)`**  
  Altera o tema atual para newTheme.

- **`theme`**  
  O objeto do tema atual contendo os valores de cor.

- **`themes`**  
  Todos os temas disponíveis no aplicativo.

- **`currentTheme`**  
  O nome do tema atualmente ativo.

<br/>

###### Como Funciona

O componente `ThemeProvider` mantém os temas disponíveis e o tema atualmente selecionado em seu estado.
Quando o tema é alterado, o componente atualiza as variáveis CSS no documento para aplicar as cores apropriadas globalmente.

O valor do contexto fornecido pelo `ThemeProvider` inclui o tema atual e os métodos para alterar o tema.

<br/>

##### Hook useTheme

O hook `useTheme` é uma maneira simples e conveniente de acessar o tema atual e os métodos fornecidos pelo `ThemeProvider` dentro de qualquer componente funcional.

<br/>

###### Ex. de Uso

<div>
<UseThemeUsage></UseThemeUsage>
</div>

<br />
