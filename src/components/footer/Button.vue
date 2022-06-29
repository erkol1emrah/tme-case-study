<template>
	<div class="button" @click="buttonClick">
		<p v-if="$route.name === 'select-car'">COLORS</p>
		<p v-if="$route.name === 'select-color'">ACCESSORIES</p>
		<p v-if="$route.name === 'select-packs'">SUMMARY</p>
		<p v-if="$route.name === 'summary'">BUY NOW</p>
		<img v-if="$route.name !== 'summary'" src="images/arrow.svg" class="arrow" />
		<img v-if="$route.name === 'summary'" src="images/shopping-cart.svg" class="shopping-cart" />
	</div>
</template>

<script>
import { store } from '../../store';

export default {
	name: 'Button',
	data() {
		return {
			store,
		};
	},
	methods: {
		buttonClick() {
			if (this.$route.name === 'select-car') {
				if (this.store.car === null) {
					alert('Please select one model.');
				} else {
					this.$router.push('/select-color');
				}
			}
			if (this.$route.name === 'select-color') {
				if (this.store.color === null) {
					alert('Please select one color.');
				} else {
					this.$router.push('/select-packs');
				}
			}
			if (this.$route.name === 'select-packs') {
				this.$router.push('/summary');
			}
		},
	},
};
</script>

<style scoped>
.button {
	width: 235px;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	color: var(--white);
	background-color: var(--black);
	font-family: 'Qanelas Bold';
	font-size: 12px;
	letter-spacing: 2.78571px;
	border-radius: 0 11px 11px 0;
	margin-left: auto;
	padding-left: 39px;
	padding-right: 33px;
	cursor: pointer;
	user-select: none;
}

@media (max-width: 768px) {
	.button {
		width: 190px;
		padding-left: 29px;
		padding-right: 23px;
	}
}

@media (max-width: 576px) {
	.button {
		width: 20%;
		padding-left: 0;
		padding-right: 0;
		justify-content: center;
	}

	.button p {
		display: none;
	}
}

.arrow {
	width: 24px;
	height: auto;
}

.shopping-cart {
	width: 24px;
	height: 20px;
}
</style>
