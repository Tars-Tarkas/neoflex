### Необходимо разработать две страницы интернет-магазина аудио аксессуаров.

Для запуска:

```
git clone https://github.com/Tars-Tarkas/neoflex.git
cd neoflex
npm install
npm run start
```

### Языки программирования и инструменты

<div id="badges" style='text-align:center; padding:30px' >
  <img src="./design/icons/react.svg" height ="80" alt="ReactJS" style='padding-right:20px'/>
  <img src="./design/icons/typescript.svg" height ="80" alt="Typescript"/>  
  <img src="./design/icons/redux.svg" height ="80" alt="Redux"/>  
  <img src="./design/icons/styled-components.png" height ="80" alt="Styled-Components" style='padding-left:20px'/>    
</div>

```
Первая страница – каталог товаров, вторая – корзина с приобретенными товарами.
Макет доступен по сылке: https://www.figma.com/file/bBkg5W8GRwGmhNCVeXevoN/Neoflex-Invite-Test?node-id=0%3A1
При нажатии на «Купить» в карточке на первой странице счетчик товаров рядом с иконкой корзины должен увеличиваться
```

<img src="./design/01.png" alt="drawing"/>

```
При изменении количества товаров в корзине, сумма должна изменяться
```

<img src="./design/02.png" alt="drawing"/>

```
Обязательным условием является хранение данных о каждом товаре в виде элемента массива,
например:
```

<img src="./design/03.png" alt="drawing" width="400"/>

```
и подстановка данных в карточки товара из полученных данных этого массива.
Для передачи информации о выбранных в корзину позиций можно использовать SessionStorage.
```
