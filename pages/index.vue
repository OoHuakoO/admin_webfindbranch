<template>
  <div class="body">
    <Header />
    <div class="bigContainer">
      <b-img src="~assets/banner.svg" fluld />
      <p class="title">ผู้ดูแลระบบ</p>

      <div class="container">
        <div class="rowInput">
          <label class="email">Email</label>
          <b-form-input class="input"></b-form-input>
        </div>
        <div class="rowInput">
          <label class="password">Password</label>
          <b-form-input class="input" type="password"></b-form-input>
        </div>
        <div class="boxLogin">
          <b-button>Login</b-button>
        </div>
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
      email: '',
      password: '',
    }
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
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
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
    margin-top: 6vh;
  }
  .btn-secondary {
    font-size: 4vw;
    padding: 2vw;
  }
  .btn-link {
    width: 50%;
  }
}
</style>
