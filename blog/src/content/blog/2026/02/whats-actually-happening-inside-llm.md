---
title: What’s Actually Happening Inside an LLM? Lessons from MIT’s Intro to Deep Learning
pubDate: "2026-02-09T21:21:00Z"
description: ""
legacyPath: /2026/02/whats-actually-happening-inside-llm.html
canonicalPath: /blog/2026/02/whats-actually-happening-inside-llm
---

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmOH3XvWC3a175lERxA6-p9KKm8fCZP1k_eEh-byFGPnW0KaERl_D5XLOPChrDWMtnxeBF3zQTLB82-aKjmBN01Vpl2R7zqtDTIERvb91oKOHBm15UyqooDpx_9doVr7MRhUQU9SG3VZn-tAtReaOkgGSs3fNfoIlUO7FAPdw19IjZPSLsa8ASYgrCLls/w640-h316/llms.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmOH3XvWC3a175lERxA6-p9KKm8fCZP1k_eEh-byFGPnW0KaERl_D5XLOPChrDWMtnxeBF3zQTLB82-aKjmBN01Vpl2R7zqtDTIERvb91oKOHBm15UyqooDpx_9doVr7MRhUQU9SG3VZn-tAtReaOkgGSs3fNfoIlUO7FAPdw19IjZPSLsa8ASYgrCLls/s1534/llms.png)

  

Lately, we’ve all been fascinated by this AI explosion and how large language models (LLMs) like GPT, Gemini, Claude and others are shaping the future. Even though most people on tech have a rough idea of how LLMs work, I wanted to go deeper. I’m the kind of person who needs to understand how things work on the inside, the kind of kid who broke toys just to see what was inside.

