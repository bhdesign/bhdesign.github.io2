<template>
	<div>
		<b-jumbotron>
			<template v-slot:header>Votre sélection</template>
			<template v-slot:lead>
				<b-container class="bv-example-row">
					<b-row v-for="index in nb_choix" :key="index">
						<b-col>{{title[index-1]}}</b-col>
						<b-col>{{prix[index-1]}}€</b-col>

					</b-row>
					<b-row>
						<b-col><strong>Total sans remise:</strong></b-col>
						<b-col><strong>{{total}} €</strong></b-col>
					</b-row>
					<b-row>
						<b-col><strong>Total avec remise:</strong></b-col>
						<b-col><strong>{{bestPrice}} €</strong></b-col>
					</b-row>
				</b-container>
				<!--
				<div id="selection">
					<div v-for="t in ischoices.titre" :key="t.title">
						</div>
					<div v-for="t in ischoices.prix" :key="t.title">
						</div>
				</div>
-->
			</template>

			<b-button variant="primary" @click.prevent="prev()">Revenir en arrière</b-button>
			<b-button variant="success" @click.prevent="paniervalid()">Validez le panier</b-button>
		</b-jumbotron>

	</div>
</template>
<script>
	import axios from "axios";
	export default {

		name: "panier",
		data() {
			return {
				title: "",
				prix: "",
				offre: "",
				offreCom: "",
				total: "",
				prixRemise: "",
				prixFinal: "",
				nb_choix: "",
				comparePrice:[],
				bestPrice:""
			};
		},
		mounted() {
			this.updateData(this.$route.params.payload);
			axios.get("http://henri-potier.xebia.fr/books/" + this.$route.params.payload.choices.offre + "/commercialOffers")
				.then(response => {
					this.offreCom = response.data;
					for (var i = 0; i < this.offreCom.offers.length; i++) {
						if (this.offreCom.offers[i].type == "percentage") {
							this.prixRemise = this.offreCom.offers[i].value;
							this.prixFinal = this.total - (this.total * this.prixRemise / 100);
							this.comparePrice.push(this.prixFinal);
							console.log(this.comparePrice)
						}
						if (this.offreCom.offers[i].type == "minus") {
							this.prixRemise = this.offreCom.offers[i].value;
							this.prixFinal = this.total - (this.total * this.prixRemise / 100);
							this.comparePrice.push(this.prixFinal);
							console.log(this.comparePrice)
						}
						if (this.offreCom.offers[i].type == "slice") {
							this.prixRemise = this.offreCom.offers[i].sliceValue;
							if(this.total>this.prixRemise){
								this.prixFinal=this.total-this.offreCom.offers[i].value;
								this.comparePrice.push(this.prixFinal);
							}

						}
						this.bestPrice=Array.min(this.comparePrice);
					}


				});
			Array.min = function(array) {
				return Math.min.apply(Math, array);
			};
		},
		methods: {
			prev() {
				this.$router.replace({
					name: "secure"
				});
			},
			updateData(p) {
				this.nb_choix = p.choices.titre.length;
				this.title = Object.assign({}, p.choices.titre);
				this.prix = Object.assign({}, p.choices.prix);
				const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
				this.total = sumValues(this.prix);
				this.offre = Object.assign({}, p.choices.offre);

			},
			paniervalid() {
				console.log(this.ischoices);
			}
		}
	};

</script>
<style scoped>
	#selection {
		display: inline;
		width: 100%;
	}

</style>
