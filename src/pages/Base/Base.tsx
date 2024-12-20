import css from './PageBase.module.scss';
import PracticeLink from './PracticeLink';
import { practies } from '@/data/page_base';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import banner from '@/assets/image/PageBanner70Practicies.png'
import {useBackButton} from "@/utils/hooks/useBackButton";

export const PageBase = () => {
	useBackButton();

	return (
		<div className={css.page_base}>
			<div
				className={css.banner}
				style={{backgroundImage: `url(${banner})`}}
			>
				<h1 className={css.bannerTitle}>
					База из 70
					трансформационных практик
				</h1>

				<h1 className={css.bannerTitle2}>
					Быстрый результат и мощные изменения
				</h1>

				<h3 className={css.bannerSubtitle}>
					Эта уникальная коллекция из 70 практик —  результат 1,5 лет глубокой работы и исследований. Каждая практика создаёт ощутимые изменения уже с первого раза. Это не просто упражнения, а мощные инструменты для трансформации вашей жизни.
				</h3>
			</div>

			<div className={css.what_is_base}>
				<p className={css.what_is_base__small}>Что включает база</p>

				<h1 className={css.what_is_base__subtitle}>
					70 проверенных практик длительностью от 1 до 1,5 часов, которые подходят для
					любых запросов
				</h1>

				<p className={css.what_is_base__text}>
					8 тематических разделов: каждая практика направлена на решение определённой
					задачи и раскрытие вашего потенциала
				</p>

				<div className={css.what_is_base__list}>
					{practies.map((el, i) => {
						return (
							<PracticeLink src={el.src} title={el.title} key={i} link={el.link} />
						);
					})}
				</div>
			</div>

			<FixedSubscribeBtn/>
		</div>
	);
};