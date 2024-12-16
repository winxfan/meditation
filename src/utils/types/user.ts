import {ILesson, IModule} from "@/utils/types/course";

export type UserRole = 'all' | 'student' | 'subscriber' | 'graduate';
export type StudyProgressStatus = 'passed' | 'current';
export type StudyAccess = 'locked' | 'open';

export interface IUser {
	_id: string;
	id: number;
	avatar?: string,
	username: string,
	first_name: string,
	is_bot?: boolean,
	language_code?: string,
	role: UserRole,
	studyHasStarted: boolean,
	studyProgress: IUserStudyProgress,
	currentLesson?: ICurrentLesson
}

export interface IUserStudyProgressLesson extends Pick<ILesson, '_id' | 'title'>{
	status: StudyProgressStatus,
	access?: StudyAccess,
}

export interface IUserStudyProgressModule extends Pick<IModule, '_id' | 'title'>{
	status: StudyProgressStatus,
	lessons: Record<string, IUserStudyProgressLesson>
}

export type IUserStudyProgress = Record<string, IUserStudyProgressModule>

export type ITelegramUser = {
	id: string | number;
	first_name?: string;
	username?: string;
};

export interface LearnProgress {
	module: number,
	lesson: number
}

export type ICurrentLesson = Pick<ILesson, '_id' | 'title' | 'index' | 'moduleIndex' | 'moduleId'>