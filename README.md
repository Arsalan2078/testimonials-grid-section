# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Arsalan2078/testimonials-grid-section](https://github.com/Arsalan2078/testimonials-grid-section)
- Live Site URL: [https://helpful-otter-b38be5.netlify.app](https://helpful-otter-b38be5.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vite
- React

### What I learned

I learned how to use the experimental attr() function in css that returns information stored in data attributes. In this challenge, I used to create a data attribute utility called "data-opacity" that accepts a number, which is used as a value for opacity property. The opacity property with said value is applied to elements.

```html
<div data-opacity="0.5">Lorem ipsum</blockquote>
```

```css
[data-opacity] {
  opacity: attr(data-opacity type(<number>));
}
```

### Useful resources

- [https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css](https://github.com/elad2412/the-new-css-reset/blob/main/css/reset.css) - A comprehensive css reset I use regularly.

## Author

- Frontend Mentor - [@Arsalan2078](https://www.frontendmentor.io/profile/Arsalan2078)
