<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<!--      <router-link to="/Login">Login</router-link>-->
			<router-link v-if="authenticated" to="/Login" v-on:click.native="logout()" replace>Logout</router-link>
		</div>
		<router-view @authenticated="setAuthenticated" />

	</div>
</template>
<script>
	
	export default {
		name: 'App',
		data() {
			return {
				authenticated: false,
				mockAccount: {
					username: "user",
					password: "user"
				}
			}
		},
		mounted() {
			if (!this.authenticated) {
				this.$router.replace({
					name: "login"
				});
			}
		},
		methods: {
			setAuthenticated(status) {
				this.authenticated = status;
			},
			logout() {
				this.authenticated = false;
			}
		}
	}

</script>
<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

</style>
