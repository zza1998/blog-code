import{p as e}from"./proxy-CFoEGod3.js";var t=e({default:()=>n}),n=`---
title: Debugging with PhysX Visual Debugger (PVD)
date: 2026-04-21
category: Tools
readTime: 7 min read
image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800
excerpt: A guide to setting up and using NVIDIA's Visual Debugger to inspect and profile your physics simulations.
---

Debugging physics can be a nightmare without the right tools. The PhysX Visual Debugger (PVD) is an essential companion for any developer working with the engine.

## What is PVD?

PVD is a separate application that receives simulation data from your game over a network socket. It allows you to:
- See invisible collision shapes.
- Inspect actor properties (velocity, mass, etc.) in real-time.
- Record and replay simulations to catch intermittent bugs.

## Setting Up the Connection

To connect your application to PVD, you need to initialize the PVD instrumentation:

\`\`\`cpp
PxPvd* mPvd = PxCreatePvd(*mFoundation);
PxPvdTransport* transport = PxDefaultPvdSocketTransportCreate(PVD_HOST, 5425, 10);
mPvd->connect(*transport, PxPvdInstrumentationFlag::eALL);
\`\`\`

Once connected, you can "see" through the eyes of the physics engine, making it much easier to identify why objects are falling through floors or jittering unexpectedly.
`;export{t as n,n as t};