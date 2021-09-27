<template>
  <div class="body">
    <Header />
    <div class="bigContainer">
      <div class="container">
        <p class="title">คะแนนช้อยส์ทั้งหมด</p>
        <b-table
          head-variant="dark"
          responsive
          bordered
          striped
          :items="choice[0]"
        ></b-table>
      </div>

      <div class="container">
        <p class="title">คะแนนของแต่ละสาขา</p>
        <b-table
          head-variant="dark"
          responsive
          bordered
          striped
          :items="branch[0]"
        ></b-table>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'

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
  async mounted() {
    await this.$axios
      .get('https://serverwebfindbranch.herokuapp.com/choice')
      .then((res) => {
        console.log(JSON.stringify(res.data.data))
        this.choice.push(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    await this.$axios
      .get('https://serverwebfindbranch.herokuapp.com/branch')
      .then((res) => {
        this.branch.push(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
  padding: 40px;
  display: flex;
  flex-direction: row;
}
.title {
  font-size: 4vw;
}
.container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 1150px) {
  .bigContainer {
    padding: 40px;
    width: 80%;
    flex-direction: column;
    margin-left: 10%;
  }
  .title {
    font-size: 5vw;
  }
}
@media screen and (max-width: 716px) {
  .bigContainer {
    margin-top: 5%;
    width: 100%;
    padding: 0px;
    margin-left: 0%;
  }
  .title {
    font-size: 6vw;
  }
}
</style>
