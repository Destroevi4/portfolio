// РЕДАКТИРУЙ ЭТОТ ФАЙЛ. Дизайн и код страницы лежат отдельно.
// Порядок объектов в projects = порядок карточек на сайте.
// Копируй проект целиком для добавления нового. id должен быть уникальным и постоянным.
// categories — список категорий проекта: можно несколько, например ["games", "video"].
// visible: false — скрывает проект; true — показывает.
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
      "Пространства.",
      "Игры. Истории."
    ],
    "intro": "Я Владислав Сурин — архитектор, автор игр и режиссёр. Создаю игровые пространства, работаю с городской средой и рассказываю истории через видео.",
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
          "type": "text",
          "title": "Мой вклад",
          "paragraphs": [
            "Работаю над игрой целиком: от идеи и игровых решений до реализации и выпуска. Сам разработал все карты и собрал окружение."
          ],
          "notes": [
            "Код разработан совместно с другим разработчиком. Модели окружения — сторонние."
          ],
          "bullets": [
            "Концепция и геймдизайн.",
            "Планировка и сборка всех уровней.",
            "Сборка окружения из готовых моделей.",
            "Интерфейс и внутриигровые системы."
          ]
        },
        {
          "type": "text",
          "title": "Два мира — разные пути",
          "paragraphs": [
            "Игрок переключается между двумя версиями одной карты. Архитектура и препятствия в них различаются: смена мира открывает другие пути и позволяет пройти участки, недоступные в текущем мире."
          ]
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
      ]
    },
    {
      "id": "rcd",
      "visible": true,
      "title": "Город для RCD",
      "coverTitle": "RCD",
      "summary": "Улицы, маршруты, рельеф и ориентиры для гоночной игры.",
      "categories": [
        "games"
      ],
      "tag": "UNITY",
      "cover": {
        "src": "assets/rcd/cover.jpg",
        "alt": "",
        "position": "50% 50%",
        "fit": "cover",
        "background": "#e1dfd5",
        "color": "#575e54"
      },
      "eyebrow": "Левел-дизайн города",
      "lead": "Целый город для гоночной игры: уличная сеть, маршруты, рельеф и ориентиры.",
      "facts": [
        {
          "label": "Роль",
          "value": "Левел-дизайн всего города"
        },
        {
          "label": "Движок",
          "value": "Unity"
        },
        {
          "label": "Объект работы",
          "value": "Городская среда для гоночной игры"
        }
      ],
      "blocks": [
        {
          "type": "text",
          "title": "Мой вклад",
          "paragraphs": [
            "Разработал город целиком как игровое пространство: планировку улиц, маршруты, рельеф и систему ориентиров."
          ],
          "bullets": [
            "Планировка и связность уличной сети.",
            "Маршруты передвижения по городу.",
            "Рельеф и перепады высот.",
            "Ориентиры и организация городской среды."
          ]
        },
        {
          "type": "text",
          "title": "Общая структура",
          "paragraphs": [],
          "placeholder": "Место для общего плана города\nи основных маршрутов"
        },
        {
          "type": "text",
          "title": "От замысла к городу",
          "paragraphs": [
            "Здесь будут эскизы, виды из движка и пояснения к конкретным проектным решениям."
          ],
          "placeholder": "Место для эскиза\nи соответствующего участка города"
        }
      ]
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
      ]
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
        "src": "assets/graphics/different/Народные_Гуляния_web.jpg",
        "alt": "Иллюстрация «Народные гуляния»",
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
      ]
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
      ]
    }
  ]
};
