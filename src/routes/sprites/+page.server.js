import { statSync } from 'fs';
export async function load({ params }) {
	const allimgsf = import.meta.glob('$lib/sprites/*.*');
	const iterableImages = Object.entries(allimgsf);
	let imgArr = await Promise.all(
		iterableImages.map(async ([path, resolver]) => {
			const imgPath = path;
			return {
				date: await statSync(`.\\` + imgPath).mtime,
				version: imgPath.match(/v\d/)[0],
				path: imgPath
			};
		})
	);
	return { imgArr };
}
