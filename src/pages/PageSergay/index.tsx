import ButtonPrice from '@/components/Button/ButtonPrice';
import RoundBlock from '@/components/RoundBlock';
import { Button, Typography } from 'antd';
import cl from './index.module.scss';
import ImageWrapper from '@/components/ImageWrapper';

import sergayBg from '@/assets/image/sergay.png';
import razbor_1 from '@/assets/image/razbor_1.png';
import razbor_2 from '@/assets/image/razbor_2.png';
import razbor_3 from '@/assets/image/razbor_3.png';

const PageSergay = () => {
    return (
        <div className={cl.page_sergay}>
            <RoundBlock
                classNames={cl.main}
                background={`right / cover url(${sergayBg}) #c09898 no-repeat`}>
                <Typography.Title level={1} className={cl.main__title}>
                    24&nbsp;глубинных разбора от&nbsp;Сергея
                </Typography.Title>
                <Typography.Paragraph className={cl.main__label}>
                    Встречи, которые меняют всё
                </Typography.Paragraph>
                <Typography.Paragraph className={cl.main__text}>
                    Каждый разбор&nbsp;&mdash; это не&nbsp;просто встреча, это мощный шаг
                    к&nbsp;осознанию, внутренней свободе и&nbsp;реальным результатам в&nbsp;жизни.
                </Typography.Paragraph>
            </RoundBlock>
            <div className={cl.rabors}>
                <Typography.Title level={2} className={cl.rabors__title}>
                    Разборы помогут вам
                </Typography.Title>
                <div className={cl.rabors__list}>
                    <div className={cl.rabors__list__item}>
                        <ImageWrapper
                            className={cl.rabors__list__item__image}
                            src={razbor_1}
                            type="cover"
                        />
                        <div className={cl.rabors__list__item__text}>
                            <Typography.Title
                                level={3}
                                className={cl.rabors__list__item__text__title}>
                                Увидеть корень ваших проблем и&nbsp;ограничений
                            </Typography.Title>
                            <Typography.Paragraph className={cl.rabors__list__item__text__descr}>
                                Вы&nbsp;поймёте, что действительно мешает достигать целей
                                в&nbsp;деньгах, отношениях и&nbsp;внутренней гармонии.
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div className={cl.rabors__list__item}>
                        <ImageWrapper
                            className={cl.rabors__list__item__image}
                            src={razbor_2}
                            type="cover"
                        />
                        <div className={cl.rabors__list__item__text}>
                            <Typography.Title
                                level={3}
                                className={cl.rabors__list__item__text__title}>
                                Освободиться от&nbsp;блоков и&nbsp;страхов
                            </Typography.Title>
                            <Typography.Paragraph className={cl.rabors__list__item__text__descr}>
                                Я&nbsp;помогу мягко, но&nbsp;эффективно найти внутренние барьеры и
                                трансформировать их&nbsp;в&nbsp;силу.
                            </Typography.Paragraph>
                        </div>
                    </div>
                    <div className={cl.rabors__list__item}>
                        <ImageWrapper
                            className={cl.rabors__list__item__image}
                            src={razbor_3}
                            type="cover"
                        />
                        <div className={cl.rabors__list__item__text}>
                            <Typography.Title
                                level={3}
                                className={cl.rabors__list__item__text__title}>
                                Поставить цель и&nbsp;разбить её&nbsp;на&nbsp;шаги
                            </Typography.Title>
                            <Typography.Paragraph className={cl.rabors__list__item__text__descr}>
                                Каждый разбор завершится ясным пониманием того, что делать дальше,
                                чтобы достичь своих целей.
                            </Typography.Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <Button className={cl.btn_go_bot}>
                <Typography.Text className={cl.btn_go_bot__text}>
                    Начать достигать цели вместе с&nbsp;ботом
                </Typography.Text>
            </Button>
            <ButtonPrice
                title="Открыть полный доступ"
                label="4 990₽/мес"
                className={cl.button_price}
            />
        </div>
    );
};

export default PageSergay;
