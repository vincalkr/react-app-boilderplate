import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../services';

const Test: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
