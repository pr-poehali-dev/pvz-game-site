import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const characters = [
    // Основные растения
    {
      name: "Подсолнух",
      type: "plant",
      cost: 50,
      emoji: "🌻",
      description: "Производит 25 солнца каждые 24 секунды",
      recharge: "Быстро",
    },
    {
      name: "Горохострел",
      type: "plant",
      cost: 100,
      emoji: "🌱",
      description: "Стреляет горошинами по врагам",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Орех",
      type: "plant",
      cost: 50,
      emoji: "🥜",
      description: "Защищает растения от атак",
      hp: 4000,
      recharge: "Медленно",
    },
    {
      name: "Картофельная мина",
      type: "plant",
      cost: 25,
      emoji: "🥔",
      description: "Взрывает первого зомби в линии",
      damage: 1800,
      recharge: "Медленно",
    },
    {
      name: "Снежный горох",
      type: "plant",
      cost: 175,
      emoji: "❄️",
      description: "Стреляет и замедляет врагов",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Поедатель",
      type: "plant",
      cost: 150,
      emoji: "🪴",
      description: "Съедает зомби целиком",
      recharge: "Быстро",
    },
    {
      name: "Повторитель",
      type: "plant",
      cost: 200,
      emoji: "🌿",
      description: "Стреляет двумя горошинами",
      damage: 40,
      recharge: "Быстро",
    },

    // Ночные грибы
    {
      name: "Гриб-пуффер",
      type: "plant",
      cost: 0,
      emoji: "🍄",
      description: "Бесплатный стрелок (только ночью)",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Солнечный гриб",
      type: "plant",
      cost: 25,
      emoji: "🌞",
      description: "Производит солнце ночью",
      recharge: "Быстро",
    },
    {
      name: "Дымовой гриб",
      type: "plant",
      cost: 75,
      emoji: "💨",
      description: "Проникает через экраны",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Могильный гриб",
      type: "plant",
      cost: 75,
      emoji: "⚰️",
      description: "Уничтожает могилы",
      recharge: "Быстро",
    },
    {
      name: "Гипногриб",
      type: "plant",
      cost: 75,
      emoji: "🌀",
      description: "Заставляет зомби идти назад",
      recharge: "Медленно",
    },
    {
      name: "Ледяной гриб",
      type: "plant",
      cost: 75,
      emoji: "🧊",
      description: "Замораживает всех зомби",
      recharge: "Очень медленно",
    },
    {
      name: "Гриб-разрушитель",
      type: "plant",
      cost: 125,
      emoji: "💥",
      description: "Огромный взрыв с большим радиусом",
      damage: 1800,
      recharge: "Медленно",
    },

    // Водные растения
    {
      name: "Лилия",
      type: "plant",
      cost: 25,
      emoji: "🪷",
      description: "Платформа для других растений на воде",
      recharge: "Быстро",
    },
    {
      name: "Кабачок",
      type: "plant",
      cost: 50,
      emoji: "🥒",
      description: "Раздавливает зомби сверху",
      damage: 1800,
      recharge: "Медленно",
    },
    {
      name: "Треугольник",
      type: "plant",
      cost: 100,
      emoji: "📐",
      description: "Стреляет 8 иглами во все стороны",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Морской гриб",
      type: "plant",
      cost: 0,
      emoji: "🫧",
      description: "Водный стрелок (бесплатно)",
      damage: 20,
      recharge: "Быстро",
    },

    // Дневные растения
    {
      name: "Кактус",
      type: "plant",
      cost: 125,
      emoji: "🌵",
      description: "Стреляет иглами, может сдуть шары",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Трёхгорошек",
      type: "plant",
      cost: 325,
      emoji: "🟢",
      description: "Стреляет по трём линиям",
      damage: 60,
      recharge: "Быстро",
    },
    {
      name: "Острый камыш",
      type: "plant",
      cost: 25,
      emoji: "🌾",
      description: "Колет шины и замедляет",
      recharge: "Быстро",
    },
    {
      name: "Торчбумага",
      type: "plant",
      cost: 100,
      emoji: "🔥",
      description: "Поджигает зомби в линии",
      damage: 40,
      recharge: "Быстро",
    },
    {
      name: "Высокий орех",
      type: "plant",
      cost: 125,
      emoji: "🌰",
      description: "Блокирует прыгающих зомби",
      hp: 8000,
      recharge: "Медленно",
    },

    // Продвинутые растения
    {
      name: "Морская звезда",
      type: "plant",
      cost: 0,
      emoji: "⭐",
      description: "Имитирует другие растения",
      recharge: "Медленно",
    },
    {
      name: "Кофейное зерно",
      type: "plant",
      cost: 75,
      emoji: "☕",
      description: "Пробуждает грибы днём",
      recharge: "Быстро",
    },
    {
      name: "Чеснок",
      type: "plant",
      cost: 50,
      emoji: "🧄",
      description: "Отвлекает зомби на соседние линии",
      recharge: "Быстро",
    },
    {
      name: "Зонтолист",
      type: "plant",
      cost: 100,
      emoji: "☂️",
      description: "Защищает от катапульт и баскетболов",
      recharge: "Быстро",
    },
    {
      name: "Ноготки",
      type: "plant",
      cost: 50,
      emoji: "🌼",
      description: "Производит солнце и отпугивает тлю",
      recharge: "Быстро",
    },
    {
      name: "Дыня-пульта",
      type: "plant",
      cost: 300,
      emoji: "🍉",
      description: "Стреляет дынями с большим уроном",
      damage: 80,
      recharge: "Быстро",
    },
    {
      name: "Гатлинг-горох",
      type: "plant",
      cost: 250,
      emoji: "🔫",
      description: "Стреляет очередями горошин",
      damage: 80,
      recharge: "Быстро",
    },
    {
      name: "Двойной подсолнух",
      type: "plant",
      cost: 150,
      emoji: "🌻",
      description: "Производит в два раза больше солнца",
      recharge: "Быстро",
    },
    {
      name: "Глум-гриб",
      type: "plant",
      cost: 150,
      emoji: "☁️",
      description: "Выпускает ядовитый газ в 3х3",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Магнит-гриб",
      type: "plant",
      cost: 100,
      emoji: "🧲",
      description: "Снимает металлические предметы",
      recharge: "Быстро",
    },
    {
      name: "Золотой магнит",
      type: "plant",
      cost: 50,
      emoji: "💰",
      description: "Собирает монеты автоматически",
      recharge: "Быстро",
    },
    {
      name: "Острый стрелок",
      type: "plant",
      cost: 200,
      emoji: "🎯",
      description: "Пробивает броню зомби",
      damage: 65,
      recharge: "Быстро",
    },
    {
      name: "Початок-пушка",
      type: "plant",
      cost: 100,
      emoji: "🌽",
      description: "Стреляет кукурузными зёрнами и маслом",
      damage: 20,
      recharge: "Быстро",
    },
    {
      name: "Зимняя дыня",
      type: "plant",
      cost: 200,
      emoji: "❄️",
      description: "Замедляющие ледяные дыни",
      damage: 80,
      recharge: "Быстро",
    },

    // Зомби
    {
      name: "Обычный зомби",
      type: "zombie",
      hp: 200,
      emoji: "🧟‍♂️",
      description: "Медленный и опасный",
      speed: "Медленно",
    },
    {
      name: "Флаговый зомби",
      type: "zombie",
      hp: 200,
      emoji: "🚩",
      description: "Сигнализирует о большой волне",
      speed: "Медленно",
    },
    {
      name: "Конусоголовый",
      type: "zombie",
      hp: 640,
      emoji: "🚧",
      description: "Прочная защита головы",
      speed: "Медленно",
    },
    {
      name: "Зомби с шестом",
      type: "zombie",
      hp: 500,
      emoji: "🏃‍♂️",
      description: "Перепрыгивает через первое растение",
      speed: "Быстро",
    },
    {
      name: "Ведроголовый",
      type: "zombie",
      hp: 1370,
      emoji: "🪣",
      description: "Очень крепкий",
      speed: "Медленно",
    },
    {
      name: "Зомби-газетчик",
      type: "zombie",
      hp: 200,
      emoji: "📰",
      description: "Злится когда теряет газету",
      speed: "Медленно",
    },
    {
      name: "Зомби на двери",
      type: "zombie",
      hp: 1370,
      emoji: "🚪",
      description: "Использует дверь как щит",
      speed: "Медленно",
    },
    {
      name: "Футбольный зомби",
      type: "zombie",
      hp: 1400,
      emoji: "🏈",
      description: "Очень быстрый и сильный",
      speed: "Очень быстро",
    },
    {
      name: "Танцующий зомби",
      type: "zombie",
      hp: 500,
      emoji: "🕺",
      description: "Призывает зомби-танцоров",
      speed: "Медленно",
    },
    {
      name: "Зомби-танцор",
      type: "zombie",
      hp: 200,
      emoji: "💃",
      description: "Выходит из земли",
      speed: "Медленно",
    },
    {
      name: "Зомби-ныряльщик",
      type: "zombie",
      hp: 500,
      emoji: "🤿",
      description: "Плавает под водой",
      speed: "Медленно",
    },
    {
      name: "Зомби на санках",
      type: "zombie",
      hp: 1350,
      emoji: "🛷",
      description: "Оставляет ледяной след",
      speed: "Быстро",
    },
    {
      name: "Зомби-дельфинёр",
      type: "zombie",
      hp: 500,
      emoji: "🐬",
      description: "Прыгает через водные растения",
      speed: "Быстро",
    },
    {
      name: "Зомби-Джек",
      type: "zombie",
      hp: 500,
      emoji: "🎃",
      description: "Взрывается при смерти",
      speed: "Медленно",
    },
    {
      name: "Зомби на шаре",
      type: "zombie",
      hp: 200,
      emoji: "🎈",
      description: "Летает над растениями",
      speed: "Быстро",
    },
    {
      name: "Зомби-шахтёр",
      type: "zombie",
      hp: 500,
      emoji: "⛏️",
      description: "Копает туннели под растениями",
      speed: "Медленно",
    },
    {
      name: "Зомби-попрыгун",
      type: "zombie",
      hp: 500,
      emoji: "🦘",
      description: "Прыгает через растения",
      speed: "Быстро",
    },
    {
      name: "Зомби на лестнице",
      type: "zombie",
      hp: 500,
      emoji: "🪜",
      description: "Перелезает через высокие растения",
      speed: "Медленно",
    },
    {
      name: "Катапульта-зомби",
      type: "zombie",
      hp: 500,
      emoji: "🏰",
      description: "Стреляет баскетболами на заднюю линию",
      speed: "Медленно",
    },
    {
      name: "Гаргантюа",
      type: "zombie",
      hp: 3000,
      emoji: "👹",
      description: "Гигантский зомби с булавой",
      speed: "Медленно",
    },
    {
      name: "Зомботаник",
      type: "zombie",
      hp: 1800,
      emoji: "🔬",
      description: "Финальный босс игры",
      speed: "Медленно",
    },
  ];

  const worlds = [
    {
      id: 1,
      name: "Передний двор",
      emoji: "☀️",
      difficulty: "Легко",
      status: "completed",
      description: "Дневные уровни на обычной лужайке",
      newPlants: [
        "Подсолнух",
        "Горохострел",
        "Орех",
        "Картофельная мина",
        "Снежный горох",
        "Поедатель",
        "Повторитель",
      ],
      newZombies: [
        "Обычный зомби",
        "Флаговый зомби",
        "Конусоголовый",
        "Зомби с шестом",
        "Ведроголовый",
      ],
      levels: [
        {
          name: "1-1",
          description: "Первые зомби атакуют",
          zombies: ["Обычный зомби"],
          plants: ["Подсолнух", "Горохострел"],
          status: "completed",
        },
        {
          name: "1-2",
          description: "Изучаем защиту",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: ["Орех"],
          status: "completed",
        },
        {
          name: "1-3",
          description: "Картофельные взрывы",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: ["Картофельная мина"],
          status: "completed",
        },
        {
          name: "1-4",
          description: "Замедляем врагов",
          zombies: ["Обычный зомби", "Конусоголовый", "Ведроголовый"],
          plants: ["Снежный горох"],
          status: "completed",
        },
        {
          name: "1-5",
          description: "Первая большая волна",
          zombies: [
            "Обычный зомби",
            "Флаговый зомби",
            "Конусоголовый",
            "Ведроголовый",
          ],
          plants: ["Поедатель"],
          status: "completed",
        },
        {
          name: "1-6",
          description: "Двойная мощь",
          zombies: ["Обычный зомби", "Конусоголовый", "Зомби с шестом"],
          plants: ["Повторитель"],
          status: "completed",
        },
        {
          name: "1-7",
          description: "Прыгающие зомби",
          zombies: ["Зомби с шестом", "Конусоголовый", "Ведроголовый"],
          plants: [],
          status: "completed",
        },
        {
          name: "1-8",
          description: "Мини-игра: Идущие орехи",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: [],
          status: "completed",
        },
        {
          name: "1-9",
          description: "Выбери семена",
          zombies: ["Все дневные"],
          plants: [],
          status: "completed",
        },
        {
          name: "1-10",
          description: "Босс: Зомботаник",
          zombies: ["Зомботаник"],
          plants: [],
          status: "completed",
        },
      ],
    },
    {
      id: 2,
      name: "Задний двор",
      emoji: "🌙",
      difficulty: "Средне",
      status: "active",
      description: "Ночные уровни с грибами",
      newPlants: [
        "Гриб-пуффер",
        "Солнечный гриб",
        "Дымовой гриб",
        "Могильный гриб",
        "Гипногриб",
        "Ледяной гриб",
        "Гриб-разрушитель",
      ],
      newZombies: [
        "Зомби-газетчик",
        "Зомби на двери",
        "Футбольный зомби",
        "Танцующий зомби",
        "Зомби-танцор",
      ],
      levels: [
        {
          name: "2-1",
          description: "Первая ночь",
          zombies: ["Обычный зомби"],
          plants: ["Гриб-пуффер", "Солнечный гриб"],
          status: "active",
        },
        {
          name: "2-2",
          description: "Проникающий дым",
          zombies: ["Обычный зомби", "Зомби-газетчик"],
          plants: ["Дымовой гриб"],
          status: "locked",
        },
        {
          name: "2-3",
          description: "Могилы на поле",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: ["Могильный гриб"],
          status: "locked",
        },
        {
          name: "2-4",
          description: "Зомби идут назад",
          zombies: ["Обычный зомби", "Конусоголовый", "Ведроголовый"],
          plants: ["Гипногриб"],
          status: "locked",
        },
        {
          name: "2-5",
          description: "Заморозка всех",
          zombies: ["Обычный зомби", "Зомби на двери"],
          plants: ["Ледяной гриб"],
          status: "locked",
        },
        {
          name: "2-6",
          description: "Большой взрыв",
          zombies: ["Обычный зомби", "Конусоголовый", "Футбольный зомби"],
          plants: ["Гриб-разрушитель"],
          status: "locked",
        },
        {
          name: "2-7",
          description: "Танцующая угроза",
          zombies: ["Танцующий зомби", "Зомби-танцор"],
          plants: [],
          status: "locked",
        },
        {
          name: "2-8",
          description: "Мини-игра: Боулинг",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: [],
          status: "locked",
        },
        {
          name: "2-9",
          description: "Выбери семена ночью",
          zombies: ["Все ночные"],
          plants: [],
          status: "locked",
        },
        {
          name: "2-10",
          description: "Босс: Зомботаник",
          zombies: ["Зомботаник"],
          plants: [],
          status: "locked",
        },
      ],
    },
    {
      id: 3,
      name: "Бассейн",
      emoji: "🏊‍♂️",
      difficulty: "Сложно",
      status: "locked",
      description: "Водные уровни с плавающими зомби",
      newPlants: ["Лилия", "Кабачок", "Треугольник", "Морской гриб"],
      newZombies: ["Зомби-ныряльщик", "Зомби на санках", "Зомби-дельфинёр"],
      levels: [
        {
          name: "3-1",
          description: "Первый заплыв",
          zombies: ["Обычный зомби", "Зомби-ныряльщик"],
          plants: ["Лилия"],
          status: "locked",
        },
        {
          name: "3-2",
          description: "Раздавить сверху",
          zombies: ["Зомби-ныряльщик"],
          plants: ["Кабачок"],
          status: "locked",
        },
        {
          name: "3-3",
          description: "Колючий треугольник",
          zombies: ["Обычный зомби", "Зомби-ныряльщик"],
          plants: ["Треугольник"],
          status: "locked",
        },
        {
          name: "3-4",
          description: "Морские грибы",
          zombies: ["Зомби-ныряльщик"],
          plants: ["Морской гриб"],
          status: "locked",
        },
        {
          name: "3-5",
          description: "Ледяной след",
          zombies: ["Зомби на санках"],
          plants: [],
          status: "locked",
        },
        {
          name: "3-6",
          description: "Прыжки дельфина",
          zombies: ["Зомби-дельфинёр"],
          plants: [],
          status: "locked",
        },
        {
          name: "3-7",
          description: "Водная оборона",
          zombies: ["Все водные"],
          plants: [],
          status: "locked",
        },
        {
          name: "3-8",
          description: "Мини-игра: Слот-машина",
          zombies: ["Обычный зомби"],
          plants: [],
          status: "locked",
        },
        {
          name: "3-9",
          description: "Выбери семена в бассейне",
          zombies: ["Все водные"],
          plants: [],
          status: "locked",
        },
        {
          name: "3-10",
          description: "Босс: Зомботаник",
          zombies: ["Зомботаник"],
          plants: [],
          status: "locked",
        },
      ],
    },
    {
      id: 4,
      name: "Туман",
      emoji: "🌫️",
      difficulty: "Сложно",
      status: "locked",
      description: "Уровни в тумане с ограниченной видимостью",
      newPlants: [
        "Кактус",
        "Трёхгорошек",
        "Острый камыш",
        "Торчбумага",
        "Высокий орех",
      ],
      newZombies: ["Зомби-Джек", "Зомби на шаре"],
      levels: [
        {
          name: "4-1",
          description: "Первый туман",
          zombies: ["Обычный зомби"],
          plants: ["Кактус"],
          status: "locked",
        },
        {
          name: "4-2",
          description: "Тройная линия",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: ["Трёхгорошек"],
          status: "locked",
        },
        {
          name: "4-3",
          description: "Колючий камыш",
          zombies: ["Обычный зомби"],
          plants: ["Острый камыш"],
          status: "locked",
        },
        {
          name: "4-4",
          description: "Огненная линия",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: ["Торчбумага"],
          status: "locked",
        },
        {
          name: "4-5",
          description: "Высокая защита",
          zombies: ["Зомби с шестом"],
          plants: ["Высокий орех"],
          status: "locked",
        },
        {
          name: "4-6",
          description: "Взрывающийся Джек",
          zombies: ["Зомби-Джек"],
          plants: [],
          status: "locked",
        },
        {
          name: "4-7",
          description: "Воздушная атака",
          zombies: ["Зомби на шаре"],
          plants: [],
          status: "locked",
        },
        {
          name: "4-8",
          description: "Мини-игра: Разберись с туманом",
          zombies: ["Все туманные"],
          plants: [],
          status: "locked",
        },
        {
          name: "4-9",
          description: "Выбери семена в тумане",
          zombies: ["Все туманные"],
          plants: [],
          status: "locked",
        },
        {
          name: "4-10",
          description: "Босс: Зомботаник",
          zombies: ["Зомботаник"],
          plants: [],
          status: "locked",
        },
      ],
    },
    {
      id: 5,
      name: "Крыша",
      emoji: "🏠",
      difficulty: "Очень сложно",
      status: "locked",
      description: "Наклонная крыша с катапультами",
      newPlants: [
        "Морская звезда",
        "Кофейное зерно",
        "Чеснок",
        "Зонтолист",
        "Ноготки",
        "Дыня-пульта",
        "Гатлинг-горох",
        "Двойной подсолнух",
        "Глум-гриб",
        "Магнит-гриб",
        "Золотой магнит",
        "Острый стрелок",
        "Початок-пушка",
        "Зимняя дыня",
      ],
      newZombies: [
        "Зомби-шахтёр",
        "Зомби-попрыгун",
        "Зомби на лестнице",
        "Катапульта-зомби",
        "Гаргантюа",
      ],
      levels: [
        {
          name: "5-1",
          description: "На крыше",
          zombies: ["Обычный зомби"],
          plants: ["Морская звезда", "Кофейное зерно"],
          status: "locked",
        },
        {
          name: "5-2",
          description: "Переключение линий",
          zombies: ["Обычный зомби", "Конусоголовый"],
          plants: ["Чеснок"],
          status: "locked",
        },
        {
          name: "5-3",
          description: "Защита от катапульт",
          zombies: ["Катапульта-зомби"],
          plants: ["Зонтолист"],
          status: "locked",
        },
        {
          name: "5-4",
          description: "Отпугиватель тли",
          zombies: ["Обычный зомби"],
          plants: ["Ноготки"],
          status: "locked",
        },
        {
          name: "5-5",
          description: "Дынная артиллерия",
          zombies: ["Обычный зомби", "Конусоголовый", "Ведроголовый"],
          plants: ["Дыня-пульта"],
          status: "locked",
        },
        {
          name: "5-6",
          description: "Скорострельность",
          zombies: ["Обычный зомби", "Футбольный зомби"],
          plants: ["Гатлинг-горох"],
          status: "locked",
        },
        {
          name: "5-7",
          description: "Двойное солнце",
          zombies: ["Обычный зомби"],
          plants: ["Двойной подсолнух"],
          status: "locked",
        },
        {
          name: "5-8",
          description: "Подземные туннели",
          zombies: ["Зомби-шахтёр"],
          plants: ["Глум-гриб", "Магнит-гриб"],
          status: "locked",
        },
        {
          name: "5-9",
          description: "Прыжки и лестницы",
          zombies: ["Зомби-попрыгун", "Зомби на лестнице"],
          plants: ["Золотой магнит", "Острый стрелок"],
          status: "locked",
        },
        {
          name: "5-10",
          description: "Финальная битва",
          zombies: ["Гаргантюа", "Зомботаник"],
          plants: ["Початок-пушка", "Зимняя дыня"],
          status: "locked",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sun-yellow/20 to-plant-green/20">
      {/* Header */}
      <header className="bg-earth-brown text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-4xl animate-bounce-slow">🌱</span>
            <h1
              className="text-3xl font-bold font-['Rubik']"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                color: "#FFEB3B",
              }}
            >
              PLANTS vs ZOMBIES
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-plant-green/20"
            >
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-plant-green/20"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Персонажи
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-plant-green/20"
            >
              <Icon name="Target" size={20} className="mr-2" />
              Уровни
            </Button>
            <Button
              className="bg-zombie-orange hover:bg-zombie-orange/80 text-white font-bold"
              onClick={() => window.open("https://t.me/mod_pvz00", "_blank")}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-6xl font-bold mb-6 text-earth-brown font-['Rubik']"
            style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.3)" }}
          >
            Защищай свой дом от нашествия зомби! 🏠
          </h2>
          <p className="text-xl mb-8 text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            Используй армию растений, чтобы остановить орды голодных зомби.
            Стратегия, тактика и немного удачи - всё что нужно для победы!
          </p>

          <div className="mb-12">
            <img
              src="/img/2b195bef-1846-42de-aff5-68055a356f86.jpg"
              alt="Plants vs Zombies Hero"
              className="mx-auto rounded-2xl shadow-2xl max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-plant-green hover:bg-plant-green/80 text-white font-bold px-8 py-3 text-lg shadow-lg"
            >
              <Icon name="Play" size={24} className="mr-2" />
              Начать игру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-plant-green text-plant-green hover:bg-plant-green/10 font-bold px-8 py-3 text-lg"
            >
              <Icon name="BookOpen" size={24} className="mr-2" />
              Как играть
            </Button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-earth-brown font-['Rubik']">
            Персонажи
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char, index) => (
              <Card
                key={index}
                className={`hover:scale-105 transition-all duration-300 shadow-lg border-2 ${
                  char.type === "plant"
                    ? "border-plant-green hover:shadow-plant-green/20"
                    : "border-zombie-orange hover:shadow-zombie-orange/20"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 animate-bounce-slow">
                    {char.emoji}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-earth-brown">
                    {char.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {char.description}
                  </p>
                  <div className="flex flex-col items-center space-y-2">
                    {char.type === "plant" ? (
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge className="bg-sun-yellow text-earth-brown font-bold">
                          <Icon name="Coins" size={16} className="mr-1" />
                          {char.cost} солнца
                        </Badge>
                        {char.damage && (
                          <Badge className="bg-plant-green text-white font-bold">
                            <Icon name="Zap" size={16} className="mr-1" />
                            {char.damage} урона
                          </Badge>
                        )}
                        {char.hp && (
                          <Badge className="bg-earth-brown text-white font-bold">
                            <Icon name="Shield" size={16} className="mr-1" />
                            {char.hp} HP
                          </Badge>
                        )}
                        {char.recharge && (
                          <Badge variant="outline" className="text-gray-600">
                            <Icon name="Clock" size={16} className="mr-1" />
                            {char.recharge}
                          </Badge>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge className="bg-zombie-orange text-white font-bold">
                          <Icon name="Heart" size={16} className="mr-1" />
                          {char.hp} HP
                        </Badge>
                        {char.speed && (
                          <Badge className="bg-red-600 text-white font-bold">
                            <Icon name="Gauge" size={16} className="mr-1" />
                            {char.speed}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-earth-brown font-['Rubik']">
            Уровни приключений
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {worlds.map((world, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    className={`transition-all duration-300 shadow-lg cursor-pointer ${
                      world.status === "completed"
                        ? "border-plant-green bg-plant-green/5 hover:scale-105"
                        : world.status === "active"
                          ? "border-sun-yellow bg-sun-yellow/5 hover:scale-105"
                          : "border-gray-300 bg-gray-50 opacity-60 hover:opacity-80"
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">{world.emoji}</div>
                      <h4 className="text-xl font-bold mb-2 text-earth-brown">
                        {world.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {world.description}
                      </p>
                      <div className="flex justify-center items-center space-x-2 mb-4">
                        <Badge
                          className={`${
                            world.difficulty === "Легко"
                              ? "bg-plant-green"
                              : world.difficulty === "Средне"
                                ? "bg-sun-yellow text-earth-brown"
                                : world.difficulty === "Сложно"
                                  ? "bg-zombie-orange"
                                  : "bg-red-600"
                          } text-white font-bold`}
                        >
                          {world.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600">
                          <Icon name="List" size={16} className="mr-1" />
                          {world.levels.length} уровней
                        </Badge>
                      </div>
                      {world.status === "completed" && (
                        <div className="flex justify-center items-center text-plant-green font-bold">
                          <Icon name="CheckCircle" size={20} className="mr-1" />
                          Пройден
                        </div>
                      )}
                      {world.status === "active" && (
                        <div className="flex justify-center items-center text-sun-yellow font-bold">
                          <Icon name="Play" size={20} className="mr-1" />
                          Активен
                        </div>
                      )}
                      {world.status === "locked" && (
                        <div className="flex justify-center items-center text-gray-400">
                          <Icon name="Lock" size={20} className="mr-1" />
                          Заблокирован
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-earth-brown flex items-center">
                      <span className="text-3xl mr-3">{world.emoji}</span>
                      {world.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    {/* World Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-3">{world.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          className={`${
                            world.difficulty === "Легко"
                              ? "bg-plant-green"
                              : world.difficulty === "Средне"
                                ? "bg-sun-yellow text-earth-brown"
                                : world.difficulty === "Сложно"
                                  ? "bg-zombie-orange"
                                  : "bg-red-600"
                          } text-white`}
                        >
                          {world.difficulty}
                        </Badge>
                        <Badge variant="outline">
                          {world.levels.length} уровней
                        </Badge>
                      </div>
                    </div>

                    {/* New Plants */}
                    {world.newPlants.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-plant-green mb-3 flex items-center">
                          <Icon name="Leaf" size={20} className="mr-2" />
                          Новые растения ({world.newPlants.length})
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {world.newPlants.map((plant, idx) => (
                            <Badge
                              key={idx}
                              className="bg-plant-green/10 text-plant-green border border-plant-green"
                            >
                              {plant}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* New Zombies */}
                    {world.newZombies.length > 0 && (
                      <div>
                        <h4 className="text-lg font-bold text-zombie-orange mb-3 flex items-center">
                          <Icon name="Skull" size={20} className="mr-2" />
                          Новые зомби ({world.newZombies.length})
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {world.newZombies.map((zombie, idx) => (
                            <Badge
                              key={idx}
                              className="bg-zombie-orange/10 text-zombie-orange border border-zombie-orange"
                            >
                              {zombie}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Levels */}
                    <div>
                      <h4 className="text-lg font-bold text-earth-brown mb-3 flex items-center">
                        <Icon name="Map" size={20} className="mr-2" />
                        Уровни
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {world.levels.map((level, levelIdx) => (
                          <Card
                            key={levelIdx}
                            className={`${
                              level.status === "completed"
                                ? "border-plant-green bg-plant-green/5"
                                : level.status === "active"
                                  ? "border-sun-yellow bg-sun-yellow/5"
                                  : "border-gray-300 bg-gray-50"
                            }`}
                          >
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-bold text-earth-brown">
                                  {level.name}
                                </h5>
                                {level.status === "completed" && (
                                  <Icon
                                    name="CheckCircle"
                                    size={16}
                                    className="text-plant-green"
                                  />
                                )}
                                {level.status === "active" && (
                                  <Icon
                                    name="Play"
                                    size={16}
                                    className="text-sun-yellow"
                                  />
                                )}
                                {level.status === "locked" && (
                                  <Icon
                                    name="Lock"
                                    size={16}
                                    className="text-gray-400"
                                  />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-3">
                                {level.description}
                              </p>

                              {level.plants.length > 0 && (
                                <div className="mb-2">
                                  <span className="text-xs font-semibold text-plant-green">
                                    Новые растения:{" "}
                                  </span>
                                  <span className="text-xs text-gray-600">
                                    {level.plants.join(", ")}
                                  </span>
                                </div>
                              )}

                              <div>
                                <span className="text-xs font-semibold text-zombie-orange">
                                  Зомби:{" "}
                                </span>
                                <span className="text-xs text-gray-600">
                                  {level.zombies.join(", ")}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="bg-zombie-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6 font-['Rubik']">
            Новые моды только у нас! 🚀
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Эксклюзивные моды Plants vs Zombies, секреты прохождения, читы и
            общение с другими игроками в нашем Telegram канале
          </p>
          <Button
            size="lg"
            className="bg-white text-zombie-orange hover:bg-gray-100 font-bold px-12 py-4 text-lg shadow-lg"
            onClick={() => window.open("https://t.me/mod_pvz00", "_blank")}
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Подписаться на канал модов
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-brown text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold font-['Rubik']">
              PLANTS vs ZOMBIES
            </span>
            <span className="text-2xl">🧟‍♂️</span>
          </div>
          <p className="text-sm opacity-75">
            © 2024 Plants vs Zombies Fan Site. Создано с ❤️ для любителей tower
            defense игр
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
