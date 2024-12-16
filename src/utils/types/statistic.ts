export type StatisticPeriod = 'day' | 'month' | 'year';

export interface Statistic {
	period: StatisticPeriod;
	data: Record<string, number>
}