# RSSchool NodeJS websocket task template
> Static http server and base task packages.

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start:dev`

* App served @ `http://localhost:3000` with nodemon

**Production**

`npm run start:prod`

* App served @ `http://localhost:3000` without nodemon

---

**All commands**

Command | Description
--- | ---
1) На стрелки ↑ ↓ ← → можно двигать курсор на заданный шаг.   
Чтобы задать шаг в поле Mouse control offset (px) необходимо ввести нужное значение.   
По умолчанию шаг 10 px.  

2) По нажатию клавиши (английская раскладка) курсор может рисовать следующие фигуры:  
C - circle (круг) -> радиус задаётся в поле Figure width or radius (px), (по умолчанию 100);
S - square (квадрат) -> сторона задаётся в поле Figure width or radius (px), (по умолчанию 100);  
R - rectangle (прямоугольник);  


3) По нажатию на клавиши LCtrl + P отображается скриншот.  
размер скриншота - 200px/200pх, позиция курсора в центре. 
