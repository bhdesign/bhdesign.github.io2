  <template id="card">
  	<div class="card">
  		<!-- IMAGE -->
  		<div>
  			<figure>
  				<slot name="img"></slot>
  			</figure>
  		</div>
  		<!-- INFO -->
  		<div class="card-content">

  			<div class="content">
  				<slot></slot>
  			</div>
  			<slot name="info"></slot>
  		</div>
  		<hr>
  	</div>
  </template>
  <style scoped>
  	img {
  		width: 50%;
  	}

  	.card {
  		margin: 10px;
  	}

  	.card-content {
  		width: 100%;
  		z-index: 10;
  		text-align: left;
  	}

  	.content {
  		color: #ffffff;
  		font-weight: 600;
		font-size:1em;
  		padding: 20px;
  		background: #333333;
  		width: 20%;
			text-align:center;;
  		right: 0;
  		margin-left: auto;
  	}



  	.info {
  		background: rgba(17, 17, 17, 1);
  		border-top: 1px dotted #FF5F2E;
  		border-bottom: 1px dotted #FF5F2E;
  		padding: 5px;
  		display: flex;
  		justify-content: space-around;
  	}

  	.info span {
  		font-size: .9em;
  		text-transform: uppercase;
  		color: #FFF;
  	}

  	.info strong {
  		padding-right: 5px;
  		color: #FF5F2E;
  	}

  </style>
