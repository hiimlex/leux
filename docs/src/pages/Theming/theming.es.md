## Tematización

Aprende a personalizar el aspecto de tu aplicación con nuestro `ThemeProvider` y el hook `useTheme`. Cambia rápidamente entre temas claro, oscuro o personalizados con facilidad. ¡Empecemos!

<Box>
<div><LeSourceButton label="ThemeProvider" url="https://github.com/hiimlex/leux/tree/main/src/providers/ThemeProvider"></LeSourceButton></div>
<div><LeSourceButton label="useTheme" url="https://github.com/hiimlex/leux/tree/main/src/hooks/useTheme"></LeSourceButton></div>
</Box>

<br/>

El `ThemeProvider` es un componente de React que proporciona gestión de temas para tu aplicación usando variables CSS y el contexto de React. Permite que la aplicación cambie entre diferentes temas de manera dinámica y aplica los estilos del tema seleccionado de forma global.

<br/>

##### Props

- **`themes?: LeThemeMapper`**  
  Temas personalizados definidos por el usuario. Si no se proporciona, se usarán los temas predeterminados (`light` y `dark`).

- **`defaultTheme?: string`**  
  El tema predeterminado que se aplicará cuando se cargue la aplicación. Si no se proporciona, se utilizará el tema `light`.

- **`persistThemeKey`**  
  La clave que se utilizará para almacenar el tema actual en el almacenamiento local. El valor predeterminado es `le-theme`.

<br/>

##### Uso

<div>
<ThemingUsage></ThemingUsage>
</div>

<br/>

##### Métodos y Propiedades Clave

- **`swap(newTheme: LeThemes)`**  
  Cambia el tema actual a newTheme.

- **`theme`**  
  El objeto del tema actual que contiene los valores de color.

- **`themes`**  
  Todos los temas disponibles en la aplicación.

- **`currentTheme`**  
  El nombre del tema actualmente activo.

<br/>

##### Cómo Funciona

El componente `ThemeProvider` mantiene los temas disponibles y el tema seleccionado actualmente en su estado.
Cuando cambia el tema, el componente actualiza las variables CSS en el documento para aplicar los colores apropiados a nivel global.

El valor del contexto proporcionado por `ThemeProvider` incluye el tema actual y los métodos para cambiar el tema.

<br/>

### Hook useTheme

El hook `useTheme` es una forma simple y conveniente de acceder al tema actual y a los métodos proporcionados por el `ThemeProvider` dentro de cualquier componente funcional.

<br/>

###### Uso

<div>
<UseThemeUsage></UseThemeUsage>
</div>

<br />
