<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-nav>
        <nuxt-link
          v-if="tokenUser"
          @click.native="logout()"
          class="nav-item login-logout"
          to="/"
          >Logout</nuxt-link
        >
        <nuxt-link v-if="!tokenUser" class="nav-item login-logout" to="/"
          >Login</nuxt-link
        >
        <nuxt-link
          v-if="tokenUser"
          class="nav-item nav-link-main"
          to="/seepoint"
          >ดูคะแนน</nuxt-link
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <nuxt-link class="nav-item nav-link-main" to="/organizer">
          <b-img src="~assets/Alert.svg" fluld />เกี่ยวกับผู้จัดทำ</nuxt-link
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      tokenUser: '',
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((token) => {
      if (token) {
        this.tokenUser = token.uid
      }
    })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((result) => {
          console.log(result)
          this.$router.push('/')
        })
    },
  },
}
</script>
<style scoped>
* {
  font-family: 'Sukhumvit';
}
.navbar.navbar-dark.bg-dark {
  background-color: #002447 !important;
  display: flex;
  flex-direction: row;
}
.navbar-dark .navbar-nav .nav-link-main {
  color: #53d3d1;
  font-size: 2vw;
  margin-top: 2px;
  text-decoration: none;
}
.navbar-dark .navbar-nav .login-logout {
  color: #53d3d1;
  font-size: 2vw;
  border-radius: 10px;
  border: solid 2px #53d3d1;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  margin-right: 20px;
}
.navbar-dark .navbar-nav .login-logout:hover {
  color: #c8fdfc;
  font-size: 2vw;
  border-radius: 10px;
  border: solid 2px#c8fdfc;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  margin-right: 20px;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
img {
  margin-right: 0.5vw;
  width: 2vw;
  margin-bottom: 2%;
}
@media screen and (max-width: 1150px) {
  .navbar-dark .navbar-nav .nav-link-main {
    font-size: 3vw;
  }
  .navbar-dark .navbar-nav .login-logout {
    font-size: 3vw;
  }
  img {
    margin-right: 0.5vw;
    width: 3vw;
    margin-bottom: 2%;
  }
}
@media screen and (max-width: 716px) {
  .navbar-dark .navbar-nav .nav-link-main {
    font-size: 4vw;
  }
  .navbar-dark .navbar-nav .login-logout {
    font-size: 4vw;
  }
  img {
    margin-right: 0.5vw;
    width: 4vw;
    margin-bottom: 2%;
  }
}
</style>
