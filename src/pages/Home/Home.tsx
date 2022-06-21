import React, { FC, useCallback, useEffect, useState } from 'react'
import { Divider, Footer, HeaderWrapper } from '../../components'
import { Document, Page, pdfjs } from 'react-pdf'

import {
  Address,
  Container,
  Deal,
  Feed,
  HeaderText,
  ImageStyled,
  ImageWrapper,
  InfoWrapper,
  Input,
  Name,
  Online,
  PaginationButton,
  PaginationContainer,
  PaginationText,
  Spec,
  Status1,
  Status2,
  Status3,
  StatusInWork,
  StyledRadio,
  TextWrapper,
  UserContainer,
} from './styled'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Rate from 'rc-rate'
import 'rc-rate/assets/index.css'

import './styles.css'
import { COLORS } from '../../assets'
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import Switch from 'react-switch'
import 'react-dropdown/style.css'
import asd1 from '../../assets/images/1.jpg'
import asd2 from '../../assets/images/2.jpg'

import asd3 from '../../assets/images/3.jpg'
import asd4 from '../../assets/images/4.jpg'
//@ts-ignore
import pdf from '../../assets/images/pdf.pdf'

const HomePage: FC = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const [module, setModule] = useState(1)

  const [message, setMessage] = useState('')

  const [files, setFiles] = useState([
    {
      module: 1,
      files: [
        {
          title: `КЛАСИ І ОБ'ЄКТИ У МОВІ ПРОГРАМУВАННЯ C++`,
          url: 'https://drive.google.com/file/d/1nJ-HOhT96jW-GYC5Aarw2_fFgzMtPwxq/preview',
        },
        {
          title: `Презентація КЛАСИ І ОБ'ЄКТИ У МОВІ ПРОГРАМУВАННЯ C++`,
          url: 'https://drive.google.com/file/d/13zuFhUSq7tcIFoEuY1lGwrPI3KO3WsY9/preview',
        },
        {
          title: 'Презентація Конструктори та деструктори',
          url: 'https://drive.google.com/file/d/1HQSQ2ojxIvfkm6J5grjl4xinXEdT0tE3/preview',
        },
        {
          title: 'КОНТРОЛЬ ДОСТУПА ДО ОБ’ЄКТУ',
          url: 'https://drive.google.com/file/d/1sbUZdQEVX6aOYO4tJ1_WER01lJ4tGv1u/preview',
        },
        {
          title: 'Презентація КОНТРОЛЬ ДОСТУПА ДО ОБ’ЄКТУ',
          url: 'https://drive.google.com/file/d/1OTbj6Ic0sif-o_mpkJcmg0uapahBbmsz/preview',
        },
        {
          title: 'Реалізація спадкування мовою С++',
          url: 'https://drive.google.com/file/d/1G0D0LCxjmzcA2dDLUmUwmUSiSO0yDnIp/preview',
        },
        {
          title: 'Презентація Реалізація спадкування мовою С++',
          url: 'https://drive.google.com/file/d/12tZZ-NHd-Q0lP0nIEf-fAboBAayD0Mud/preview',
        },
        {
          title: 'Код лекції: Реалізація спадкування мовою С++',
          url: 'https://drive.google.com/file/d/1RX3QKubVk2natXsSafSwawtTDdScj7MC/preview',
        },
      ],
    },

    {
      module: 2,
      files: [
        {
          title: `4 Створення та знищення об’єктів`,
          url: 'https://drive.google.com/file/d/13GAWuaZiQv_Gc7ztEL3bLkzZ6urj5L73/preview',
        },
        {
          title: '4.1 Презентація Створення та знищення об’єктів',
          url: 'https://drive.google.com/file/d/1VHAtEz9MjgdLjT-1AVNTy2iXqkSqDkLa/preview',
        },
        {
          title: '5 Дружні функції і класи',
          url: 'https://drive.google.com/file/d/1v5INv0-7GVBTi0u-juCHig06ZlABWOBg/preview',
        },
        {
          title: '5.1 Презентація Дружні функції і класи',
          url: 'https://drive.google.com/file/d/1NLe3WWMoMZyiY0LJ9n_kDYMxw-ZjA0J0/preview',
        },
        {
          title: '6 Поліморфізм та його реалізація',
          url: 'https://drive.google.com/file/d/1QNJw3Bq9MihTbpzpZpx3s0ECwl1hEwct/preview',
        },
        {
          title: '6.1 Презентація Поліморфізм та його реалізація',
          url: 'https://drive.google.com/file/d/1EsFBkGba9xVvHiLNZ4QRTPd8kQV5MEAH/preview',
        },
      ],
    },
    {
      module: 3,
      files: [
        {
          title: `7 Бібліотека Microsoft Foundation Classes`,
          url: 'https://drive.google.com/file/d/1xI8iCXOiwVPKxmz0hVLz2nowPtvlgtei/preview',
        },
        {
          title: '8 ПРОГРАМУВАННЯ ДЛЯ ОС WINDOWS',
          url: 'https://drive.google.com/file/d/1YVWnLaO7-bLr4OpLeeY7yATyKzKQrutR/preview',
        },
        {
          title: '9 Елементи керування. Бібліотека MFC',
          url: 'https://drive.google.com/file/d/1-BTWwYiRTbP1xpCHNX_p2aze6Is4cybn/preview',
        },
        {
          title: '9.1 Презентація Елементи керування. Бібліотека MFC',
          url: 'https://drive.google.com/file/d/1pyMDkPRWGtwAELmEv4GMh-KNOzXjhavb/preview',
        },
        {
          title: '10 РОБОТА З МЕНЮ',
          url: 'https://drive.google.com/file/d/1RRcb_gYW5_eMcq71aKqqC9IAdPVLJKLT/preview',
        },
        {
          title: '10.1 Презентація РОБОТА З МЕНЮ',
          url: 'https://drive.google.com/file/d/1eWtWTcBZNtdybScbMRYCeBd-XjiGEQOk/preview',
        },
      ],
    },
    {
      module: 4,
      files: [
        {
          title: `11 Технологія «Документ/Представлення»`,
          url: 'https://drive.google.com/file/d/1qYTCjVl8GFw1_f3CXhlwCsjBuZcjp-Ap/preview',
        },
        {
          title: '12 SDI та MDI - додатки',
          url: 'https://drive.google.com/file/d/1YVWnLaO7-bLr4OpLeeY7yATyKzKQrutR/preview',
        },
        {
          title: '12.1 MDI - додатки',
          url: 'https://drive.google.com/file/d/1waYvNUVqKWX8rzIynZdsDBmvAmfQwiBq/preview',
        },
        {
          title: '13 Программирование для Windows с использованием MFC',
          url: 'https://drive.google.com/file/d/1wt_0IwTtNFK5jU5dfHtUP9U_OUTAzkjX/preview',
        },
        // {
        //   title: 'Видео',
        //   url: 'https://drive.google.com/drive/u/1/folders/1B8XU6w7Pqowo8wgxudrvBaOB2tuWepzz',
        // },
      ],
    },
  ])

  const [current, setCurrent] = useState([
    {
      title: `КЛАСИ І ОБ'ЄКТИ У МОВІ ПРОГРАМУВАННЯ C++`,
      url: 'https://drive.google.com/file/d/1nJ-HOhT96jW-GYC5Aarw2_fFgzMtPwxq/preview',
    },
    {
      title: `Презентація КЛАСИ І ОБ'ЄКТИ У МОВІ ПРОГРАМУВАННЯ C++`,
      url: 'https://drive.google.com/file/d/13zuFhUSq7tcIFoEuY1lGwrPI3KO3WsY9/preview',
    },
    {
      title: 'Презентація Конструктори та деструктори',
      url: 'https://drive.google.com/file/d/1HQSQ2ojxIvfkm6J5grjl4xinXEdT0tE3/preview',
    },
    {
      title: 'КОНТРОЛЬ ДОСТУПА ДО ОБ’ЄКТУ',
      url: 'https://drive.google.com/file/d/1sbUZdQEVX6aOYO4tJ1_WER01lJ4tGv1u/preview',
    },
    {
      title: 'Презентація КОНТРОЛЬ ДОСТУПА ДО ОБ’ЄКТУ',
      url: 'https://drive.google.com/file/d/1OTbj6Ic0sif-o_mpkJcmg0uapahBbmsz/preview',
    },
    {
      title: 'Реалізація спадкування мовою С++',
      url: 'https://drive.google.com/file/d/1G0D0LCxjmzcA2dDLUmUwmUSiSO0yDnIp/preview',
    },
    {
      title: 'Презентація Реалізація спадкування мовою С++',
      url: 'https://drive.google.com/file/d/12tZZ-NHd-Q0lP0nIEf-fAboBAayD0Mud/preview',
    },
    {
      title: 'Код лекції: Реалізація спадкування мовою С++',
      url: 'https://drive.google.com/file/d/1RX3QKubVk2natXsSafSwawtTDdScj7MC/preview',
    },
  ])

  const [document, setDocument] = useState('')
  return (
    <>
      <Container>
        <Divider height={50} />
        <div
          style={{
            height: 500,
            width: '100%',
            position: 'relative',
          }}
        >
          <img
            style={{
              width: 300,
              height: 300,
              borderRadius: 200,
              position: 'absolute',
              top: '15%',
              left: '42%',
              zIndex: 1,
            }}
            src={asd4}
          />
          <img
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              position: 'absolute',
              backgroundColor: 'white',
              top: '50%',
              left: '37%',
              padding: 5,
              zIndex: 2,
            }}
            src={asd3}
          />
          <div
            style={{
              position: 'absolute',
              backgroundColor: '#87CEEB',

              width: 300,
              height: 300,
              borderRadius: 200,
              top: '18%',
              left: '48%',
              zIndex: 0,
            }}
          />
          <p
            style={{
              position: 'absolute',
              bottom: 50,
              left: '50%',
              fontSize: 50,
              color: '#FF4500',
              fontWeight: 600,
              zIndex: 4,
            }}
          >
            ВИВЧАЙТЕ ООП
          </p>
        </div>
        <p
          style={{
            fontSize: 40,
            color: 'grey',
            fontWeight: 600,
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginTop: -60,
          }}
        >
          Навчально-методичний комплекс з дисципліни «Об’єктно-орієнтоване
          програмування»
        </p>
        <Divider height={100} />
        <div
          style={{
            height: 700,
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              height: 1000,
              borderRadius: 1000,
              width: '80%',
              top: -500,
              left: '10%',
              backgroundColor: '#FF4500',
              zIndex: -1,
            }}
          ></div>
          <Divider height={25} />

          <p
            style={{
              fontSize: 40,
              color: 'white',
              fontWeight: 600,
              zIndex: 20,
              alignSelf: 'center',
              width: '100%',
              textAlign: 'center',
              lineHeight: 0,
            }}
          >
            ОСНОВНІ ПРИНЦИПИ ООП
          </p>
          <Divider height={5} />
          <p
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 600,
              zIndex: 20,
              alignSelf: 'center',
              width: '100%',
              textAlign: 'center',
              lineHeight: 0,
              marginBottom: 20,
            }}
          >
            ДАВАЙТЕ ОЗНАЙОМИМОСЯ З НИМИ
          </p>
          <Divider height={5} />
          <Divider height={25} />

          <div
            style={{
              height: 1000,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <div
              style={{
                height: '100%',
                width: '20%',
                backgroundColor: '#D3D3D3',
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: '#FF4500',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  marginLeft: 30,
                  marginTop: 30,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                01
              </div>
              <Divider height={25} />
              <div
                style={{
                  marginLeft: 30,

                  fontSize: 30,
                  fontWeight: 600,
                }}
              >
                Спадкування
              </div>
              <Divider height={25} />

              <div
                style={{
                  marginLeft: 30,
                  marginRight: 30,

                  fontSize: 20,
                  fontWeight: 600,
                  fontStyle: 'italic',
                }}
              >
                механізм, який дозволяє описати новий клас на основі існуючого
                (батьківського). При цьому властивості та функціональність
                батьківського класу запозичуються новим класом.
              </div>
            </div>
            <div
              style={{
                height: '100%',
                width: '20%',
                backgroundColor: '#D3D3D3',
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: '#FF4500',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  marginLeft: 30,
                  marginTop: 30,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                02
              </div>
              <Divider height={25} />
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  marginLeft: 30,
                }}
              >
                Абстракція
              </div>
              <Divider height={25} />

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  marginLeft: 30,
                  marginRight: 30,
                }}
              >
                виділення основних, найбільш значущих показників предмета і
                навпаки - відкидання другорядних, незначних.
              </div>
            </div>
            <div
              style={{
                height: '100%',
                width: '20%',
                backgroundColor: '#D3D3D3',
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: '#FF4500',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  marginLeft: 30,
                  marginTop: 30,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                03
              </div>
              <Divider height={25} />
              <div
                style={{
                  marginLeft: 30,

                  fontSize: 30,
                  fontWeight: 600,
                }}
              >
                Інкапсуляція
              </div>
              <Divider height={25} />

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  marginLeft: 30,
                  marginRight: 30,
                }}
              >
                одним з визначальних факторів при проектуванні компонентів
                програми є приховування внутрішніх даних компоненту і деталей
                його реалізації від інших компонентів програми та надання набору
                методів для взаємодії з ним.
              </div>
            </div>
            <div
              style={{
                height: '100%',
                width: '20%',
                backgroundColor: '#D3D3D3',
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: '#FF4500',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  marginLeft: 30,
                  marginTop: 30,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                04
              </div>
              <Divider height={25} />
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  marginLeft: 30,
                }}
              >
                Поліморфізм
              </div>
              <Divider height={25} />

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontStyle: 'italic',
                  marginLeft: 30,
                  marginRight: 30,
                }}
              >
                це можливість працювати з декількома типами так, ніби це той
                самий тип. При цьому поведінка об'єктів буде різною залежно від
                типу, до якого вони належать.
              </div>
            </div>
          </div>
        </div>
        <Divider height={50} />
        <p
          style={{
            fontSize: 40,
            color: '#FF4500',
            fontWeight: 600,
            zIndex: 20,
            alignSelf: 'center',
            width: '100%',
            textAlign: 'center',
            lineHeight: 0,
          }}
        >
          ТЕОРИТИЧНІ МАТЕРІАЛИ
        </p>

        <div
          style={{
            height: 100,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div
            onClick={() => {
              setModule(1)
              setCurrent(files.find((el) => el.module == 1)?.files as any)
              setDocument('')
            }}
            style={{ color: module == 1 ? '#FF4500' : 'black' }}
          >
            1 МОДУЛЬ
          </div>
          <div
            onClick={() => {
              setModule(2)
              setCurrent(files.find((el) => el.module == 2)?.files as any)
              setDocument('')
            }}
            style={{ color: module == 2 ? '#FF4500' : 'black' }}
          >
            2 МОДУЛЬ
          </div>

          <div
            onClick={() => {
              setModule(3)
              setCurrent(files.find((el) => el.module == 3)?.files as any)
              setDocument('')
            }}
            style={{ color: module == 3 ? '#FF4500' : 'black' }}
          >
            3 МОДУЛЬ
          </div>
          <div
            onClick={() => {
              setModule(4)
              setCurrent(files.find((el) => el.module == 4)?.files as any)
              setDocument('')
            }}
            style={{ color: module == 4 ? '#FF4500' : 'black' }}
          >
            4 МОДУЛЬ
          </div>
        </div>
        <div style={{ marginLeft: 40, marginRight: 40 }}>
          {
            <>
              {current.map((el) => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setDocument(el.url)
                  }}
                >
                  <div style={{ height: 50 }}>{el.title}</div>
                  <div>Перейти до файлу</div>
                </div>
              ))}
            </>
          }
          {document && (
            <iframe
              src={document}
              width='100%'
              height='1000'
              allow='autoplay'
            ></iframe>
          )}
        </div>
        <div
          style={{
            height: 300,
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              height: 1000,
              borderRadius: 1000,
              width: '80%',
              top: 50,
              left: '10%',
              backgroundColor: '#FF4500',
              zIndex: -1,
            }}
          ></div>
          <Divider height={100} />

          <p
            style={{
              fontSize: 40,
              color: 'white',
              fontWeight: 600,
              zIndex: 20,
              alignSelf: 'center',
              width: '100%',
              textAlign: 'center',
              lineHeight: 0,
            }}
          >
            Задайте питання вчителю
          </p>

          <Divider height={5} />

          <Divider height={5} />
          <Divider height={25} />
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <input
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              type='text'
              placeholder='Питання'
              style={{ width: 300, height: 50, borderRadius: 25 }}
            />
            <Divider width={15} />

            <div
              style={{
                width: 200,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'white',
                color: '#FF4500',
                fontWeight: 600,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={() => {
                const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    email: '92student@mksumdu.info',
                    text: message,
                  }),
                }
                if (message) {
                  fetch(
                    'https://freel-back.herokuapp.com/user-api/user/sendEmail',
                    requestOptions
                  )
                    .then((response) => response.json())
                    .then((data) => console.log(data))
                }
              }}
            >
              Вiдправити
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
