<template>
	<div class="car">
		<div class="circle" v-if="store.car === id"></div>
		<div class="circle-hover" v-if="store.car !== id"></div>
		<div class="check" v-if="store.car === id">
			<img src="/images/check.svg" />
		</div>
		<div class="name">{{ cars[id].model }}</div>
		<div class="photo">
			<img :src="`/images/${cars[id].image}`" />
		</div>
		<div class="starting-price">
			<p>
				<strong
					>{{
						cars[id].price
							.toFixed(2)
							.replace(/\d(?=(\d{3})+\.)/g, '$&.')
							.slice(0, -3)
					}}
					TL</strong
				>'den başlayan
			</p>
			<p>fiyatlarla</p>
			<p>&nbsp;</p>
		</div>
		<button type="button" class="button" @click="selectCar">SELECT</button>
	</div>
</template>

<script>
import cars from '../../data/cars';
import { store } from '../../store';

export default {
	name: 'Car',
	props: ['id'],
	data() {
		return {
			store,
			cars: cars,
		};
	},
	methods: {
		selectCar() {
			store.selectCar(this.$props.id);
		},
	},
};
</script>

<style scoped>
.car {
	position: relative;
	flex-flow: column nowrap;
	align-items: center;
	width: 507px;
	height: 519px;
	margin-right: 60px;
}

@media (max-width: 992px) {
	.car {
		width: calc(507px * 0.7);
		height: calc(519px * 0.7);
	}
}

@media (max-width: 768px) {
	.car {
		width: 507px;
		height: 519px;
		margin-right: 0;
		margin-top: 20px;
		margin-bottom: 20px;
	}
}

.car:last-child {
	margin-right: 0;
}

.car:hover .circle-hover {
	position: absolute;
	width: 507px;
	height: 519px;
	opacity: 0.06;
	border: 1px solid var(--black);
	border-radius: 253.5px;
}

@media (max-width: 992px) {
	.car:hover .circle-hover {
		width: calc(507px * 0.7);
		height: calc(519px * 0.7);
	}
}

@media (max-width: 768px) {
	.car:hover .circle-hover {
		width: 507px;
		height: 519px;
	}
}

.car:hover .starting-price,
.car:hover .button {
	visibility: visible;
}

.circle {
	position: absolute;
	width: 507px;
	height: 519px;
	opacity: 0.06;
	border: 1px solid var(--black);
	border-radius: 253.5px;
}

@media (max-width: 992px) {
	.circle {
		width: calc(507px * 0.7);
		height: calc(519px * 0.7);
	}
}

@media (max-width: 768px) {
	.circle {
		width: 507px;
		height: 519px;
	}
}

.check {
	position: absolute;
	width: 33px;
	height: 33px;
	align-items: center;
	justify-content: center;
	background-color: var(--black);
	border-radius: 50%;
	top: 29px;
	right: 94px;
	user-select: none;
}

@media (max-width: 992px) {
	.check {
		top: 19px;
		right: 40px;
	}
}

@media (max-width: 768px) {
	.check {
		top: 29px;
		right: 94px;
	}
}

.check img {
	width: 13.02px;
	height: 9.02px;
	min-height: 9.02px;
}

.name {
	color: var(--black);
	font-family: 'Qanelas Extra Bold';
	font-size: 138.96px;
	line-height: 174px;
	letter-spacing: -6.48px;
	opacity: 0.09;
	margin-top: 103px;
	z-index: -1;
}

@media (max-width: 992px) {
	.name {
		font-size: 100px;
		margin-top: 10px;
	}
}

@media (max-width: 768px) {
	.name {
		font-size: 138.96px;
		margin-top: 103px;
	}
}

.photo {
	width: 440.64px;
	min-width: 440.64px;
	max-width: 440.64px;
	height: 200.16px;
	min-height: 200.16px;
	max-height: 200.16px;
	margin-top: -101.28px;
	user-select: none;
}

.photo img {
    width: 440.64px;
    min-width: 440.64px;
    max-width: 440.64px;
    height: 200.16px;
    min-height: 200.16px;
    max-height: 200.16px;
    user-select: none;
}

@media (max-width: 992px) {
	.photo {
		width: calc(440.64px * 0.7);
		min-width: calc(440.64px * 0.7);
		max-width: calc(440.64px * 0.7);
		height: calc(200.16px * 0.7);
		min-height: calc(200.16px * 0.7);
		max-height: calc(200.16px * 0.7);
		margin-top: -101.28px;
	}
}

.starting-price {
	flex-flow: column nowrap;
	font-family: 'Qanelas Medium';
	align-items: center;
	font-size: 13px;
	line-height: 16px;
	margin-top: 18.12px;
	visibility: hidden;
}

.starting-price strong {
	font-family: 'Qanelas Bold';
}

.button {
	width: 84px;
	height: 33px;
	min-height: 33px;
	align-items: center;
	justify-content: center;
	color: var(--white);
	background-color: var(--black);
	font-family: 'Qanelas Bold';
	font-size: 11px;
	line-height: 14px;
	letter-spacing: 2.5px;
	border-radius: 16.5px;
	margin-top: 8px;
	border: none;
	z-index: 0;
	cursor: pointer;
	visibility: hidden;
}
</style>
