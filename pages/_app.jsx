import '../css/globalcss.css'

export default function MyApp({ Component, pageProps }) {
    return <><header><h1>ООО "Компьютер-Сервис"</h1>
    <h2>Возможно, мы уже решили ваши проблемы...</h2>
       </header>
    <Component {...pageProps} />
    <footer><p>Последнее обновление страницы 05.04.2024<br></br>
    Телефон:   (495)2223344, e-mail:kruto@compserv.ru, пейджер (495)1111111, ICQ 324322342<br></br>
    Web-master Константин Павлович, mmm@compserv.ru<br></br></p>
      </footer></>
  }
  // <img src="plan.gif"></img>