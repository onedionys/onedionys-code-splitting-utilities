<h1 align="center">Welcome to One Dionys - Code Splitting Utilities! 👋 </h1>

<p align="center">A utility to break application code into smaller bundles, speeding up page load times and improving performance. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-code-splitting-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-code-splitting-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-code-splitting-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-code-splitting-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-code-splitting-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-code-splitting-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-code-splitting-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { splitCode } = require('code-splitting-utilities');

const code = `
    // === SPLIT === //
    const part1 = 'This is part 1';
    // === SPLIT === //
    const part2 = 'This is part 2';
    // === SPLIT === //
    const part3 = 'This is part 3';
`;

const parts = splitCode(code);
console.log(parts);
```

#### Explanation

* This package provides a function splitCode(code, delimiter) which splits the provided code into parts based on the specified delimiter. By default, the delimiter is set to '// === SPLIT === //'.

#### Return Value

* An array of strings, where each element represents a part of the code split by the delimiter.

## 📆 Release Date

* v1.0.0 : 17 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Code Splitting Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Code Splitting Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
