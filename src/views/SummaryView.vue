<template>
	<div class="summary">
		<div class="car">
			<div class="circle"></div>
			<div class="name">{{ cars[store.car].model }}</div>
			<div class="photo">
				<img :src="`/images/${cars[store.car].image}`" />
			</div>
		</div>
		<div class="details">
			<p class="title">MODEL</p>
			<p class="value">{{ cars[store.car].name }}</p>
			<hr />
			<p class="title">COLOR</p>
			<p class="value">{{ cars[store.car].colors[store.color].name }}</p>
			<hr v-if="store.packs.length > 0" />
			<p class="title" v-if="store.packs.length > 0">ACCESSORIES</p>
			<p class="value" v-for="pack in store.packs">{{ cars[store.car].packs[pack].name }}</p>
		</div>
	</div>
</template>

<script>
import cars from '../data/cars';
import { store } from '../store';

export default {
	name: 'Car',
	props: ['id'],
	data() {
		return {
			store,
			cars: cars,
		};
	},
};
</script>

<style scoped>
.summary {
	width: 100%;
	height: 604px;
	align-items: center;
	justify-content: center;
}

@media (max-width: 768px) {
	.summary {
		width: 90%;
		flex-flow: column nowrap;
		justify-content: flex-start;
	}
}

.car {
	position: relative;
	width: 550px;
	height: 467px;
	min-height: 467px;
	margin-right: 25px;
}

@media (max-width: 992px) {
	.car {
		width: 450px;
	}
}

@media (max-width: 768px) {
	.car {
		width: 100%;
		height: 300px;
		top: -70px;
		margin-right: 0;
	}
}

.circle {
	position: absolute;
	width: 456px;
	height: 467px;
	border: 0.9px solid var(--black);
	border-radius: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 0.06;
}

@media (max-width: 768px) {
	.circle {
		width: 350px;
		height: 350px;
	}
}

.name {
	position: absolute;
	font-family: 'Qanelas Extra Bold';
	font-size: 173.7px;
	color: var(--black);
	line-height: 218px;
	letter-spacing: -8.1px;
	opacity: 0.09;
	top: 36px;
	left: 50%;
	transform: translate(-50%, 0);
	z-index: -1;
}

@media (max-width: 992px) {
	.name {
		font-size: 140px;
	}
}

@media (max-width: 768px) {
	.name {
		font-size: 140px;
	}
}

.photo {
	position: absolute;
	width: 550px;
	height: 250px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -42%);
	user-select: none;
}

.photo img {
	width: 100%;
	height: 100%;
}

@media (max-width: 992px) {
	.photo {
		width: 450px;
		height: auto;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -42%);
		user-select: none;
	}
}

@media (max-width: 576px) {
	.photo {
		width: 100%;
		height: auto;
	}
}

.details {
	flex-flow: column nowrap;
	width: 324px;
}

@media (max-width: 992px) {
	.details {
		width: 274px;
	}
}

@media (max-width: 768px) {
	.details {
		margin-top: -170px;
	}
}

.title {
	font-family: 'Qanelas Bold';
	font-size: 12px;
	color: var(--black);
	line-height: 15px;
	margin-bottom: 19px;
}

@media (max-width: 768px) {
	.title {
		margin-bottom: 9px;
	}
}

.value {
	font-family: 'Qanelas Medium';
	font-size: 16px;
	color: var(--black);
	line-height: 19px;
	opacity: 0.38;
}

hr {
	margin-top: 32px;
	margin-bottom: 33px;
	opacity: 0.09;
	border: 1px solid #979797;
}

@media (max-width: 768px) {
	hr {
		margin-top: 15px;
		margin-bottom: 15px;
	}
}
</style>
