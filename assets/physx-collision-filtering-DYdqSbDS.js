import{A as e}from"./createLucideIcon-Bp-Gk3eh.js";var t=e({default:()=>n}),n=`---
title: Collision Filtering in PhysX
date: 2026-04-20
category: Physics
readTime: 5 min read
image: https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800
excerpt: Learn how to control which objects collide with each other using PhysX's powerful filtering system.
---

In complex scenes, you often want to prevent certain objects from colliding with each other. PhysX provides a flexible collision filtering system to achieve this.

## Why Filter Collisions?

Common use cases include:
- Preventing a character's weapons from colliding with the character itself.
- Creating "ghost" objects that only interact with specific layers.
- Optimizing performance by ignoring irrelevant collisions.

## How it Works

PhysX uses bitmasks and a simulation shader to decide if a pair of shapes should collide.

1. **Filter Data:** You assign \`PxFilterData\` (four 32-bit integers) to each shape.
2. **Simulation Shader:** A callback function compares the filter data of two shapes and returns a result (e.g., \`eDEFAULT\`, \`eSUPPRESS\`).

By mastering these bitwise operations, you can create highly specialized interaction rules for your game world.
`;export{t as n,n as t};