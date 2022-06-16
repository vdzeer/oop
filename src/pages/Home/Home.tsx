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

  const [files, setFiles] = useState([
    {
      module: 1,
      files: [
        {
          title: `КЛАСИ І ОБ'ЄКТИ У МОВІ ПРОГРАМУВАННЯ C++`,
          url: 'https://drive.google.com/file/d/1nJ-HOhT96jW-GYC5Aarw2_fFgzMtPwxq/preview',
        },
        {
          title: 'КОНТРОЛЬ ДОСТУПА ДО ОБ’ЄКТУ',
          url: 'https://drive.google.com/file/d/1lPOtS7wivYbvmT8EqGIAv2ZGQRmXnYhj/preview',
        },
        {
          title: 'Реалізація спадкування мовою С++',
          url: 'https://drive.google.com/file/d/1nJ-HOhT96jW-GYC5Aarw2_fFgzMtPwxq/preview',
        },
        {
          title: 'Код лекції Реалізація спадкування мовою',
          url: 'https://drive.google.com/file/d/1dn2-68KdihDV4ric5DF9qVctdtqeE0TX/preview',
        },
      ],
    },

    {
      module: 2,
      files: [],
    },
    {
      module: 3,
      files: [],
    },
    {
      module: 4,
      files: [],
    },
  ])

  const [current, setCurrent] = useState([
    {
      title: `КЛАСИ І ОБ'ЄКТИ У МОВІ ПРОГРАМУВАННЯ C++`,
      url: 'https://drive.google.com/file/d/1nJ-HOhT96jW-GYC5Aarw2_fFgzMtPwxq/preview',
    },
    {
      title: 'КОНТРОЛЬ ДОСТУПА ДО ОБ’ЄКТУ',
      url: 'https://drive.google.com/file/d/1lPOtS7wivYbvmT8EqGIAv2ZGQRmXnYhj/preview',
    },
    {
      title: 'Реалізація спадкування мовою С++',
      url: 'https://drive.google.com/file/d/1nJ-HOhT96jW-GYC5Aarw2_fFgzMtPwxq/preview',
    },
    {
      title: 'Код лекції Реалізація спадкування мовою',
      url: 'https://drive.google.com/file/d/1dn2-68KdihDV4ric5DF9qVctdtqeE0TX/preview',
    },
  ])

  const [document, setDocument] = useState('')
  return (
    <>
      <Container>
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
        <Divider height={50} />
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

        <Divider height={200} />
      </Container>
    </>
  )
}

export default HomePage
