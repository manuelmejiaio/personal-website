<template>
  <div id="blog" class="flex flex-col items-center text-green-700 pt-10 pb-20 px-5">
    <p class="text-4xl font-bold mb-10">Blog ✍</p>
    <div class="w-full md:w-9/12 border-4 border-green-700 rounded-lg p-5 mb-5 space-y-10">
      <a
        v-for="(post, index) in blogPosts"
        :key="index"
        class="flex flex-col md:flex-row hover:text-green-900 "
        target="_blank"
        rel="noopener"
        :href="post.link"
        :aria-label="post.title"
      >
        <img class="w-full md:w-1/12 md:mr-5 rounded-lg" :src="post.imgSource" :alt="post.title" />
        <div class="w-full md:w-11/12">
          <p class="text-xl md:text-2x font-bold ">{{ post.title }}</p>
          <p>
            {{ post.content }}
          </p>
        </div>
      </a>
    </div>
    <a
      class="text-2xl text-green-700 hover:text-green-900"
      target="_blank"
      rel="noopener"
      href="https://blog.manuelmejia.io/"
    >
      MORE POSTS...
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          title: `Let's talk about Web Accessibility`,
          content: `Most web applications are developed for users with no disabilities, under the assumption that all users have the same  physical abilities and resources , when in fact it's the opposite. The circumstances of our users will vary from having internet issues to being physically disabled, and here is when Web Accessibility come…`,
          link: `https://blog.manuelmejia.io/2020/08/lets-talk-about-web-accessibility.html`,
          imgSource: `https://1.bp.blogspot.com/-36fex_hwYR0/XygHcLwE8wI/AAAAAAAAZaY/epOxwihtSb8gcTVOKd7HftsI5zpczzQmACLcBGAsYHQ/w400-h267/manuelmejiajr.com%2Baccessibility.jpg`
        },
        {
          title: `Clean Code, even under pressure`,
          content: `We all have been in the position at work when the pressure comes, and delivering on time is a "life-or-death situation". There are a lot of factors that influence a bad project planning like wrong time estimation, workload distribution, team choice, etc...and maybe it will happen more than once, after all, we are humans an…`,
          link: `https://blog.manuelmejia.io/2018/07/clean-code-even-under-pressure.html`,
          imgSource: `https://4.bp.blogspot.com/-f-xLIkiG44A/Wzt-5kvWvZI/AAAAAAAAPbE/DGX5fxcee18dI5jayF89cA44zQVdHriUACLcBGAs/s320/giphy.gif`
        },
        {
          title: `Improve your skills as developer with Code Katas`,
          content: `Maybe, the first thing that comes to your mind when you hear the word "KATA" is a movie of Bruce Lee or maybe, the movie Kung Fu Panda 😛. According to Wikipedia Kata is: "Japanese word, are detailed choreographed patterns of movements practiced either solo or in pairs. The term form is used for the corresponding concept in…`,
          link: `https://blog.manuelmejia.io/2017/09/improve-your-skills-as-developer-with.html`,
          imgSource: `https://1.bp.blogspot.com/-dFL5J1ifksE/Was7xmspKfI/AAAAAAAAKgU/3s6rg3w9KiofhxuoRnmdrwkdpdyyHgsmQCK4BGAYYCw/s320/tumblr_nnf33pZFzt1qfcfclo1_500.gif`
        },
        {
          title: `Material Design guidelines,The Lighthouse`,
          content: `Probably, you have been hearing about Material Design for a while and yes it has been with us since 2014. Also, you have seen it in almost all the Google Apps on your phone and desktop. But... what really is Material Design and why should you take advantage of its guidelines? Well, in a nutshell, Material Design is the way …`,
          link: `https://blog.manuelmejia.io/2018/01/material-design-guidelinesthe-lighthouse.html`,
          imgSource: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCH5G4pS-qcq57dfkUko7qet3rSvPuf7phnEQ-SPKtxN5Sg0KP68V442Im88t9CrQ_rAWvTjQbYZFgt43lmDF-EdadnGR8cUVnqpjKxdjPjlE_WNXe_eQdAoBXdTY-MW75_J6y8IxdIJA/s400/lighthouse-background-design_1257-187.jpg`
        }
      ]
    }
  }
}
</script>
