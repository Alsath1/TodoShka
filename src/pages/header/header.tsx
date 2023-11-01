import { HomeSvgSel } from 'src/HomeSvgSel';
import s from '../../css/Header.module.css';

export const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.cont_to_do}>
				<HomeSvgSel id='header' />
				<div className={s.to}>to</div>
				<div className={s.do}>do</div>
			</div>
		</div>
	);
};
