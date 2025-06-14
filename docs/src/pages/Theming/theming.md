## Theming

Learn how to customize your app's look with our `ThemeProvider` and `useTheme` hook. Quickly switch between light, dark, or custom themes with ease. Let's get started!

<LeSourceWrapper>
<div><LeSourceButton label="ThemeProvider" url="https://github.com/hiimlex/leux/tree/main/src/providers/ThemeProvider"></LeSourceButton></div>
<div><LeSourceButton label="useTheme" url="https://github.com/hiimlex/leux/tree/main/src/hooks/useTheme"></LeSourceButton></div>
</LeSourceWrapper>

<br/>

The `ThemeProvider` is a React component that provides theme management for your application using CSS variables and React context. It allows the application to switch between different themes dynamically and applies the selected theme's styles globally.

<br/>

#### Props

- **`themes?: LeThemeMapper`**  
  Custom themes defined by the user. If not provided, the default themes (`light` and `dark`) will be used.

- **`defaultTheme?: string`**  
  The default theme to be applied when the application loads. If not provided, the `light` theme will be used.

- **`persistThemeKey`**  
  The key to use when storing the current theme in local storage. Default is `le-theme`.

<br/>

#### Example Usage

<div>
<ThemingUsage></ThemingUsage>
</div>

<br/>

#### Key Methods and Properties

- **`swap(newTheme: LeThemes)`**  
  Switches the current theme to newTheme.

- **`theme`**  
  The current theme object containing the color values.

- **`themes`**  
  All available themes in the application.

- **`currentTheme`**  
  The name of the currently active theme.

<br/>

#### How it Works

The `ThemeProvider` component maintains the available themes and the currently selected theme in its state.
When the theme changes, the component updates the CSS variables on the document to apply the appropriate colors globally.

The context value provided by `ThemeProvider` includes the current theme and methods to change the theme.

<br/>

### useTheme Hook

The `useTheme` hook is a simple and convenient way to access the current theme and the methods provided by the `ThemeProvider` within any functional component.

<br/>

#### Example Usage

<div>
<UseThemeUsage></UseThemeUsage>
</div>

<br />
