import ImageWrapper from '@/components/ImageWrapper';
import cl from './index.module.scss';
import hand from '@/assets/image/hand_with_phone.png';
import ButtonPrice from '@/components/Button/ButtonPrice';
import RoundBlock from '@/components/RoundBlock';
import { Typography } from 'antd';

const PageBot = () => {
    return (
        <div className={cl.page_bot}>
            <RoundBlock classNames={cl.bot_main} background="#F4D62C">
                <Typography.Title level={1} className={cl.bot_main__title}>
                    Бот, который будет сопровождать вас на протяжении всего года
                </Typography.Title>
                <Typography className={cl.bot_main__text}>
                    <ul>
                        <li>Утром присылает ежедневную практику</li>
                        <li>Днем присылает короткие задания и&nbsp;сообщения осознанности</li>
                        <li>Вечер&nbsp;&mdash; форма саморефлексии</li>
                        <li>3&nbsp;раза в&nbsp;неделю просит отчет по&nbsp;вашим целям</li>
                    </ul>
                </Typography>
                <ImageWrapper src={hand} className={cl.bot_main__image} />
            </RoundBlock>

            <RoundBlock classNames={cl.bot_short_descr} background="#EFEDF0">
                <Typography.Paragraph className={cl.bot_short_descr__text}>
                    Каждый месяц вы&nbsp;будете ставить себе новые цели в&nbsp;бот, над которыми
                    будете работать в&nbsp;рамках месяца. Вы&nbsp;сможете всегда находиться
                    в&nbsp;фокусе на&nbsp;главных задачах, чтобы каждый месяц, без выгорания
                    и&nbsp;спешки, реализовывать&nbsp;то, что запланировали.
                </Typography.Paragraph>
            </RoundBlock>

            <RoundBlock classNames={cl.bot_image} background="#EFEDF0">
                <ImageWrapper src={hand} className={cl.bot_image__image} />
            </RoundBlock>

            <ButtonPrice
                title="Открыть полный доступ"
                label="4 990₽/мес"
                className={cl.button_price}
            />
        </div>
    );
};

export default PageBot;
