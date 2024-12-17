import { Header } from "@/components/Header";
import css from './Lesson.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import {useParams} from "react-router-dom";
import {RuTubeVideo} from "@/features/RutubeVideo/RutubeVideo";
import {lessonData} from "@/pages/Lesson/data";
import HomeworkIcon from '@/assets/image/homework.svg'
import {AudioPlayer} from "@/components/AudioPlayer/AudioPlayer";
import practice1Audio from './data/practice1.mp3'

export const Lesson = () => {
  const { id = 1} = useParams();
  const currentLesson = lessonData.find((item) => item.id === +id);

  return (
    <div>
      <Header />

      <div className={css.container}>
        <img src={currentLesson?.pictureSrc} className={css.banner} />

        <div className={css.video}>
          <RuTubeVideo
            videoId={currentLesson?.videoId}
          />
        </div>

        <AudioPlayer src={practice1Audio} title="Пробуждение внутренней силы"/>

        <div className={css.homework}>
          <div className={css.homeworkHeader}>
            <HomeworkIcon className={css.homeworkIcon} />
            <b className={css.homeworkTitle}>
              Домашнее задание
            </b>
          </div>
          <p className={css.homeworkDescription}>{currentLesson?.homeworkDescription}</p>
        </div>

        <FixedSubscribeBtn/>
      </div>
    </div>
  );
};
