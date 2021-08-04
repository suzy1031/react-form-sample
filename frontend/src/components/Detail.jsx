import React, { useEffect, useState } from 'react';
import { getDetail } from '../lib/api/post';
import { useHistory, useParams } from 'react-router-dom';

const Detail = () => {
  // 修正
  const [data, setData] = useState({
    name: '',
    neko_type: '',
    detailInfo: {
      favorite_food: '',
      favorite_toy: '',
    },
  });

  const query = useParams();
  console.log(query.id);

  const history = useHistory();

  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>DETAIL</h1>
      <div>ID：{data.id}</div>
      <div>名前：{data.name}</div>
      <div>猫種：{data.nekoType}</div>
      {/* 追加 */}
      <div>好きな食べ物：{data.detailInfo.favoriteFood}</div>
      {/* 追加 */}
      <div>好きなおもちゃ：{data.detailInfo.favoriteToy}</div>
      <button onClick={() => history.push('/')}>戻る</button>
    </>
  );
};
export default Detail;
