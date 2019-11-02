<template>
  <div id="secure">
    <h1>Bienvenue dans votre librairie</h1>
    <p>
      Notre sélection
    </p>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Menu</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" disabled>Selection</b-nav-item>
          <b-nav-item @click.prevent="monpanier()">Panier <strong style="color:white;">{{items}}</strong></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" v-model="search" placeholder="titre.."></b-form-input>
            <b-button @click.prevent="searchTitle($event)" size="sm" class="my-2 my-sm-0" type="submit">Chercher</b-button>
          </b-nav-form>



          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <div v-show="seen">
        <b-button @click.prevent="resetSearch()">Effacer la recherche</b-button>
      </div>
      <b-card v-for="todo in books" :key="todo.title" img-alt="Image" img-top tag="article" class="card">
        <div class="selected">
          <p>Ajouté au panier</p>
        </div>
        <b-card-title>{{todo.title}}</b-card-title>
        <b-badge class="price">{{todo.price+"€"}}</b-badge>
        <img :src=todo.cover alt="Harry" bottom>
        <div class="synopsis"><strong>Résumé</strong>
          <b-card-text>
            <v-clamp class="resume" autoresize :max-lines="5">{{ todo.synopsis }}</v-clamp>
          </b-card-text>
        </div>
        <b-button :disabled=false @click.prevent="checkbooks(todo.title,todo.price,todo.isbn,$event)" variant="primary">Ajouter</b-button>
      </b-card>
    </div>
  </div>

</template>

<script>
  import axios from "axios";
  import VClamp from 'vue-clamp';
  //  import {
  //    EventBus
  //  } from "@/eventbus.js";
  export default {
    name: "Secure",
    components: {
      VClamp
    },
    data() {
      return {
        books: {},
        remises: [],
        livres: [],
        mesprix: [],
        items: 0,
        seen: false


      };
    },
    mounted() {
      axios.get("http://henri-potier.xebia.fr/books")
        .then(response => {
          this.books = response.data;

        })
        .catch(err => {
          console.log("error" + err)
        })
    },
    methods: {
      checkbooks(t, p, i, e) {
        e.target.parentNode.children[0].style.display = "block"
        e.target.disabled = true;
        this.items++;
        this.remises.push(i);
        this.mesprix.push(p);
        this.livres.push(t);


      },
      monpanier() {
        const payload = {
          choices: {
            titre: this.livres,
            prix: this.mesprix,
            offre: this.remises
          }
        }

        this.$router.replace({
          name: "panier",
          params: {
            payload
          }
        });

      },
      searchTitle(e) {
        const mysearch = e.target.previousSibling.value;
        for (var i = 0; i < this.books.length; i++) {
          console.log(this.books[i])
          if (!this.books[i].title.toLowerCase().includes(mysearch.toLowerCase())) {
            this.seen = true;
            Array.from(document.querySelector('.container').children)[i+1].style.display = "none";
          }

        }

      },
      resetSearch() {
        this.seen = false;
        for (var i = 0; i < this.books.length; i++) {
          Array.from(document.querySelector('.container').children)[i].style.display = "inline-block";
        }
      }

    }

  };

</script>

<style scoped>
  .selected {
    font-weight: bold;
    display: none;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    z-index: 9999;
    width: 100%;
    height: 100%;
    line-height: 45;
  }

  .card {
    width: 20rem;
    display: inline-table;
  }

  #secure {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    padding: 20px;
    margin-top: 10px;
  }

  .container {
    display: inline-table;

    width: 100%;
    margin: 0;
    padding: 0;
  }

  .synopsis {
    height: 150px;

  }

  .resume {
    font-size: 12px;


  }

  .price {
    font-size: 1.4em;
    background-color: dodgerblue;
    margin: 10px;
  }

  img {
    width: 100%;
  }

</style>
