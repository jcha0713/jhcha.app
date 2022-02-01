---
title: Svelte bind directive explained in-depth
category: web dev
date: 1/24/22
layout: ../../layouts/PostLayout.astro
---

I spent a few hours digging into Svelte's bind directive statement with focus on forms. Read on if you want to want to learn more!

In this article you will learn how to:

- Bind input values to variables
- B ind to objects instead of variables
- Manipulate text input values dynamically
- Create dynamic select binds
- Work with dynamic select controls such as radio buttons
- Group multiple inputs such as radio buttons
- Bind DOM elements to local variables
- Bind Svelte components to local variables

You will also learn about how Svelte compiler wires up everything together.

## Binding input values

Most of the bind examples have to do with Svelte forms. Why don't we start there with simple text input bindings that binds to a local variable?

```js
<!-- App.svelte -->
<script>
  let username = 'jane'
</script>

<div>
  <h2>Simple two-way bind</h2>
  <form>
    <div>
      <input type="text" name="username" bind:value={username} />
    </div>
    <div>
      <input type="text" name="repeat" bind:value={username} />
    </div>
    <p>
      username: <code>{username}</code>
    </p>
    <button on:click|preventDefault={() => (username = '')}>reset</button>
  </form>
</div>
```

In the code about we bind one variable to two text input fields. Nothing spectacular. It's very straight-forward and just works.

If you change one field, the value in another changes too.

If you need to bind a textarea element to a variable, it works exactly the same was as with text inputs.

## Binding Svelte child components

Last thing I want to talk about is how to bind Svelte components to local variables. Or more precisely, how to bind child component properties to local variables.

If you have read some of my earlier articles such as 3 different ways of cross-component communication in Svelte or Accessible switch toggle button with svelte.js and tailwind.css, you have seen this type of bind in action.

As the saying goes, "Repetition is the mother of learning," so let's repeat this with another example.

Start by creating a component named Hotdog.svelte in the src directory, because you know, who doesn't like hot dogs?

## Summary

That's all there is to it! Svelte bindings works just like you expect them too, or want them to. With very little code we can build pretty sophisticated forms in Svelte.

Form handling is hard in any framework and I will explore this topic more in-depth in the near future. Stay tuned and subscribe on the main page when I publish a new article!

As usual, here is the code https://github.com/codechips/svelte-bind-directive-examples
