import {computed, ref} from "vue";

class Calendar {
    private now = ref();
    languages = ref();

    constructor(initialDate: Date = new Date(), language: string = 'ru-RU') {
        this.now.value = initialDate;
        this.languages.value = language
    }

    get today() {
        return computed(() => {
            return this.now.value.toLocaleDateString(this.languages.value, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        });
    }

    setLang(upLanguage: string) {
        this.languages.value = upLanguage;
    }

    get monthName() {
        return computed(() => {
            return this.now.value.toLocaleDateString(this.languages.value, { month: 'short' });
        });
    }
    get daysWeek() {
        return computed(() => this.languages.value === 'ru-RU'
            ? ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
            : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        );
    }
    get year() {
        return computed(() => this.now.value.getFullYear());
    }

    get month() {
        return computed(() => this.now.value.getMonth());
    }
    get days() {
        return computed(() => {
            const currentYear = this.year.value;
            const currentMonth = this.month.value;

            const startDay = new Date(currentYear, currentMonth, 0).getDay();
            const dayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            const daysInMonth: number[] = Array(24).fill(0);
            let j = 1
            for (let i = startDay; j <= dayOfMonth; i++) {
                daysInMonth[i] = j
                j++
            }
            return daysInMonth;
        });
    }

    prevMonth = () => {
        this.now.value = new Date(this.year.value, this.month.value - 1, 1);
    };

    nextMonth = () => {
        this.now.value = new Date(this.year.value, this.month.value + 1, 1);
    };

    selectDate = (day: number) => {
        return this.now.value = new Date(this.year.value, this.month.value, day);
    };
}

export function useCalendar(initialDate: Date = new Date()) {
    const calendar = new Calendar(initialDate);

    return {
        today: calendar.today,
        monthName: calendar.monthName,
        year: calendar.year,
        setLang: calendar.setLang.bind(calendar),
        daysWeek: calendar.daysWeek,
        days: calendar.days,
        prevMonth: calendar.prevMonth,
        nextMonth: calendar.nextMonth,
        selectDate: calendar.selectDate,
    };
}