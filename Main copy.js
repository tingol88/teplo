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

  // пишем функцию которая забирает что то из сервера
  const getSomethingFromAPIHandler = () => {
    // стучимся на API
    (async () => {
      // все туры
      const reply = await fetch('https://module.sletat.ru/Main.svc/GetShowcaseReview?templateName=%D0%93%D0%BE%D1%80%D1%8F%D1%89%D0%B8%D0%B5+%D1%82%D1%83%D1%80%D1%8B+(%D0%A1%D0%9F%D0%B1)&login=tingol88@yandex.ru&password=cgfhnfr88')
      // получаем ответ от сервера 
      const result = await reply.json()
      // Турция
      const replyTurky = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      // const reply = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      // получаем ответ от сервера 
      const resultTurky = await replyTurky.json()
      // записываем состояние в state
      // ОАЭ
      const replyUAE = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultUAE = await replyUAE.json()
      // Куба
      const replyCuba = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultCuba = await replyCuba.json()

      // Занзибар
      const replyZanzibar = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultZanzibar = await replyZanzibar.json()
      // Egipt
      const replyEgipt = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultEgipt = await replyEgipt.json()
      //  Абхазия
      const replyAbhasia = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultAbhasia = await replyAbhasia.json()
      //  Мальдивы
      const replyMaldives = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultMaldives = await replyMaldives.json()
      // Греция
      const replyGreek = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      // Греция
      const replyThay = await fetch('https://module.sletat.ru/Main.svc/GetTours?groupBy=so_price&countryId=119&cityFromId=832&currencyAlias=RUB&pageSize=3&pageNumber=1&s_nightsMin=7&s_nightsMax=14&s_showcase=true&includeOilTaxesAndVisa=1&login=Tingol88@yandex.ru&password=cgfhnfr88&includeDescriptions=1')
      const resultThay = await replyThay.json()
      setResponse(result)
      console.log(response);
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
  const temperatureInCities = async (arrCitis, temp) => {
    const data = [];
    for (let i = 0; i < arrCitis.length; i++) {
      const ftch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${arrCitis[i].city}&appid=c9e73c47e9f8d95e2def651a929c8199`);
  
      const tempFtch = await ftch.json();
      const tempK = tempFtch.main.temp_max;
      const tempCelc = getTemp(tempK);
      data.push({ city: arrCitis[i].city, temp: tempCelc, turLink: arrCitis[i].turLink });
    }
  
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
          <input type='text' placeholder='Enter pokemon name' onChange={handleInput} />
          <button onClick={getSomethingFromAPIHandler}>Get something</button>
        </div>
        <div className="row">
          {/* {
            response ?
              <img src={response.sprites.front_default}/>
              :
              <div>netu</div>
          } */}


          {/* {
            response ?
              response.GetToursResult.Data.aaData.map((template) => {
                return (
                  <div key={template[92]} className="col-4">
                    <img src={template[29]} width="100px" />
                    <br />

                    <img src={template[34]} />
                    <div>Тур: {template[6]}</div>
                    <div>Цена: {template[15]}</div>
                    <div>{template[8]}</div>
                    <div>Дата вылета: {template[12]}</div>
                    <div> Страна: {template[31]}</div>
                    <div> Описание: {template[38]}</div>
                    <div> Питание: {template[36]}</div>
                    <><a href="{template[47]}">Покупай </a></>

                    <br />
                  </div>
                )
              })
              :
              <div>netu</div>
          } */}
          {
            response ?
              response.GetShowcaseReviewResult.Data.map((template) => {
                return (
                  <div className="col-4" key={template.CountryId}>
                    <img src={template.CountryImageUrl} width="100px" />
                    <br />
                    <div>Цена: {template.MinPrice}</div>
                    <div>{template.StarName}</div>
                    <div>Дата вылета: {template.MinPriceDate}</div>
                    <div>Ночей: {template.Nights}</div>
                    <div> Страна: {template.CountryName}</div>
                    <div> Город: {template.ResortName}</div>
                    <div> Питание: {template.MealName}</div>


                    <br />
                  </div>
                )
              })
              :
              <div>netu</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Main
