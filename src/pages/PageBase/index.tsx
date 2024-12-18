import RoundBlock from '@/components/RoundBlock';
import cl from './index.module.scss';
import { Typography } from 'antd';
import inYan from '@/assets/image/in-yan.png';
import ImageWrapper from '@/components/ImageWrapper';
import PracticeLink from './PracticeLink';
import { practies } from '@/data/page_base';
import ButtonPrice from '@/components/Button/ButtonPrice';

const { Paragraph, Title } = Typography;

const PageBase = () => {
    return (
        <div className={cl.page_base}>
            <RoundBlock classNames={cl.base_main}>
                <Title level={1} className={cl.base_main__title}>
                    База из&nbsp;70&nbsp;трансформационных практик
                </Title>
                <Title level={2} className={cl.base_main__subtitle}>
                    Быстрый результат и&nbsp;мощные изменения
                </Title>
                <Paragraph className={cl.base_main__text}>
                    Эта уникальная коллекция из&nbsp;70&nbsp;практик&nbsp;&mdash; результат 1,5 лет
                    глубокой работы и&nbsp;исследований. Каждая практика создаёт ощутимые изменения
                    уже с&nbsp;первого раза. Это не&nbsp;просто упражнения, а&nbsp;мощные
                    инструменты для трансформации вашей жизни.
                </Paragraph>
                <ImageWrapper src={inYan} className={cl.base_main__image} />
            </RoundBlock>

            <div className={cl.what_is_base}>
                <Paragraph className={cl.what_is_base__small}>Что включает база</Paragraph>
                <Title level={2} className={cl.what_is_base__subtitle}>
                    70 проверенных практик длительностью от 1 до 1,5 часов, которые подходят для
                    любых запросов
                </Title>
                <Paragraph className={cl.what_is_base__text}>
                    8 тематических разделов: каждая практика направлена на решение определённой
                    задачи и раскрытие вашего потенциала
                </Paragraph>

                <div className={cl.what_is_base__list}>
                    {practies.map((el, i) => {
                        return (
                            <PracticeLink src={el.src} title={el.title} key={i} link={el.link} />
                        );
                    })}
                </div>
            </div>

            <ButtonPrice
                title="Открыть полный доступ"
                label="4 990₽/мес"
                className={cl.button_price}
            />
        </div>
    );
};

export default PageBase;
