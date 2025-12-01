import { GameRole } from "src/types/types";

export const roles: GameRole[] = [
  {
    roleId: 1,
    roleName: "Доктор Шарп\nтерапевт",
    roleNumber: "+7 (111) 111-11-11",
    rolePassword: "Doctor",
    roleProfile: "",
    roleTask: "",
    roleDescription:
      "Хирург с невероятной точностью. Диагностирует болезни по малейшим симптомам.",
    roleImg: "/images/therapist.png",
    roleEvents: [],
    isSelected: false,
  },

  {
    roleId: 2,
    roleName: "Сергей Талончиков\nсотрудник",
    roleNumber: "+7 (222) 222-22-22",
    rolePassword: "Talon",
    roleProfile:
      "Сергей Талончиков, 42 года\nОпытный сотрудник регистратуры городской поликлиники.",
    roleTask:
      "Ваша цель — обеспечить бесперебойную работу регистратуры в условиях многозадачности. Вы должны выполнить плановую работу, параллельно реагируя на срочные входящие события: телефонные звонки и живое общение с посетителями.",
    roleDescription: "Ваш рабочий день — это гибрид старых и новых технологий.",
    roleImg: "/images/receptionist.png",
    roleEvents: [],
    isSelected: false,
  },

  {
    roleId: 3,
    roleName: "Отоларинголог Рефлекторова\nспециалист",
    roleNumber: "+7 (444) 444-44-44",
    rolePassword: "Reflect",
    roleProfile: "",
    roleTask: "",
    roleDescription:
      "Гений медицинских технологий. Создает инновационные методы лечения.",
    roleImg: "/images/specialist.png",
    roleEvents: [],
    isSelected: false,
  },

  {
    roleId: 4,
    roleName: "Маргарита Фильтрова\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile:
      "Маргарита Фильтрова, 29 лет\nУспешный инстаграм-блогер с миллионной аудиторией.",
    roleTask:
      "Ваша цель — пройти диагностику и получить лечение, а именно льготный препарат Плацебо-Фильтр.",
    roleDescription:
      "Ваша жизнь — это идеальные кадры, безупречные ракурсы и тонны фильтров. Но однажды вы осознаете, что больше не можете видеть реальность без цифровой обработки.",
    roleCondition: '"Не вижу себя в зеркале без фотошоп-фильтров"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },

  {
    roleId: 5,
    roleName: "Тестов Тестик\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile: "Никакой",
    roleTask: "Никакой",
    roleDescription: "Никакой",
    roleCondition: '"Никакой"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },

  {
    roleId: 6,
    roleName: "Пробнов Пробник\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile: "Никакой",
    roleTask: "Никакой",
    roleDescription: "Никакой",
    roleCondition: '"Никакой"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },

  {
    roleId: 7,
    roleName: "Никаков Никак\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile: "Никакой",
    roleTask: "Никакой",
    roleDescription: "Никакой",
    roleCondition: '"Никакой"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },

  {
    roleId: 8,
    roleName: "Безименов Безимен\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile: "Никакой",
    roleTask: "Никакой",
    roleDescription: "Никакой",
    roleCondition: '"Никакой"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },

  {
    roleId: 9,
    roleName: "Неизвестов Неизвест\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile: "Никакой",
    roleTask: "Никакой",
    roleDescription: "Никакой",
    roleCondition: '"Никакой"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },

  {
    roleId: 10,
    roleName: "Ноунеймов Ноунейм\nпациент",
    roleNumber: "+7 (333) 333-33-33",
    rolePassword: "Margo",
    roleProfile: "Никакой",
    roleTask: "Никакой",
    roleDescription: "Никакой",
    roleCondition: '"Никакой"',
    roleImg: "/images/patient.png",
    roleEvents: [
      {
        eventEmit: "chat-bot",
        eventTitle: "Записаться на прием к терапевту через чат-бот",
        isActive: true,
      },
      {
        eventEmit: "cite-registratura",
        eventTitle: "Записаться на прием к врачу на сайте «Регистратура»",
        isActive: true,
      },
      {
        eventEmit: "visit-therapist",
        eventTitle:
          "Посетить терапевта для получения направления к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-registation",
        eventTitle: "Обратиться в регистратуру для записи к узкому специалисту",
        isActive: true,
      },
      {
        eventEmit: "visit-specialist",
        eventTitle:
          "Посетить узкого специалиста для подтверждения диагноза / необходимость льготного лекарства",
        isActive: true,
      },
      {
        eventEmit: "call",
        eventTitle:
          "Обратиться в службу 666 чтобы выписали рецепт на льготное лекарство",
        isActive: true,
      },
      {
        eventEmit: "visit-pharmacy",
        eventTitle: "Обратиться в аптеку для получения льготного лекарства",
        isActive: true,
      },
    ],
    isSelected: false,
  },
];
