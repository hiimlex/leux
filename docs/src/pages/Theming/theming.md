## Theming

Learn how to customize your app's look with our `ThemeProvider` and `useTheme` hook. Quickly switch between light, dark, or custom themes with ease. Let's get started!

<div><LeSourceButton label="ThemeProvider" url="https://github.com/hiimlex/leux/tree/main/src/providers/ThemeProvider"></LeSourceButton></div>

<br/>

#### How it Works

The `ThemeProvider` component maintains the available themes and the currently selected theme in its state.
When the theme changes, the component updates the CSS variables on the document to apply the appropriate colors globally.

The context value provided by `ThemeProvider` includes the current theme and methods to change the theme.

<br/>

#### Example Usage

<div>
<ThemingUsage></ThemingUsage>
</div>

<br/>

### useTheme Hook

<div><LeSourceButton label="useTheme" url="https://github.com/hiimlex/leux/tree/main/src/hooks/useTheme"></LeSourceButton></div>

<br />

The `useTheme` hook is a simple and convenient way to access the current theme and the methods provided by the `ThemeProvider` within any functional component.

<br/>

#### Example Usage

<div>
<UseThemeUsage></UseThemeUsage>
</div>

<br />
