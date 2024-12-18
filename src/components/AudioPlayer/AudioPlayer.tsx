import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import css from './AudioPlayer.module.scss';
import PlayIcon from '@/assets/image/audioPlay.svg';
import PauseIcon from '@/assets/image/audioPause.svg';

interface AudioPlayerProps {
	src: string;
	title?: string;
}

export const AudioPlayer = ({ src, title }: AudioPlayerProps) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const wavesurferRef = useRef(null);
	const containerRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Инициализируем Wavesurfer
		try {
			const waveSurfer = WaveSurfer.create({
				container: containerRef.current,
				waveColor: '#4f80ff',
				progressColor: '#fff',
				cursorColor: '#ffffff',
				height: 60,
			});

			// Загружаем аудио
			waveSurfer.load(src);

			// Показываем загрузку
			setIsLoading(true);

			// Обработчик успешной загрузки
			waveSurfer.on('ready', () => {
				setIsLoading(false);
			});

			// Обработчик ошибок
			waveSurfer.on('error', (e) => {
				console.error('Ошибка загрузки аудио:', e);
			});

			// Сохраняем ссылку на WaveSurfer
			wavesurferRef.current = waveSurfer;

			return () => {
				// Уничтожаем Wavesurfer при размонтировании
				if (wavesurferRef.current) {
					wavesurferRef.current.destroy();
					wavesurferRef.current = null;
				}
			};
		} catch (err) {
			console.error('Ошибка инициализации WaveSurfer:', err);
		}
	}, [src]);

	const togglePlayPause = () => {
		if (wavesurferRef.current) {
			wavesurferRef.current.playPause();
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div className={css.audioPlayer}>
			<p className={css.practice}>Практика</p>
			{title && <p className={css.title}>{title}</p>}

			<div className={css.container}>
				{isLoading ? (
					<div className={css.loadingContainer}>
						<div className={css.spinner}></div>
						<p>Загрузка аудиофайла...</p>
					</div>
				) : (
					<button onClick={togglePlayPause} className={css.playButton}>
						{isPlaying ? <PauseIcon /> : <PlayIcon />}
					</button>
				)}

				<div ref={containerRef}></div>
			</div>
		</div>
	);
};
