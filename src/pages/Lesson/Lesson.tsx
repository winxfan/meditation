
import css from './Lesson.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import {useParams} from "react-router-dom";
import {RuTubeVideo} from "@/features/RutubeVideo/RutubeVideo";
import {lessonData} from "@/pages/Lesson/data";
import HomeworkIcon from '@/assets/image/homework.svg'
import {AudioPlayer} from "@/components/AudioPlayer/AudioPlayer";
import {useBackButton} from "@/utils/hooks/useBackButton";
import {Commentaries} from "@/features/Commentaries";
import cs from "classnames";

export const Lesson = () => {
  const { id = 1} = useParams();
  const currentLesson = lessonData.find((item) => item.id === +id);
  useBackButton();

  return (
    <div>
      <div className={cs(css.container, currentLesson.variant)}>
        <div
          className={css.banner}
          style={{backgroundImage: `url(${currentLesson?.pictureSrc})`}}
        >
          <p className={css.bannerTopText}>
            {currentLesson.topText}
          </p>

          <h1 className={css.bannerTitle}>
            {currentLesson.title}
          </h1>
        </div>

        {currentLesson.videoId && (
          <div className={css.video}>
            <RuTubeVideo
              videoId={currentLesson.videoId}
            />
          </div>
        )}

        {currentLesson.audioLink && (
          <AudioPlayer src={currentLesson.audioLink} title={currentLesson.audioTitle}/>
        )}

        <div className={css.homework}>
          <div className={css.homeworkHeader}>
            <HomeworkIcon className={css.homeworkIcon} />
            <b className={css.homeworkTitle}>
              Домашнее задание
            </b>
          </div>

          <p className={css.homeworkDescription}>
            {currentLesson?.homeworkDescription}
          </p>
        </div>

        <FixedSubscribeBtn/>
      </div>

      <Commentaries lessonId={currentLesson.id} />
    </div>
  );
};
