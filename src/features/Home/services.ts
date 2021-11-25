import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '.';

export const getPosts = createAsyncThunk(
  'home/getPosts',
  async () => axios.get<Product[]>(`${process.env.REACT_APP_BASE_URL}/posts`),
);
