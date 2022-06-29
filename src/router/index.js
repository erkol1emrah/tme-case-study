import { createRouter, createWebHistory } from 'vue-router';
import CarSelectionView from '../views/CarSelectionView.vue';
import ColorSelectionView from '../views/ColorSelectionView.vue';
import PackSelectionView from '../views/PackSelectionView.vue';
import SummaryView from '../views/SummaryView.vue';
import { store } from '../store';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'select-car',
			component: CarSelectionView,
		},
		{
			path: '/select-color',
			name: 'select-color',
			component: ColorSelectionView,
			beforeEnter(to, from, next) {
				if (store.car !== null) {
					next();
				} else {
					next('/');
				}
			},
		},
		{
			path: '/select-packs',
			name: 'select-packs',
			component: PackSelectionView,
			beforeEnter(to, from, next) {
				if (store.color !== null) {
					next();
				} else {
					next('/select-color');
				}
			},
		},
		{
			path: '/summary',
			name: 'summary',
			component: SummaryView,
			beforeEnter(to, from, next) {
				if (store.color !== null) {
					next();
				} else {
					next('/select-color');
				}
			},
		},
	],
});

export default router;
