<template>
	<div class="color-selection">
		<div class="message">{{ car.message }}</div>
		<div class="name">{{ car.model }}</div>
		<div class="photo">
			<img :src="`/images/${car.image}`" />
		</div>
		<div class="colors">
			<div
				class="color"
				:style="{ 'background-color': color.color }"
				v-for="color in colors"
				@click="selectColor(color.id)"
				:key="color.id"
			>
				<div class="check" v-if="store.color === color.id">
					<img src="images/check.svg" />
				</div>
				<div class="border" v-if="store.color === color.id"></div>
				<div class="border-hover" v-if="store.color !== color.id"></div>
			</div>
		</div>
	</div>
</template>

<script>
import cars from '../data/cars';
import { store } from '../store';

export default {
	name: 'ColorSelectionView',
	data() {
		return {
			store,
			cars: cars,
			car: cars[store.car],
			colors: cars[store.car].colors,
		};
	},
	methods: {
		selectColor(id) {
			store.selectColor(id);
		},
	},
};
</script>

<style scoped>
.color-selection {
	position: relative;
	flex-flow: column nowrap;
	height: 604px;
	align-items: center;
	justify-content: flex-start;
}

.message {
	width: 198px;
	font-family: 'Qanelas Medium';
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	margin-top: 52px;
}

.name {
	position: absolute;
	color: var(--black);
	font-family: 'Qanelas Extra Bold';
	font-size: 347.4px;
	line-height: 436px;
	text-align: center;
	letter-spacing: -16.2px;
	top: 34px;
	opacity: 0.09;
	z-index: -1;
}

.photo {
	width: 550px;
	height: 250px;
	margin-top: 102px;
}

.photo img {
	width: 100%;
	height: auto;
}

.colors {
	justify-content: center;
	margin-top: 36px;
}

.color {
	position: relative;
	width: 33px;
	height: 33px;
	border-radius: 50%;
	margin-right: 14px;
	cursor: pointer;
}

.color:hover .border-hover {
	display: block;
	position: absolute;
	width: 43px;
	height: 43px;
	border-radius: 50%;
	opacity: 0.13;
	border: 1px solid #000000;
	top: -5px;
	left: -5px;
	z-index: 1;
}

.check {
	position: absolute;
	box-sizing: unset;
	width: 19.8px;
	height: 19.8px;
	align-items: center;
	justify-content: center;
	background-color: var(--black);
	border: 3px solid var(--white);
	border-radius: 50%;
	top: -13px;
	left: -4px;
	z-index: 1;
}

.check img {
	width: 7.81px;
	max-width: 7.81px;
	height: 5.41px;
	max-height: 5.41px;
}

.border {
	position: absolute;
	width: 43px;
	height: 43px;
	border-radius: 50%;
	opacity: 0.13;
	border: 1px solid #000000;
	top: -5px;
	left: -5px;
	z-index: 1;
}

@media (max-width: 768px) {
	.name {
		font-size: 240px;
		top: 28px;
	}

	.photo {
		width: 100%;
		height: auto;
		margin-top: 112px;
	}
}

@media (max-width: 576px) {
	.colors {
		margin-bottom: 52px;
	}

	.name {
		font-size: 180px;
		top: 24px;
	}

	.photo {
		width: 100%;
		height: auto;
		margin-top: 122px;
	}
}
</style>
