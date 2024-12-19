import AudioPlayerLibrary from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import css from './AudioPlayer.module.scss'; // Кастомные стили
import PlayIcon from '@/assets/icons/play.svg'
import PauseIcon from '@/assets/icons/pause.svg'

interface CustomAudioPlayerProps {
	src: string;
	title: string
}

export const AudioPlayer = ({src, title}: CustomAudioPlayerProps) => {
	return (
		<div className={css.audioPlayerContainer}>
			<p className={css.audioTitle}>Практика</p>
			<h3 className={css.audioSubtitle}>{title}</h3>
			<AudioPlayerLibrary
				src={src} // Укажите путь к вашему аудиофайлу
				showJumpControls={false}
				customAdditionalControls={[]} // Убираем дополнительные кнопки
				// customProgressBarSection={[]}
				customVolumeControls={[]} // Убираем управление громкостью
				showDownloadProgress={false}
				layout="horizontal-reverse"
				customIcons={{
					play: <PlayIcon className={css.playIcon}/>, // Иконка Play
					pause: <PauseIcon className={css.playIcon}/>, // Иконка Pause
				}}
			/>
		</div>
	);
};