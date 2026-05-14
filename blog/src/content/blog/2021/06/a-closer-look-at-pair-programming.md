---
title: A Closer Look at Pair Programming
pubDate: "2021-06-30T12:30:00.255Z"
description: ""
legacyPath: /2021/06/a-closer-look-at-pair-programming.html
canonicalPath: /blog/2021/06/a-closer-look-at-pair-programming
---

![](https://lh6.googleusercontent.com/Bd02WeGwx1NY9jmipswavpA467ayU75KULcIamJPgY5qszRZJUtFrkd5H8zEcMc1dyvefbUDIAeu4qoRKEZ2PqYZLfxZjZ63Ff5VUJX_YWBP_1XoWuyCjvSadUZIZMP2m_yZLJwkr7A=s0)

  

Last June 11th, I had the opportunity to participate as a speaker in the [**Vue.js Global Summit by Gleekle**](https://geekle.us/vue) to talk about one of my favorite topics, Pair Programming. My intention with this talk was to motivate teams to adopt this wonderful technique to improve their productivity.

Here I bring you a summary, we will be covering:  

*   **What is Pair Programming?  
    **
*   **Benefits of Pair Programming**
*   **Pair Programming styles**
*   **Implementing Pair Programming (tips and tricks)**
*   **Common Pushbacks**
*   **Takeaways**

  

Before start talking about Pair Programming, it’s important to mention some of the most common problems inside a development team:

  

*   First, Lack of communication between team members - This could be partialized or generalized problem depending on the company
    

  

*   Another one is Centralized knowledge - This happens when one team member is the to-go person for any particular technology, codebase familiarity, or domain knowledge. And yeah somebody is coming to your mind right now
    

  

*   Never-ending code reviews - A single PR could last forever
    

  

*   Different approaches to the same problem - This causes a lack of coherence in the codebase
    

  

*   And the big learning curve for new team members - Adapting a new team member could be a little bit frustrating
    

  

…well all of those are signs that your team needs Pair Programming 

## **So, what is Pair Programing?** 

According to the Agile Alliance, Pair programming consists of two programmers sharing a single workstation (one screen, keyboard, and mouse among the pair). The programmer at the keyboard is usually called the “driver”, the other, also actively involved in the programming task but focusing more on overall direction is the “navigator”; it is expected that the programmers swap roles every few minutes or so.

  
During this pandemic, the concept could change a little bit since usually, people are not physically in the same location so it’s more sharing the screen using zoom, slack or similar software. But you get the idea.

  

Also, Pair Programming is a fundamental part of Extreme Programming which is an agile software development framework that aims to produce higher quality software and higher quality of life for the development team.

  

## **What are the benefits of Pair Programming?**

![](https://lh5.googleusercontent.com/0jZ5Zb0XWF_GsYWCTSb1e2MjXObJDSfJFIe8eyPP2_pyP5vUeSjE2YlpxmtQqGODR0DrYwo8M9SMO2hwxZf7hA10By8tCiGS173VS07FyhPrvrj10S0ZR_KQ3MslfEjUxVci6gEC-kE=w320-h180)

#### **Shared knowledge**

The level of experience within team members varies, sometimes per technology, sometimes per codebase familiarity, and even per domain knowledge. So one of the fastest ways to put your team up to speed in any particular knowledge is by pair programming. Let me give you an example. Your team decides to adopt a new JavaScript Framework (in this case Vue.js, yes! my favorite one). Usually, some developers are going to get the fundamental concept super fast, and probably they are going to start working sooner than other team members (and that’s totally fine), or sometimes the other members are more focused on another part of the application, so at some point, the team could be unsynchronized, In this situation, the fastest way to sync up your team is by having some pair programming sessions between the ones that already know how to use Vue.js in this example, with the other part that is not familiarized yet.

  

#### **Two heads are better than one**

Robert Martin in his book, The Clean Coder, talks about the flow zone, which is the highly focused, tunnel-vision state of consciousness that programmers can get into while they write code. In this state, they feel productive as never. Indeed, code written in the Zone may come out faster, the problem is that you lose some of the big picture while you are in the Zone, so you will likely make decisions that you will later have to go back and reverse. 

  

One of the big benefits of pair programming is that it is virtually impossible for a pair to enter the Zone. There is no communication in the Zone, while pairing requires intense and constant communication. Also, a perk of having 2 people watching the same screen is that the pair will be catching some bugs with anticipation introduced by typos, wrong copy-paste, misspelled variables or functions, etc...

  

#### **Team alignment**

As the team is having more pair programming sessions and spending more time with each other, they get to standardized the programming style, usually following the cleanest and the most readable one. Also, commons issues are tackle using the same approach and logic. Certainly, you don't want to fuse with your coworkers, but you get the idea.

  

#### **Mentoring**

This is one of my favorite ones. There is a new dev on the team and the first question that comes to your mind is, how do I get this person up to speed in a fast and reliable way?... well Pair Programming is the answer. The quality of the mentorship will increase since you are working closely with the mentee, instead of having asynchronous communication all the way during the process.

  

#### **Faster code review**

Generally, a Pull Request works as follows: one developer starts coding to complete a task or a bug, that developer creates a pull request to get some feedback by tagging one developer or multiple developers in order to review that code when they have a chance.... and here is when the nightmare begins... the waiting time.

  

The waiting time can kill the team's productivity and motivation. Depending on the working agreement for PRs the code review timing can change, but usually, it takes longer than it should.

  

So while you are pair programming you are also doing code review in parallel, so the code review process takes less time because somebody already knows exactly what you are doing. 

  

I know that some people think that also developers outside of the pair programming session need to participate in the PRs and I agree, but usually, those scenarios are based on code that could affect other teams or big refactorings, in those cases, another pair of eyes should be involved.

  

#### **Open communication**

We are told that developers are shy, antisocial and that we like to work in isolation, this is a mistaken stereotype. We are humans, and humans are social creatures, that's a necessity, not a luxury. So one of the biggest benefits of pair programming is we receive more human interaction more frequently. We get to know each other better and that improves the relations between the developers, we feel more confident about expressing any concerns, so any blocker is removed faster and the productivity skyrocket.

##   
**Pair Programming Styles**

**

![](https://lh4.googleusercontent.com/W3DfuN_fSJSBVY4Tum4fJsoJEWV0YbQEn3BqTpJF_GRR3MUFh4j8MbzuKoJt0ZQ_ygoKbRUPnGctRqtt56DB37EXjR6RhjAv0UmkWoL5oJdvH9HinVwziucsLWJi-hdvw_UDlujoSPY=w320-h180)

**

#### **Driver and Navigator**

Possibly, this is the most used style. The name comes from the way two travelers might negotiate a car trip around an unfamiliar territory. The Driver is the person at the wheel, in this case at the keyboard. The driver types the code and stays focused on the current task, ignoring larger issues for the moment.

  

A driver should always talk about what she/he is thinking and doing. The Navigator reviews the code, gives directions, and shares thoughts. The navigator also has an eye on the larger issues, bugs, and makes notes of potential next steps or obstacles.  

  

#### **Ping Pong**

This technique embraces Test-Driven Development (TDD) and is perfect when you have a clearly defined task. This is how it works, let’s imagine that you are going to work on a new Vue component:

*   Person 1 writes a failing test.
*   Person 2 writes code to make it pass. Person 2 writes a failing test.
*   Person 1 writes code to make it pass.

Until the component is ready.  

  

#### **Strong-style pairing**

The main concept here is "For an idea to go from your head into the computer it MUST go through someone else's hands". This style is really good for transferring knowledge from one experienced developer to a less experienced one. The navigator is usually the person much more experienced, while the driver is a new developer. The experienced person mostly stays in the navigator role and guides the new developer. The driver should always follow the instructions from the navigator and discuss any concerns after the implementation.

  

This technique borders on micro-management, it can be a useful onboarding tool, but it shouldn't be overused.

  

#### **The tour**

Another style that works best with experts and new devs is the tour pair programming style. In this style, the expert has the tour guide role and the new developer will be like a tourist. The tour guide is the only one that codes and proposes the implementations. The tourist only watches and asks questions.  
  

Of course, there are more pair programming styles that you can read about them over the internet, but the ones that I have mentioned are some of the most used.

#### **Mob Programming**

Besides the styles, there is also another form of pair programming, same rules, the only difference is that it involved 3 or more developers, that’s what we call Mob Programming. The collaboration is extended to everyone on the team, while still using a single computer for writing the code.

Usually, you would like to use mob programming to tackle complex tasks that may involved people with different pieces of knowledge or to share knowledge. You can use the previously mentioned tour style for a better experience.

## **Implementing Pair Programming (tips and tricks)**

![](https://lh3.googleusercontent.com/HccJltpM22l2EWPXvGVyP7JkZpcG3UaHJyIOiEPZdMRVsGQZwLHGVCtTnAg_RwLuUboHmSGxJi-Y7iWvNGDshaWp7BK2kd20lGH_CB7oZhyXsC1LKwghGF_dlC7lLQHBsT8GhqgxZUA=w320-h212)

#### **How to start?**

Ok, at this point we have selected our pair programming style... But how to start adopting pair programming for the first time. Here I going to give some tips that have worked for me. Start small. In the first week, I will recommend you to have 2 or 3 pair programming sessions on different days and no more than 3 hours per each of them. That will give a sense of what it feels like, also, will avoid some overwhelming sentiment that I will talk about later. Select well-defined tasks. Since this is going to be a new experience, we would like to avoid unpleasant feelings, and some structure can help us with that, therefore, I recommend starting pair programming on well-defined tasks and preferably, the small ones. Assess the experience. It is recommended to discuss the experience of the first pair programming sessions in order to know what the pair liked and what the pair didn’t like, so that will improve the upcoming ones.

  

#### **Scheduling sessions**

I highly recommend scheduling the pair programming sessions, this will avoid some ambiguity within the team and the team will have a more structured format. Some teams that practice pair programming, usually use the open format where one developer selects a task and then asks "who wants to pair with me?" the issue here is that sometimes the same devs will start doing more pair programing because they get along, doing less pair programming with the rest of the team members, and you would like to have a 360 pair programming experience, remember the benefits that I have mentioned. Also, if the team doesn't have a schedule is like waking up without knowing what to expect on the workday. So schedule the pair programming sessions, you will see the results. Additionally, it is important to agree on the rotation point A.K.A. swapping roles between the driver and navigator. On my team, we usually have long pair programming sessions. So before starting in the session, we decide who wants to be the driver and then we swap roles at the midpoint, for example, if we decide to pair programming for 4 hours, we swap roles after 2 hours.

#### **Be patient**

A key point here. When we are in the navigator role, it is tempted to start telling the driver that there is a typo or that the driver copied the wrong variable… stop there. Wait for a little be more until the driver finishes at least what it has on his mind. That will avoid frequent interruptions and unpleasant experiences. It’s like when you are driving a real car and the passenger starts telling you the things that you are doing wrong, nobody likes that. Wait a little bit more to correct some of the normal errors that will see on the screen.

#### **Taking breaks**

Super important. The overwhelming feeling can start kicking the pair as soon as the pair doesn't take breaks. My recommendation for a pair programming session, take 15 minutes of break after a 1-hour session (no negotiable). I know that sometimes we don't want to stop because we have an idea in our mind or we are in the flow zone, but believe it is not worth it, take a break. You will renew your energies.

  

## **Common Pushbacks**

These are negative reactions we can get when introducing pair programming:

*   2 people on one task - Sometimes management can get a little skeptical when the idea of two people working on the same task is on the table. You can justify allocating two developers to one task by highlighting the reduced time (and frustration) devoted to QA.

*   Overwhelming feelings - If you are an introvert I understand that the idea of working many hours with someone is overwhelming. This is why it's so important to agree on pair programming schedules and breaks, so people can engage and take breaks as they need. As people get used to the dynamic, this will not only serve the code, but the team will feel more comfortable with each other and the experience will be more pleasant.  
    
*   People don't like to be observed - Developers can feel afraid of being judged because of the structure of their code, their speed, style, typos, etc. This is probably the hardest obstacle to tackle. My recommendation is to embrace the practice, not to impose it, highlighting the tremendous learning opportunity of working side by side with another peer.

  

## **Takeaways**

*   Pair programming is a powerful tool to implement and teach any technology.
*   Improves the quality of your team's codebase, communication, and knowledge.
*   There is no right or wrong approach to practicing pair programming.
*   You will see the improvements as time goes by.
