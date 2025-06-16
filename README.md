<img alt="Github panel" src="./Github.png">

<br/>

[Docs](https://leux.vercel.app/)

<a href="https://www.npmjs.com/package/@leux/ui" target="\_parent">
  <img alt="#npm" src="https://img.shields.io/npm/v/@leux/ui">
</a>
<a href="https://www.npmjs.com/package/leux" target="\_parent">
  <img alt="#npm" src="https://img.shields.io/npm/dm/@leux/ui">
</a>
<a href="https://nodejs.org/en/blog/release/v14.17.3/" target="\_parent">
  <img alt="#node" src="https://img.shields.io/badge/node-%3D%3E16.14.0-purple">
</a>

<div>
	<img src="./coverage/badge-functions.svg">
	<img src="./coverage/badge-statements.svg">
	<img src="./coverage/badge-lines.svg">
	<img src="./coverage/badge-branches.svg">
</div>

## 🎈 Overview

leux is a simple, lightweight, and fast React framework. It's built with the latest web technologies and is fully responsive.
The framework is designed to be easy to use and easy to learn.
The idea came when i have to redesign my own projects with the same UI/UX identity, so i decided to make it public for everyone as a library.

## 📦 Install

You can install this package using the following commands

```bash
npm install @leux/ui

yarn add @leux/ui
```

## 🚀 Usage

Import the components you want to use from the library and use them in your application.

```tsx
import React from "react";
import { Button } from "@leux/ui";

const App = () => {
	return (
		<div>
			<Button onClick={() => alert("Hello leux")}>Click me</Button>
		</div>
	);
};
```
