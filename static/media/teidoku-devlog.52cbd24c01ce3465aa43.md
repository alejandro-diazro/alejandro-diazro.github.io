---
title: 'Teidoku: my first game in Godot'
date: 2026-09-28
description: How I made a Sudoku roguelike for Tranki Jam #1, day by day.
---

![Teidoku](/blog/teidoku/banner.png)

A couple of weeks ago **Tranki Jam #1** started, with the theme *'Return'* and a restricted colour palette. I went in with three very clear goals:

- **Learn Godot.** I always work with Unreal, so this was the perfect excuse to try something new.
- **Make something playable.** I had spent a while leaving every side project half finished, and I wanted to break that streak.
- **Have fun** tinkering along the way.

The result is [Teidoku](https://diazro.itch.io/teidoku), and you can play it for free in your browser.

## The idea

Explained as simply as possible: Teidoku is a puzzle roguelike where you don't solve a Sudoku, you **dismantle it**. You remove numbers one by one, making sure that every removal still leads to a unique deduction. In other words, you take the board back to its starting state so that someone else could solve it. That is my take on the *'Return'* theme.

Every number you remove gives you resources to buy abilities, and there are penalties waiting for you whilst you try to strip the board down to its minimum clues.

## Day 1: getting to know Godot

Most of the first day was spent working out how Godot works. Even so, by the end of it I already had **random board generation** for 4x4, 6x6 and 9x9 grids. The code still needed some polishing, but the core was there.

## Day 2: removing numbers

Progress was slow, but you could already **remove numbers** with their validation. If a move is not possible you lose a life. Each level asks you to remove a certain number of digits, and once you complete it you move up a level, which either asks you to remove more numbers or introduces the 6x6 and 9x9 boards.

## Day 3: a name and some art

Life got busy and I could not work on it for a few days, but at least the project got a name: **Teidoku**, a mix of Teide and Sudoku.

I also started on the art side, which is not my strong point. For the background I wrote a simple **shader** with a bit of movement, and I built the home screen with two buttons: *Play* and *How to play*. It was my first time building interfaces in Godot, so I was learning how its UI system works as I went.

## Day 4: working on the interface

I spent the day polishing the interface. There was still plenty of **juice** missing from the game loop, such as combos popping up on screen, and the abilities were still to be done.

## Day 5: the game takes shape

By now most of the game was done. I added the classic **CRT shader** for that old-screen look, and built the whole interface for points, lives and so on, along with the lose condition.

## Days 6, 7 and 8: shop and curses

During these three days I worked on the **shop** and the **curses**, the permanent penalties that stack up as you reach progression milestones. I also replaced the default cursor with a custom one.

After that I was running out of time, so the rest of the jam went into fixing bugs and preparing the itch.io page.

## What I take away from it

Looking back at my three goals:

| Goal | Result |
| --- | --- |
| Learn Godot | ✅ From zero to a released game |
| Make something playable | ✅ Finished and published |
| Have fun | ✅ Absolutely |

Coming from Unreal, Godot felt light and quick to iterate with, and its UI system is something I want to keep exploring. There are still things I would like to add, such as proper icons for the shop items and curses, but for the first time in a while I **finished** a project, and that was the whole point.

![Teidoku cover](/blog/teidoku/cover.png)

If you give it a go, I would love to hear what you think. [Play Teidoku on itch.io](https://diazro.itch.io/teidoku).
