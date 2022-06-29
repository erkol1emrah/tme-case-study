import { reactive } from 'vue';
import cars from '../data/cars';

export const store = reactive({
	car: null,
	color: null,
	packs: [],
	total: null,
	image: null,
	selectCar(value) {
		if (this.car !== value) {
			this.car = value;
			this.color = null;
			this.packs = [];
			this.total = cars[this.car].price;
			this.image = cars[this.car].image;
		}
	},
	selectColor(value) {
		if (this.color !== value) {
			this.color = value;
		}
	},
	selectPack(value) {
		this.packs = [...this.packs, value];
		this.total += cars[this.car].packs[value].price;
	},
	deselectPack(value) {
		const index = this.packs.indexOf(value);
		if (index > -1) {
			this.packs.splice(index, 1); // 2nd parameter means remove one item only
		}
		this.total -= cars[this.car].packs[value].price;
	},
});
