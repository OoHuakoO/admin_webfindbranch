<template>
  <div class="body">
    <Header />
    <div class="bigContainer">
      <p>คะแนนรวมทั้งหมด</p>
      <div v-for="(item, index) in choice" :key="index"><p>item</p></div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  components: {
    Header,
  },
  data() {
    return {
      choice: [],
      branch: [],
    }
  },
  async asyncData(context) {

    await context.app.$axios
      .get('https://serverwebfindbranch.herokuapp.com/choice')
      .then((res) => {
        console.log(this.choice)
        // this.choice.push(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    await context.app.$axios
      .get('https://serverwebfindbranch.herokuapp.com/branch')
      .then((res) => {
        console.log(this.branch)
        // this.branch.push(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
   
  },
}
</script>
<style scoped>
* {
  font-family: 'Sukhumvit';
}
html,
.body {
  min-height: 100%;
}
.bigContainer {
  justify-content: center;
  align-items: center;
  padding: 90px;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1150px) {
  .bigContainer {
    background-image: none;
  }
}
@media screen and (max-width: 716px) {
  .bigContainer {
    padding: 7vw;
  }
}
@media screen and (max-width: 414px) {
  .bigContainer {
    padding: 7vw;
    margin-top: 15%;
  }
}
</style>
