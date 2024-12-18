import css from './PrivateMeditationClub.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {StepCard} from "@/pages/Main/components/StepCard";

export const PrivateMeditationClub = () => {

	return (
		<div className={css.container}>
			<div className="header">
				<p className={css.topText}>
					Private Meditation Club
				</p>

				<p className={css.title}>
					Экосистема <br/>
					для твоей трансформации и финансового роста
				</p>
			</div>

			<div className={css.footer}>
				<p className={css.description}>
					12 трансформационных шагов <br/>
					<b>к вашей жизни мечты</b>
				</p>
			</div>

			<Swiper
				slidesPerView="auto"
				spaceBetween={6}
				className={css.slider}
			>
				<SwiperSlide className={css.slide}>
					<StepCard/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}