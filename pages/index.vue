<template>
  <div>
    <Introduction class="mb-5" />
    <Rates class="mb-10" />
    <About class="mb-10" />
    <Services />
  </div>
</template>

<script>
import Introduction from '../components/Introduction'
import Services from '../components/Services'
import Rates from '../components/Rates'
import About from '../components/About'
export default {
  components: { Introduction, Services, Rates, About },
  head() {
    return {
      link: [{ rel: 'canonical', href: 'https://kine-serenite.ca/' }],
    }
  },
}
</script>
