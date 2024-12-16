import { ModuleOptions } from "webpack";
import {BuildOptions} from "./types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development';

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		exclude: /\.module\.s?[ac]ss$/i, // Исключаем модули
		use: [
			"style-loader",
			{
				loader: "css-loader",
				options: {
					sourceMap: true,
				},
			},
			{
				loader: "sass-loader",
				options: {
					sourceMap: true,
				},
			},
		],
	};

	const sassModuleLoader = {
		test: /\.module\.s[ac]ss$/i,
		use: [
			"style-loader",
			{
				loader: "css-loader",
				options: {
					modules: {
						localIdentName: '[name]__[local]__[hash:base64:5]',
					},
					sourceMap: true,
				},
			},
			{
				loader: "sass-loader",
				options: {
					sourceMap: true,
				},
			},
		],
	};

	// Правило для CSS из node_modules
	const cssNodeModulesLoader = {
		test: /\.css$/i,
		// include: /node_modules/, // Только для библиотек
		use: [
			"style-loader",
			"css-loader", // Без модулей
		],
	};

	const assetsLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource', // Обрабатывает изображения как ресурсы (копирует их в выходную папку)
	};

	const svgLoader = {
		test: /\.svg$/i, // Только SVG
		use: [
			{
				loader: '@svgr/webpack', // Преобразует SVG в React-компоненты
			},
		],
	};

	const babelLoader = {
		test: /\.[t,j]sx?$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: [
					'@babel/preset-env',
					'@babel/preset-typescript',
					['@babel/preset-react',
						{
							runtime: isDev ? 'automatic' : 'classic',
						},
					],
				],
			},
		},
	};

	return [
		sassLoader,
		sassModuleLoader,
		cssNodeModulesLoader, // Добавляем правило для CSS из node_modules
		babelLoader,
		svgLoader,
		assetsLoader,
	];
}
