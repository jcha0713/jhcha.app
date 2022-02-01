---
title: Tailwind CSS and SvelteKit - The easy way
category: web dev
date: 1/29/22
layout: ../../layouts/PostLayout.astro
---

Long story short, I needed to integrate Tailwind CSS into a new SvelteKit project and searched around on the Internet on how to do it. The first option is to use svelte-add, but it won't work unless you start off with a fresh project. The other common way to do it is some variation of my old Sapper and Tailwind solution. While it's still valid today turns out there is a much simpler way to do it.

## Create new SvelteKit project

When you create a new SvelteKit project with npm init svelte@next my⁠-⁠app command you have a few options to choose from. The choices you make will affect how easy it will be to integrate Tailwind CSS. For example, here are the choices that I made during my project creation.

As you can see in the screenshot above I chose TypeScript support. In order to get TypeScript working in Svelte you have to use svelte-preprocess library. That library is also the key to get Tailwind working in our project. Its job is to support and process many different languages in Svelte templates and it also has built-in support for PostCSS that Tailwind is based on.

Don't worry if you didn't choose TypeScript as an option in your project. You can install svelte⁠-⁠preprocess separately and implement it in your svelte.config.js like thi

Now that we have PostCSS support in place let's move on and install and configure Tailwind CSS and other required libraries.

## Import your CSS

The last step is to create a Tailwind CSS file and import it in the project. Create an app.css file under src directory, if it's not there already, and add the following to it.

```css
/* app.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1,
  h2,
  h3,
  h4 {
    @apply font-bold;
  }
}
```

You can also use Tailwind directives in your style tags. I usually add lang="postcss" to get rid of editor warnings, but you can safely omit it if you want as it has no effect on the functionality.

That's all there is to it. Tailwind CSS integration in SvelteKit in 3 easy steps. If I now counted correctly that is.
