<div align="center">

<img src="docs/banner.png" alt="OLESA — лендинг мастера по наращиванию ресниц" width="100%">

<br>

[![Live Demo](https://img.shields.io/badge/Live-Demo-C9A882?style=for-the-badge&labelColor=1F1C18&logo=googlechrome&logoColor=white)](https://nonrp-cpu.github.io/Olesa-lash/)
[![Deploy Guide](https://img.shields.io/badge/Deploy-Guide-C9A882?style=for-the-badge&labelColor=1F1C18&logo=github&logoColor=white)](#-деплой-за-3-минуты)
[![Report a bug](https://img.shields.io/badge/Report-Issue-C9A882?style=for-the-badge&labelColor=1F1C18&logo=githubactions&logoColor=white)](https://github.com/Nonrp-cpu/Olesa-lash/issues)

![No build step](https://img.shields.io/badge/build-none%20needed-success?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/layout-responsive-blueviolet?style=flat-square)
![License](https://img.shields.io/badge/license-custom-blue?style=flat-square)
![Stars](https://img.shields.io/github/stars/Nonrp-cpu/Olesa-lash?style=flat-square&color=C9A882)
![Last commit](https://img.shields.io/github/last-commit/Nonrp-cpu/Olesa-lash?style=flat-square&color=C9A882)

**Тёплый, минималистичный лендинг для мастера по наращиванию ресниц.**
Статические HTML, CSS и JavaScript — без сборки, Node.js и установки зависимостей.

</div>

> 📌 **Перед публикацией.** Файлы `docs/banner.png` и `docs/screenshots/*.png` пока заглушки: сделайте скриншоты сайта и положите их в эти папки с теми же именами. Также замените демонстрационные контакты и тексты отзывов на реальные.

<details>
<summary><b>Содержание</b></summary>

- [Особенности](#-особенности)
- [Предпросмотр](#-предпросмотр)
- [Деплой за 3 минуты](#-деплой-за-3-минуты)
- [Запуск локально](#-запуск-локально)
- [Кастомизация](#-кастомизация)
- [Структура проекта](#-структура-проекта)
- [Технологии](#-технологии)
- [Доступность и производительность](#-доступность-и-производительность)
- [Решение проблем](#-решение-проблем)
- [Планы](#-планы)
- [Лицензия и автор](#-лицензия-и-автор)

</details>

## ✨ Особенности

| | |
| --- | --- |
| 🌿 **Hero-секция** | Крупная типографика OLESA, градиент, счётчики статистики |
| 💫 **Услуги** | 6 карточек процедур с длительностью и ценой |
| 🖼 **Портфолио** | Галерея работ с увеличением фото в lightbox |
| 👤 **О мастере** | Фото, сертификаты, материалы и социальные ссылки |
| 💰 **Прайс-лист** | Вкладки «Наращивание / Коррекция / Уход» |
| ⭐ **Отзывы** | Карточки клиентов с оценкой |
| 📋 **Памятка по уходу** | 6 правил после процедуры |
| ❓ **FAQ** | Вопросы и ответы в `<details>` |
| 📝 **Форма записи** | Валидация имени и телефона, сообщение об успехе |
| 💬 **Мессенджеры** | WhatsApp и Telegram для быстрой связи |
| 📍 **Карта проезда** | Адрес, метро и кнопка маршрута в Яндекс.Картах |
| 📱 **Адаптивность** | Телефоны, планшеты и широкие экраны, мобильное меню |

## 🖼 Предпросмотр

| Desktop | Gallery | Mobile |
| :---: | :---: | :---: |
| ![Desktop](docs/screenshots/desktop.png) | ![Gallery](docs/screenshots/gallery.png) | <img src="docs/screenshots/mobile.png" width="180" alt="Mobile"> |

> 📌 Это заглушки. Сделайте скриншоты работающего сайта и сохраните их поверх `docs/screenshots/desktop.png`, `gallery.png` и `mobile.png` — менять README не понадобится.

<details>
<summary>Баннер для README</summary>

![Banner](docs/banner.png)

</details>

## 🚀 Деплой за 3 минуты

Сайт состоит только из HTML, CSS и JavaScript. **Никакой сборки, Node.js и установок.**

**Вариант А — через браузер (без инструментов)**

1. Создайте новый публичный репозиторий на GitHub.
2. Нажмите **Add file → Upload files**, перетащите **всё содержимое этой папки** (не саму папку: `index.html` должен лежать в корне репозитория) и закоммитьте.
3. Откройте **Settings → Pages**, выберите **Deploy from a branch**, ветку `main`, папку `/ (root)` и сохраните.

Через минуту сайт будет доступен по адресу `https://Nonrp-cpu.github.io/Olesa-lash/`.

**Вариант Б — через Git**

```bash
git init
git add .
git commit -m "Initial commit: Olesa"
git branch -M main
git remote add origin https://github.com/Nonrp-cpu/Olesa-lash.git
git push -u origin main
```

После этого включите Pages, как в шаге 3 выше.

> GitHub Pages отдаёт файл `index.html` из опубликованной папки, поэтому точка входа проекта лежит в корне.

## 💻 Запуск локально

Откройте `index.html` в браузере или запустите локальный сервер (рекомендуется):

```bash
python3 -m http.server 8000
# или
npx serve .
```

## 🎨 Кастомизация

<details>
<summary><b>Фото в галерее и фото мастера</b></summary>

Файлы лежат в `images/`: `work-1.jpg` … `work-6.jpg` и `master.jpg`. Имена должны совпадать с `src` в `index.html`.

Сейчас это демонстрационные заглушки: если локального файла нет, `script.js` подставляет фото с `picsum.photos` через атрибут `data-fallback`. Уберите заглушку, когда появятся реальные снимки.

</details>

<details>
<summary><b>Фото на карточках услуг</b></summary>

Добавьте файлы, например `images/service-1.jpg` … `images/service-6.jpg`, и вставьте тег внутрь каждого `<article class="card">` в `index.html`:

```html
<img src="images/service-1.jpg" alt="Классическое наращивание" class="card__img" loading="lazy" />
```

И стили в `styles.css`:

```css
.card__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
}
```

</details>

<details>
<summary><b>Услуги, цены и тексты</b></summary>

Все тексты, карточки услуг, строки прайса, отзывы, вопросы FAQ и правила ухода находятся прямо в `index.html`. Измените их под реального мастера: например, замените демонстрационные отзывы и адрес «Москва, ул. Тверская, 15».

</details>

<details>
<summary><b>Контакты</b></summary>

Телефон, email и ссылка WhatsApp в `index.html` пока демонстрационные (`NONE` и пустой `href`). Заполните их в блоке записи и в кнопках мессенджеров. Ссылка Telegram уже ведёт на реальный канал — проверьте её перед публикацией.

Форма записи не отправляет данные на сервер: она только проверяет поля и показывает сообщение об успехе. Для приёма заявок подключите бэкенд или сервис форм.

</details>

<details>
<summary><b>Цвета и шрифты</b></summary>

Переменные дизайна находятся в `:root` в начале `styles.css`:

```css
--bg: #faf8f5;
--accent: #c9a882;
--accent-strong: #b8935f;
--font-display: "DM Serif Display", Georgia, serif;
```

</details>

## 🗂 Структура проекта

```text
.
├── index.html              # точка входа (GitHub Pages отдаёт этот файл)
├── styles.css              # стили и дизайн-токены
├── script.js               # меню, скролл, lightbox, вкладки, форма
├── images/
│   ├── work-1.jpg          # портфолио
│   ├── work-2.jpg
│   ├── work-3.jpg
│   ├── work-4.jpg
│   ├── work-5.jpg
│   ├── work-6.jpg
│   └── master.jpg          # фото мастера
├── docs/
│   ├── banner.png          # баннер README
│   └── screenshots/        # скриншоты для README
└── README.md
```

## 🛠 Технологии

| Область | Инструменты |
| --- | --- |
| Вёрстка | HTML5, CSS3 (переменные, Grid, Flexbox, анимации) |
| Логика | Vanilla JavaScript (ES6), без фреймворков |
| Иконки | Inline SVG |
| Шрифты | Outfit, DM Serif Display (Google Fonts) |
| Хостинг | GitHub Pages |

Тяжёлые фреймворки намеренно не используются: одностраничный сайт загружается быстрее и проще поддерживается.

## ♿ Доступность и производительность

- Семантическая структура, `aria-label` на кнопках, видимые состояния фокуса.
- Поддержка `prefers-reduced-motion`: анимации отключаются по предпочтениям пользователя.
- `IntersectionObserver` для появления блоков и анимации счётчиков.
- `loading="lazy"` у фотографий и запасные изображения, если локального файла нет.
- Плавная прокрутка, мобильное меню с закрытием по `Esc`.

## 🧯 Решение проблем

| Проблема | Решение |
| --- | --- |
| Pages показывает 404 | Проверьте, что `index.html` лежит в **корне** репозитория, а Pages использует ветку `main` и папку `/ (root)`. |
| Стили или фото не загружаются | На GitHub имена файлов чувствительны к регистру. Не меняйте структуру папок. |
| Шрифты выглядят иначе | Шрифты грузятся с Google Fonts и требуют интернета. |
| Изменения не видны | Подождите минуту до пересборки Pages и обновите страницу с Ctrl/Cmd + Shift + R. |
| WhatsApp не открывается | Заполните `href` кнопки WhatsApp в `index.html`. |
| Фото подставлены со стора | Положите свои файлы в `images/` с именами из `index.html` или уберите `data-fallback`. |

## 🗺 Планы

- [x] Адаптивная верстка и мобильное меню
- [x] Галерея с lightbox и прайс с вкладками
- [x] Форма записи и мессенджеры
- [ ] Реальные фотографии услуг и работ
- [ ] Реальные отзывы и контактные данные
- [ ] Отправка заявок на сервер или в CRM
- [ ] SEO: sitemap и структурированные данные

## 📄 Лицензия и автор

Проект создан по индивидуальному заказу.

Фото в демо-версии: [picsum.photos](https://picsum.photos/) — замените на свои перед публикацией.
Шрифты: [Outfit](https://fonts.google.com/specimen/Outfit) и [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display), SIL Open Font License.

**Nonrp-cpu** — [GitHub](https://github.com/Nonrp-cpu)

<div align="center">

<sub>Сделано с заботой о каждом взгляде</sub>

</div>
