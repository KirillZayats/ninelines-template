# Задание от [Ninelines.agency](https://ninelines.agency/)

## Задача
Необходимо сверстать одностраничный сайт под десктопную и мобильную версию с анимациями и шерингом

## Требования и детали

- Во время выполнения заданий нужно засечь время на выполнение;
- Обязательное использование внутренней сборки [ninelines-template](https://www.figma.com/exit?url=https%3A%2F%2Fgithub.com%2Fninelines-team%2Fninelines-template);
- Для реализации скролла и некоторых анимаций использовать библиотеку [locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll);
- После завершения работ обязательно проверить на наличие ошибок через линтер (см. [ninelines-docs](https://github.com/ninelines-team/ninelines-docs/));
- Верстка  для десктопа должна быть резиновой от 1025пх до 1800пх, далее переходит в статику с центрирование текстового контейнера, необходимые брекпоинты и функции вычисления уже реализованы в шаблоне vw, px, desktop, desktop-xl;
- Верстка для девайсов должна быть резиновой от 0 до 1024пх, далее переход в десктоп, для этого нужно ;использовать функции devices и vm/vmin, иногда на проектах используются tablet/mobile и vm/vmin/vt, но в данном случае это можно пропустить для упрощения работы;
- Для примера структуры проектов стартовый шаблон уже имеет несколько файлов, новые файлы необходимо создавать по аналогии;
- В мобильном меню необходимо реализовать блокировку страницы, чтобы скролл в меню не давал скролла на всей странице. Для тех кто хочет заработать дополнительные баллы с помощью динамических шерингов, можно использовать библиотеку html2canvas.

## Как запустить проект
Для инициализации проекта установите зависимости с помощью команды:

```sh
npm install
```

Запустить локально проект (запускает build, watch и serve):

```sh
gulp default
```

**_Деплой сделан через Gh-pages._**
**_Ссылка на продакшен: [Nine Lines](https://kirillzayats.github.io/ninelines-template/)_**

## Что было использовано:

- [x] Pug;
- [x] Scss;
- [x] Javascript;
- [x] Lib "html2canvas";
- [x] Lib "Locomotive Scroll".

## Добавлены файлы:
### Pug:
* `aboutMe` — раздел о себе, путь `pug/components/home`.
* `love` — раздел с изображением сердечка, путь `pug/components/home`.
* `skills` — раздел с описанием скилов, путь `pug/components/home`.
* `resume` — раздел с небольшим описанием меня и шерингом на соц. сети, путь `pug/components/home`.

* `header` — меню сайта, путь `pug/components/`.
* `preloader` — прелоадер сайта, путь `pug/components/`.
* `scrollIndicator` — скролл индикатор, путь `pug/components/`.
* `share` — модульное окно шеринга, путь `pug/components/`.

### SCSS
**Все описанные выше файлы имеют свои стили и находятся по такому же пути, но только в папке _scss_**
* `animations` — настройки для анимаций, которые можно использовать без библиотеки [locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll), путь `scss/animations/`.
* `locomotive-scroll` — настройки для библиотеки locomotive scroll, путь `scss/`.
* `_animations` — в файле находится миксин и анимация пульсации объектов, путь `scss/mixins/`.

**Некоторые другие файлы были обновлены. Например в файле `_helpers` (путь `scss/mixins/`) были добавлены новые миксины**

### JS
* `domHelper` — файл с классом DOM, которые утращает взаимодействие с DOM деревом, путь `js/`.
* `burgerMenu` — настройка бургер меню сайта, путь `js/components`.
* `home` — инициализация анимации для элементов страницы (если locomotive scroll отключить), путь `js/components`.
* `listNav` — переключение разделов, путь `js/components`.
* `preloader` — настройка прелоадера, путь `js/components`.
* `scrollIndicator` — настройка индикатора прокрутки страницы, путь `js/components`.
* `share` — скрипт по взаимодействию с модульным окном шеринга, путь `js/components`.
* `preloader` — настройка прелоадера, путь `js/components`.

* `locomotive` — инизиалицая компонента для библиотеки **locomotive scroll**, путь `js/modules`.
* `observer` — инициализация обсервера для анимаций и изменении размеров страницы, путь `js/modules`.

## Документация

Документация к данной сборке доступна по ссылке [https://github.com/ninelines-team/ninelines-docs](https://github.com/ninelines-team/ninelines-docs).
