import RoundBlock from '@/components/RoundBlock';
import cl from './index.module.scss';
import { Typography } from 'antd';
import inYan from '@/assets/image/in-yan.png';
import ImageWrapper from '@/components/ImageWrapper';
import PracticeLink from './PracticeLink';
import { practies } from '@/data/page_base';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import banner from '@/assets/image/PageBanner70Practicies.png'

const { Paragraph, Title } = Typography;

const PageBase = () => {
    return (
        <div className={cl.page_base}>
            <img src={banner} className={cl.banner} />

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

            <FixedSubscribeBtn/>
        </div>
    );
};

export default PageBase;
