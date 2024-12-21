import { Button, Typography } from 'antd';
import css from './index.module.scss';
import ImageWrapper from '@/components/ImageWrapper';
import razbor_1 from '@/assets/image/razbor_1.png';
import razbor_2 from '@/assets/image/razbor_2.png';
import razbor_3 from '@/assets/image/razbor_3.png';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import banner from "@/assets/image/PageBannerSergey.png";
import {useBackButton} from "@/utils/hooks/useBackButton";

const PageSergay = () => {
    useBackButton();

    return (
        <div className={css.page_sergey}>
            <div
              className={css.banner}
              style={{backgroundImage: `url(${banner})`}}
            >
                <h1 className={css.bannerTitle}>
                    24 глубинных  разбора от Сергея
                </h1>

                <h1 className={css.bannerTitle2}>
                    Встречи, которые меняют всё
                </h1>

                <h3 className={css.bannerSubtitle}>
                    Каждый разбор — это не просто встреча, это мощный шаг к осознанию, внутренней свободе и реальным результатам в жизни. 
                </h3>
            </div>

            <div className={css.rabors}>
                <Typography.Title level={2} className={css.rabors__title}>
                    Разборы помогут вам
                </Typography.Title>

                <div className={css.rabors__list}>
                    <div className={css.rabors__list__item}>
                        <ImageWrapper
                            className={css.rabors__list__item__image}
                            src={razbor_1}
                            type="cover"
                        />
                        <div className={css.rabors__list__item__text}>
                            <Typography.Title
                                level={3}
                                className={css.rabors__list__item__text__title}>
                                Увидеть корень ваших проблем и&nbsp;ограничений
                            </Typography.Title>
                            <Typography.Paragraph className={css.rabors__list__item__text__descr}>
                                Вы&nbsp;поймёте, что действительно мешает достигать целей
                                в&nbsp;деньгах, отношениях и&nbsp;внутренней гармонии.
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div className={css.rabors__list__item}>
                        <ImageWrapper
                            className={css.rabors__list__item__image}
                            src={razbor_2}
                            type="cover"
                        />
                        <div className={css.rabors__list__item__text}>
                            <Typography.Title
                                level={3}
                                className={css.rabors__list__item__text__title}>
                                Освободиться от&nbsp;блоков и&nbsp;страхов
                            </Typography.Title>
                            <Typography.Paragraph className={css.rabors__list__item__text__descr}>
                                Я&nbsp;помогу мягко, но&nbsp;эффективно найти внутренние барьеры и
                                трансформировать их&nbsp;в&nbsp;силу.
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div className={css.rabors__list__item}>
                        <ImageWrapper
                            className={css.rabors__list__item__image}
                            src={razbor_3}
                            type="cover"
                        />
                        <div className={css.rabors__list__item__text}>
                            <Typography.Title
                                level={3}
                                className={css.rabors__list__item__text__title}>
                                Поставить цель и&nbsp;разбить её&nbsp;на&nbsp;шаги
                            </Typography.Title>
                            <Typography.Paragraph className={css.rabors__list__item__text__descr}>
                                Каждый разбор завершится ясным пониманием того, что делать дальше,
                                чтобы достичь своих целей.
                            </Typography.Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <Button className={css.btn_go_bot}>
                Записаться на разбор
            </Button>

            <FixedSubscribeBtn className={css.fixedbutton}/>
        </div>
    );
};

export default PageSergay;
