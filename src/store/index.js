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
});
