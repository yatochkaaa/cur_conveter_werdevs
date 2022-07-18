import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-ts-loaders'
import { BrowserRouter as Router } from "react-router-dom";

import { TabType } from './types/types';
import { getConverters, getLoading } from './store/selectors';
import Tabs from './components/Tabs';
import actionLoader from './store/action';

import './styles/_normilize.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionLoader());
  }, [dispatch]);

  const tabs: TabType[] = [
    {
      label: "UAH to USD",
      index: 1,
    },
    {
      label: "UAH to EUR",
      index: 2,
    },
    {
      label: "UAH to PLN",
      index: 3,
    }
  ];

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  const loading = useSelector(getLoading);
  const converters = useSelector(getConverters);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loader
            type="spinner"
            color="black"
            altColor="gray" 
            size={200}
            className="dark-loader"
          />
        ) : (
          <Tabs
            selectedTab={selectedTab}
            onClick={setSelectedTab}
            tabs={tabs}
            converters={converters}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
