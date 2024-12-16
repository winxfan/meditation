import css from './Footer.module.scss';
import Logo from '@/assets/image/logoWithName.svg'
import {Space} from "antd";

export const Footer = () => {
	return (
		<Space size={8} direction="vertical" className={css.footer}>
			<Logo className={css.logo}/>

			<a href="#" className={css.link}>
				Политика конфиденциальности
			</a>
		</Space>
	);
};