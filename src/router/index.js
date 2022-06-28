import { createRouter, createWebHistory } from 'vue-router';
import CarSelectionView from '../views/CarSelectionView.vue';
import ColorSelectionView from '../views/ColorSelectionView.vue';
import PackSelectionView from '../views/PackSelectionView.vue';
import SummaryView from '../views/SummaryView.vue';
import cars from '../data/cars';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'select-car',
			component: CarSelectionView,
			props: { cars: cars },
		},
		{
			path: '/select-color',
			name: 'select-color',
			component: ColorSelectionView,
			props: { cars: cars },
		},
		{
			path: '/select-packs',
			name: 'select-packs',
			component: PackSelectionView,
			props: { cars: cars },
		},
		{
			path: '/summary',
			name: 'summary',
			component: SummaryView,
			props: { cars: cars },
		},
	],
});

export default router;
