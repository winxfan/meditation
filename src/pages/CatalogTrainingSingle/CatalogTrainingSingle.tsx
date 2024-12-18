import {useParams} from "react-router-dom";

import { Header } from "@/components/Header";
import css from './CatalogTrainingSingle.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";

import {RuTubeVideo} from "@/features/RutubeVideo/RutubeVideo";
import {lessonData} from "@/pages/Lesson/data";

import image1 from '@/assets/image/catalogItem-1.jpg';


export const CatalogTrainingSingle = () => {

    const { id = 1} = useParams();
  const currentLesson = lessonData.find((item) => item.id === +id);

  return (
    <div>
      <Header />

      <div className={css.container}>
        
        <div className={`${css.training} ${css.white}`} style={{backgroundImage: `url(${image1})`}}>
            <h4 className={css.training__title}>Жиросжигающая тренировка</h4>
        </div>

        <div className={css.training__video}>
          <RuTubeVideo
            videoId={currentLesson?.videoId}
          />
        </div>

        <FixedSubscribeBtn/>
      </div>
    </div>
  );
};