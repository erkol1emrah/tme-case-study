<template>
	<div class="pack-selection">
		<div class="message">Seçtiğin araca ait özellikler, konforun ve yaşam stilini belirler.</div>
		<div class="wrapper">
			<Pack class="color" v-for="pack in packs" :key="pack.id" :id="pack.id" />
		</div>
	</div>
</template>

<script>
import Pack from './pack-selection/Pack.vue';
import { store } from '../store';
import cars from '../data/cars';

export default {
	components: { Pack },
	data() {
		return {
			packs: cars[store.car].packs,
		};
	},
};
</script>

<style scoped>
.pack-selection {
	flex-flow: column nowrap;
	width: 993px;
	height: 604px;
	max-height: 604px;
	align-items: center;
	overflow-x: hidden;
	overflow-y: scroll;
}

@media (max-width: 992px) {
	.pack-selection {
		width: 90%;
	}
}

.wrapper {
	width: 940px;
	flex-flow: row wrap;
	justify-content: space-between;
	margin-bottom: 34px;
}

@media (max-width: 992px) {
	.wrapper {
		width: 620px;
	}
}

@media (max-width: 768px) {
	.wrapper {
		width: 100%;
	}
}

.message {
	width: 224px;
	font-family: 'Qanelas Medium';
	font-size: 15px;
	line-height: 18px;
	text-align: center;
	margin-top: 52px;
	margin-bottom: 34px;
}
</style>
