// РЕДАКТИРУЙ ЭТОТ ФАЙЛ. Дизайн и код страницы лежат отдельно.
// Порядок объектов в projects = порядок карточек на сайте.
// Копируй проект целиком для добавления нового. id должен быть уникальным и постоянным.
// categories — список категорий проекта: можно несколько, например ["games", "video"].
// visible: false — скрывает проект; true — показывает.
// column: "left" / "right" — столбец на ПК; columnOrder — порядок внутри столбца.
// На телефоне порядок карточек определяется очередностью projects.
// cover.src — путь к картинке. Папки можно называть как угодно.
// cover.position — положение при обрезке: "50% 50%" = центр, "50% 20%" = ближе к верху.
// cover.fit: "cover" заполняет обложку; "contain" показывает картинку целиком с полями.
// Тексты перенесены из первого макета без редакторской переработки.
window.PORTFOLIO = {
  "site": {
    "name": "Владислав Сурин",
    "title": "Владислав Сурин — портфолио",
    "description": "Владислав Сурин — игры, архитектура и видео. Автор BRESH, левел-дизайнер города для RCD."
  },
  "home": {
    "eyebrow": "Архитектура · Игры · Видео",
    "titleLines": [
      "Проектирую игровые",
      "и городские пространства"
    ],
    "intro": "Разрабатываю собственную игру BRESH, проектирую города и снимаю видео об архитектуре и играх.",
    "note": "Избранные проекты ↓",
    "about": "Мой опыт объединяет архитектуру, разработку игр и режиссуру. Мне интересно, как устроено пространство, как человек его воспринимает и какие истории в нём возникают.",
    "aboutSmall": "В BRESH я работаю над игрой целиком, включая геймдизайн, карты и сборку окружения. В RCD отвечал за левел-дизайн всего города. Архитектурные и видеопроекты появятся здесь следующим этапом.",
    "video": {
      "src": "assets/home/frontpage.mp4"
    }
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
          "title": "BRESH на мобильных устройствах",
          "media": {
            "type": "video",
            "src": "assets/bresh/mobile.mp4",
            "motion": true,
            "aspectRatio": "960 / 442",
            "label": "Геймплей мобильной версии BRESH",
            "caption": "Запись мобильной версии. Видео без звука, по кругу; нажмите для паузы."
          },
          "aside": {
            "title": "Одна идея на разных устройствах",
            "paragraphs": [
              "Развиваю игру для PC, iOS и Android. Отдельная часть работы — мобильное управление и интерфейс.",
              "Кроссплатформенность и общение игроков — важные для меня направления развития BRESH."
            ]
          },
          "id": "bresh-game"
        },
        {
          "type": "text",
          "title": "Мой вклад",
          "paragraphs": [
            "Развиваю BRESH от идеи до выпуска: геймдизайн, все карты, сборка окружения, интерфейс и внутриигровые системы. Работаю над версиями для PC, iOS и Android."
          ],
          "notes": [
            "Над кодом работаем совместно с другим разработчиком. Для окружения использую готовые сторонние модели."
          ]
        },
        {
          "type": "design-notes",
          "eyebrow": "Геймдизайн",
          "title": "Одна механика меняет весь матч",
          "intro": "Переключение миров — основа BRESH. Оно влияет на бой, устройство карт и то, какую информацию получают игроки.",
          "items": [
            {
              "title": "Тактический выбор",
              "text": "Смена мира позволяет обмануть противника и изменить позицию. Важно, чтобы переключение давало повод принимать решения прямо в бою."
            },
            {
              "title": "Понятная ситуация в двух мирах",
              "text": "Две реальности оставляли игроку слишком мало информации о происходящем. Разработал звуковые и визуальные подсказки, которые помогают ориентироваться и следить за командой."
            },
            {
              "title": "Маршруты через переключение",
              "text": "Одни и те же места в двух мирах устроены по-разному. Препятствия направляют игрока в другой мир, открывают обходы и позволяют использовать вертикаль."
            },
            {
              "title": "Матч при небольшом онлайне",
              "text": "Пустые сессии мешали новым игрокам оставаться в игре. Работал над поведением ботов: передвижением, реакцией на увиденное и выбором момента для смены мира."
            }
          ]
        },
        {
          "type": "collage",
          "title": "Зарисовки интерфейса",
          "layout": "bresh-ui",
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
            }
          ],
          "caption": "Рабочие зарисовки. Любую можно открыть крупно."
        },
        {
          "type": "collage",
          "title": "Визуальный образ BRESH",
          "layout": "bresh-identity",
          "images": [
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
          ],
          "caption": "Авторские эскизы арта, капсул и логотипа."
        },
        {
          "type": "chapter",
          "eyebrow": "02 / Уровни и игровое пространство",
          "title": "Левел-дизайн: карты для двух миров",
          "text": "Игрок переключается между двумя версиями одной карты. Архитектура и препятствия в них различаются: смена мира открывает другие пути и позволяет пройти участки, недоступные в текущем мире.",
          "id": "bresh-level-design"
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
          "type": "comparison-group",
          "title": "Другая карта: два устройства пространства",
          "comparisons": [
            {
              "title": "Другая карта: два устройства пространства — ракурс 1",
              "before": "assets/bresh/8-1.jpg",
              "after": "assets/bresh/8.jpg",
              "beforeLabel": "Мир 1",
              "afterLabel": "Мир 2"
            },
            {
              "title": "Другая карта: два устройства пространства — ракурс 2",
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
          "type": "text",
          "title": "Зимнее состояние",
          "paragraphs": [
            "Для города прорабатывал зимнее окружение, ночное освещение и эмиссию материалов."
          ]
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
          "type": "link-collection",
          "title": "Рубрики и выпуски",
          "items": [
            {
              "kind": "Рубрика",
              "title": "Тебя никто не спрашивает",
              "url": "https://www.youtube.com/playlist?list=PLifYKO6pxu9OMVDRYorzj4m-Z47X2DpIr"
            },
            {
              "kind": "Серия проектов",
              "title": "ПРПР — Простое проектирование",
              "description": "Предлагаю изменения улиц и площадей и объясняю проектные решения.",
              "url": "https://www.youtube.com/playlist?list=PLifYKO6pxu9OopZJ_DG-vdUHy06uVRTd7"
            },
            {
              "kind": "Плейлист",
              "title": "Игры",
              "url": "https://www.youtube.com/playlist?list=PLifYKO6pxu9PpS_nHZFHDgtpGjJ0dNXCe"
            },
            {
              "kind": "Отдельный выпуск",
              "title": "Образовательное",
              "action": "Смотреть выпуск",
              "url": "https://www.youtube.com/watch?v=FUUpvbfNqjM"
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
      "summary": "Авторская рубрика для StopGame — «Где я нахуй?»",
      "categories": [
        "video"
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
      "logo": {
        "src": "assets/stopgame/StopGame_logo.png",
        "alt": "StopGame",
        "wide": true
      },
      "eyebrow": "Авторская рубрика · StopGame",
      "lead": "«Где я нахуй?» — разбираю архитектуру игровых городов, их устройство и связь с реальными местами.",
      "facts": [
        {
          "label": "Роль",
          "value": "Автор видео"
        },
        {
          "label": "Площадка",
          "value": "StopGame"
        },
        {
          "label": "Формат",
          "value": "Архитектура и игровые пространства"
        }
      ],
      "blocks": [
        {
          "type": "youtube-group",
          "eyebrow": "StopGame · Где я нахуй?",
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
      ]
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
          "type": "image",
          "src": "assets/roundabout/7.jpg",
          "alt": "Проектная схема площади и кольцевого пересечения с авторскими эскизными правками",
          "caption": "Проектная схема с моими эскизными правками. Нажмите, чтобы рассмотреть детали."
        },
        {
          "type": "media-row",
          "title": "Расположение и проектные решения",
          "items": [
            {
              "type": "image",
              "src": "assets/roundabout/Screenshot_22.png",
              "alt": "Расположение площади в городской структуре Ноябрьска",
              "caption": "Ситуация в городе. Подоснова — Google Карты."
            },
            {
              "type": "video",
              "src": "assets/roundabout/Noyabrsk_Sketches.mp4",
              "poster": "assets/roundabout/7.jpg",
              "motion": true,
              "label": "Эскизные проектные решения",
              "caption": "Эскизные проектные решения"
            }
          ]
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
        "summary": "Левел-дизайнер с архитектурным опытом. Проектирую игровые города и карты: планировку, дорожные сети, маршруты, ориентиры и рельеф. Работал над RCD в Unity, развиваю собственный шутер BRESH в Unreal Engine. Проектирую и реальные городские пространства.",
        "sections": [
          {
            "title": "Опыт в играх",
            "items": [
              {
                "title": "BRESH",
                "date": "Весна 2023 — настоящее время",
                "role": "Автор игры · геймдизайн и левел-дизайн · проектная занятость",
                "paragraphs": [
                  "Тактический мультиплеерный шутер с переключением между двумя мирами. Создал все карты: маршруты, стартовые позиции, обзоры и обходы в двух состояниях пространства. Собрал окружение из сторонних моделей; работаю над интерфейсами UMG, звуком и сборками. Unreal Engine, совместная работа с разработчиком."
                ],
                "url": "#bresh"
              },
              {
                "title": "Russian Car Drift (RCD)",
                "date": "Сентябрь 2023 — апрель 2024",
                "role": "Левел-дизайн города и сборка окружения · Unity",
                "paragraphs": [
                  "Разработал планировку города, дорожную сеть, дворы, маршруты, рельеф и ориентиры. Проверял проезды и дрифт в игре. Работал над зимним состоянием, освещением и второй картой с деревней и мостом, соединённой с городом. Использовал Grasshopper для рельефа."
                ],
                "url": "#rcd"
              }
            ],
            "key": "games"
          },
          {
            "title": "Анализ игровых миров",
            "items": [
              {
                "title": "StopGame",
                "date": "2025 — настоящее время",
                "role": "Автор видео",
                "paragraphs": [
                  "Разбираю архитектуру и устройство игровых городов, ориентирование, реальные прототипы и связь пространства с геймплеем. Автор рубрики «Где я нахуй?»: GTA: San Andreas, Forza Horizon 6 и Oblivion."
                ],
                "url": "#stopgame"
              }
            ],
            "key": "media"
          },
          {
            "title": "Навыки",
            "paragraphs": [
              "Unreal Engine, Unity, Blueprints / UMG, Grasshopper. Планировка, масштаб, маршруты, обзоры, ориентиры и проверка проездов в игре. Photoshop, Illustrator, Figma, Premiere Pro, After Effects."
            ],
            "key": "skills"
          },
          {
            "title": "Проекты городской среды",
            "items": [
              {
                "title": "Площадь и кольцевое пересечение в Ноябрьске",
                "date": "Реализованный проект",
                "role": "Городская среда и организация движения",
                "paragraphs": [
                  "Преобразование асфальтового пространства в пешеходную площадь. Работа с потоками людей и транспорта, автобусными маршрутами и траекториями снегоуборочной техники."
                ],
                "url": "#roundabout"
              },
              {
                "title": "Градостроительная концепция района в Краснодаре",
                "date": "Концепция",
                "role": "Планировка, схемы и эскизы",
                "paragraphs": [
                  "Квартальная застройка, парк и бульвар, транспортные связи и переход этажности к частной застройке. Разработал схемы, эскизы и презентацию предложения."
                ],
                "url": "#krd"
              },
              {
                "title": "ПРПР — Простое проектирование",
                "date": "Серия авторских проектов",
                "role": "Улицы и площади",
                "paragraphs": [
                  "Предложения для Дзержинского, Костромы, Краснодара и Дубны: планировка, пешеходные связи и организация движения. Схемы, визуализации до и после и разборы решений в блоге."
                ],
                "url": "#prpr"
              }
            ],
            "key": "urban"
          },
          {
            "title": "Архитектурная практика",
            "items": [
              {
                "title": "Независимые проекты и консалтинг",
                "date": "2018 — 2023",
                "role": "Архитектор · транспортное планирование",
                "paragraphs": [
                  "Проекты улиц и площадей; консультации по Ноябрьску и Благовещенску (Башкортостан)."
                ]
              },
              {
                "title": "Студия Транспортного Проектирования (STEP)",
                "date": "2017 — 2020",
                "role": "Архитектор",
                "paragraphs": [
                  "Транспортные схемы, 3D-визуализация, аэрофотосъёмка и моделирование в Grasshopper."
                ]
              },
              {
                "title": "Мастерская Лозинский и партнёры",
                "date": "2015 — 2017",
                "role": "Архитектор",
                "paragraphs": [
                  "Концептуальное проектирование, рабочая документация и 3D-визуализация."
                ]
              },
              {
                "title": "АСК «Доминанте»",
                "date": "2014 — 2015",
                "role": "Техник-архитектор",
                "paragraphs": [
                  "BIM-проектирование и рабочая документация."
                ]
              }
            ],
            "key": "history"
          },
          {
            "title": "Видео",
            "paragraphs": [
              "Алматы и Ташкент, 2023. Режиссура, раскадровка, монтаж и эффекты. Алматы — три недели, командировка и собственная съёмка; Ташкент — 27 октября — 3 декабря, удалённо, с отдельным оператором."
            ],
            "key": "video"
          },
          {
            "title": "Образование",
            "items": [
              {
                "title": "Московская школа кино",
                "date": "2017 — 2022",
                "role": "Filmmaking · режиссура короткой формы",
                "paragraphs": []
              },
              {
                "title": "МАрхИ",
                "date": "2011 — 2016",
                "role": "Бакалавр архитектуры",
                "paragraphs": []
              }
            ],
            "key": "education"
          },
          {
            "title": "Английский",
            "paragraphs": [
              "Чтение документации и переписка; разговорный — средний."
            ],
            "key": "language"
          }
        ]
      },
      {
        "id": "architecture",
        "label": "Архитектурное",
        "title": "Архитектор · транспортное планирование",
        "pdf": "assets/cv/Vladislav-Surin-Architect.pdf",
        "summary": "Архитектор и транспортный планировщик. Проектирую улицы, площади и городские пространства: работаю с планировкой, движением, пешеходными связями и визуальной подачей. Этот опыт применяю и в игровых городах.",
        "sections": [
          {
            "title": "Проекты городской среды",
            "items": [
              {
                "title": "Площадь и кольцевое пересечение в Ноябрьске",
                "date": "Реализованный проект",
                "role": "Городская среда и организация движения",
                "paragraphs": [
                  "Преобразование асфальтового пространства в пешеходную площадь. Работа с потоками людей и транспорта, автобусными маршрутами и траекториями снегоуборочной техники."
                ],
                "url": "#roundabout"
              },
              {
                "title": "Градостроительная концепция района в Краснодаре",
                "date": "Концепция",
                "role": "Планировка, схемы и эскизы",
                "paragraphs": [
                  "Квартальная застройка, парк и бульвар, транспортные связи и переход этажности к частной застройке. Разработал схемы, эскизы и презентацию предложения."
                ],
                "url": "#krd"
              },
              {
                "title": "ПРПР — Простое проектирование",
                "date": "Серия авторских проектов",
                "role": "Улицы и площади",
                "paragraphs": [
                  "Предложения для Дзержинского, Костромы, Краснодара и Дубны: планировка, пешеходные связи и организация движения. Схемы, визуализации до и после и разборы решений в блоге."
                ],
                "url": "#prpr"
              }
            ],
            "key": "urban"
          },
          {
            "title": "Архитектурная практика",
            "items": [
              {
                "title": "Независимые проекты и консалтинг",
                "date": "2018 — 2023",
                "role": "Архитектор · транспортное планирование",
                "paragraphs": [
                  "Проекты улиц и площадей; консультации по Ноябрьску и Благовещенску (Башкортостан)."
                ]
              },
              {
                "title": "Студия Транспортного Проектирования (STEP)",
                "date": "2017 — 2020",
                "role": "Архитектор",
                "paragraphs": [
                  "Транспортные схемы, 3D-визуализация, аэрофотосъёмка и моделирование в Grasshopper."
                ]
              },
              {
                "title": "Мастерская Лозинский и партнёры",
                "date": "2015 — 2017",
                "role": "Архитектор",
                "paragraphs": [
                  "Концептуальное проектирование, рабочая документация и 3D-визуализация."
                ]
              },
              {
                "title": "АСК «Доминанте»",
                "date": "2014 — 2015",
                "role": "Техник-архитектор",
                "paragraphs": [
                  "BIM-проектирование и рабочая документация."
                ]
              }
            ],
            "key": "history"
          },
          {
            "title": "Видео",
            "items": [
              {
                "title": "Алматы",
                "date": "2023 · три недели",
                "role": "Командировка · режиссура, съёмка и монтаж",
                "paragraphs": [
                  "Структура, раскадровка, операторская работа, монтаж и эффекты для презентации транспортных решений при небольшом бюджете."
                ]
              },
              {
                "title": "Ташкент",
                "date": "27 октября — 3 декабря 2023",
                "role": "Удалённо · режиссура и монтаж",
                "paragraphs": [
                  "Структура, раскадровка, монтаж и эффекты. Съёмку выполнял отдельный оператор. В обоих проектах отвечал за видеоподачу, а не за разработку транспортных решений."
                ]
              }
            ],
            "key": "video"
          },
          {
            "title": "Игры и медиа",
            "items": [
              {
                "title": "BRESH",
                "date": "Весна 2023 — настоящее время",
                "role": "Автор игры · проектная занятость",
                "paragraphs": [
                  "Левел-дизайн всех карт и сборка окружения в Unreal Engine; два состояния игрового пространства."
                ],
                "url": "#bresh"
              },
              {
                "title": "Russian Car Drift (RCD)",
                "date": "Сентябрь 2023 — апрель 2024",
                "role": "Левел-дизайн города · Unity",
                "paragraphs": [
                  "Планировка города, дороги, маршруты, рельеф и ориентиры. Зимнее состояние и связанная с городом вторая карта."
                ],
                "url": "#rcd"
              },
              {
                "title": "StopGame",
                "date": "2025 — настоящее время",
                "role": "Автор видео",
                "paragraphs": [
                  "Архитектурные разборы игровых городов и их реальных прототипов."
                ],
                "url": "#stopgame"
              }
            ],
            "key": "games"
          },
          {
            "title": "Навыки",
            "paragraphs": [
              "Транспортные схемы, концептуальное проектирование, рабочая документация и визуализация. Grasshopper, Photoshop, Illustrator, Figma, Premiere Pro, After Effects, Unity и Unreal Engine."
            ],
            "key": "skills"
          },
          {
            "title": "Образование",
            "items": [
              {
                "title": "Московская школа кино",
                "date": "2017 — 2022",
                "role": "Filmmaking · режиссура короткой формы",
                "paragraphs": []
              },
              {
                "title": "МАрхИ",
                "date": "2011 — 2016",
                "role": "Бакалавр архитектуры",
                "paragraphs": []
              }
            ],
            "key": "education"
          },
          {
            "title": "Английский",
            "paragraphs": [
              "Чтение документации и переписка; разговорный — средний."
            ],
            "key": "language"
          }
        ]
      }
    ]
  }
};
