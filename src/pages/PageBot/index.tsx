import cl from './index.module.scss';
import RoundBlock from '@/components/RoundBlock';
import { Typography } from 'antd';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import banner from "@/assets/image/PageBannerBot.png";
import {useBackButton} from "@/utils/hooks/useBackButton";
import communityScreen from "@/assets/image/CommunityScreen.png";
import css from "@/pages/Community/Community.module.scss";

const PageBot = () => {
  useBackButton();

    return (
        <div className={cl.page_bot}>
          <img src={banner} className={cl.banner} />

          <RoundBlock classNames={cl.bot_short_descr} background="#EFEDF0">
                <Typography.Paragraph className={cl.bot_short_descr__text}>
                    Каждый месяц вы&nbsp;будете ставить себе новые цели в&nbsp;бот, над которыми
                    будете работать в&nbsp;рамках месяца. Вы&nbsp;сможете всегда находиться
                    в&nbsp;фокусе на&nbsp;главных задачах, чтобы каждый месяц, без выгорания
                    и&nbsp;спешки, реализовывать&nbsp;то, что запланировали.
                </Typography.Paragraph>
            </RoundBlock>

          <img src={communityScreen} className={css.screen} />
          <FixedSubscribeBtn/>
        </div>
    );
};

export default PageBot;
