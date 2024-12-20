import css from './Bot.module.scss';
import RoundBlock from '@/components/RoundBlock';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import banner from "@/assets/image/PageBannerBot.png";
import {useBackButton} from "@/utils/hooks/useBackButton";
import communityScreen from "@/assets/image/CommunityScreen.png";

export const PageBot = () => {
	useBackButton();

	return (
		<div className={css.page_bot}>
			<div
				className={css.banner}
				style={{backgroundImage: `url(${banner})`}}
			>
				<h1 className={css.bannerTitle}>
					Бот, который будет сопровождать вас на протяжении всего года
				</h1>

				<ul className={css.bannerSubtitle}>
					<li>
						Утром присылает ежедневную практику
					</li>
					<li>
						Днем присылает короткие задания и сообщения осознанности
					</li>
					<li>
						Вечер – форма саморефлексии
					</li>
					<li>
						3 раза в неделю просит отчет по вашим целям
					</li>
				</ul>
			</div>

			<RoundBlock classNames={css.bot_short_descr} background="#EFEDF0">
				<p className={css.bot_short_descr__text}>
					Каждый месяц вы&nbsp;будете ставить себе новые цели в&nbsp;бот, над которыми
					будете работать в&nbsp;рамках месяца. Вы&nbsp;сможете всегда находиться
					в&nbsp;фокусе на&nbsp;главных задачах, чтобы каждый месяц, без выгорания
					и&nbsp;спешки, реализовывать&nbsp;то, что запланировали.
				</p>
			</RoundBlock>

			<img src={communityScreen} className={css.screen} />
			<FixedSubscribeBtn/>
		</div>
	);
};
