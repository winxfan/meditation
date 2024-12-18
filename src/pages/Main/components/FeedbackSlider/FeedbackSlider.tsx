import { Swiper, SwiperSlide } from 'swiper/react';
import {FeedbackCard} from "@/pages/Main/components/FeedbackCard";
import css from './FeedbackSlider.module.scss'
import {data} from "@/pages/Main/components/FeedbackSlider/data";

export const FeedbackSlider = () => {
	return (
		<div>
			<Swiper
				slidesPerView="auto"
				spaceBetween={6}
				className={css.slider}
			>
				{data.map((item) => (
					<SwiperSlide className={css.slide} key={item.id}>
						<FeedbackCard description={item.description}/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}