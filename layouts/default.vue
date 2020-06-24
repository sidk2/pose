<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-end">
        <button
          class="button is-primary is-medium"
          @click="isSignUpModalActive = true"
        >
          Sign Up
        </button>
      </div>
      <b-modal :active.sync="isSignUpModalActive" full-screen>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Sign Up</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input
                v-model="email"
                type="email"
                placeholder="Your email"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                v-model="password"
                type="password"
                password-reveal
                placeholder="Your password"
                required
              ></b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button"
              type="button"
              @click="isSignUpModalActive = false"
            >
              Close
            </button>
            <button class="button is-primary" @click="createAccount">
              Create Account
            </button>
          </footer>
        </div>
      </b-modal>
      <button
        class="button is-primary is-medium"
        @click="isLoginModalActive = true"
      >
        Log in
      </button>

      <b-modal :active.sync="isLoginModalActive" full-screen>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input
                type="email"
                v-model="email"
                placeholder="Your email"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                v-model="password"
                password-reveal
                placeholder="Your password"
                required
              ></b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button"
              type="button"
              @click="isLoginModalActive = false"
            >
              Close
            </button>
            <button class="button is-primary" @click="login">
              Login
            </button>
          </footer>
        </div>
      </b-modal>
    </nav>
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" />
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth"

export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
      isSignUpModalActive: false,
      isLoginModalActive: false,
      email: "",
      password: "",
    }
  },
  methods: {
    createAccount() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch((error) => alert(error))
    },
  },
}
</script>
