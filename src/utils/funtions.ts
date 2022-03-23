export const withPrefix = (prefix: string) => (message: string): string => `${prefix} ${message}`

export async function getNextFortressDate(): Promise<Date | undefined> {
    const timeTransferring = Date.now();
    let today = new Date(timeTransferring);
    while (0 !== today.getDay()) {
        today = await calculateDays(today,  1)
    }
    return new Date(today)
}

function calculateDays(date: Date, days: number){
    date.setDate(date.getDate() + days);
    return date;
}

