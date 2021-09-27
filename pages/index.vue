<template>
  <div class="body">
    <Header />
    <div class="bigContainer">
      <b-img src="~assets/banner.svg" fluld />
      <p class="title">ผู้ดูแลระบบ</p>

      <div class="container">
        <form @submit.prevent="login()" class="form">
          <div class="rowInput">
            <label class="email">Email</label>
            <b-form-input v-model="email" class="input"></b-form-input>
          </div>
          <div class="rowInput">
            <label class="password">Password</label>
            <b-form-input
              v-model="password"
              class="input"
              type="password"
            ></b-form-input>
          </div>
          <div class="boxLogin">
            <b-button type="submit">Login</b-button>
          </div>
        </form>
      </div>
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
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/seepoint')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/seepoint')
      }
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
.form {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.email {
  margin-bottom: 0px;
  font-size: 2vw;
  margin-right: 19%;
}
.password {
  margin-bottom: 0px;
  font-size: 2vw;
  margin-right: 10%;
}
.container {
  width: 50%;
  margin-top: 2%;
}
.bigContainer {
  justify-content: center;
  align-items: center;
  padding: 90px;
  display: flex;
  flex-direction: column;
  background-image: url('~assets/backgroundCom.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.boxLogin {
  width: 60%;
}
.rowInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
  width: 100%;
}
.title {
  font-weight: bold;
  font-size: 5vw;
  text-align: center;
}
.btn-secondary {
  background-color: #feb249;
  border-color: #feb249;
  width: 100%;
  padding: 1vw;
  font-size: 2vw;
  border-radius: 10px;
  margin-top: 5%;
}
input {
  font-size: 1.5vw;
}
@media screen and (min-width: 1151px) {
  img {
    display: none;
  }
}
@media screen and (max-width: 1150px) {
  .bigContainer {
    background-image: none;
  }
  .title {
    font-size: 5vw;
  }
  .btn-secondary {
    font-size: 3vw;
  }
  img {
    width: 100%;
  }
  .email {
    font-size: 3vw;
    margin-right: 19%;
  }
  .password {
    font-size: 3vw;
    margin-right: 10%;
  }
  .container {
    width: 70%;
    margin-top: 5%;
  }
  .boxLogin {
    width: 70%;
  }
  input {
    font-size: 2.5vw;
  }
}
@media screen and (max-width: 716px) {
  .bigContainer {
    padding: 7vw;
  }
  .btn-secondary {
    font-size: 4vw;
    padding: 1vw;
  }
  .btn-link {
    width: 50%;
  }
}
@media screen and (max-width: 414px) {
  .bigContainer {
    padding: 7vw;
    margin-top: 15%;
  }
  .btn-secondary {
    font-size: 4vw;
    padding: 1vw;
  }
  .btn-link {
    width: 50%;
  }
  .container {
    width: 90%;
  }
  .email {
    font-size: 3.5vw;
    margin-right: 18%;
  }
  .password {
    font-size: 3.5vw;
    margin-right: 10%;
  }
  input {
    font-size: 3.5vw;
  }
}
</style>
