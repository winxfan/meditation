import {courseInfoTabs} from "@/utils/constants";

export type LessonType = 'theory' | 'test' | 'task';
export type LessonStatus = 'passed' | 'current' | 'locked' | 'open';
export type Access = 'free' | 'paid'

export interface ICourse {
	_id: string;
	avatar: string;
	title: string;
	description: string;
	access: Access;
	price?: number;
	modules: IModule[];
	studyHasStarted?: boolean;
	hasCertificate?: boolean;
	students?: number;
}

export interface IModule {
	_id: string;
	id: string;
	title: string;
	access: Access;
	lessons: ILesson[];
	index: number;
	lessonsCount: number;
	prevId: string,
	nextId: string,
	isFirst: boolean;
	isLast: boolean;
}

export interface ILesson {
	_id: string;
	id: string;
	title: string;
	description?: string;
	type: LessonType;
	index: number;
	content?: unknown;
	moduleId: string,
	moduleIndex: number,
	prevId: string,
	nextId: string,
	isFirstInCourse: boolean;
	isLastInCourse: boolean;
}

export type ITheory = ILesson & {
	type: 'theory';
	content?: string
}

export type ITest = ILesson & {
	type: 'test';
	content: {
		minPoints?: number;
		questions: ITestQuestion[];
	}
}

export type ITask = ILesson & {
	type: 'task';
	content: {
		taskType: TaskType;
		description: string;
	}
}

export interface ITestAnswer {
	id: string;
	index: number;
	title: string;
	isRight: boolean
}

export type ITestQuestionType = 'checkbox' | 'radio';

export interface ITestQuestion {
	_id?: string;
	id: string;
	title: string;
	index: number;
	points: number;
	type: ITestQuestionType;
	answers?: ITestAnswer[];
	rightComment?: string;
	wrongComment?: string;
}

export interface ICourseLesson {
	_id: number | string,
	title: string,
}

export interface ICourseModule {
	id: string | number,
	title: string,
	index: number,
	lessons: ILesson[]
}

export type TaskType = 'number' | 'text' | 'link';

export interface IHomework {
	id: string;
	avatar: string;
	name: string;
	task: number;
	status: boolean;
	date: string;
}

export type IHomeworkMessage = {
	id: string,
	type: 'task' | 'answer',
	title?: string,
	content: string,
	time?: string,
}

export type IHomeworkAnswerStatus = boolean | 'revision'

export interface IHomeworkTask {
	id: string;
	avatar: string;
	name: string;
	userName: string;
	status: boolean;
	date: string;
	task: number,
	title: string,
	messages?: IHomeworkMessage[]
}

export interface IHomeworkAnswer {
	status: IHomeworkAnswerStatus,
	content?: string
}

export type CourseInfoTab = keyof typeof courseInfoTabs;

export interface TestScoringPointsData {
	status: boolean;
	points: number;
	data: Record<string, boolean>
}