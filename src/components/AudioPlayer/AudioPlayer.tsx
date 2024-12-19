import { useEffect, useRef, useState } from "react";
// import WaveSurfer from "wavesurfer.js";
import css from './AudioPlayer.module.scss';
import PlayIcon from '@/assets/image/audioPlay.svg';
import PauseIcon from '@/assets/image/audioPause.svg';

interface AudioPlayerProps {
	src: string;
	title?: string;
}


// const loadAudioWithAbort = (waveSurfer: any, src: any) => {
// 	const controller = new AbortController();
// 	const { signal } = controller;
//
// 	// Загрузка с использованием fetch
// 	waveSurfer.load(src, undefined, undefined, { signal });
//
// 	return controller;
// }

export const AudioPlayer = ({ src, title }: AudioPlayerProps) => {
	// const [isPlaying, setIsPlaying] = useState(false);
	// const wavesurferRef = useRef(null);
	// const containerRef = useRef(null);
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	let isMounted = true; // Флаг для проверки, что компонент всё ещё смонтирован
	//
	// 	try {
	// 		const waveSurfer = WaveSurfer.create({
	// 			container: containerRef.current,
	// 			waveColor: '#4f80ff',
	// 			progressColor: '#fff',
	// 			cursorColor: '#ffffff',
	// 			height: 60,
	// 		});
	//
	// 		setIsLoading(true);
	// 		const abortController = loadAudioWithAbort(waveSurfer, src);
	//
	// 		// Устанавливаем обработчики событий
	// 		waveSurfer.on('ready', () => {
	// 			if (isMounted) {
	// 				setIsLoading(false);
	// 			}
	// 		});
	//
	// 		waveSurfer.on('error', (e) => {
	// 			if (isMounted) {
	// 				console.error('Ошибка загрузки аудио:', e);
	// 				setIsLoading(false);
	// 			}
	// 		});
	//
	// 		wavesurferRef.current = waveSurfer;
	//
	// 		return () => {
	// 			isMounted = false;
	// 			abortController.abort(); // Отменяем загрузку
	//
	// 			// Делаем паузу, чтобы запрос мог завершиться корректно (не обязательно, но уменьшает вероятность ошибки)
	// 			setTimeout(() => {
	// 				if (wavesurferRef.current) {
	// 					wavesurferRef.current.destroy();
	// 					wavesurferRef.current = null;
	// 				}
	// 			}, 100);
	// 		};
	// 	} catch (err) {
	// 		console.error('Ошибка инициализации WaveSurfer:', err);
	// 	}
	// }, [src]);

	// const togglePlayPause = () => {
	// 	if (wavesurferRef.current) {
	// 		wavesurferRef.current.playPause();
	// 		setIsPlaying(!isPlaying);
	// 	}
	// };

	return (
		<figure className={css.audioPlayer}>
			<figcaption>{title}</figcaption>
			<audio controls src={src}></audio>
		</figure>
	)
	//
	// return (
	// 	<div className={css.audioPlayer}>
	// 		<p className={css.practice}>Практика</p>
	// 		{title && <p className={css.title}>{title}</p>}
	//
	// 		<div className={css.container}>
	// 			{isLoading ? (
	// 				<div className={css.loadingContainer}>
	// 					<div className={css.spinner}></div>
	// 					<p>Загрузка аудиофайла...</p>
	// 				</div>
	// 			) : (
	// 				<button onClick={togglePlayPause} className={css.playButton}>
	// 					{isPlaying ? <PauseIcon /> : <PlayIcon />}
	// 				</button>
	// 			)}
	//
	// 			<div ref={containerRef}></div>
	// 		</div>
	// 	</div>
	// );
};
