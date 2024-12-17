import { Header } from "@/components/Header";
import css from './Base70Practics.module.scss';
import {FeedbackSlider} from "@/pages/Main/components/FeedbackSlider";
import {PrivateMeditationClub} from "@/pages/Main/components/PrivateMeditationClub";
import {BeginningOfChange} from "@/pages/Main/components/BeginningOfChange";
import {Card} from "@/features/Card";
import {Hr} from "@/components/Hr";
import {LevelsSlider} from "@/pages/Main/components/LevelsSlider";
import {Button} from "@/components/Button";
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
export const Base70Practics = () => {
  return (
    <div>
      <Header />

      <div className={css.container}>

        <FixedSubscribeBtn/>
      </div>
    </div>
  );
};
