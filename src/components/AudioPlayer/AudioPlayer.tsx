import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import css from './AudioPlayer.module.scss';
import PlayIcon from '@/assets/image/audioPlay.svg';
import PauseIcon from '@/assets/image/audioPause.svg';

interface AudioPlayerProps {
	src: string;
	title?: string;
}

export const AudioPlayer = ({src, title}: AudioPlayerProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const wavesurferRef = useRef(null);
	const containerRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

	useEffect(() => {
		wavesurferRef.current = WaveSurfer.create({
			container: containerRef?.current,
			waveColor: '#4f80ff',
			progressColor: '#fff',
			cursorColor: '#ffffff',
			height: 60,
		});

		wavesurferRef.current.load(src);

		// Показываем состояние загрузки
		setIsLoading(true);

		// Обработчик события загрузки аудиофайла
		wavesurferRef.current.on('ready', () => {
			setIsLoading(false); // Аудио загружено
		});

		return () => wavesurferRef.current.destroy();
	}, []);

	const togglePlayPause = () => {
		wavesurferRef.current.playPause();
		setIsPlaying(!isPlaying);
	};

	return (
		<div className={css.audioPlayer}>
			<p className={css.practice}>
				Практика
			</p>

			{title && (
				<p className={css.title}>
					{title}
				</p>
			)}

			<div className={css.container}>
				{isLoading ? (
					<div className={css.loadingContainer}>
						<div className={css.spinner}></div>
						<p>Загрузка аудиофайла...</p>
					</div>
				) : (
					<button onClick={togglePlayPause} className={css.playButton}>
						{isPlaying ? <PauseIcon/> : <PlayIcon/>}
					</button>
				)}

				<div ref={containerRef}></div>
			</div>
		</div>
	);
};