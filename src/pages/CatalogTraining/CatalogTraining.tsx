import { Header } from "@/components/Header";
import css from './CatalogTraining.module.scss';
import {FixedSubscribeBtn} from "@/components/FixedSubscribeBtn";
import { CatalogItem } from "./components/CatalogItem";

import image1 from '@/assets/image/catalogItem-1.jpg'
import image2 from '@/assets/image/catalogItem-2.jpg'
import image3 from '@/assets/image/catalogItem-3.jpg'
import image4 from '@/assets/image/catalogItem-4.jpg'
import image5 from '@/assets/image/catalogItem-5.jpg'
import image6 from '@/assets/image/catalogItem-6.jpg'
import image7 from '@/assets/image/catalogItem-7.jpg'
import image8 from '@/assets/image/catalogItem-8.jpg'

export const CatalogTraining = () => {
  return (
    <div>
      <Header />

      <div className={css.container}>
        <h2 className={css.title}>Каталог тренировок</h2>

        <div className={css.grid}>
            <CatalogItem color="white" date="29 октября" title="Жиросжигающая тренировки" image={image1} />
            <CatalogItem color="black" date="29 октября" title="Тренировка на все тело" image={image2} />
            <CatalogItem color="white" date="29 октября" title="Функциональная тренировка" image={image3} />
            <CatalogItem color="white" date="29 октября" title="Тренировка на все тело" image={image4} />
            <CatalogItem color="black" date="29 октября" title="Функциональная тренировка" image={image5} />
            <CatalogItem color="black" date="29 октября" title="Тренировка на все тело" image={image6} />
            <CatalogItem color="white" date="29 октября" title="Жиросжигающая тренировки" image={image7} />
            <CatalogItem color="black" date="29 октября" title="Тренировка на все группы мышц" image={image8} />
        </div>

        <FixedSubscribeBtn/>
      </div>
    </div>
  );
};
