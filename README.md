# 🎮 Simon Game (React Version)

This is a modern React-based implementation of the classic Simon Game, where players repeat sequences of colored button presses. Each round adds a new color to the sequence, testing memory and attention span.

## 🔗 Live Demo

 👉 [Play Now](https://itsrahul-simon-game.vercel.app/).

## 🧪 Built With

- ⚛️ React (with functional components & hooks)

- 🎨 CSS (with button animations and responsive layout)

- 🔊 HTML5 Audio API

> Previous versions were built with HTML, CSS,       JavaScript, and jQuery — this has now been completely refactored using React.

## 📁 Project Structure

```pgsql
simon-game/
├── public/
│   ├── index.html
│   └── sounds/                # Sound files (.mp3)
├── src/
│   ├── components/
│   │   ├── ColorButtons.jsx
│   │   ├── Ibutton.jsx
│   │   ├── Icon.jsx
│   │   ├── IList.jsx
│   │   ├── MainButtons.jsx
│   │   ├── MainText.jsx
│   │   └── PlayButtons.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
```

## 🎨 UI Components

| Component        | Description                                      |
|------------------|--------------------------------------------------|
| `ColorButtons`   | Interactive tiles for the game (Green, Red, etc) |
| `MainButtons`    | Start / Restart game button                        |
| `MainText`       | Displays level text or game status               |
| `Ibutton`        | Info or about toggle button                      |
| `IList`          | Instructional items in the info section          |



## 🚀 How to Run Locally

### Installation



```bash
git clone https://github.com/sonir746/Simon-Game.git
cd simon-game
npm install
npm start
```

The app will run at ```http://localhost:3000```.



## 🕹️ How to Play

1. ▶️ **Click the Start button** to begin the game.

2. 💡 **Watch carefully** — one of the colored tiles will flash.

3. 🧠 **Remember the sequence** of flashes and sounds.

4. 🎯 **Click the buttons** in the **exact same order**.

5. 🔁 **With each level,** the sequence grows longer.

6. ❌ **Wrong click?** Game over — try again by pressing Start!

## ✨ Features

- Flash + sound feedback

- Progressive level increase

- Game over detection

- Responsive design for desktop (PC optimized)

- React state management using ```useState``` & ```useRef```

<br>

## 🧑‍💻 Author

👨🏻‍💼 Rahul Soni

[![LinkedIn](https://img.shields.io/twitter/url?url=https%3A%2F%2Fwww.linkedin.com&style=social&logo=Linkedin&logoColor=White&label=LinkedIn&labelColor=blue&color=blue&cacheSeconds=3600)](https://www.linkedin.com/in/rahul-soni-004861227)
[![GitHub](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2F&style=social&logo=GitHub&logoColor=Black&label=GitHub&labelColor=abcdef&color=fedcba&cacheSeconds=3600)](https://github.com/sonir746)

## 🛠️  Feedback & Issues

If you have any feedback, please reach out to me at rahulsoni7469@gmail.com or report any issues [here](https://github.com/sonir746/Simon-Game/issues).

