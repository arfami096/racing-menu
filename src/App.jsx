import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import './index.css';

// Компоненты страниц (при желании их тоже можно вынести в отдельные файлы в папку components или pages)
function HomePage() {
  return (
    <article className="article">
      <h1 className="article__title">Гоночное такси</h1>
      <p className="article__paragraph">
        Гоночное такси — отличная возможность насладиться скоростью и мастерством профессионалов на гоночной трассе.
      </p>
    </article>
  );
}

function DriftPage() {
  return (
    <article className="article">
      <h1 className="article__title">Дрифт-такси</h1>
      <p className="article__paragraph">
        Только в дрифт-такси вы сможете почувствовать настоящую физику управляемого заноса в кресле пассажира.
      </p>
    </article>
  );
}

function ForzaPage() {
  return (
    <article className="article">
      <h1 className="article__title">Forza Karting</h1>
      <p className="article__paragraph">
        В картинг-клубе Forza вас ждёт современная крытая трасса и мощные карты для ярких заездов с друзьями.
      </p>
    </article>
  );
}

function TimeAttackPage() {
  return (
    <article className="article">
      <h1 className="article__title">Time Attack</h1>
      <p className="article__paragraph">
        Гонки на лучшее время круга — идеальный формат для тех, кто хочет отточить траекторию и побить личный рекорд.
      </p>
    </article>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}