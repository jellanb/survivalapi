import { Schedule } from "../../entities/shard/_Schedule"

export interface _ScheduleRepository{
    findById: (id: number) => Promise<Schedule[]>
}

export function _ScheduleRepository(): _ScheduleRepository {
    return {
        findById: async ( id) => await Schedule.findAll({
            attributes: ['ScheduleDefineIdx',
                'SubInterval_DayOfWeek',
                'SubInterval_StartTimeHour',
                'SubInterval_StartTimeMinute',
                'SubInterval_StartTimeSecond',
                'SubInterval_DurationSecond'],
            where: { ScheduleDefineIdx : [id] }
        })
    }
}

export default _ScheduleRepository()
