import { Header } from "@/components/Header";
import css from './TwelveSteps.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import {DEFAULT_COURSE_ID} from "@/store/user/data";
import {useParams} from "react-router-dom";
import {RuTubeVideo} from "@/features/RutubeVideo/RutubeVideo";
import {twelveStepsData} from "@/pages/TwelveSteps/data";
export const TwelveSteps = () => {
  const { id = 1} = useParams();

  const currentStep = twelveStepsData.find((item) => item.id === +id);

  return (
    <div>
      <Header />

      <div className={css.container}>
        <img src={currentStep?.pictureSrc} className={css.banner} />

        <div className={css.resultBlock}>
          <b>Результат:</b>
          <p>{currentStep?.description}</p>
        </div>

        <div className={css.video}>
          <RuTubeVideo
            videoId={currentStep?.videoId}
          />
        </div>

        <FixedSubscribeBtn/>
      </div>
    </div>
  );
};
