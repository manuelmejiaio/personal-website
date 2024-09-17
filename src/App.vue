<template>
  <div id="app">
    <Navigation />
    <About />
    <Blog />
    <Podcast />
    <Contact />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable no-console */
  
import Navigation from './components/Navigation.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import Podcast from './components/Podcast.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    About,
    Blog,
    Podcast,
    Contact,
    Footer
  },
  mounted() {
    // Fetch the first 10 Drago Ball characters
    fetch('https://api.allorigins.win/get?url=https://dragonball-api.com/api/characters?limit=10') 
    .then(response => response.json())
    .then(data => {
      const parsedData = JSON.parse(data.contents) // Parse the string into an object
      console.log(parsedData) // Now you have a JavaScript object
    })
    .catch(error => console.error('Error fetching data from dragonball-api:', error))
  }
}
</script>
