// импортируем реакт и в фигурной скобке указываем вспомогательные функции например {useState} - для того что бы сохранять данные и потом использовать их
import React, { useState } from 'react';
import convert from 'convert-units';

// создаем наш компонент как стрелочную функцию
const Main = () => {
  // создаем хранилище данных сначала записываем название поля, потом функцию которая его устанавливает (заменяет)
  // что мы указываем в параметрах useState?
  // сначала используем функции состояний
  const [response, setResponse] = useState(null)
  const [input, setInput] = useState('')
  const [arrCitis, setArrCitis] = useState([])
  const [resArr, setResArr] = useState([])
  const [cityTemp, setCityTemp] = useState([])

  // пишем функцию которая забирает что то из сервера
  const getSomethingFromAPIHandler = () => {
    // стучимся на API
    (async () => {
      // все туры
      const reply = await fetch('https://module.sletat.ru/Main.svc/GetShowcaseReview?templateName=%D0%93%D0%BE%D1%80%D1%8F%D1%89%D0%B8%D0%B5+%D1%82%D1%83%D1%80%D1%8B+(%D0%A1%D0%9F%D0%B1)&login=tingol88@yandex.ru&password=cgfhnfr88')
      // получаем ответ от сервера 
      const result = await reply.json()
      // записываем состояние в state
      console.log('result', result);


      const newArr = await temperatureInCities(2);


      console.log('result', result.GetShowcaseReviewResult.Data);
      console.log('newArr', newArr);
      for (let i = 0; i < result.GetShowcaseReviewResult.Data.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
          console.log(result.GetShowcaseReviewResult.Data[i].ResortName);
          console.log(newArr[j].cityRu);
          if (result.GetShowcaseReviewResult.Data[i].ResortName === newArr[j].cityRu) {
            console.log(true);
            result.GetShowcaseReviewResult.Data[i].temp = +newArr[j].temp
            console.log(result.GetShowcaseReviewResult.Data[i].temp);
          }
        }
      }
      const newResult = result.GetShowcaseReviewResult.Data.filter((el) => el.temp > input).sort((a, b) => (+(a.MinPrice.replace(/\sRUB/g, ''))) - (+(b.MinPrice.replace(/\sRUB/g, ''))))
      console.log('result', result.GetShowcaseReviewResult.Data.filter((el) => el.temp > 10));
      setResponse(result)
      setResArr(newResult)
    })()

  }
  // функция которая записывает в state 
  const handleInput = (e) => {
    // непосредственно устанавливаем новое значение в state
    setInput(e.target.value)
    console.log(input);
  }
  // конверт градусов из К в цельсия
  function getTemp(temp) {
    return Math.round(convert(temp).from('K').to('C'));
  }
  // функция которая получает температуру
  const temperatureInCities = async (temp) => {

    const arrCitis = [
      { cityRu: 'Пицунда', city: 'Pitsunda' },
      { cityRu: 'Вена', city: 'Vienna' },
      { cityRu: 'Сант-Жулия-де-Лория', city: 'Sant-Julia-de-Loria' },
      { cityRu: 'Ереван', city: 'Yerevan' },
      { cityRu: 'Хевиз', city: 'Heviz' },
      { cityRu: 'Фантхиет', city: 'Phan-Thiet' },
      { cityRu: 'Салоники', city: 'Thessaloniki' },
      { cityRu: 'Пунта Кана', city: 'Punta-Cana' },
      { cityRu: 'Шарм-Эль-Шейх', city: 'Sharm-El-Sheikh' },
      { cityRu: 'Нетания', city: 'Netanya' },
      { cityRu: 'о. Бали', city: 'Bali-Island' },
      { cityRu: 'Мертвое море (Иордания)', city: 'Dead-Sea' },
      { cityRu: 'Барселона', city: 'Barcelona' },
      { cityRu: 'Монтекатини Терме', city: 'Montecatini-Terme' },
      { cityRu: 'Доха', city: 'Doha' },
      { cityRu: 'Пафос', city: 'Ayia-Napa' },
      { cityRu: 'Варадеро', city: 'Varadero' },
      { cityRu: 'Маврикий', city: 'Mauritius' },
      { cityRu: 'Куала-Лумпур', city: 'Kuala-Lumpur' },
      { cityRu: 'Мале', city: 'Male' },
      { cityRu: 'Марракеш', city: 'Marrakech' },
      { cityRu: 'Ривьера Майя', city: 'Riviera-Maya' },
      { cityRu: 'Дубай', city: 'Dubai' },
      { cityRu: 'Кудова Здрой', city: 'Kudowa-Zdrój' },
      { cityRu: 'о. Праслин', city: 'Praslin' },
      { cityRu: 'Паттайя', city: 'Pattaya' },
      { cityRu: 'о. Занзибар', city: 'Zanzibar Island' },
      { cityRu: 'Аланья', city: 'Alanya' },
      { cityRu: 'Хельсинки', city: 'Helsinki' },
      { cityRu: 'Долина Луары', city: 'Loire-Valley' },
      { cityRu: 'Боко-Которская бухта', city: 'Boko-Kotor-Bay' },
      { cityRu: 'Прага', city: 'Prague' },
      { cityRu: 'Берн', city: 'Bern' },
      { cityRu: 'Хиккадува', city: 'Hikkaduwa' },
      { cityRu: 'Киото', city: 'Kyoto' },
      { cityRu: 'Мюнхен', city: 'Munich' },
      { cityRu: 'Байкал', city: 'Baikal' },
    ]

    // setArrCitis(arrCitis)
    const data = [];
    for (let i = 0; i < arrCitis.length; i++) {
      try {

        const ftch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${arrCitis[i].city}&appid=c9e73c47e9f8d95e2def651a929c8199`);

        const tempFtch = await ftch.json();
        const tempK = tempFtch.main.temp_max;
        const tempCelc = getTemp(tempK);
        data.push({ cityRu: arrCitis[i].cityRu, city: arrCitis[i].city, temp: tempCelc, });

      } catch {
        data.push({ cityRu: arrCitis[i].cityRu, city: arrCitis[i].city, temp: -100, });
      }



    }
    for (let i = 0; i > cityTemp.length; i++) {
      if (cityTemp[i].cityRu === response.GetShowcaseReviewResult.Data[i].ResortName) {
        response.GetShowcaseReviewResult.Data[i].temp = cityTemp[i].temp
      }
    }
    setCityTemp(data);
    console.log(data);
    console.log(cityTemp);
    console.log('response', response)


    return data.filter((el) => el.temp > temp);
  };

  // после этого отрисовываем элемент внутрь которого вставляем html  и в {передаем изменяемые параметры как в hbs}
  return (
    // сначала отрисовываем div контейнер он всегда один
    // class записываем через className
    // события задаются через onChange, onClick
    <div className='main-container container'>
      <div className="row">
        <div className="col-flex">

          <h1>Privet!</h1>
          <input type='text' placeholder='Введите температуру' onChange={handleInput} />
          <button onClick={getSomethingFromAPIHandler}>Get something</button>
        </div>
        {
          resArr ?
            resArr.map((template, i) => {
              {/* let newTempInSity = await temperatureInCities(template.ResortName); */ }
              return (
                <div className="col-4" key={template.CountryId}>
                  <img src={template.CountryImageUrl} width="100px" />
                  <br />
                  <div>Цена: {template.MinPrice}</div>
                  <div>{template.StarName}</div>
                  <div>Дата вылета: {template.MinPriceDate}</div>
                  <div>Ночей: {template.Nights}</div>
                  <div> Страна: {template.CountryName}</div>
                  <div>{template.ResortName}</div>
                  <div> Питание: {template.MealName}</div>
                  <div>{template.temp}</div>
                  <br />
                </div>
              )
            })
            :
            <div>netu</div>
        }

        {/* <div className="row">
          {
            response ?
              response.GetShowcaseReviewResult.Data.map((template, i) => {
                return (
                  <div className="col-4" key={template.CountryId}>
                    <img src={template.CountryImageUrl} width="100px" />
                    <br />
                    <div>Цена: {template.MinPrice}</div>
                    <div>{template.StarName}</div>
                    <div>Дата вылета: {template.MinPriceDate}</div>
                    <div>Ночей: {template.Nights}</div>
                    <div> Страна: {template.CountryName}</div>
                    <div>{template.ResortName}</div>
                    <div> Питание: {template.MealName}</div>
                    <div>{cityTemp[i]?.temp}</div>
                    <br />
                  </div>
                )
              })
              :
              <div>netu</div>
          }
        </div> */}
      </div>
    </div>
  )
}

export default Main