So when a friend of mine told me to take [MIT 6.S191, “Introduction to Deep Learning,”](https://introtodeeplearning.com/) I was in. He took the 2024 version, and I watched the 2025 lectures, mainly because the 2026 ones weren’t available yet. The course is organized by MIT CSAIL and is led by well-known names in the AI space like Alexander Amini and Ava Amani.

The structure of the course is simple but effective: lectures to explain the core ideas, paired with hands-on labs where you actually see those ideas working in code. It’s not just theory, you’re constantly connecting concepts to real models.

One thing the course makes very clear early on is that most of the ideas behind modern AI and LLMs aren’t brand new. Many of the core mathematical principles started appearing in the 1940s–1950s. What’s changed is our ability to run these models at massive scale.

That’s why the first part of the course is full of Greek symbols, alpha, beta, gamma, epsilon flying around. It’s building the mathematical foundation so the later concepts actually make sense. Once you get past that foundation, things get a lot more fun.

Here are the main concepts I took away from the course:

  

## The Building Blocks: Neural Networks

The course begins with the perceptron, the most basic unit of a neural network. You can think of it as a tiny decision-maker: it takes several inputs, assigns importance to each one using weights, combines them, and produces an output. On its own, a perceptron is very limited, but it establishes the core idea behind how neural networks process information.

Deep learning emerges when you stack massive numbers of these simple units into layers, sometimes millions or even billions of them. Models like ChatGPT are built this way. Your prompt is transformed into numbers and passed through vast networks of weighted connections, where each layer refines the information a little more. The “learning” happens when the model repeatedly adjusts those weights during training, gradually reducing mistakes and improving its ability to predict what comes next.

  

## Sequential Thinking: Why Order Matters

Most data we deal with has a specific order, like sentences or music. This is where Recurrent Neural Networks (RNNs) come in. Unlike a model that looks at each input in isolation, an RNN has a kind of short-term memory that keeps track of what came before.

This explains why early chatbots struggled to stay on topic. They could follow a sentence for a bit, but if things got too long, they would forget how the conversation started. If you’ve ever used an old chatbot that suddenly went off the rails, this is why.

  

## What a Language Model Really Is

This lecture strips away much of the hype and mystery. At its core, a language model does one simple thing: given everything it has seen so far, it predicts what should come next. 

There is no built-in understanding or stored knowledge in the human sense, just probabilities over sequences of words. The power comes from scale. Trained on massive amounts of text, the model becomes extremely good at detecting patterns in language. When those matching abilities are pushed far enough, the results begin to look like reasoning, conversation, and even creativity, even though underneath it all, the mechanism is still just the next token prediction.

  

## Tokens: How Text Becomes Numbers

Here’s the part that really made it click for me. Language models don’t actually see words. They see tokens, which are just numbers that represent pieces of text.

When you type, “What is the capital of France?”, the model never sees that sentence. Internally, it’s broken into tokens and converted into something like:

"What"    → 421

"is"      → 318

"the"     → 262

"capital" → 1097

"of"      → 286

"France"  → 1421

"?"       → 30

So to the model, the question is really just:

\[421, 318, 262, 1097, 286, 1421, 30\]

Those numbers are the input. This explains a lot of LLM behavior: why wording matters so much, why small prompt changes can lead to very different answers, and why a model can sound confident while still being wrong. It’s not thinking about France, it’s predicting what usually comes next after a number sequence like this.

At its core, large language models are doing extremely advanced autocomplete, just at a massive scale.

  

## How Machines Learn to See

Images are very different from text, and the course explains why you can’t treat pixels like a spreadsheet. Instead of looking at the whole image at once, models learn small patterns first, like edges and corners, then shapes, and eventually objects.

This layered approach explains how AI can recognize faces or objects even when images aren’t perfect. It’s not memorizing pictures. It’s learning visual patterns step by step, much like humans do, just with more math and fewer opinions.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhkgu_pZojXhgpWyG_tGGe3dPJQAoPcV__1kb73abLB5thBom6h12-WDHEjvlIoGvSJm07W0TpaPdp3tTvdwKXnTMPDwdwNVzxKElnh3X9yxkXelJXhBE2PovYUarbrJwK0ZcpY0u-U0MXQFFmofoOSGOSnvQ2Haz3VFPT85ZhLxzqkK1xAxxmcWuivaUk=w640-h390)](https://blogger.googleusercontent.com/img/a/AVvXsEhkgu_pZojXhgpWyG_tGGe3dPJQAoPcV__1kb73abLB5thBom6h12-WDHEjvlIoGvSJm07W0TpaPdp3tTvdwKXnTMPDwdwNVzxKElnh3X9yxkXelJXhBE2PovYUarbrJwK0ZcpY0u-U0MXQFFmofoOSGOSnvQ2Haz3VFPT85ZhLxzqkK1xAxxmcWuivaUk)

  

## Generative Models: Creating New Things

So far, models were mostly focused on answering questions like “what is this?”. Then the course flips the question to something more interesting: “can we create something new?”.

Generative models don’t memorize examples and replay them. Instead, they learn the structure and patterns behind the data, like shapes in images, rhythms in music, or grammar in language. Once they learn those patterns, they can generate entirely new examples that still feel familiar.

An interesting fact is that the same core idea powers very different tools. The technology behind image generators, music models, and language models is fundamentally similar. What changes is the type of data, pixels, sound waves, or text, not the learning principle itself.

  

## The 3 Ways Models Learn

Supervised learning is the most straightforward. The model is trained with examples that already have the correct answers. You show it an input and the expected output, like an image labeled “cat” or “dog”, and it learns to map inputs to the right labels. Most early machine learning systems worked this way.

Unsupervised learning removes the labels. The model is given raw data and asked to find patterns on its own. Instead of being told what’s correct, it looks for structure, like grouping similar items together or discovering hidden relationships. This is useful when you don’t know ahead of time what patterns exist in the data.

Reinforcement learning is learning through trial and error. The model takes actions, observes the outcome, and receives feedback as rewards or penalties. Over time, it learns which actions lead to better results. This approach is commonly used in games, robotics, and in training AI systems to follow human preferences, which is why it plays a role in shaping how assistants like ChatGPT behave.

  

## Fine-Tuning: Teaching the Model Your Rules

Once you understand feedback and rewards, fine-tuning starts to make a lot more sense. A pre-trained model is very general, it has learned from massive amounts of data across many topics. Fine-tuning is the process of nudging that model toward specific behaviors using your own examples.

The big advantage is consistency. Instead of repeating long instructions every time, the model behaves the way you want by default. This works especially well for internal tools, customer support bots, or assistants focused on a specific domain.

The trade-off is flexibility. If the fine-tuning data is biased, outdated, or incomplete, the model will confidently repeat those mistakes. Fine-tuning also requires more effort than simple prompting.

Prompting is telling the model what to do each time. Fine-tuning is changing the model’s habits.[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxgTb-G7npMBRXk8SOOezpZKcxgvC1WBoF7SgtosJLzjwVtbF0u6Tx30cj7MMdgJ8cLjeuJjQLzPjBSXabFuYy_ww1Q3q3rvQpIjsLZjU9NrRBEC4EErU__j47zJwFo9nMa6rTjW09zLPke4Mg_mR8ccvbZGe9-NEknlyCCcozsnRtM_yrpVYzcfqbYL8/w640-h268/fine-tune.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxgTb-G7npMBRXk8SOOezpZKcxgvC1WBoF7SgtosJLzjwVtbF0u6Tx30cj7MMdgJ8cLjeuJjQLzPjBSXabFuYy_ww1Q3q3rvQpIjsLZjU9NrRBEC4EErU__j47zJwFo9nMa6rTjW09zLPke4Mg_mR8ccvbZGe9-NEknlyCCcozsnRtM_yrpVYzcfqbYL8/s680/fine-tune.png)

  

Transformers

Modern LLMs are almost always built on transformers. The key idea is attention, a mechanism that lets the model look back across your prompt and decide which earlier tokens matter most right now. Instead of trying to carry a fragile “memory” forward (like older RNNs), a transformer constantly re-weights the context and pulls the most relevant pieces into focus.

  

This approach became the default after the 2017 research paper “[Attention Is All You Need](https://en.wikipedia.org/wiki/Attention_Is_All_You_Need)”, which introduced the transformer architecture and showed you could model language effectively without recurrence. From there, the path to today’s LLM boom was basically: transformers + lots of data + lots of compute. Once scaling got cheap enough and training got big enough, the “next token prediction” trick started producing systems that felt like they could reason, write, and chat, even though under the hood it’s still attention-powered pattern prediction.

  

## Final Thoughts

This course doesn’t teach you how to build ChatGPT from scratch, what it does teach you is how to understand it. It gives you the mental models needed to see what’s really happening under the hood, from neural networks and tokens to learning through feedback.

  
Once you start seeing those patterns, AI feels less like magic and more like engineering. It’s still impressive and powerful, but it stops being mysterious. You can reason about its strengths, its limits, and why it behaves the way it does.  
  
If you’re curious about AI and you want something more solid than hype threads and hot takes, I really recommend going through the lectures and labs. Even if you don’t plan to train models for a living, the payoff is huge, you’ll understand what these tools are actually doing, and you’ll use them a lot more confidently.
