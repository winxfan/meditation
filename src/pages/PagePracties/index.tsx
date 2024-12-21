import ImageWrapper from '@/components/ImageWrapper';
import RoundBlock from '@/components/RoundBlock';
import { Typography } from 'antd';

import practice_dir_1 from '@/assets/image/practice_dir_1.png';
import practice_dir_2 from '@/assets/image/practice_dir_2.png';
import practice_dir_3 from '@/assets/image/practice_dir_3.png';
import practice_dir_4 from '@/assets/image/practice_dir_4.png';

import Key from '@/assets/icons/key.svg';
import Kalendar from '@/assets/icons/kalendar.svg';
import Vector from '@/assets/icons/vector.svg';

import css from './index.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import banner from "@/assets/image/PageBanner42Practicies.png";
import {useBackButton} from "@/utils/hooks/useBackButton";

const PagePracties = () => {
    useBackButton();

    return (
        <div className={css.page_practicies}>
            <div
              className={css.banner}
              style={{backgroundImage: `url(${banner})`}}
            >
                <h1 className={css.bannerTitle}>
                    42 мощные практики  для вашей трансформации и роста
                </h1>

                <h3 className={css.bannerDescription}>
                    Годовая система из 42 уникальных практик, направленных на глубокие изменения и раскрытие вашего потенциала. Каждое воскресенье — живая встреча со мной, где мы прорабатываем ключевые аспекты вашей жизни.
                </h3>
            </div>
            
            <RoundBlock classNames={css.transformation} background="#F0EDF0">
                <Typography.Title level={2} className={css.transformation__title}>
                    4 направления трансформации:
                </Typography.Title>

                <div className={css.transformation__grid}>
                    <RoundBlock
                        classNames={css.transformation__grid__green}
                        background="linear-gradient(152deg, #E3F1ED, #CFF3E2)"
                        typeCard="small">
                        <Typography.Title level={3} className={css.transformation__grid__title}>
                            Наполнение энергией
                        </Typography.Title>
                        <Typography.Paragraph className={css.transformation__grid__text}>
                            зарядитесь силами для новых свершений
                        </Typography.Paragraph>
                        <ImageWrapper
                            src={practice_dir_1}
                            className={css.transformation__grid__image}
                        />
                    </RoundBlock>

                    <RoundBlock
                        classNames={css.transformation__grid__blue}
                        background="linear-gradient(152deg, #DFE4F3, #CFD7F3)"
                        typeCard="small">
                        <Typography.Title level={3} className={css.transformation__grid__title}>
                            Трансформация и очищение
                        </Typography.Title>
                        <Typography.Paragraph className={css.transformation__grid__text}>
                            освободитесь от старого и создайте место для нового
                        </Typography.Paragraph>
                        <ImageWrapper
                            src={practice_dir_2}
                            className={css.transformation__grid__image}
                        />
                    </RoundBlock>

                    <RoundBlock
                        classNames={css.transformation__grid__pink}
                        background="linear-gradient(152deg, #EDE4F3, #E5CFF3)"
                        typeCard="small">
                        <Typography.Title level={3} className={css.transformation__grid__title}>
                            Финансы и цели
                        </Typography.Title>
                        <Typography.Paragraph className={css.transformation__grid__text}>
                            усиливайте ресурсное состояние для достижения финансового успеха
                        </Typography.Paragraph>
                        <ImageWrapper
                            src={practice_dir_3}
                            className={css.transformation__grid__image}
                        />
                    </RoundBlock>

                    <RoundBlock
                        classNames={css.transformation__grid__yellow}
                        background="linear-gradient(152deg, #F0F0E9, #F3F0CF)"
                        typeCard="small">
                        <Typography.Title level={3} className={css.transformation__grid__title}>
                            Баланс и внутренняя сила
                        </Typography.Title>
                        <Typography.Paragraph className={css.transformation__grid__text}>
                            найдите гармонию и укрепите свою уверенность
                        </Typography.Paragraph>
                        <ImageWrapper
                            src={practice_dir_4}
                            className={css.transformation__grid__image}
                        />
                    </RoundBlock>
                </div>
            </RoundBlock>

            <div className={css.how}>
                <Typography.Title level={2} className={css.how__title}>
                    Как это работает:
                </Typography.Title>
                <div className={css.how__list}>
                    <RoundBlock classNames={css.how__item} background="#EAECF3">
                        <div className={css.how__item__image}>
                            <Key />
                        </div>
                        <Typography.Paragraph className={css.how__item__text}>
                            Каждая практика — это ключ к обновлению вашего состояния
                        </Typography.Paragraph>
                    </RoundBlock>
                    <RoundBlock classNames={css.how__item} background="#EAECF3">
                        <div className={css.how__item__image}>
                            <Kalendar />
                        </div>
                        <Typography.Paragraph className={css.how__item__text}>
                            Расписание практик предоставляется на месяц вперёд, чтобы вы могли
                            планировать своё развитие
                        </Typography.Paragraph>
                    </RoundBlock>
                    <RoundBlock classNames={css.how__item} background="#EAECF3">
                        <div className={css.how__item__image}>
                            <Vector />
                        </div>
                        <Typography.Paragraph className={css.how__item__text}>
                            Система выстроена так, чтобы шаг за шагом привести вас к гармонии,
                            осознанности и реализации
                        </Typography.Paragraph>
                    </RoundBlock>
                </div>
            </div>

            <Typography.Paragraph className={css.warring}>
                Присоединяйтесь, чтобы почувствовать мощь изменений уже после первой практики!
            </Typography.Paragraph>

            <FixedSubscribeBtn/>
        </div>
    );
};

export default PagePracties;
