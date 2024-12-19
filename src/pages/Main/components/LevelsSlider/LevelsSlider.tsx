import css from './LevelsSlider.module.scss';
import {Button} from "@/components/Button";
import {Card} from "@/features/Card";
import {levelsData} from "@/data/main";
import cs from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperInstance } from "swiper";
import {useRef} from "react";

export const LevelsSlider = () => {
	const paginationRef = useRef(null);

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + cs(className, css.paginatioBullet) + '">' + (index + 1) + '</span>';
		},
	};

	const handleSwiperInit = (swiper: SwiperInstance): void => {
		if (paginationRef.current) {
			(swiper.params.pagination as any).el = paginationRef.current;
			swiper.pagination.init();
			swiper.pagination.render();
			swiper.pagination.update();

			// Обновляем кастомные классы при изменении активного слайда
			swiper.on("slideChange", () => updatePaginationClasses(swiper));
			updatePaginationClasses(swiper);
		}
	};

	const updatePaginationClasses = (swiper: SwiperInstance): void => {
		const bullets = paginationRef.current?.querySelectorAll(".swiper-pagination-bullet");
		if (!bullets) return;

		bullets.forEach((bullet: any, index: number) => {
			bullet.classList.remove("pagination-active", "pagination-left", "pagination-right");

			if (index === swiper.activeIndex) {
				bullet.classList.add("pagination-active");
			} else if (index < swiper.activeIndex) {
				bullet.classList.add("pagination-left");
			} else if (index > swiper.activeIndex) {
				bullet.classList.add("pagination-right");
			}
		});
	};

	return (
		<div className={css.container}>
			<p className={css.title}>
				Каждый месяц вы будете получать новое звание внутри
				платформы и уникальными скетч картинками отражающими ваш прогресс
			</p>

			<div ref={paginationRef} className={css.pagination}></div>

			<Swiper
				className={css.slider}
				pagination={pagination}
				modules={[Pagination, Autoplay]}
				onSwiper={handleSwiperInit}
				spaceBetween={15}
				autoplay={{
					delay: 3000, // Задержка в миллисекундах (1 секунда)
				}}
			>
				{levelsData.map((item) => (
					<SwiperSlide key={item.id}>
						<img src={item.pictureUrl} className={css.img} />
					</SwiperSlide>
				))}
			</Swiper>


			{/*<div className={css.footer}>*/}
			{/*	<Button variant="white" size="medium">*/}
			{/*		Подробнее об уровнях*/}
			{/*	</Button>*/}
			{/*</div>*/}
		</div>
	);
}