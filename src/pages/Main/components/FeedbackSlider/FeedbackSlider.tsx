import { Swiper, SwiperSlide } from 'swiper/react';

import {FeedbackCard} from "@/pages/Main/components/FeedbackCard";
import css from './FeedbackSlider.module.scss'

export const FeedbackSlider = () => {

	return (
		<div>
			<Swiper
				slidesPerView="auto"
				spaceBetween={6}
				className={css.slider}
			>
				<SwiperSlide className={css.slide}>
					<FeedbackCard/>
				</SwiperSlide>
				<SwiperSlide className={css.slide}>
					<FeedbackCard/>
				</SwiperSlide>
				<SwiperSlide className={css.slide}>
					<FeedbackCard/>
				</SwiperSlide>
				<SwiperSlide className={css.slide}>
					<FeedbackCard/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}