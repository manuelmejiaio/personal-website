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
  }
  mounted() {
    // Fetch data when the component is mounted
    fetch('https://web.dragonball-api.com/api/character')
      .then(response => response.json()) // Convert the response to JSON
      .then(data => {console.log(data)}) // Log the data to the console
      .catch(error => console.error('Error fetching data from dragonball-api:', error)); // Handle any errors
  }
}
</script>
