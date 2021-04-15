import React from 'react';
import axios from 'axios';

import {UserContext} from '../contexts/UserContext';
import config from '../config';

console.log('useget');

export function useGet(endpoint, initialValue = []) {
  const {token} = React.useContext(UserContext);
  const [data, setData] = React.useState(initialValue);
  React.useEffect(() => {
    axios
      .get(`${config.API_URL}${endpoint}`, {
        headers: {
          Authorization: `bearer ${token}`,
          'Bypass-Tunnel-Reminder': 'ok',
          'User-Agent': 'Buddy-body',
        },
      })
      .then(({data}) => {
        setData(data);
      });
  }, [token, endpoint]);
  return data;
}
