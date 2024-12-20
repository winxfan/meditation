import css from './Footer.module.scss';
import Logo from '@/assets/image/logoWithName.svg'
import {Space} from "antd";

export const Footer = () => {
	return (
		<Space size={8} className={css.footer}>
			<a href="https://clubmeditation.site/policy" target="_blank" className={css.link}>
				Политика конфиденциальности
			</a>

			<a href="https://clubmeditation.site/oferta" target="_blank" className={css.link}>
				Публичная оферта
			</a>
		</Space>
	);
};