import React from "react";
import classNames from "classnames";
import { Route, Routes, useNavigate } from 'react-router-dom';

import { CurrencyConvert, TabType } from "../types/types";
import Converter from "./Converter";

import '../styles/tabs.scss';

type TabsProps = {
  tabs: TabType[];
  selectedTab: number;
  onClick: (index: number) => void;
  converters: CurrencyConvert[];
};

const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  selectedTab = 0,
  onClick,
  converters
}) => {
  let navigate = useNavigate();

  const panel = tabs && tabs.find((tab) => tab.index === selectedTab);
  const converter = converters[selectedTab - 1];

  const url = (converter: CurrencyConvert): string => {

    return `/from-${converter.query.from}-to-${converter.query.to}`;
  };
  

  return (
    <div
      className="tabs"
    >
      <div className="tabs__list">
        {tabs.map((tab) => (
          <button
            className={classNames(
              'tabs__list-button',
              { 'tabs__list-button--active': tab.index === selectedTab },
            )}
            onClick={() => {
              navigate(url(converters[tab.index - 1]));
              onClick(tab.index)
            }}
            key={tab.index}
            type="button"
            tabIndex={selectedTab === tab.index ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {panel && converter && (
          <Routes>
            <Route
              path={url(converter)}
              element={<Converter converter={converter}/>}
            />
          </Routes>
        )}
      </div>
    </div>
  );
};
export default Tabs;
