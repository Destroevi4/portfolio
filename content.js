window.PORTFOLIO = {
  "site": {
    "name": "Владислав Сурин",
    "title": "Владислав Сурин — портфолио",
    "description": "Владислав Сурин — игры, архитектура и видео. Автор BRESH, левел-дизайнер города для RCD.",
    "footerLinks": [
      {
        "label": "iwannabetheonewho@gmail.com",
        "url": "mailto:iwannabetheonewho@gmail.com"
      },
      {
        "label": "Telegram",
        "url": "https://t.me/iwannabethe1who"
      }
    ]
  },
  "home": {
    "eyebrow": "Архитектура · Игры · Видео",
    "titleLines": [
      "Проектирую игровые",
      "и городские пространства"
    ],
    "intro": "Разрабатываю собственную игру BRESH, проектирую города и снимаю видео об архитектуре и играх.",
    "about": "Я Владислав Сурин, левел-дизайнер и архитектор. В RCD спроектировал игровой город, в собственной BRESH работаю над геймдизайном, картами и интерфейсом.",
    "aboutSmall": "По образованию — архитектор и режиссёр. Занимаюсь проектированием пространств, разработкой игр и видео: от планировки и эскизов до сборки окружения и монтажа.",
    "video": {
      "src": "assets/home/frontpage.mp4"
    },
    "aboutLinks": [
      {
        "label": "Резюме и опыт работы",
        "url": "#cv"
      },
      {
        "label": "Связаться в Telegram",
        "url": "https://t.me/iwannabethe1who"
      }
    ]
  },
  "categories": [
    {
      "id": "games",
      "label": "Игры"
    },
    {
      "id": "architecture",
      "label": "Архитектура"
    },
    {
      "id": "graphics",
      "label": "Графика"
    },
    {
      "id": "video",
      "label": "Видео"
    }
  ],
  "projects": [
    {
      "id": "bresh",
      "visible": true,
      "title": "BRESH",
      "coverTitle": "BRESH",
      "summary": "Авторская игра. Два мира — одно игровое пространство.",
      "categories": [
        "games"
      ],
      "tag": "UNREAL ENGINE",
      "cover": {
        "src": "assets/bresh/cover.jpg",
        "alt": "",
        "position": "50% 50%",
        "fit": "cover",
        "background": "#252b28",
        "color": "#e8ece3"
      },
      "eyebrow": "Авторская игра",
      "lead": "Тактический мультиплеерный шутер с переключением между двумя мирами.",
      "facts": [
        {
          "label": "Роль",
          "value": "Автор игры, геймдизайн, левел-дизайн и окружение"
        },
        {
          "label": "Движок",
          "value": "Unreal Engine"
        },
        {
          "label": "Платформы",
          "value": "PC · iOS · Android"
        }
      ],
      "blocks": [
        {
          "type": "media-intro",
          "title": "BRESH: мобильный геймплей",
          "media": {
            "type": "video",
            "src": "assets/bresh/mobile.mp4",
            "motion": true,
            "aspectRatio": "960 / 442",
            "label": "Геймплей мобильной версии BRESH",
            "caption": "Мобильная версия · без звука, по кругу."
          },
          "aside": {
            "title": "Мой вклад",
            "paragraphs": [
              "Автор игры: геймдизайн, все карты, сборка окружения, интерфейс и внутриигровые системы.",
              "Развиваю версии для PC, iOS и Android, включая мобильное управление. Кроссплатформенность и общение игроков — важные направления работы."
            ],
            "notes": [
              "Над кодом работаем совместно с другим разработчиком. Модели окружения — сторонние."
            ]
          },
          "id": "bresh-game"
        },
        {
          "type": "gallery",
          "id": "bresh-mobile-screens",
          "columns": 4,
          "images": [
            {
              "src": "assets/bresh/game/StoreReadySC_0.jpg",
              "alt": "BRESH: мобильный игровой экран на открытой местности",
              "width": 2556,
              "height": 1179
            },
            {
              "src": "assets/bresh/game/StoreReadySC_1.jpg",
              "alt": "BRESH: персонажи на мобильном игровом экране",
              "width": 2556,
              "height": 1179
            },
            {
              "src": "assets/bresh/game/StoreReadySC_4.jpg",
              "alt": "BRESH: меню выбора и настройки матча",
              "width": 2556,
              "height": 1179
            },
            {
              "src": "assets/bresh/game/StoreReadySC_5.jpg",
              "alt": "BRESH: вид карты в двух мирах",
              "width": 2556,
              "height": 1179
            }
          ]
        },
        {
          "type": "design-notes",
          "eyebrow": "Геймдизайн",
          "title": "Два мира: бой, информация и маршруты",
          "items": [
            {
              "title": "Тактический выбор",
              "text": "Переключение позволяет обмануть противника, сменить позицию и выбрать другой подход в бою."
            },
            {
              "title": "Понятная ситуация в двух мирах",
              "text": "Недостаток информации в двух реальностях компенсировал звуковыми и визуальными подсказками: они помогают ориентироваться и следить за командой."
            },
            {
              "title": "Маршруты через переключение",
              "text": "Различия в препятствиях открывают обходы и вертикальные маршруты. Карты побуждают использовать переключение и вне боя."
            },
            {
              "title": "Матч при небольшом онлайне",
              "text": "Для малолюдных сессий работал над ботами: передвижением, реакциями на увиденное и выбором момента для смены мира."
            }
          ]
        },
        {
          "type": "collage",
          "title": "Эскизы интерфейса и визуального образа",
          "layout": "bresh-sketches",
          "images": [
            {
              "src": "assets/bresh/game/ui-01.jpg",
              "alt": "Рабочие зарисовки игровых экранов BRESH",
              "caption": "Поиск структуры экранов",
              "width": 2224,
              "height": 1668
            },
            {
              "src": "assets/bresh/game/ui-02.jpg",
              "alt": "Схемы интерфейса экипировки BRESH",
              "caption": "Экипировка и выбор предметов",
              "width": 1920,
              "height": 1080
            },
            {
              "src": "assets/bresh/game/ui-03.jpg",
              "alt": "Зарисовки меню и внутриигрового интерфейса BRESH",
              "caption": "Меню и игровые экраны",
              "width": 2224,
              "height": 1668
            },
            {
              "src": "assets/bresh/game/capsule-01.jpg",
              "alt": "Эскиз вертикальной капсулы BRESH с двумя бойцами",
              "caption": "Вертикальная капсула",
              "width": 1592,
              "height": 2156
            },
            {
              "src": "assets/bresh/game/capsule-02.jpg",
              "alt": "Эскиз горизонтальной капсулы BRESH",
              "caption": "Горизонтальная капсула",
              "width": 2266,
              "height": 1080
            },
            {
              "src": "assets/bresh/game/art-sketch.jpg",
              "alt": "Авторский арт BRESH: город и бойцы в двух мирах",
              "caption": "Поиск образа двух миров",
              "width": 1920,
              "height": 1080
            },
            {
              "src": "assets/bresh/game/logo-sketches.jpg",
              "alt": "Зарисовки вариантов логотипа BRESH",
              "caption": "Поиск знака и логотипа",
              "width": 1301,
              "height": 1860
            }
          ]
        },
        {
          "type": "chapter",
          "eyebrow": "02 / Уровни и игровое пространство",
          "title": "Левел-дизайн: карты для двух миров",
          "text": "Игрок переключается между двумя версиями одной карты. Архитектура и препятствия в них различаются: смена мира открывает другие пути и позволяет пройти участки, недоступные в текущем мире.",
          "id": "bresh-level-design"
        },
        {
          "type": "comparison",
          "title": "Архитектура двух миров",
          "before": "assets/bresh/1-1.jpg",
          "after": "assets/bresh/1.jpg",
          "beforeLabel": "Мир 1",
          "afterLabel": "Мир 2"
        },
        {
          "type": "comparison-group",
          "title": "Одна улица в двух мирах",
          "comparisons": [
            {
              "title": "Одна улица в двух мирах — ракурс 1",
              "before": "assets/bresh/2-1.jpg",
              "after": "assets/bresh/2.jpg",
              "beforeLabel": "Мир 1",
              "afterLabel": "Мир 2"
            },
            {
              "title": "Одна улица в двух мирах — ракурс 2",
              "before": "assets/bresh/3-1.jpg",
              "after": "assets/bresh/3.jpg",
              "beforeLabel": "Мир 1",
              "afterLabel": "Мир 2"
            }
          ]
        },
        {
          "type": "text",
          "title": "Маршруты команд",
          "paragraphs": [
            "На схемах показаны варианты движения двух команд от стартовых позиций. Участки с зигзагами требуют переключения между мирами. Ползунок позволяет сравнить маршруты в двух версиях карты."
          ]
        },
        {
          "type": "comparison",
          "title": "Схемы маршрутов",
          "before": "assets/bresh/scheme2.jpg",
          "after": "assets/bresh/scheme1.jpg",
          "beforeLabel": "Мир 1",
          "afterLabel": "Мир 2",
          "aspectRatio": "4 / 3",
          "legend": [
            {
              "kind": "team-green",
              "label": "Зелёный — первая команда"
            },
            {
              "kind": "team-orange",
              "label": "Оранжевый — вторая команда"
            },
            {
              "kind": "world-change",
              "label": "Зигзаг — путь с переключением миров"
            }
          ],
          "caption": "Передвигай ползунок для сравнения. Схемы также можно открыть на весь экран.",
          "layout": "sidebar"
        },
        {
          "type": "collage",
          "title": "Эскиз и блокаут",
          "images": [
            {
              "src": "assets/bresh/sketch.jpg",
              "alt": "Рабочий эскиз планировки карты BRESH",
              "caption": "Эскиз планировки"
            },
            {
              "src": "assets/bresh/blockout.jpg",
              "alt": "Объёмный блокаут двух версий карты BRESH",
              "caption": "Объёмный блокаут"
            }
          ],
          "caption": "Открой любой материал, чтобы рассмотреть его целиком."
        },
        {
          "type": "comparison-plan",
          "comparison": {
            "title": "Monument: блокаут и концепт",
            "before": "assets/bresh/game/monument1-1.jpg",
            "after": "assets/bresh/game/monument1.jpg",
            "beforeLabel": "Блокаут",
            "afterLabel": "Концепт",
            "aspectRatio": "2556 / 1612"
          },
          "planTitle": "Эскиз планировки",
          "plan": {
            "src": "assets/bresh/game/monument-plan.jpg",
            "alt": "Эскиз планировки карты Monument",
            "caption": "План карты — открыть крупно"
          }
        },
        {
          "type": "comparison-group",
          "title": "Monument: карта в игре",
          "comparisons": [
            {
              "title": "Monument: вид сверху",
              "before": "assets/bresh/8-1.jpg",
              "after": "assets/bresh/8.jpg",
              "beforeLabel": "Мир 1",
              "afterLabel": "Мир 2"
            },
            {
              "title": "Monument: площадь со статуей",
              "before": "assets/bresh/7-1.jpg",
              "after": "assets/bresh/7.jpg",
              "beforeLabel": "Мир 1",
              "afterLabel": "Мир 2"
            }
          ]
        }
      ],
      "links": [
        {
          "label": "Steam",
          "url": "https://store.steampowered.com/app/3930090/BRESH/"
        },
        {
          "label": "App Store",
          "url": "https://apps.apple.com/ru/app/id6739281320"
        },
        {
          "label": "Google Play",
          "url": "https://play.google.com/store/apps/details?id=com.vlsurin.bresh"
        }
      ],
      "logo": {
        "src": "assets/bresh/logo.jpg",
        "alt": "Иконка BRESH"
      },
      "column": "left",
      "columnOrder": 1,
      "hero": {
        "src": "assets/bresh/hero.jpg",
        "alt": "Два мира BRESH: город и бойцы по разные стороны перехода",
        "position": "60% 50%",
        "linksTitle": "Играть в BRESH"
      },
      "navigation": [
        {
          "label": "01 / Об игре",
          "target": "bresh-game"
        },
        {
          "label": "02 / Левел-дизайн",
          "target": "bresh-level-design"
        }
      ]
    },
    {
      "id": "rcd",
      "visible": true,
      "title": "Город для RCD",
      "coverTitle": "RCD",
      "summary": "Город, зимнее состояние и вторая карта для гоночной игры.",
      "categories": [
        "games"
      ],
      "tag": "UNITY",
      "cover": {
        "src": "assets/rcd/cover.jpg",
        "alt": "Общий вид города для RCD",
        "position": "50% 50%",
        "fit": "cover",
        "background": "#e1dfd5",
        "color": "#575e54",
        "aspectRatio": "16 / 9"
      },
      "eyebrow": "Левел-дизайн и окружение",
      "lead": "Город для гоночной игры: планировка, маршруты и окружение. Зимнее состояние и вторая карта, соединённая с городом.",
      "facts": [
        {
          "label": "Роль",
          "value": "Левел-дизайн и сборка окружения"
        },
        {
          "label": "Движок",
          "value": "Unity"
        },
        {
          "label": "Объект работы",
          "value": "Город и связанная с ним вторая карта"
        }
      ],
      "blocks": [
        {
          "type": "media-intro",
          "title": "Город в игре",
          "media": {
            "type": "video",
            "src": "assets/rcd/preview.mp4",
            "motion": true,
            "aspectRatio": "480 / 221",
            "poster": "assets/rcd/RCD_2.jpg",
            "label": "Проезд по городу в RCD",
            "caption": "Запись игрового проезда по городу."
          },
          "aside": {
            "title": "Мой вклад",
            "paragraphs": [
              "Разработал город как игровое пространство: планировку улиц, маршруты, рельеф и систему ориентиров. Собирал окружение в Unity, работал над зимним состоянием и освещением.",
              "Также работал над второй картой с деревней и мостом, которая соединялась с городом."
            ]
          }
        },
        {
          "type": "gallery",
          "columns": 4,
          "images": [
            {
              "src": "assets/rcd/RCD_1.jpg",
              "alt": "Парк и окружающие его кварталы в RCD",
              "caption": "Городская среда: парк и окружающая застройка."
            },
            {
              "src": "assets/rcd/RCD_2.jpg",
              "alt": "Улица с перекрёстком и малоэтажной застройкой в RCD",
              "caption": "Уличная сеть и малоэтажные кварталы."
            },
            {
              "src": "assets/rcd/RCD_3.jpg",
              "alt": "Широкая городская улица с жилыми домами в RCD",
              "caption": "Жилые кварталы и городские магистрали."
            },
            {
              "src": "assets/rcd/greenery.jpg.jpg",
              "alt": "Зелёная городская улица с заправкой, вид сверху",
              "caption": "Озеленение и заправка: вид сверху."
            }
          ]
        },
        {
          "type": "collage",
          "title": "Планировка и рабочие материалы",
          "layout": "compact",
          "images": [
            {
              "src": "assets/rcd/racingPath.jpg",
              "alt": "Рабочая схема городских маршрутов с цветными пометками",
              "caption": "Рабочая схема маршрутов."
            },
            {
              "src": "assets/rcd/above.jpg",
              "alt": "Кварталы города сверху в редакторе Unity",
              "caption": "Планировка кварталов в редакторе Unity."
            },
            {
              "src": "assets/rcd/terrainWork.jpg",
              "alt": "Сетка рельефа и уличная сеть в рабочем проекте",
              "caption": "Рабочий материал: сетка рельефа и уличная сеть."
            },
            {
              "src": "assets/rcd/planningMoscow.jpg",
              "alt": "Рабочая схема расширения карты с сокращённой версией Москвы",
              "caption": "Незавершённое расширение: сокращённая версия Москвы рядом с существующим городом."
            },
            {
              "src": "assets/rcd/delivery.jpg",
              "alt": "Рабочая расстановка точек доставки вдоль городских улиц",
              "caption": "Точки доставки для активности «Работы». В разработке."
            },
            {
              "src": "assets/rcd/signs.jpg",
              "alt": "Набор вариантов дорожных знаков в рабочем проекте",
              "caption": "Дорожные знаки: варианты через UV-смещение. В разработке."
            }
          ],
          "caption": "Нажмите на отдельное изображение, чтобы рассмотреть его крупнее."
        },
        {
          "type": "collage",
          "title": "Зимняя улица и постановочные кадры",
          "layout": "panorama-posters",
          "images": [
            {
              "src": "assets/rcd/winter3.jpg",
              "alt": "Заснеженная улица с малоэтажной застройкой",
              "caption": "Зимнее состояние городской улицы."
            },
            {
              "src": "assets/rcd/winter4.jpg",
              "alt": "Автомобиль на фоне освещённого жилого дома ночью",
              "caption": "Ночное освещение и эмиссия материалов."
            },
            {
              "src": "assets/rcd/poster-green.jpg",
              "alt": "Зелёный автомобиль с включёнными фарами среди деревьев",
              "caption": "Постановочный кадр в игровом окружении."
            }
          ]
        },
        {
          "type": "text",
          "title": "Вторая карта",
          "paragraphs": [
            "Деревня, рельеф и мост — другая часть работы над игровым миром RCD. Вторая карта стыковалась с первой, где расположен город."
          ]
        },
        {
          "type": "image",
          "src": "assets/rcd/bridge(village).jpg",
          "alt": "Дорога и мост на второй карте RCD",
          "caption": "Мост и дорога в ландшафте второй карты."
        },
        {
          "type": "collage",
          "title": "Рельеф и деревня",
          "layout": "pair",
          "images": [
            {
              "src": "assets/rcd/terrainWork(village).jpg",
              "alt": "Рабочий рельеф с серпантином на второй карте",
              "caption": "Рабочий материал: рельеф и трассировка дороги."
            },
            {
              "src": "assets/rcd/village(village).jpg",
              "alt": "Деревня с дорогами в редакторе Unity",
              "caption": "Размещение деревни и связь с дорогой."
            }
          ]
        }
      ],
      "logo": {
        "src": "assets/rcd/logo.jpg",
        "alt": "Иконка RCD"
      },
      "links": [
        {
          "label": "App Store",
          "url": "https://apps.apple.com/us/app/id1457448378?l=ru"
        },
        {
          "label": "Google Play",
          "url": "https://play.google.com/store/apps/details?id=com.carlovers.ladadrift"
        }
      ],
      "column": "right",
      "columnOrder": 1
    },
    {
      "id": "ytchannel",
      "visible": true,
      "title": "Авторский видеоблог",
      "summary": "Личный YouTube-канал: архитектура, города и игры.",
      "categories": [
        "video"
      ],
      "tag": "YOUTUBE",
      "column": "left",
      "columnOrder": 2,
      "cover": {
        "type": "channel",
        "background": "#000",
        "logo": "assets/branding/logo.jpg",
        "youtubeLogo": "assets/ytchannel/YouTube_Logo.png",
        "handle": "@vlSurin"
      },
      "eyebrow": "Личный канал · YouTube",
      "lead": "Архитектура, городская среда и видеоигры: авторские выпуски, разборы и проектные предложения.",
      "linksLabel": "Личный канал",
      "links": [],
      "blocks": [
        {
          "type": "channel-overview",
          "logo": "assets/branding/logo.jpg",
          "youtubeLogo": "assets/ytchannel/YouTube_Logo.png",
          "handle": "@vlSurin",
          "url": "https://www.youtube.com/@vlSurin"
        },
        {
          "type": "youtube-group",
          "eyebrow": "Авторский канал · YouTube",
          "title": "Плейлисты по рубрикам",
          "description": "Архитектура, города и игры — выпуски собраны по темам.",
          "videos": [
            {
              "title": "Тебя никто не спрашивает",
              "playlistId": "PLifYKO6pxu9OMVDRYorzj4m-Z47X2DpIr",
              "kind": "Плейлист"
            },
            {
              "title": "ПРПР — Простое проектирование",
              "playlistId": "PLifYKO6pxu9OopZJ_DG-vdUHy06uVRTd7",
              "kind": "Плейлист"
            },
            {
              "title": "Игры",
              "playlistId": "PLifYKO6pxu9PpS_nHZFHDgtpGjJ0dNXCe",
              "kind": "Плейлист"
            },
            {
              "title": "Образовательное",
              "videoId": "FUUpvbfNqjM",
              "kind": "Отдельный выпуск"
            }
          ]
        },
        {
          "type": "related-projects",
          "title": "Подробнее в портфолио",
          "projects": [
            "prpr",
            "stopgame"
          ]
        }
      ],
      "presentation": "channel"
    },
    {
      "id": "game-concepts",
      "visible": true,
      "title": "Игровые концепты",
      "coverTitle": "Игровые концепты",
      "summary": "Окружение, игровые сцены и персонажи.",
      "categories": [
        "graphics"
      ],
      "tag": "КОНЦЕПТ-АРТ",
      "cover": {
        "src": "assets/graphics/gameConcepts/Russian-RDR-web.jpg",
        "alt": "Концепт русского вестерна с персонажами",
        "position": "50% 50%",
        "fit": "cover",
        "background": "#6b7160",
        "color": "#fff"
      },
      "eyebrow": "Концепт-арт",
      "lead": "Концепты игровых сцен, окружения и персонажей.",
      "blocks": [
        {
          "type": "gallery",
          "images": [
            {
              "src": "assets/graphics/gameConcepts/field.jpg",
              "alt": "Игровая сцена с деревенским домом и дорогой",
              "caption": "Поле"
            },
            {
              "src": "assets/graphics/gameConcepts/winter.jpg",
              "alt": "Зимняя сцена у деревянного дома",
              "caption": "Зимняя сцена",
              "animation": "assets/graphics/gameConcepts/game_concept_snow.mp4"
            }
          ]
        },
        {
          "type": "artwork-group",
          "title": "Russian RDR",
          "main": {
            "src": "assets/graphics/gameConcepts/Russian-RDR-web.jpg",
            "alt": "Персонажи вестерна",
            "caption": "Персонажи вестерна"
          },
          "related": [
            {
              "src": "assets/graphics/gameConcepts/old-men.jpg",
              "alt": "Персонажи",
              "caption": "Персонажи"
            }
          ]
        },
        {
          "type": "gallery",
          "images": [
            {
              "src": "assets/graphics/gameConcepts/Drunk-street.jpg",
              "alt": "Городская улица",
              "caption": "Городская улица"
            },
            {
              "src": "assets/graphics/gameConcepts/burglary.jpg",
              "alt": "Интерьер",
              "caption": "Интерьер"
            },
            {
              "src": "assets/graphics/gameConcepts/central-crime.jpg",
              "alt": "Городская сцена",
              "caption": "Городская сцена"
            },
            {
              "src": "assets/graphics/gameConcepts/deserved-by-new-russian.jpg",
              "alt": "Ночная сцена",
              "caption": "Ночная сцена"
            },
            {
              "src": "assets/graphics/gameConcepts/skatf.jpg",
              "alt": "Уличная сцена",
              "caption": "Уличная сцена"
            }
          ]
        }
      ],
      "column": "right",
      "columnOrder": 2
    },
    {
      "id": "stopgame",
      "visible": true,
      "title": "Архитектура игровых городов",
      "summary": "Авторская рубрика для StopGame — «Где я *****?»",
      "categories": [
        "video",
        "games"
      ],
      "tag": "STOPGAME",
      "column": "right",
      "columnOrder": 3,
      "cover": {
        "src": "assets/stopgame/cover.jpg",
        "alt": "Имперский город из Oblivion",
        "position": "50% 50%",
        "fit": "cover",
        "brandLogo": "assets/stopgame/StopGame_logo.png",
        "brandLogoAlt": "StopGame"
      },
      "eyebrow": "Авторская рубрика · StopGame",
      "lead": "«Где я *****?» — разбираю архитектуру игровых городов, их устройство и связь с реальными местами.",
      "blocks": [
        {
          "type": "brand-overview",
          "logo": "assets/stopgame/StopGame_logo.png",
          "logoAlt": "StopGame",
          "label": "Авторская рубрика на StopGame",
          "title": "Где я *****?"
        },
        {
          "type": "youtube-group",
          "eyebrow": "StopGame · Где я *****?",
          "title": "Выпуски рубрики",
          "description": "От новых к ранним: Oblivion, Forza Horizon 6 и два разбора Лос-Сантоса.",
          "videos": [
            {
              "videoId": "kbN-xusNufY",
              "title": "Самый халтурный город Oblivion",
              "description": "Имперский город в Oblivion выглядит грандиозно, но насколько хорошо он работает как город в игре? Разбираемся, удобно ли по нему передвигаться и ориентироваться, как он используется в геймплее и насколько убедительно выглядит как столица империи."
            },
            {
              "videoId": "Hx9dQV2jzDU",
              "title": "Япония в Forza Horizon 6. Место, где потеряли интересную игру",
              "description": "Разбор карты Forza Horizon 6: как Токио, горные перевалы и сельская Япония работают в открытом мире для гонок — и где особенности этих территорий упростили ради привычной формулы серии. Найдётся ли для следующей части сеттинг с таким же культурным весом?"
            },
            {
              "videoId": "egYjDGyBrQ8",
              "title": "Лос-Сантос в игре и в РЕАЛЬНОСТИ. Разбор локаций GTA: San Andreas",
              "description": "Как улицы стали геймдизайном? Разбор локаций Лос-Сантоса из GTA: San Andreas: почему в San Andreas нельзя переходить дорогу, как устроена карта города и во что Rockstar превратила Лос-Анджелес ради игры."
            },
            {
              "videoId": "w_-TMH1XCt8",
              "title": "Архитектура Лос-Сантоса — образ Лос-Анджелеса в GTA: San Andreas",
              "description": "В этом ролике разбираем, как устроен Лос-Сантос из San Andreas: его зонирование, архитектурные стили и образ города в целом. А заодно пытаемся понять, как сильно на его облик повлияли условности игры, ограничения разработки и сам выбранный сеттинг."
            }
          ]
        }
      ],
      "presentation": "channel"
    },
    {
      "id": "prpr",
      "visible": true,
      "title": "ПРПР — Простое проектирование",
      "coverTitle": "ПРПР",
      "summary": "Проекты улиц и площадей для авторского видеоблога.",
      "categories": [
        "architecture",
        "video"
      ],
      "tag": "СЕРИЯ",
      "cover": {
        "src": "assets/prpr/kos/square/plan-after2.jpg",
        "alt": "Второй вариант планировки площади в Костроме",
        "aspectRatio": "16 / 9",
        "fit": "cover",
        "position": "50% 50%"
      },
      "eyebrow": "Архитектура и видеоблог",
      "lead": "Проектные предложения по преобразованию улиц и площадей. Серия «Простое проектирование» для авторского видеоблога.",
      "blocks": [
        {
          "type": "project-list",
          "title": "Проекты серии",
          "projects": [
            "prpr-dzr",
            "prpr-kos",
            "prpr-gav",
            "prpr-bau",
            "prpr-bez"
          ]
        }
      ],
      "column": "left",
      "columnOrder": 3,
      "linksLabel": "Рубрика ПРПР на YouTube",
      "links": [
        {
          "label": "Смотреть плейлист ПРПР на YouTube",
          "url": "https://www.youtube.com/playlist?list=PLifYKO6pxu9OopZJ_DG-vdUHy06uVRTd7"
        }
      ]
    },
    {
      "id": "illustrations",
      "visible": true,
      "title": "Иллюстрации",
      "coverTitle": "Иллюстрации",
      "summary": "Сюжетные иллюстрации и архитектурная графика.",
      "categories": [
        "graphics"
      ],
      "tag": "ГРАФИКА",
      "cover": {
        "src": "assets/graphics/different/EndOfTheDay.jpg",
        "alt": "Иллюстрация «В конце дня»",
        "position": "50% 50%",
        "fit": "contain",
        "background": "#cbc6be",
        "color": "#232624",
        "aspectRatio": "1 / 1"
      },
      "eyebrow": "Иллюстрации и графика",
      "lead": "Подборка сюжетных иллюстраций и рисунков архитектуры.",
      "blocks": [
        {
          "type": "gallery",
          "images": [
            {
              "src": "assets/graphics/different/Народные_Гуляния_web.jpg",
              "alt": "Народные гуляния",
              "caption": "Народные гуляния"
            },
            {
              "src": "assets/graphics/different/EndOfTheDay.jpg",
              "alt": "В конце дня",
              "caption": "В конце дня"
            },
            {
              "src": "assets/graphics/different/Rozhicy.jpg",
              "alt": "Рожицы",
              "caption": "Рожицы"
            },
            {
              "src": "assets/graphics/different/Townhouses.jpg",
              "alt": "Блокированные дома",
              "caption": "Блокированные дома",
              "span": 2
            }
          ],
          "columns": 3
        }
      ],
      "column": "right",
      "columnOrder": 4
    },
    {
      "id": "roundabout",
      "visible": true,
      "title": "Площадь в Ноябрьске",
      "coverTitle": "Ноябрьск",
      "summary": "Переустройство городской площади и кольцевого пересечения.",
      "categories": [
        "architecture"
      ],
      "tag": "РЕАЛИЗОВАНО",
      "cover": {
        "src": "assets/roundabout/cover.jpg",
        "alt": "Реализованное кольцевое пересечение и пешеходные пространства в Ноябрьске",
        "position": "50% 50%",
        "fit": "cover",
        "background": "#777b6a",
        "color": "#fff"
      },
      "eyebrow": "Городская среда и транспорт",
      "lead": "Преобразование площади и транспортного узла в центре города.",
      "facts": [
        {
          "label": "Место",
          "value": "Ноябрьск, Ямало-Ненецкий автономный округ"
        },
        {
          "label": "Статус",
          "value": "Реализован"
        },
        {
          "label": "Направление",
          "value": "Городская среда и организация движения"
        }
      ],
      "blocks": [
        {
          "type": "video-feature",
          "title": "Реализация",
          "src": "assets/roundabout/Video-by-Alexey-Melnov-1_4.mp4",
          "poster": "assets/roundabout/cover.jpg",
          "motion": true,
          "caption": "Видео — Alexey Melnov."
        },
        {
          "type": "comparison",
          "title": "До и после переустройства",
          "before": "assets/roundabout/8.jpg",
          "after": "assets/roundabout/8-1.jpg",
          "beforeLabel": "До",
          "afterLabel": "После",
          "caption": "Сопоставление территории до и после реализации. Подоснова — Google Карты. Сравнение можно открыть на весь экран."
        },
        {
          "type": "text",
          "title": "Задача",
          "paragraphs": [
            "Преобразовать большое асфальтовое пространство в центре города в удобную пешеходную площадь, упорядочить движение и создать условия для снижения скорости транспорта."
          ]
        },
        {
          "type": "text",
          "title": "Основа решений",
          "paragraphs": [
            "Проектные решения разрабатывались на основе подсчётов пешеходных и транспортных потоков и анализа тепловых карт. Учитывались маршруты автобусов и траектории снегоуборочной техники, а также действующие общие и местные нормы."
          ]
        },
        {
          "type": "media-row",
          "title": "Схема и эскизные решения",
          "items": [
            {
              "type": "image",
              "src": "assets/roundabout/7.jpg",
              "alt": "Проектная схема площади и кольцевого пересечения с авторскими эскизными правками",
              "caption": "Проектная схема с моими эскизными правками."
            },
            {
              "type": "video",
              "src": "assets/roundabout/Noyabrsk_Sketches.mp4",
              "poster": "assets/roundabout/7.jpg",
              "motion": true,
              "label": "Эскизные проектные решения",
              "caption": "Эскизные проектные решения · анимация"
            }
          ],
          "layout": "sketch-pair"
        },
        {
          "type": "gallery",
          "title": "На уровне пешехода",
          "images": [
            {
              "src": "assets/roundabout/2026-10-26 16.45.12.jpg",
              "alt": "Пешеходные пространства и велосипедист у площади в Ноябрьске",
              "caption": "Пешеходные пространства площади"
            },
            {
              "src": "assets/roundabout/2026-10-26 16.45.26.jpg",
              "alt": "Тротуар и велодорожка вдоль улицы после переустройства",
              "caption": "Тротуар и велодорожка"
            }
          ]
        }
      ],
      "column": "left",
      "columnOrder": 4
    },
    {
      "id": "krd",
      "visible": true,
      "title": "Район в Краснодаре",
      "coverTitle": "Краснодар",
      "summary": "Градостроительная концепция: кварталы, зелёные пространства и транспорт.",
      "categories": [
        "architecture"
      ],
      "tag": "КОНЦЕПЦИЯ",
      "cover": {
        "src": "assets/krd/cover.jpg",
        "alt": "Эскиз парка и предлагаемой застройки в Краснодаре",
        "position": "50% 50%",
        "fit": "cover",
        "background": "#bfc5b7",
        "color": "#232624"
      },
      "eyebrow": "Градостроительная концепция",
      "lead": "Альтернативное предложение по развитию района: от планировочной структуры до образа городской среды.",
      "facts": [
        {
          "label": "Место",
          "value": "Краснодар"
        },
        {
          "label": "Стадия",
          "value": "Концепция"
        },
        {
          "label": "Моя работа",
          "value": "Градостроительные схемы, эскизы и презентация"
        }
      ],
      "blocks": [
        {
          "type": "text",
          "title": "Задача",
          "paragraphs": [
            "Разработать альтернативу планировавшемуся варианту развития района. Предложение объединяет квартальную застройку, парк и бульвар, транспортные связи и постепенное изменение этажности."
          ]
        },
        {
          "type": "video-grid",
          "title": "Общий вид и планировка",
          "videos": [
            {
              "src": "assets/krd/2-3-4_web_4.mp4",
              "poster": "assets/krd/posters/2-3-4_web_4.jpg",
              "caption": "Предлагаемая застройка в окружении города",
              "muted": true,
              "loop": true,
              "preload": "none",
              "motion": true
            },
            {
              "src": "assets/krd/0-0_1.mp4",
              "poster": "assets/krd/posters/0-0_1.jpg",
              "caption": "Переход к предлагаемой планировке",
              "muted": true,
              "loop": true,
              "preload": "none",
              "motion": true
            }
          ]
        },
        {
          "type": "scheme-tabs",
          "title": "Устройство района",
          "views": [
            {
              "label": "Застройка",
              "src": "assets/krd/plan.jpg",
              "alt": "Схема квартальной застройки с парком и бульваром",
              "description": "Квартальная структура района с протяжённым бульваром и крупным парком. На схеме показаны контуры предлагаемой застройки и зелёные пространства."
            },
            {
              "label": "Этажность",
              "src": "assets/krd/heights.jpg",
              "alt": "Схема распределения этажности застройки района",
              "description": "Постепенный переход от высотной застройки к малоэтажной и частной. Цветом обозначены диапазоны этажности: 2–3, 3–5, 5–12 и более 12 этажей."
            },
            {
              "label": "Общественный транспорт",
              "src": "assets/krd/transport.jpg",
              "alt": "Схема двух маршрутов общественного транспорта и пешеходных пространств",
              "description": "Предложены внешний и внутрирайонный маршруты общественного транспорта. Бирюзовым отмечены пешеходные пространства и навесы."
            }
          ]
        },
        {
          "type": "gallery",
          "title": "Эскизы городской среды",
          "columns": 3,
          "images": [
            {
              "src": "assets/krd/3-5_web.jpg",
              "alt": "Эскиз улицы с аркадами",
              "caption": "Улица и аркады"
            },
            {
              "src": "assets/krd/3-6_web.jpg",
              "alt": "Эскиз площади с кафе и пешеходным проходом",
              "caption": "Площадь и пешеходный проход"
            },
            {
              "src": "assets/krd/3-7_web.jpg",
              "alt": "Эскиз пешеходной улицы с навесами",
              "caption": "Пешеходная улица и навесы"
            }
          ]
        },
        {
          "type": "video-grid",
          "title": "Предложение в существующем окружении",
          "videos": [
            {
              "src": "assets/krd/3-3_web.mp4",
              "poster": "assets/krd/posters/3-3_web.jpg",
              "caption": "Бульвар и застройка вдоль него",
              "muted": true,
              "loop": true,
              "preload": "none",
              "motion": true
            },
            {
              "src": "assets/krd/3-4_web.mp4",
              "poster": "assets/krd/posters/3-4_web.jpg",
              "caption": "Парк и окружающие кварталы",
              "muted": true,
              "loop": true,
              "preload": "none",
              "motion": true
            },
            {
              "src": "assets/krd/5-2_web.mp4",
              "poster": "assets/krd/posters/5-2_web.jpg",
              "caption": "Новая застройка рядом с частным сектором",
              "muted": true,
              "loop": true,
              "preload": "none",
              "motion": true
            },
            {
              "src": "assets/krd/5-3_web.mp4",
              "poster": "assets/krd/posters/5-3_web.jpg",
              "caption": "Соседство с существующими домами",
              "muted": true,
              "loop": true,
              "preload": "none",
              "motion": true
            }
          ]
        }
      ],
      "column": "right",
      "columnOrder": 5
    }
  ],
  "caseStudies": [
    {
      "id": "prpr-dzr",
      "parent": "prpr",
      "visible": true,
      "title": "Улица в Дзержинском",
      "summary": "Проект улицы в Дзержинском, Московская область.",
      "categories": [
        "architecture",
        "video"
      ],
      "cover": {
        "src": "assets/prpr/dzr/01-after.jpg",
        "alt": "Улица в Дзержинском — проект",
        "aspectRatio": "16 / 9",
        "fit": "cover",
        "position": "50% 50%"
      },
      "eyebrow": "Проект улицы",
      "lead": "Предложение по преобразованию улицы в городе Дзержинском Московской области, подготовленное для авторского видеоблога.",
      "blocks": [
        {
          "type": "street-plan",
          "title": "План улицы",
          "before": "assets/prpr/dzr/plan-before.jpg",
          "after": "assets/prpr/dzr/plan-after.jpg",
          "beforeLabel": "До",
          "afterLabel": "Проект"
        },
        {
          "type": "comparison-group",
          "title": "Основные виды",
          "comparisons": [
            {
              "title": "Ракурс 1",
              "before": "assets/prpr/dzr/01-before.jpg",
              "after": "assets/prpr/dzr/01-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1919 / 1079"
            },
            {
              "title": "Ракурс 2",
              "before": "assets/prpr/dzr/02-before.jpg",
              "after": "assets/prpr/dzr/02-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "comparison-cards",
          "title": "Другие ракурсы",
          "comparisons": [
            {
              "title": "Ракурс 3",
              "before": "assets/prpr/dzr/03-before.jpg",
              "after": "assets/prpr/dzr/03-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 4",
              "before": "assets/prpr/dzr/04-before.jpg",
              "after": "assets/prpr/dzr/04-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1919 / 1079"
            }
          ]
        },
        {
          "type": "youtube",
          "title": "Выпуск блога",
          "videoId": "Iu5oW3HtoOU",
          "poster": "assets/prpr/dzr/01-after.jpg"
        }
      ]
    },
    {
      "id": "prpr-kos",
      "parent": "prpr",
      "visible": true,
      "title": "Площадь и улица в Костроме",
      "summary": "Два варианта площади и проект примыкающей улицы.",
      "categories": [
        "architecture",
        "video"
      ],
      "cover": {
        "src": "assets/prpr/kos/square/01-after.jpg",
        "alt": "Площадь и улица в Костроме — проект",
        "aspectRatio": "16 / 9",
        "fit": "cover",
        "position": "50% 50%"
      },
      "eyebrow": "Площадь и улица",
      "lead": "Проектные предложения для площади в Костроме и примыкающей к ней улицы.",
      "blocks": [
        {
          "type": "text",
          "title": "Площадь",
          "paragraphs": [
            "Два варианта проектного предложения для площади. Для каждого можно сравнить существующее состояние и проект."
          ]
        },
        {
          "type": "plan-group",
          "title": "Варианты планировки площади",
          "plans": [
            {
              "type": "street-plan",
              "title": "Площадь — вариант 1",
              "before": "assets/prpr/kos/square/plan-before.jpg",
              "after": "assets/prpr/kos/square/plan-after1.jpg",
              "beforeLabel": "До",
              "afterLabel": "Вариант 1"
            },
            {
              "type": "street-plan",
              "title": "Площадь — вариант 2",
              "before": "assets/prpr/kos/square/plan-before.jpg",
              "after": "assets/prpr/kos/square/plan-after2.jpg",
              "beforeLabel": "До",
              "afterLabel": "Вариант 2"
            }
          ]
        },
        {
          "type": "comparison-group",
          "title": "Виды площади",
          "comparisons": [
            {
              "title": "Ракурс 1",
              "before": "assets/prpr/kos/square/01-before.jpg",
              "after": "assets/prpr/kos/square/01-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 2",
              "before": "assets/prpr/kos/square/02-before.jpg",
              "after": "assets/prpr/kos/square/02-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "comparison-cards",
          "title": "Другие ракурсы",
          "comparisons": [
            {
              "title": "Ракурс 3",
              "before": "assets/prpr/kos/square/03-before.jpg",
              "after": "assets/prpr/kos/square/03-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 4",
              "before": "assets/prpr/kos/square/04-before.jpg",
              "after": "assets/prpr/kos/square/04-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 5",
              "before": "assets/prpr/kos/square/05-before.jpg",
              "after": "assets/prpr/kos/square/05-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 6",
              "before": "assets/prpr/kos/square/06-before.jpg",
              "after": "assets/prpr/kos/square/06-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "text",
          "title": "Примыкающая улица",
          "paragraphs": [
            "Отдельное проектное предложение для улицы рядом с площадью."
          ]
        },
        {
          "type": "street-plan",
          "title": "План улицы",
          "before": "assets/prpr/kos/street/plan-before.jpg",
          "after": "assets/prpr/kos/street/plan-after.jpg",
          "beforeLabel": "До",
          "afterLabel": "Проект"
        },
        {
          "type": "comparison-group",
          "title": "Виды улицы",
          "comparisons": [
            {
              "title": "Ракурс 1",
              "before": "assets/prpr/kos/street/01-before.jpg",
              "after": "assets/prpr/kos/street/01-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 2",
              "before": "assets/prpr/kos/street/02-before.jpg",
              "after": "assets/prpr/kos/street/02-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "comparison-cards",
          "title": "Другие ракурсы",
          "comparisons": [
            {
              "title": "Ракурс 3",
              "before": "assets/prpr/kos/street/03-before.jpg",
              "after": "assets/prpr/kos/street/03-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "youtube-group",
          "title": "Выпуски блога",
          "videos": [
            {
              "type": "youtube",
              "title": "Площадь в Костроме",
              "videoId": "gWOd14WgvCE",
              "poster": "assets/prpr/kos/square/01-after.jpg"
            },
            {
              "type": "youtube",
              "title": "Улица в Костроме",
              "videoId": "99AdST3FsV0",
              "poster": "assets/prpr/kos/street/01-after.jpg"
            }
          ]
        }
      ]
    },
    {
      "id": "prpr-gav",
      "parent": "prpr",
      "visible": true,
      "title": "Улица Гаврилова",
      "summary": "Проект преобразования улицы в Краснодаре.",
      "categories": [
        "architecture",
        "video"
      ],
      "cover": {
        "src": "assets/prpr/gav/01-after.jpg",
        "alt": "Улица Гаврилова — проект",
        "aspectRatio": "16 / 9",
        "fit": "cover",
        "position": "50% 50%"
      },
      "eyebrow": "Проект улицы",
      "lead": "Проектное предложение для улицы Гаврилова в Краснодаре, подготовленное для авторского видеоблога.",
      "blocks": [
        {
          "type": "street-plan",
          "title": "План улицы",
          "before": "assets/prpr/gav/plan-before.jpg",
          "after": "assets/prpr/gav/plan-after.jpg",
          "beforeLabel": "До",
          "afterLabel": "Проект"
        },
        {
          "type": "comparison-group",
          "title": "Основные виды",
          "comparisons": [
            {
              "title": "Ракурс 1",
              "before": "assets/prpr/gav/01-before.jpg",
              "after": "assets/prpr/gav/01-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 2",
              "before": "assets/prpr/gav/02-before.jpg",
              "after": "assets/prpr/gav/02-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "comparison-cards",
          "title": "Другие ракурсы",
          "comparisons": [
            {
              "title": "Ракурс 3",
              "before": "assets/prpr/gav/03-before.jpg",
              "after": "assets/prpr/gav/03-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "youtube",
          "title": "Выпуск блога",
          "videoId": "WprqRP6m0y0",
          "poster": "assets/prpr/gav/01-after.jpg"
        }
      ]
    },
    {
      "id": "prpr-bau",
      "parent": "prpr",
      "visible": true,
      "title": "БАУ — проект улицы",
      "summary": "План и проектные виды улицы.",
      "categories": [
        "architecture",
        "video"
      ],
      "cover": {
        "src": "assets/prpr/bau/01-after.jpg",
        "alt": "БАУ — проект улицы — проект",
        "aspectRatio": "16 / 9",
        "fit": "cover",
        "position": "50% 50%"
      },
      "eyebrow": "Проект улицы",
      "lead": "Предложение по преобразованию уличного пространства, подготовленное для авторского видеоблога.",
      "blocks": [
        {
          "type": "street-plan",
          "title": "План улицы",
          "before": "assets/prpr/bau/plan-before.jpg",
          "after": "assets/prpr/bau/plan-after.jpg",
          "beforeLabel": "До",
          "afterLabel": "Проект"
        },
        {
          "type": "comparison-group",
          "title": "Основные виды",
          "comparisons": [
            {
              "title": "Ракурс 1",
              "before": "assets/prpr/bau/01-before.jpg",
              "after": "assets/prpr/bau/01-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 2",
              "before": "assets/prpr/bau/02-before.jpg",
              "after": "assets/prpr/bau/02-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "comparison-cards",
          "title": "Другие ракурсы",
          "comparisons": [
            {
              "title": "Ракурс 3",
              "before": "assets/prpr/bau/03-before.jpg",
              "after": "assets/prpr/bau/03-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 4",
              "before": "assets/prpr/bau/04-before.jpg",
              "after": "assets/prpr/bau/04-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "youtube",
          "title": "Выпуск блога",
          "videoId": "duZLHTXF6dQ",
          "poster": "assets/prpr/bau/01-after.jpg"
        }
      ]
    },
    {
      "id": "prpr-bez",
      "parent": "prpr",
      "visible": true,
      "title": "Улица в Дубне",
      "summary": "Проект преобразования улицы в Дубне.",
      "categories": [
        "architecture",
        "video"
      ],
      "cover": {
        "src": "assets/prpr/bez/01-after.jpg",
        "alt": "Улица в Дубне — проект",
        "aspectRatio": "16 / 9",
        "fit": "cover",
        "position": "50% 50%"
      },
      "eyebrow": "Проект улицы",
      "lead": "Проектное предложение для улицы в Дубне, подготовленное для авторского видеоблога.",
      "blocks": [
        {
          "type": "street-plan",
          "title": "План улицы",
          "before": "assets/prpr/bez/plan-before.jpg",
          "after": "assets/prpr/bez/plan-after.jpg",
          "beforeLabel": "До",
          "afterLabel": "Проект"
        },
        {
          "type": "comparison-group",
          "title": "Основные виды",
          "comparisons": [
            {
              "title": "Ракурс 1",
              "before": "assets/prpr/bez/01-before.jpg",
              "after": "assets/prpr/bez/01-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 2",
              "before": "assets/prpr/bez/02-before.jpg",
              "after": "assets/prpr/bez/02-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "comparison-cards",
          "title": "Другие ракурсы",
          "comparisons": [
            {
              "title": "Ракурс 3",
              "before": "assets/prpr/bez/03-before.jpg",
              "after": "assets/prpr/bez/03-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 4",
              "before": "assets/prpr/bez/04-before.jpg",
              "after": "assets/prpr/bez/04-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 5",
              "before": "assets/prpr/bez/05-before.jpg",
              "after": "assets/prpr/bez/05-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            },
            {
              "title": "Ракурс 6",
              "before": "assets/prpr/bez/06-before.jpg",
              "after": "assets/prpr/bez/06-after.jpg",
              "beforeLabel": "До",
              "afterLabel": "Проект",
              "aspectRatio": "1920 / 1080"
            }
          ]
        },
        {
          "type": "youtube",
          "title": "Выпуск блога",
          "videoId": "7PMtWXX83yU",
          "poster": "assets/prpr/bez/01-after.jpg"
        }
      ]
    }
  ],
  "resume": {
    "default": "games",
    "defaultLanguage": "ru",
    "contact": {
      "name": "Владислав Сурин",
      "city": "Москва",
      "email": "iwannabetheonewho@gmail.com",
      "telegram": "@iwannabethe1who",
      "portfolio": "https://destroevi4.github.io/portfolio/",
      "photo": "assets/about/photo.jpg"
    },
    "versions": [
      {
        "id": "games",
        "label": "Игровое",
        "title": "Левел-дизайнер",
        "pdf": "assets/cv/Vladislav-Surin-Level-Designer.pdf",
        "summary": "Проектирую игровые города и карты. Работал над городом для Russian Car Drift в Unity; разрабатываю собственный сетевой шутер BRESH в Unreal Engine. В левел-дизайне использую опыт архитектурного и транспортного проектирования.",
        "sections": [
          {
            "key": "skills",
            "title": "Навыки и инструменты",
            "groups": [
              {
                "label": "Левел-дизайн",
                "text": "Проектирование игровых городов и карт, блокинг, маршруты и навигация, масштаб и линии видимости, сборка окружения."
              },
              {
                "label": "Движки",
                "text": "Unreal Engine, Blueprints, UMG; Unity."
              },
              {
                "label": "3D и архитектура",
                "text": "Rhino 3D, Grasshopper, Revit."
              },
              {
                "label": "Графика и видео",
                "text": "Photoshop, Illustrator, Figma, Premiere Pro, After Effects."
              }
            ]
          },
          {
            "key": "experience",
            "title": "Игровой опыт",
            "items": [
              {
                "title": "BRESH",
                "date": "Весна 2023 — настоящее время",
                "role": "Автор игры · геймдизайнер и левел-дизайнер · переменная занятость",
                "bullets": [
                  "Спроектировал все карты сетевого шутера: маршруты, стартовые позиции, обходы и вертикальные связи с учётом переключения между двумя мирами.",
                  "Работаю над геймплейными механиками, поведением ботов и визуальными и звуковыми подсказками для игроков.",
                  "Собираю окружение из готовых моделей, разрабатываю интерфейсы в UMG и Blueprints. Работаю над версиями для PC, iOS и Android совместно с другим разработчиком."
                ],
                "url": "#bresh"
              },
              {
                "title": "Russian Car Drift (RCD)",
                "date": "Сентябрь 2023 — апрель 2024",
                "role": "Левел-дизайнер · Unity",
                "bullets": [
                  "Спроектировал и собрал игровой город: кварталы, дорожную сеть, дворы, рельеф и систему ориентиров.",
                  "Подбирал масштаб улиц и геометрию поворотов, проверял маршруты при вождении и дрифте. Использовал Grasshopper для создания рельефа.",
                  "Работал над зимним окружением, освещением и второй картой с деревней и мостом, соединённой с городом."
                ],
                "url": "#rcd"
              }
            ]
          },
          {
            "key": "other",
            "title": "Архитектура и медиа",
            "items": [
              {
                "title": "StopGame",
                "date": "Март 2025 — настоящее время",
                "role": "Автор видео",
                "bullets": [
                  "Готовлю видео об архитектуре игровых городов: анализ планировки, навигации, реальных прототипов и связи пространства с игровыми задачами."
                ],
                "url": "#stopgame",
                "compact": true
              },
              {
                "title": "Видеопрезентации транспортных решений",
                "date": "2023",
                "role": "Режиссура, монтаж и визуальные эффекты",
                "bullets": [
                  "Алматы и Ташкент: структура, раскадровка, режиссура, монтаж и эффекты для презентации транспортных решений. В Алматы также выполнял съёмку."
                ],
                "compact": true
              },
              {
                "title": "Независимые архитектурные проекты",
                "date": "2018 — 2023",
                "role": "Архитектор · транспортное планирование",
                "bullets": [
                  "Проектировал улицы и площади, пешеходные и транспортные связи; готовил схемы, эскизы и визуализации.",
                  "Работал над площадью в Ноябрьске, концепцией района в Краснодаре и серией предложений для улиц и площадей ПРПР. Консультировал по проектам в Ноябрьске и Благовещенске (Башкортостан)."
                ],
                "url": "#prpr",
                "compact": true
              },
              {
                "title": "Студия Транспортного Проектирования (STEP)",
                "date": "2017 — 2020",
                "role": "Архитектор",
                "bullets": [
                  "Анализ городской среды, транспортные схемы, 3D-моделирование и визуализация; аэрофотосъёмка и параметрическое моделирование в Grasshopper."
                ],
                "compact": true
              },
              {
                "title": "Мастерская Лозинский и партнёры",
                "date": "2015 — 2017",
                "role": "Архитектор",
                "bullets": [
                  "Концептуальное проектирование, рабочая документация и 3D-визуализация."
                ],
                "compact": true
              },
              {
                "title": "АСК «Доминанте»",
                "date": "2014 — 2015",
                "role": "Техник-архитектор",
                "bullets": [
                  "BIM-проектирование и рабочая документация."
                ],
                "compact": true
              }
            ],
            "pageBreakBefore": true
          },
          {
            "key": "education",
            "title": "Образование",
            "items": [
              {
                "title": "Московская школа кино",
                "date": "2017 — 2022",
                "role": "Filmmaking · режиссура короткой формы",
                "bullets": [],
                "compact": true
              },
              {
                "title": "МАрхИ",
                "date": "2011 — 2016",
                "role": "Бакалавр архитектуры",
                "bullets": [],
                "compact": true
              }
            ]
          },
          {
            "key": "language",
            "title": "Английский",
            "paragraphs": [
              "Чтение документации и рабочая переписка; разговорный — средний."
            ]
          }
        ]
      },
      {
        "id": "architecture",
        "label": "Архитектурное",
        "title": "Архитектор · транспортное планирование",
        "pdf": "assets/cv/Vladislav-Surin-Architect.pdf",
        "summary": "Проектирую улицы, площади и городские пространства: планировку, транспортные и пешеходные связи. Готовлю схемы, эскизы и визуализации. Есть опыт создания игровых городов и видеопрезентаций транспортных проектов.",
        "sections": [
          {
            "key": "skills",
            "title": "Навыки и инструменты",
            "groups": [
              {
                "label": "Проектирование",
                "text": "Улицы и площади, транспортные и пешеходные связи, анализ городской среды, концептуальное проектирование, документация и визуализация."
              },
              {
                "label": "3D и BIM",
                "text": "Rhino 3D, Grasshopper, Revit."
              },
              {
                "label": "Движки",
                "text": "Unity, Unreal Engine; Blueprints и UMG."
              },
              {
                "label": "Графика и видео",
                "text": "Photoshop, Illustrator, Figma, Premiere Pro, After Effects."
              }
            ]
          },
          {
            "key": "experience",
            "title": "Архитектурный опыт",
            "items": [
              {
                "title": "Независимые архитектурные проекты",
                "date": "2018 — 2023",
                "role": "Архитектор · транспортное планирование",
                "bullets": [
                  "Проектировал улицы и площади, пешеходные и транспортные связи; готовил схемы, эскизы и визуализации.",
                  "Работал над площадью в Ноябрьске, концепцией района в Краснодаре и серией предложений для улиц и площадей ПРПР. Консультировал по проектам в Ноябрьске и Благовещенске (Башкортостан)."
                ],
                "url": "#prpr",
                "compact": true
              },
              {
                "title": "Студия Транспортного Проектирования (STEP)",
                "date": "2017 — 2020",
                "role": "Архитектор",
                "bullets": [
                  "Анализ городской среды, транспортные схемы, 3D-моделирование и визуализация; аэрофотосъёмка и параметрическое моделирование в Grasshopper."
                ],
                "compact": true
              },
              {
                "title": "Мастерская Лозинский и партнёры",
                "date": "2015 — 2017",
                "role": "Архитектор",
                "bullets": [
                  "Концептуальное проектирование, рабочая документация и 3D-визуализация."
                ],
                "compact": true
              },
              {
                "title": "АСК «Доминанте»",
                "date": "2014 — 2015",
                "role": "Техник-архитектор",
                "bullets": [
                  "BIM-проектирование и рабочая документация."
                ],
                "compact": true
              }
            ]
          },
          {
            "key": "other",
            "title": "Игры и видеопроекты",
            "items": [
              {
                "title": "StopGame",
                "date": "Март 2025 — настоящее время",
                "role": "Автор видео",
                "bullets": [
                  "Готовлю видео об архитектуре игровых городов: анализ планировки, навигации, реальных прототипов и связи пространства с игровыми задачами."
                ],
                "url": "#stopgame",
                "compact": true
              },
              {
                "title": "BRESH",
                "date": "Весна 2023 — настоящее время",
                "role": "Автор игры · геймдизайнер и левел-дизайнер · переменная занятость",
                "bullets": [
                  "Спроектировал все карты сетевого шутера: маршруты, стартовые позиции, обходы и вертикальные связи с учётом переключения между двумя мирами."
                ],
                "url": "#bresh",
                "compact": true
              },
              {
                "title": "Russian Car Drift (RCD)",
                "date": "Сентябрь 2023 — апрель 2024",
                "role": "Левел-дизайнер · Unity",
                "bullets": [
                  "Спроектировал и собрал игровой город: кварталы, дорожную сеть, дворы, рельеф и систему ориентиров."
                ],
                "url": "#rcd",
                "compact": true
              },
              {
                "title": "Видеопрезентации транспортных решений",
                "date": "2023",
                "role": "Режиссура, монтаж и визуальные эффекты",
                "bullets": [
                  "Алматы: презентационный ролик за три недели, включая командировку и собственную съёмку. Ташкент: удалённая работа с 27 октября по 3 декабря, съёмка отдельным оператором.",
                  "Структура, раскадровка, монтаж и эффекты при небольшом бюджете. Отвечал за видеоподачу материалов проектной команды."
                ],
                "compact": true
              }
            ],
            "pageBreakBefore": true
          },
          {
            "key": "education",
            "title": "Образование",
            "items": [
              {
                "title": "Московская школа кино",
                "date": "2017 — 2022",
                "role": "Filmmaking · режиссура короткой формы",
                "bullets": [],
                "compact": true
              },
              {
                "title": "МАрхИ",
                "date": "2011 — 2016",
                "role": "Бакалавр архитектуры",
                "bullets": [],
                "compact": true
              }
            ]
          },
          {
            "key": "language",
            "title": "Английский",
            "paragraphs": [
              "Чтение документации и рабочая переписка; разговорный — средний."
            ]
          }
        ]
      }
    ],
    "translations": {
      "en": {
        "contact": {
          "name": "Vladislav Surin",
          "city": "Moscow",
          "email": "iwannabetheonewho@gmail.com",
          "telegram": "@iwannabethe1who",
          "portfolio": "https://destroevi4.github.io/portfolio/",
          "photo": "assets/about/photo.jpg"
        },
        "versions": [
          {
            "id": "games",
            "label": "Level Design",
            "title": "Level Designer",
            "pdf": "assets/cv/Vladislav-Surin-Level-Designer-EN.pdf",
            "summary": "I design playable cities and maps. I worked on the city for Russian Car Drift in Unity and develop BRESH, my own multiplayer FPS, in Unreal Engine. My level-design approach draws on experience in architecture and transport planning.",
            "sections": [
              {
                "key": "skills",
                "title": "Skills & tools",
                "groups": [
                  {
                    "label": "Level design",
                    "text": "Design of playable cities and maps, blockouts, routes and navigation, scale and sightlines, environment assembly."
                  },
                  {
                    "label": "Engines",
                    "text": "Unreal Engine, Blueprints, UMG; Unity."
                  },
                  {
                    "label": "3D & architecture",
                    "text": "Rhino 3D, Grasshopper, Revit."
                  },
                  {
                    "label": "Graphics & video",
                    "text": "Photoshop, Illustrator, Figma, Premiere Pro, After Effects."
                  }
                ]
              },
              {
                "key": "experience",
                "title": "Game development experience",
                "items": [
                  {
                    "title": "BRESH",
                    "date": "Spring 2023 — present",
                    "role": "Game creator · Game & Level Designer · independent project",
                    "bullets": [
                      "Designed all maps for a multiplayer FPS: routes, spawn positions, flanking paths and vertical connections built around switching between two worlds.",
                      "Work on gameplay mechanics, bot behaviour, and visual and audio cues that help players understand the match.",
                      "Assemble environments using third-party assets and develop interfaces with UMG and Blueprints. Work on PC, iOS and Android versions alongside another developer."
                    ],
                    "url": "#bresh"
                  },
                  {
                    "title": "Russian Car Drift (RCD)",
                    "date": "September 2023 — April 2024",
                    "role": "Level Designer · Unity",
                    "bullets": [
                      "Designed and assembled a playable city: urban blocks, road network, courtyards, terrain and landmarks.",
                      "Set street dimensions and corner geometry, testing routes through driving and drifting. Used Grasshopper to create terrain.",
                      "Worked on winter environments, lighting and a second map featuring a village and bridge connected to the city."
                    ],
                    "url": "#rcd"
                  }
                ]
              },
              {
                "key": "other",
                "title": "Architecture & media",
                "items": [
                  {
                    "title": "StopGame",
                    "date": "March 2025 — present",
                    "role": "Video author",
                    "bullets": [
                      "Create videos analysing game-city architecture: layouts, navigation, real-world references and how spaces support gameplay."
                    ],
                    "url": "#stopgame",
                    "compact": true
                  },
                  {
                    "title": "Transport project presentation videos",
                    "date": "2023",
                    "role": "Direction, editing & visual effects",
                    "bullets": [
                      "Almaty and Tashkent: structure, storyboarding, direction, editing and effects for transport project films. Also filmed the Almaty project."
                    ],
                    "compact": true
                  },
                  {
                    "title": "Independent architectural projects",
                    "date": "2018 — 2023",
                    "role": "Architect · Transport Planning",
                    "bullets": [
                      "Designed streets, squares, pedestrian connections and transport layouts; prepared diagrams, sketches and visualisations.",
                      "Worked on a square in Noyabrsk, a district concept in Krasnodar and the PRPR street and square proposals. Provided project consulting in Noyabrsk and Blagoveshchensk, Bashkortostan."
                    ],
                    "url": "#prpr",
                    "compact": true
                  },
                  {
                    "title": "Transport Design Studio (STEP)",
                    "date": "2017 — 2020",
                    "role": "Architect",
                    "bullets": [
                      "Urban analysis, transport layouts, 3D modelling and visualisation; aerial photography and parametric modelling with Grasshopper."
                    ],
                    "compact": true
                  },
                  {
                    "title": "Lozinsky & Partners",
                    "date": "2015 — 2017",
                    "role": "Architect",
                    "bullets": [
                      "Concept design, construction documentation and 3D visualisation."
                    ],
                    "compact": true
                  },
                  {
                    "title": "ASK Dominante",
                    "date": "2014 — 2015",
                    "role": "Architectural Technician",
                    "bullets": [
                      "BIM modelling and construction documentation."
                    ],
                    "compact": true
                  }
                ],
                "pageBreakBefore": true
              },
              {
                "key": "education",
                "title": "Education",
                "items": [
                  {
                    "title": "Moscow Film School",
                    "date": "2017 — 2022",
                    "role": "Filmmaking · Short-form Directing",
                    "bullets": [],
                    "compact": true
                  },
                  {
                    "title": "Moscow Architectural Institute (MARCHI)",
                    "date": "2011 — 2016",
                    "role": "Bachelor’s degree in Architecture",
                    "bullets": [],
                    "compact": true
                  }
                ]
              },
              {
                "key": "language",
                "title": "English",
                "paragraphs": [
                  "Technical documentation and written communication; intermediate spoken communication (self-assessed)."
                ]
              }
            ]
          },
          {
            "id": "architecture",
            "label": "Architecture",
            "title": "Architect · Transport Planning",
            "pdf": "assets/cv/Vladislav-Surin-Architect-EN.pdf",
            "summary": "I design streets, squares and urban spaces, including layouts, transport and pedestrian connections. I produce diagrams, sketches and visualisations, with additional experience in playable cities and transport project presentation films.",
            "sections": [
              {
                "key": "skills",
                "title": "Skills & tools",
                "groups": [
                  {
                    "label": "Design",
                    "text": "Streets and squares, transport and pedestrian connections, urban analysis, concept design, documentation and visualisation."
                  },
                  {
                    "label": "3D & BIM",
                    "text": "Rhino 3D, Grasshopper, Revit."
                  },
                  {
                    "label": "Engines",
                    "text": "Unity, Unreal Engine; Blueprints and UMG."
                  },
                  {
                    "label": "Graphics & video",
                    "text": "Photoshop, Illustrator, Figma, Premiere Pro, After Effects."
                  }
                ]
              },
              {
                "key": "experience",
                "title": "Architectural experience",
                "items": [
                  {
                    "title": "Independent architectural projects",
                    "date": "2018 — 2023",
                    "role": "Architect · Transport Planning",
                    "bullets": [
                      "Designed streets, squares, pedestrian connections and transport layouts; prepared diagrams, sketches and visualisations.",
                      "Worked on a square in Noyabrsk, a district concept in Krasnodar and the PRPR street and square proposals. Provided project consulting in Noyabrsk and Blagoveshchensk, Bashkortostan."
                    ],
                    "url": "#prpr",
                    "compact": true
                  },
                  {
                    "title": "Transport Design Studio (STEP)",
                    "date": "2017 — 2020",
                    "role": "Architect",
                    "bullets": [
                      "Urban analysis, transport layouts, 3D modelling and visualisation; aerial photography and parametric modelling with Grasshopper."
                    ],
                    "compact": true
                  },
                  {
                    "title": "Lozinsky & Partners",
                    "date": "2015 — 2017",
                    "role": "Architect",
                    "bullets": [
                      "Concept design, construction documentation and 3D visualisation."
                    ],
                    "compact": true
                  },
                  {
                    "title": "ASK Dominante",
                    "date": "2014 — 2015",
                    "role": "Architectural Technician",
                    "bullets": [
                      "BIM modelling and construction documentation."
                    ],
                    "compact": true
                  }
                ]
              },
              {
                "key": "other",
                "title": "Games & video projects",
                "items": [
                  {
                    "title": "StopGame",
                    "date": "March 2025 — present",
                    "role": "Video author",
                    "bullets": [
                      "Create videos analysing game-city architecture: layouts, navigation, real-world references and how spaces support gameplay."
                    ],
                    "url": "#stopgame",
                    "compact": true
                  },
                  {
                    "title": "BRESH",
                    "date": "Spring 2023 — present",
                    "role": "Game creator · Game & Level Designer · independent project",
                    "bullets": [
                      "Designed all maps for a multiplayer FPS: routes, spawn positions, flanking paths and vertical connections built around switching between two worlds."
                    ],
                    "url": "#bresh",
                    "compact": true
                  },
                  {
                    "title": "Russian Car Drift (RCD)",
                    "date": "September 2023 — April 2024",
                    "role": "Level Designer · Unity",
                    "bullets": [
                      "Designed and assembled a playable city: urban blocks, road network, courtyards, terrain and landmarks."
                    ],
                    "url": "#rcd",
                    "compact": true
                  },
                  {
                    "title": "Transport project presentation videos",
                    "date": "2023",
                    "role": "Direction, editing & visual effects",
                    "bullets": [
                      "Almaty: completed a presentation film in three weeks, including travel and filming. Tashkent: worked remotely from 27 October to 3 December with footage from a separate camera operator.",
                      "Developed structure and storyboards, editing and visual effects on limited budgets. Presented the project team’s proposals through video."
                    ],
                    "compact": true
                  }
                ],
                "pageBreakBefore": true
              },
              {
                "key": "education",
                "title": "Education",
                "items": [
                  {
                    "title": "Moscow Film School",
                    "date": "2017 — 2022",
                    "role": "Filmmaking · Short-form Directing",
                    "bullets": [],
                    "compact": true
                  },
                  {
                    "title": "Moscow Architectural Institute (MARCHI)",
                    "date": "2011 — 2016",
                    "role": "Bachelor’s degree in Architecture",
                    "bullets": [],
                    "compact": true
                  }
                ]
              },
              {
                "key": "language",
                "title": "English",
                "paragraphs": [
                  "Technical documentation and written communication; intermediate spoken communication (self-assessed)."
                ]
              }
            ]
          }
        ]
      }
    }
  },
  "translations": {
    "en": {
      "strings": {
        "Владислав Сурин": "Vladislav Surin",
        "Владислав Сурин — портфолио": "Vladislav Surin — Portfolio",
        "Владислав Сурин — игры, архитектура и видео. Автор BRESH, левел-дизайнер города для RCD.": "Vladislav Surin — games, architecture and video. Creator of BRESH and level designer of the city for RCD.",
        "Архитектура · Игры · Видео": "Architecture · Games · Video",
        "Проектирую игровые": "I design game worlds",
        "и городские пространства": "and urban spaces",
        "Разрабатываю собственную игру BRESH, проектирую города и снимаю видео об архитектуре и играх.": "I develop my own game, BRESH, design urban spaces, and make videos about architecture and games.",
        "Я Владислав Сурин, левел-дизайнер и архитектор. В RCD спроектировал игровой город, в собственной BRESH работаю над геймдизайном, картами и интерфейсом.": "I'm Vladislav Surin, a level designer and architect. I designed a playable city for RCD and work on game design, maps and UI for my own game, BRESH.",
        "По образованию — архитектор и режиссёр. Занимаюсь проектированием пространств, разработкой игр и видео: от планировки и эскизов до сборки окружения и монтажа.": "I trained as an architect and filmmaker. My work spans spatial design, game development and video, from layouts and sketches to environment assembly and editing.",
        "Резюме и опыт работы": "Resume and experience",
        "Связаться в Telegram": "Contact me on Telegram",
        "Игры": "Games",
        "Архитектура": "Architecture",
        "Графика": "Graphics",
        "Видео": "Video",
        "Авторская игра. Два мира — одно игровое пространство.": "An independent game. Two worlds sharing one space.",
        "Авторская игра": "Independent game",
        "Тактический мультиплеерный шутер с переключением между двумя мирами.": "A tactical multiplayer shooter with switching between two worlds.",
        "Роль": "Role",
        "Автор игры, геймдизайн, левел-дизайн и окружение": "Game creator, game design, level design and environments",
        "Движок": "Engine",
        "Платформы": "Platforms",
        "BRESH: мобильный геймплей": "BRESH: mobile gameplay",
        "Геймплей мобильной версии BRESH": "Gameplay from the mobile version of BRESH",
        "Мобильная версия · без звука, по кругу.": "Mobile version · muted loop.",
        "Мой вклад": "My contribution",
        "Автор игры: геймдизайн, все карты, сборка окружения, интерфейс и внутриигровые системы.": "Game creator: game design, all maps, environment assembly, UI and gameplay systems.",
        "Развиваю версии для PC, iOS и Android, включая мобильное управление. Кроссплатформенность и общение игроков — важные направления работы.": "I develop the PC, iOS and Android versions, including mobile controls. Cross-platform play and player communication are key development goals.",
        "Над кодом работаем совместно с другим разработчиком. Модели окружения — сторонние.": "I work on the code with another developer. Environment models are third-party assets.",
        "BRESH: мобильный игровой экран на открытой местности": "BRESH: mobile gameplay in an outdoor area",
        "BRESH: персонажи на мобильном игровом экране": "BRESH: characters in the mobile version",
        "BRESH: меню выбора и настройки матча": "BRESH: match selection and settings menu",
        "BRESH: вид карты в двух мирах": "BRESH: the map in two worlds",
        "Геймдизайн": "Game design",
        "Два мира: бой, информация и маршруты": "Two worlds: combat, information and routes",
        "Тактический выбор": "Tactical choices",
        "Переключение позволяет обмануть противника, сменить позицию и выбрать другой подход в бою.": "Switching worlds lets players deceive opponents, reposition and approach a fight differently.",
        "Понятная ситуация в двух мирах": "Keeping two worlds readable",
        "Недостаток информации в двух реальностях компенсировал звуковыми и визуальными подсказками: они помогают ориентироваться и следить за командой.": "I addressed the lack of information across two realities with audio and visual cues that help players navigate and keep track of their team.",
        "Маршруты через переключение": "Routes through world switching",
        "Различия в препятствиях открывают обходы и вертикальные маршруты. Карты побуждают использовать переключение и вне боя.": "Different obstacles create alternative routes and vertical connections. The maps encourage world switching outside combat as well.",
        "Матч при небольшом онлайне": "Matches with fewer players",
        "Для малолюдных сессий работал над ботами: передвижением, реакциями на увиденное и выбором момента для смены мира.": "For sparsely populated sessions, I worked on bot movement, reactions to what they see and decisions about when to switch worlds.",
        "Эскизы интерфейса и визуального образа": "UI and visual identity sketches",
        "Рабочие зарисовки игровых экранов BRESH": "Working sketches of BRESH game screens",
        "Поиск структуры экранов": "Exploring screen layouts",
        "Схемы интерфейса экипировки BRESH": "BRESH equipment UI sketches",
        "Экипировка и выбор предметов": "Equipment and item selection",
        "Зарисовки меню и внутриигрового интерфейса BRESH": "BRESH menu and in-game UI sketches",
        "Меню и игровые экраны": "Menus and game screens",
        "Эскиз вертикальной капсулы BRESH с двумя бойцами": "BRESH vertical capsule sketch with two fighters",
        "Вертикальная капсула": "Vertical capsule",
        "Эскиз горизонтальной капсулы BRESH": "BRESH horizontal capsule sketch",
        "Горизонтальная капсула": "Horizontal capsule",
        "Авторский арт BRESH: город и бойцы в двух мирах": "Original BRESH artwork: a city and fighters in two worlds",
        "Поиск образа двух миров": "Exploring the two-world concept",
        "Зарисовки вариантов логотипа BRESH": "BRESH logo sketches",
        "Поиск знака и логотипа": "Symbol and logo exploration",
        "02 / Уровни и игровое пространство": "02 / Levels and playable spaces",
        "Левел-дизайн: карты для двух миров": "Level design: maps for two worlds",
        "Игрок переключается между двумя версиями одной карты. Архитектура и препятствия в них различаются: смена мира открывает другие пути и позволяет пройти участки, недоступные в текущем мире.": "Players switch between two versions of the same map. Differences in architecture and obstacles open new routes and let them reach areas inaccessible in their current world.",
        "Архитектура двух миров": "The architecture of two worlds",
        "Мир 1": "World 1",
        "Мир 2": "World 2",
        "Одна улица в двух мирах": "One street in two worlds",
        "Одна улица в двух мирах — ракурс 1": "One street in two worlds — view 1",
        "Одна улица в двух мирах — ракурс 2": "One street in two worlds — view 2",
        "Маршруты команд": "Team routes",
        "На схемах показаны варианты движения двух команд от стартовых позиций. Участки с зигзагами требуют переключения между мирами. Ползунок позволяет сравнить маршруты в двух версиях карты.": "The diagrams show possible routes for two teams from their starting positions. Zigzag sections require world switching. Use the slider to compare routes in both versions of the map.",
        "Схемы маршрутов": "Route diagrams",
        "Зелёный — первая команда": "Green — team one",
        "Оранжевый — вторая команда": "Orange — team two",
        "Зигзаг — путь с переключением миров": "Zigzag — a route using world switching",
        "Передвигай ползунок для сравнения. Схемы также можно открыть на весь экран.": "Drag the slider to compare. The diagrams can also be opened in a larger view.",
        "Эскиз и блокаут": "Sketch and blockout",
        "Рабочий эскиз планировки карты BRESH": "Working layout sketch for a BRESH map",
        "Эскиз планировки": "Layout sketch",
        "Объёмный блокаут двух версий карты BRESH": "3D blockout of two versions of a BRESH map",
        "Объёмный блокаут": "3D blockout",
        "Открой любой материал, чтобы рассмотреть его целиком.": "Open any image to see it in full.",
        "Monument: блокаут и концепт": "Monument: blockout and concept",
        "Блокаут": "Blockout",
        "Концепт": "Concept",
        "Эскиз планировки карты Monument": "Layout sketch for the Monument map",
        "План карты — открыть крупно": "Map plan — open larger",
        "Monument: карта в игре": "Monument: in-game map",
        "Monument: вид сверху": "Monument: top view",
        "Monument: площадь со статуей": "Monument: square with a statue",
        "Иконка BRESH": "BRESH icon",
        "Два мира BRESH: город и бойцы по разные стороны перехода": "Two worlds of BRESH: a city and fighters on either side of the transition",
        "Играть в BRESH": "Play BRESH",
        "01 / Об игре": "01 / About the game",
        "02 / Левел-дизайн": "02 / Level design",
        "Город для RCD": "City for RCD",
        "Город, зимнее состояние и вторая карта для гоночной игры.": "A city, its winter version and a second map for a racing game.",
        "Общий вид города для RCD": "Overview of the city for RCD",
        "Левел-дизайн и окружение": "Level design and environments",
        "Город для гоночной игры: планировка, маршруты и окружение. Зимнее состояние и вторая карта, соединённая с городом.": "A city for a racing game: street layout, routes and environment assembly. A winter version and a second map connected to the city.",
        "Левел-дизайн и сборка окружения": "Level design and environment assembly",
        "Объект работы": "Scope",
        "Город и связанная с ним вторая карта": "A city and a connected second map",
        "Город в игре": "The city in-game",
        "Проезд по городу в RCD": "Driving through the city in RCD",
        "Запись игрового проезда по городу.": "In-game drive through the city.",
        "Разработал город как игровое пространство: планировку улиц, маршруты, рельеф и систему ориентиров. Собирал окружение в Unity, работал над зимним состоянием и освещением.": "I designed the city as a playable space: street layouts, routes, terrain and landmarks. I assembled the environment in Unity and worked on the winter version and lighting.",
        "Также работал над второй картой с деревней и мостом, которая соединялась с городом.": "I also worked on a second map with a village and bridge, connected to the city.",
        "Парк и окружающие его кварталы в RCD": "A park and surrounding blocks in RCD",
        "Городская среда: парк и окружающая застройка.": "Urban environment: a park and surrounding buildings.",
        "Улица с перекрёстком и малоэтажной застройкой в RCD": "A street, intersection and low-rise buildings in RCD",
        "Уличная сеть и малоэтажные кварталы.": "Street network and low-rise blocks.",
        "Широкая городская улица с жилыми домами в RCD": "A wide residential street in RCD",
        "Жилые кварталы и городские магистрали.": "Residential blocks and main roads.",
        "Зелёная городская улица с заправкой, вид сверху": "A green urban street with a petrol station, seen from above",
        "Озеленение и заправка: вид сверху.": "Landscaping and a petrol station: top view.",
        "Планировка и рабочие материалы": "Layouts and work in progress",
        "Рабочая схема городских маршрутов с цветными пометками": "Working diagram of city routes with colour annotations",
        "Рабочая схема маршрутов.": "Working route diagram.",
        "Кварталы города сверху в редакторе Unity": "City blocks viewed from above in the Unity editor",
        "Планировка кварталов в редакторе Unity.": "Block layout in the Unity editor.",
        "Сетка рельефа и уличная сеть в рабочем проекте": "Terrain mesh and street network in the working project",
        "Рабочий материал: сетка рельефа и уличная сеть.": "Work in progress: terrain mesh and street network.",
        "Рабочая схема расширения карты с сокращённой версией Москвы": "Working map extension diagram with a condensed version of Moscow",
        "Незавершённое расширение: сокращённая версия Москвы рядом с существующим городом.": "Unfinished expansion: a condensed version of Moscow next to the existing city.",
        "Рабочая расстановка точек доставки вдоль городских улиц": "Working placement of delivery points along city streets",
        "Точки доставки для активности «Работы». В разработке.": "Delivery points for the Jobs activity. Work in progress.",
        "Набор вариантов дорожных знаков в рабочем проекте": "Road sign variants in the working project",
        "Дорожные знаки: варианты через UV-смещение. В разработке.": "Road sign variants using UV offsets. Work in progress.",
        "Нажмите на отдельное изображение, чтобы рассмотреть его крупнее.": "Click an image to see it in a larger view.",
        "Зимняя улица и постановочные кадры": "Winter street and staged screenshots",
        "Заснеженная улица с малоэтажной застройкой": "A snowy street with low-rise buildings",
        "Зимнее состояние городской улицы.": "Winter version of a city street.",
        "Автомобиль на фоне освещённого жилого дома ночью": "A car outside an illuminated residential building at night",
        "Ночное освещение и эмиссия материалов.": "Night lighting and emissive materials.",
        "Зелёный автомобиль с включёнными фарами среди деревьев": "A green car with its headlights on among trees",
        "Постановочный кадр в игровом окружении.": "Staged screenshot in the game environment.",
        "Вторая карта": "The second map",
        "Деревня, рельеф и мост — другая часть работы над игровым миром RCD. Вторая карта стыковалась с первой, где расположен город.": "A village, terrain and a bridge formed another part of my work on RCD's game world. This second map connected to the first, which contains the city.",
        "Дорога и мост на второй карте RCD": "Road and bridge on RCD's second map",
        "Мост и дорога в ландшафте второй карты.": "Bridge and road in the landscape of the second map.",
        "Рельеф и деревня": "Terrain and village",
        "Рабочий рельеф с серпантином на второй карте": "Work-in-progress terrain with a winding road on the second map",
        "Рабочий материал: рельеф и трассировка дороги.": "Work in progress: terrain and road alignment.",
        "Деревня с дорогами в редакторе Unity": "Village and roads in the Unity editor",
        "Размещение деревни и связь с дорогой.": "Village placement and connection to the road.",
        "Иконка RCD": "RCD icon",
        "Авторский видеоблог": "YouTube channel",
        "Личный YouTube-канал: архитектура, города и игры.": "My YouTube channel about architecture, cities and games.",
        "Личный канал · YouTube": "Personal channel · YouTube",
        "Архитектура, городская среда и видеоигры: авторские выпуски, разборы и проектные предложения.": "Architecture, urban spaces and video games: original videos, analysis and design proposals.",
        "Личный канал": "Personal channel",
        "Авторский канал · YouTube": "Personal channel · YouTube",
        "Плейлисты по рубрикам": "Playlists by topic",
        "Архитектура, города и игры — выпуски собраны по темам.": "Architecture, cities and games — videos grouped by topic.",
        "Тебя никто не спрашивает": "Nobody Asked You",
        "Плейлист": "Playlist",
        "ПРПР — Простое проектирование": "PRPR — Simple Design",
        "Образовательное": "Educational",
        "Отдельный выпуск": "Standalone video",
        "Подробнее в портфолио": "Explore in the portfolio",
        "Игровые концепты": "Game concepts",
        "Окружение, игровые сцены и персонажи.": "Environments, game scenes and characters.",
        "КОНЦЕПТ-АРТ": "CONCEPT ART",
        "Концепт русского вестерна с персонажами": "Russian western concept with characters",
        "Концепт-арт": "Concept art",
        "Концепты игровых сцен, окружения и персонажей.": "Concepts for game scenes, environments and characters.",
        "Игровая сцена с деревенским домом и дорогой": "Game scene with a village house and road",
        "Поле": "Field",
        "Зимняя сцена у деревянного дома": "Winter scene by a wooden house",
        "Зимняя сцена": "Winter scene",
        "Персонажи вестерна": "Western characters",
        "Персонажи": "Characters",
        "Городская улица": "City street",
        "Интерьер": "Interior",
        "Городская сцена": "Urban scene",
        "Ночная сцена": "Night scene",
        "Уличная сцена": "Street scene",
        "Архитектура игровых городов": "Architecture of game cities",
        "Авторская рубрика для StopGame — «Где я *****?»": "An original video series for StopGame — “Where the ***** Am I?”",
        "Имперский город из Oblivion": "The Imperial City from Oblivion",
        "Авторская рубрика · StopGame": "Original video series · StopGame",
        "«Где я *****?» — разбираю архитектуру игровых городов, их устройство и связь с реальными местами.": "“Where the ***** Am I?” — I explore the architecture of game cities, their layouts and connections to real places.",
        "Авторская рубрика на StopGame": "Original video series on StopGame",
        "Где я *****?": "Where the ***** Am I?",
        "StopGame · Где я *****?": "StopGame · Where the ***** Am I?",
        "Выпуски рубрики": "Series episodes",
        "От новых к ранним: Oblivion, Forza Horizon 6 и два разбора Лос-Сантоса.": "Newest first: Oblivion, Forza Horizon 6 and two analyses of Los Santos.",
        "Самый халтурный город Oblivion": "Oblivion's Most Sloppily Built City",
        "Имперский город в Oblivion выглядит грандиозно, но насколько хорошо он работает как город в игре? Разбираемся, удобно ли по нему передвигаться и ориентироваться, как он используется в геймплее и насколько убедительно выглядит как столица империи.": "Oblivion's Imperial City looks grand, but how well does it work as a game city? I examine its navigation, use in gameplay and how convincing it is as an imperial capital.",
        "Япония в Forza Horizon 6. Место, где потеряли интересную игру": "Japan in Forza Horizon 6: A Setting That Could Have Made a More Interesting Game",
        "Разбор карты Forza Horizon 6: как Токио, горные перевалы и сельская Япония работают в открытом мире для гонок — и где особенности этих территорий упростили ради привычной формулы серии. Найдётся ли для следующей части сеттинг с таким же культурным весом?": "An analysis of the Forza Horizon 6 map: how Tokyo, mountain passes and rural Japan work in an open-world racing game, and where their distinctive features were simplified to fit the series' familiar formula. Could another setting carry the same cultural weight?",
        "Лос-Сантос в игре и в РЕАЛЬНОСТИ. Разбор локаций GTA: San Andreas": "Los Santos In-Game and in REAL LIFE: GTA San Andreas Locations",
        "Как улицы стали геймдизайном? Разбор локаций Лос-Сантоса из GTA: San Andreas: почему в San Andreas нельзя переходить дорогу, как устроена карта города и во что Rockstar превратила Лос-Анджелес ради игры.": "How did streets become game design? I explore Los Santos in GTA: San Andreas: why crossing the road is so difficult, how the city map is organised and how Rockstar transformed Los Angeles for the game.",
        "Архитектура Лос-Сантоса — образ Лос-Анджелеса в GTA: San Andreas": "Los Santos Architecture: The Image of Los Angeles in GTA San Andreas",
        "В этом ролике разбираем, как устроен Лос-Сантос из San Andreas: его зонирование, архитектурные стили и образ города в целом. А заодно пытаемся понять, как сильно на его облик повлияли условности игры, ограничения разработки и сам выбранный сеттинг.": "A look at Los Santos in San Andreas: its zoning, architectural styles and overall identity. How much of its appearance comes from gameplay conventions, development constraints and the chosen setting?",
        "ПРПР": "PRPR",
        "Проекты улиц и площадей для авторского видеоблога.": "Street and square design proposals for my video blog.",
        "СЕРИЯ": "SERIES",
        "Второй вариант планировки площади в Костроме": "Second layout option for a square in Kostroma",
        "Архитектура и видеоблог": "Architecture and video blog",
        "Проектные предложения по преобразованию улиц и площадей. Серия «Простое проектирование» для авторского видеоблога.": "Proposals for transforming streets and squares. The Simple Design series for my video blog.",
        "Проекты серии": "Projects in the series",
        "Рубрика ПРПР на YouTube": "PRPR playlist on YouTube",
        "Смотреть плейлист ПРПР на YouTube": "Watch the PRPR playlist on YouTube",
        "Иллюстрации": "Illustrations",
        "Сюжетные иллюстрации и архитектурная графика.": "Narrative illustrations and architectural drawings.",
        "ГРАФИКА": "GRAPHICS",
        "Иллюстрация «В конце дня»": "Illustration: At the End of the Day",
        "Иллюстрации и графика": "Illustrations and drawings",
        "Подборка сюжетных иллюстраций и рисунков архитектуры.": "A selection of narrative illustrations and architectural drawings.",
        "Народные гуляния": "Festivities",
        "В конце дня": "At the End of the Day",
        "Рожицы": "Faces",
        "Блокированные дома": "Townhouses",
        "Площадь в Ноябрьске": "Square in Noyabrsk",
        "Ноябрьск": "Noyabrsk",
        "Переустройство городской площади и кольцевого пересечения.": "Redesign of a city square and roundabout.",
        "РЕАЛИЗОВАНО": "BUILT",
        "Реализованное кольцевое пересечение и пешеходные пространства в Ноябрьске": "Completed roundabout and pedestrian spaces in Noyabrsk",
        "Городская среда и транспорт": "Urban spaces and transport",
        "Преобразование площади и транспортного узла в центре города.": "Transformation of a square and transport junction in the city centre.",
        "Место": "Location",
        "Ноябрьск, Ямало-Ненецкий автономный округ": "Noyabrsk, Yamalo-Nenets Autonomous Okrug",
        "Статус": "Status",
        "Реализован": "Built",
        "Направление": "Discipline",
        "Городская среда и организация движения": "Urban spaces and traffic planning",
        "Реализация": "Completed project",
        "Видео — Alexey Melnov.": "Video by Alexey Melnov.",
        "До и после переустройства": "Before and after the redesign",
        "До": "Before",
        "После": "After",
        "Сопоставление территории до и после реализации. Подоснова — Google Карты. Сравнение можно открыть на весь экран.": "The area before and after construction. Base imagery: Google Maps. Open the comparison in a larger view.",
        "Задача": "Brief",
        "Преобразовать большое асфальтовое пространство в центре города в удобную пешеходную площадь, упорядочить движение и создать условия для снижения скорости транспорта.": "Turn a large paved area in the city centre into a comfortable pedestrian square, organise traffic and create conditions for lower vehicle speeds.",
        "Основа решений": "Design approach",
        "Проектные решения разрабатывались на основе подсчётов пешеходных и транспортных потоков и анализа тепловых карт. Учитывались маршруты автобусов и траектории снегоуборочной техники, а также действующие общие и местные нормы.": "The proposals were based on pedestrian and vehicle counts and heat-map analysis. I considered bus routes, snow-clearing vehicle paths, and applicable national and local standards.",
        "Схема и эскизные решения": "Plan and design sketches",
        "Проектная схема площади и кольцевого пересечения с авторскими эскизными правками": "Plan of the square and roundabout with my sketch annotations",
        "Проектная схема с моими эскизными правками.": "Plan with my sketch annotations.",
        "Эскизные проектные решения": "Design sketches",
        "Эскизные проектные решения · анимация": "Design sketches · animation",
        "На уровне пешехода": "At pedestrian level",
        "Пешеходные пространства и велосипедист у площади в Ноябрьске": "Pedestrian spaces and a cyclist by the square in Noyabrsk",
        "Пешеходные пространства площади": "Pedestrian spaces around the square",
        "Тротуар и велодорожка вдоль улицы после переустройства": "Pavement and cycle path along the street after the redesign",
        "Тротуар и велодорожка": "Pavement and cycle path",
        "Район в Краснодаре": "District in Krasnodar",
        "Краснодар": "Krasnodar",
        "Градостроительная концепция: кварталы, зелёные пространства и транспорт.": "Urban design concept: blocks, green spaces and transport.",
        "КОНЦЕПЦИЯ": "CONCEPT",
        "Эскиз парка и предлагаемой застройки в Краснодаре": "Sketch of a park and proposed buildings in Krasnodar",
        "Градостроительная концепция": "Urban design concept",
        "Альтернативное предложение по развитию района: от планировочной структуры до образа городской среды.": "An alternative proposal for the district, from its layout to the character of its urban spaces.",
        "Стадия": "Stage",
        "Концепция": "Concept",
        "Моя работа": "My work",
        "Градостроительные схемы, эскизы и презентация": "Urban design diagrams, sketches and presentation",
        "Разработать альтернативу планировавшемуся варианту развития района. Предложение объединяет квартальную застройку, парк и бульвар, транспортные связи и постепенное изменение этажности.": "Develop an alternative to the planned district layout. The proposal combines urban blocks, a park and boulevard, transport links and a gradual transition in building heights.",
        "Общий вид и планировка": "Overview and layout",
        "Предлагаемая застройка в окружении города": "Proposed buildings in the existing urban context",
        "Переход к предлагаемой планировке": "Transition to the proposed layout",
        "Устройство района": "District structure",
        "Застройка": "Development",
        "Схема квартальной застройки с парком и бульваром": "Diagram of urban blocks, park and boulevard",
        "Квартальная структура района с протяжённым бульваром и крупным парком. На схеме показаны контуры предлагаемой застройки и зелёные пространства.": "A block-based district structure with a long boulevard and a large park. The diagram shows proposed building footprints and green spaces.",
        "Этажность": "Building heights",
        "Схема распределения этажности застройки района": "Diagram of the distribution of building heights",
        "Постепенный переход от высотной застройки к малоэтажной и частной. Цветом обозначены диапазоны этажности: 2–3, 3–5, 5–12 и более 12 этажей.": "A gradual transition from high-rise to low-rise and detached housing. Colours indicate height ranges: 2–3, 3–5, 5–12 and over 12 storeys.",
        "Общественный транспорт": "Public transport",
        "Схема двух маршрутов общественного транспорта и пешеходных пространств": "Diagram of two public transport routes and pedestrian spaces",
        "Предложены внешний и внутрирайонный маршруты общественного транспорта. Бирюзовым отмечены пешеходные пространства и навесы.": "Proposed perimeter and internal public transport routes. Turquoise indicates pedestrian spaces and canopies.",
        "Эскизы городской среды": "Urban space sketches",
        "Эскиз улицы с аркадами": "Sketch of a street with arcades",
        "Улица и аркады": "Street and arcades",
        "Эскиз площади с кафе и пешеходным проходом": "Sketch of a square with a café and pedestrian passage",
        "Площадь и пешеходный проход": "Square and pedestrian passage",
        "Эскиз пешеходной улицы с навесами": "Sketch of a pedestrian street with canopies",
        "Пешеходная улица и навесы": "Pedestrian street and canopies",
        "Предложение в существующем окружении": "The proposal in its existing context",
        "Бульвар и застройка вдоль него": "Boulevard and adjacent buildings",
        "Парк и окружающие кварталы": "Park and surrounding blocks",
        "Новая застройка рядом с частным сектором": "New buildings next to detached houses",
        "Соседство с существующими домами": "Relationship with existing houses",
        "Улица в Дзержинском": "Street in Dzerzhinsky",
        "Проект улицы в Дзержинском, Московская область.": "Street design in Dzerzhinsky, Moscow Region.",
        "Улица в Дзержинском — проект": "Street in Dzerzhinsky — proposal",
        "Проект улицы": "Street design",
        "Предложение по преобразованию улицы в городе Дзержинском Московской области, подготовленное для авторского видеоблога.": "A proposal to transform a street in Dzerzhinsky, Moscow Region, prepared for my video blog.",
        "План улицы": "Street plan",
        "Проект": "Proposal",
        "Основные виды": "Main views",
        "Ракурс 1": "View 1",
        "Ракурс 2": "View 2",
        "Другие ракурсы": "Other views",
        "Ракурс 3": "View 3",
        "Ракурс 4": "View 4",
        "Выпуск блога": "Video blog episode",
        "Площадь и улица в Костроме": "Square and street in Kostroma",
        "Два варианта площади и проект примыкающей улицы.": "Two options for a square and a proposal for the adjoining street.",
        "Площадь и улица в Костроме — проект": "Square and street in Kostroma — proposal",
        "Площадь и улица": "Square and street",
        "Проектные предложения для площади в Костроме и примыкающей к ней улицы.": "Design proposals for a square in Kostroma and its adjoining street.",
        "Площадь": "Square",
        "Два варианта проектного предложения для площади. Для каждого можно сравнить существующее состояние и проект.": "Two design options for the square. Compare the existing layout with each proposal.",
        "Варианты планировки площади": "Square layout options",
        "Площадь — вариант 1": "Square — option 1",
        "Вариант 1": "Option 1",
        "Площадь — вариант 2": "Square — option 2",
        "Вариант 2": "Option 2",
        "Виды площади": "Views of the square",
        "Ракурс 5": "View 5",
        "Ракурс 6": "View 6",
        "Примыкающая улица": "Adjoining street",
        "Отдельное проектное предложение для улицы рядом с площадью.": "A separate design proposal for the street next to the square.",
        "Виды улицы": "Views of the street",
        "Выпуски блога": "Video blog episodes",
        "Площадь в Костроме": "Square in Kostroma",
        "Улица в Костроме": "Street in Kostroma",
        "Улица Гаврилова": "Gavrilova Street",
        "Проект преобразования улицы в Краснодаре.": "A proposal to transform a street in Krasnodar.",
        "Улица Гаврилова — проект": "Gavrilova Street — proposal",
        "Проектное предложение для улицы Гаврилова в Краснодаре, подготовленное для авторского видеоблога.": "A design proposal for Gavrilova Street in Krasnodar, prepared for my video blog.",
        "БАУ — проект улицы": "BAU — Street Design",
        "План и проектные виды улицы.": "Street plan and proposed views.",
        "БАУ — проект улицы — проект": "BAU — street design proposal",
        "Предложение по преобразованию уличного пространства, подготовленное для авторского видеоблога.": "A proposal to transform a street, prepared for my video blog.",
        "Улица в Дубне": "Street in Dubna",
        "Проект преобразования улицы в Дубне.": "A proposal to transform a street in Dubna.",
        "Улица в Дубне — проект": "Street in Dubna — proposal",
        "Проектное предложение для улицы в Дубне, подготовленное для авторского видеоблога.": "A design proposal for a street in Dubna, prepared for my video blog.",
        "Приостановить: ": "Pause: ",
        "Запустить: ": "Play: ",
        "Пауза": "Pause",
        "Воспроизвести": "Play",
        "Просмотр изображения": "Image viewer",
        "Открыть оригинал": "Open original",
        "Закрыть": "Close",
        "Просмотр плана": "Plan viewer",
        "План": "Plan",
        "Версия большого плана": "Large plan version",
        "Уменьшить план": "Zoom out",
        "Увеличить план": "Zoom in",
        "Целиком": "Fit to view",
        "Закрыть план": "Close plan",
        "План: перетаскивайте для перемещения; плюс и минус меняют масштаб": "Plan: drag to pan; use plus and minus to zoom",
        "Масштаб: + / −, колесо мыши или два пальца. Перетаскивание — перемещение.": "Zoom: + / −, mouse wheel or pinch. Drag to pan.",
        "Версия плана": "Plan version",
        "Открыть план крупно": "Open plan in a larger view",
        "Увеличить: ": "Enlarge: ",
        "В большом просмотре доступны обе версии, увеличение и перемещение плана.": "Open the larger view to switch versions, zoom and pan.",
        "Изображение проекта": "Project image",
        "Сравнение изображений": "Image comparison",
        "изображение проекта": "project image",
        "Анимированная версия: ": "Animated version: ",
        "концепт": "concept",
        "Анимация": "Animation",
        "Включить анимацию: ": "Play animation: ",
        "Картинка": "Image",
        "Показать рисунок: ": "Show drawing: ",
        "Сравнение": "Comparison",
        "Сравнить: ": "Compare: ",
        "изображения": "images",
        "Два мира": "Two worlds",
        "На весь экран": "Expand",
        "Увеличить сравнение: ": "Enlarge comparison: ",
        "Схемы": "Diagrams",
        "Нажмите на схему, чтобы увеличить.": "Click the diagram to enlarge it.",
        "Логотип Владислава Сурина": "Vladislav Surin's logo",
        "Смотреть канал": "Visit channel",
        "Открыть плейлист": "Open playlist",
        "Видеоблог · ПРПР": "Video blog · PRPR",
        "Разбор проекта в блоге": "Project breakdown on the blog",
        "Видео с объяснением предложенных изменений.": "A video explaining the proposed changes.",
        "Открыть плейлист на YouTube": "Open playlist on YouTube",
        "Открыть на YouTube": "Open on YouTube",
        "Отдельные выпуски о площади и примыкающей улице.": "Separate episodes about the square and the adjoining street.",
        " — проект": " — proposal",
        " · До / Проект": " · Before / Proposal",
        "Сравнение миров": "World comparison",
        "Рабочие материалы": "Working materials",
        "Анимация проекта": "Project animation",
        "Контакты": "Contact",
        "Видео на главной": "Homepage video",
        "Место для обложки проекта": "Project cover placeholder",
        "К проектам ПРПР": "Back to PRPR projects",
        "К работам": "Back to projects",
        "Страницы игры в магазинах": "Game store pages",
        "Играть": "Play",
        "Разделы проекта": "Project sections",
        "Следующий проект — ": "Next project — ",
        "Вернуться ко всем работам": "Back to all projects",
        "Профиль": "Profile",
        "Скачать PDF": "Download PDF",
        "Версия резюме": "Resume version",
        "Язык резюме": "Resume language",
        "Портфолио": "Portfolio",
        "Резюме": "Resume",
        "стр.": "pages",
        "Резюме на русском": "Resume in Russian",
        "Резюме / Resume": "Resume",
        "Все": "All",
        "Проекты этой категории пока не добавлены.": "No projects in this category yet.",
        "Наверх": "Back to top",
        "Работы": "Projects",
        "Обо мне": "About",
        "Главное меню": "Main navigation",
        "Направления работ": "Project categories",
        "Язык сайта": "Site language"
      }
    }
  }
};
