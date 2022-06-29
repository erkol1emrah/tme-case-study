<template>
	<div class="total-price" v-if="store.car !== null">
		<p>TOTAL</p>
		<p v-if="store.total !== null">
			{{
				store.total
					.toFixed(2)
					.replace(/\d(?=(\d{3})+\.)/g, '$&.')
					.slice(0, -3)
			}}
			TL
		</p>
		<p v-if="store.total === null">&nbsp;</p>
	</div>
</template>

<script>
import { store } from '../../store';

export default {
	name: 'TotalPrice',
	data() {
		return {
			store,
		};
	},
};
</script>

<style>
.total-price {
	flex-flow: column nowrap;
	width: 537px;
	height: 100%;
	justify-content: center;
	padding: 29px;
}

@media (max-width: 992px) {
	.total-price {
		width: max-content;
	}
}

@media (max-width: 768px) {
	.total-price {
		width: max-content;
	}
}

@media (max-width: 576px) {
	.total-price {
		width: 45%;
		padding: 10px;
	}
}

.total-price p:first-child {
	font-family: 'Qanelas Extra Bold';
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 1.7094px;
}

.total-price p:last-child {
	font-family: 'Qanelas Light';
	font-size: 24px;
	line-height: 28px;
	margin-top: 2px;
}
</style>
