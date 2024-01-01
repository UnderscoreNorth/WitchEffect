import { statSync } from 'fs';
const imgs = import.meta.glob('../../../static/img/sprites/*.*');

export async function load({ params }) {
	return {
		imgArr: Object.keys(imgs).map((i) => {
			let file = i.replace(/^.+\//, '');
			return {
				date: statSync('static/img/sprites/' + file).mtime,
				version: file.match(/v\d/)[0],
				path: '/img/sprites/' + file
			};
		})
	};
}
