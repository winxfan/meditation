
import css from './TwelveSteps.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import {DEFAULT_COURSE_ID} from "@/store/user/data";
import {useParams} from "react-router-dom";
import {RuTubeVideo} from "@/features/RutubeVideo/RutubeVideo";
import {twelveStepsData} from "@/pages/TwelveSteps/data";
import {useBackButton} from "@/utils/hooks/useBackButton";
export const TwelveSteps = () => {
  const { id = 1} = useParams();
  useBackButton();

  const currentStep = twelveStepsData.find((item) => item.id === +id);

  return (
    <div>
      <div className={css.container}>
        <div
          className={css.banner}
          style={{backgroundImage: `url(${currentStep?.pictureSrc})`}}
        >
          <h1 className={css.bannerTitle}>
            {currentStep.title}
          </h1>

          <h3 className={css.bannerSubtitle}>
            {currentStep.subTitle}
          </h3>
        </div>


        <div className={css.resultBlock}>
          <b>Результат:</b>
          <p>{currentStep?.description}</p>
        </div>

        <div className={css.video}>
          <RuTubeVideo
            videoId={currentStep?.videoId}
            isFree={false}
          />
        </div>

        <FixedSubscribeBtn/>
      </div>
    </div>
  );
};
