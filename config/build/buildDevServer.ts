import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types";

export function buildDevServer ({port = 3000}: BuildOptions): DevServerConfiguration {
	return {
		port,
		open: true,
		historyApiFallback: true,
		hot: true,
	}
}