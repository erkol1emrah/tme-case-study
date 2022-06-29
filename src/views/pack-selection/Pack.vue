<template>
	<div class="pack" :class="{ selected: store.packs.includes(id) }" @click="handleClick">
		<div class="name">{{ cars[store.car].packs[id].name }}</div>
		<div class="price">
			{{
				cars[store.car].packs[id].price
					.toFixed(2)
					.replace(/\d(?=(\d{3})+\.)/g, '$&.')
					.slice(0, -3)
			}}
			TL
		</div>
		<div class="check">
			<img src="/images/check.svg" v-if="store.packs.includes(id)" />
		</div>
	</div>
</template>

<script>
import { store } from '../../store';
import cars from '../../data/cars';

export default {
	name: 'Pack',
	props: ['id'],
	data() {
		return {
			store,
			cars: cars,
		};
	},
	methods: {
		handleClick() {
			if (store.packs.includes(this.$props.id)) {
				this.deletePack();
			} else {
				this.addPack();
			}
		},
		addPack() {
			store.selectPack(this.$props.id);
		},
		deletePack() {
			store.deselectPack(this.$props.id);
		},
	},
};
</script>

<style scoped>
.pack {
	flex-flow: column nowrap;
	width: 300px;
	height: 283px;
	align-items: center;
	margin-bottom: 20px;
	border: 1px solid #f2f2f2;
	border-radius: 11px;
	cursor: pointer;
}

@media (max-width: 768px) {
	.pack {
		width: calc(50% - 10px);
	}
}

@media (max-width: 576px) {
	.pack {
		width: 100%;
	}
}

.pack.selected {
	background: #292929;
	border: 1px solid #979797;
}

.pack:hover {
	background: #292929;
	border: 1px solid #979797;
}

.name {
	width: 172px;
	color: var(--black);
	font-family: 'Qanelas Bold';
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	text-transform: uppercase;
	margin-top: 77px;
}

.pack.selected .name {
	color: var(--white);
}

.pack:hover .name {
	color: var(--white);
}

.price {
	color: var(--black);
	font-family: 'Qanelas Medium';
	font-size: 16px;
	line-height: 19px;
	margin-top: 66px;
}

.pack.selected .price {
	color: var(--white);
}

.pack:hover .price {
	color: var(--white);
}

.check {
	width: 33px;
	height: 33px;
	align-items: center;
	justify-content: center;
	border: 1px solid #ececec;
	border-radius: 50%;
	margin-top: 26px;
}

.pack.selected .check {
	background-color: #353535;
	border: none;
}

.pack:hover .check {
	background-color: #353535;
	border: none;
}

.check img {
	width: 13.02px;
	height: 9.02px;
}
</style>
