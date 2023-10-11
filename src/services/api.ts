/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_URL = 'https://backend.website.detailslocal.com/wp-json/wp/v2';

export const fetchServices = async (lang: string) => {
  const response = await axios.get(`${API_URL}/services`, {
    params: { lang, _embed: true },
  });
  return response.data;
};

export const fetchProducts = async (lang: string) => {
  const response = await axios.get(`${API_URL}/products`, {
    params: { lang,acf_format: 'standard', _embed: true },
  });
  return response.data;
};

export const fetchProductById = async (productId: string) => {
  const response = await axios.get(`${API_URL}/products/${productId}`, {
    params: {acf_format: 'standard', _embed: true ,  },
  });
  return response.data;
};

export const fetchBlogPosts = async (lang: string) => {
  const response = await axios.get(`${API_URL}/posts`, {
    params: { lang, _embed: true },
  });
  return response.data;
};
export const fetchBlogPostById = async (postId: string) => {
  const response = await axios.get(`${API_URL}/posts/${postId}`, {
    params: { _embed: true },
  });
  return response.data;
};

export const saveNewsletter = async (data: any) => {
  const response = await axios.post(`${API_URL}/newsletter/save`, data);
  return response.data;
};

export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs`);
  return response.data;
};

export const fetchJobByID = async (jobId: string) => {
  const response = await axios.get(`${API_URL}/jobs/${jobId}`)
  return response.data
}
