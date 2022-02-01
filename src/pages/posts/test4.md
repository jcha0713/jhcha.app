---
title: How to use Typescript with Svelte (updated)
category: web
date: 11/25/20
layout: ../../layouts/PostLayout.astro
---

With the official Typescript support in Svelte in place we can finally have turtles all the way down! The only things required are proper tools and plugins. Read on to learn more.

## Update (2020-08-10)

This article has been updated since the official Typescript support for Svelte was released. The official Svelte blog post explains how to get started with Svelte and Typescript quickly, but this article takes a little different approach with an opinionated (improved if you ask me) setup, plus some extra bonus materials.

Also, Rollup, which I use in the article as a bundler is pretty slow. Why? Because it needs to re-compile the whole shebang every time you change a file. It produces very small and efficient bundles though.

Things in tech move almost a the speed of light. Since this article was written a few other alternative and faster bundlers popped up. Bundlers that help you shorten the feedback loop. You have Snowpack and Svite for example.

If you are curious about Snowpack I have written an article on it - Snowpack with Svelte, Typescript and Tailwind CSS is a very pleasant surprise.

## Boilerplate

One of the show stoppers for people who want to start using Svelte was the lack of first class Typescript integration. And it's not so much about the type safety as about tooling. Great supporting tools for any framework are important for its future growth and popularity. Svelte is still a young framework, but without proper tooling ecosystem surrounding it, I am afraid it might die. It would be such shame.

I've done some experimenting with Rollup, Webpack and Parcel trying to get Svelte to play nice with Typescript. While I achieved decent results with all of them, I will use Rollup here as it has a pretty straight forward setup plus the re-compilation step was the fastest of them all.

Let's start with a standard vanilla JS Svelte setup and adjust our project there to enable Typescript support. The best way to learn is by doing.t

## Conclusion

There you go. We just learned how to use Typescript in Svelte together with Rollup bundler. But no matter what bundler you use svelte-preprocess always plays the central role when it comes to Typescript integration in Svelte. Actually, without it we wouldn't be able to use any other languages in our Svelte files.

Even though it's now possible to use Typescript in Svelte, I would recommend to
keep your Svelte files thin and write the heavy logic in separate files. By
utilizing libraries such as XState, RxJS and Rambda you can write concise and
testable code. The bar is high, but it's totally worth it! Give them a fair
chance!
