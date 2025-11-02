import {computed, ref} from "vue";

class Calendar {
    private now = ref();
    languages = ref();

    constructor(initialDate: Date = new Date(), language: string = 'ru-RU') {
        this.now.value = initialDate;
        this.languages.value = language
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
        return ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    }
}

export function useCalendar(initialDate: Date = new Date()) {
    const calendar = new Calendar(initialDate);

    return {
        monthName: calendar.monthName,
        setLang: calendar.setLang.bind(calendar),
        daysWeek: calendar.daysWeek,

    };
}