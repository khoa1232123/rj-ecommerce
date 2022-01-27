import product_01 from '../imgs/products/cay-canh-01.png';

import product_02 from '../imgs/products/cay-canh-02.png';

import product_03 from '../imgs/products/cay-canh-03.png';

import product_04 from '../imgs/products/cay-canh-04.png';

import product_05 from '../imgs/products/cay-canh-05.png';

import product_06 from '../imgs/products/cay-canh-06.png';

import product_07 from '../imgs/products/cay-canh-07.png';

import product_08 from '../imgs/products/cay-canh-08.png';

import product_09 from '../imgs/products/cay-canh-09.png';

import product_10 from '../imgs/products/cay-canh-10.png';

import product_11 from '../imgs/products/cay-canh-11.png';

import product_12 from '../imgs/products/cay-canh-12.png';

export const products = [
  {
    title: 'Cây mần trầu',
    price: '189',
    img: product_01,
    catSlug: 'cay-canh',
    slug: 'cay-man-trau',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây thủy tiên',
    price: '189',
    img: product_02,
    catSlug: 'cay-canh',
    color: ['white', 'red', 'orange'],
    slug: 'cay-thuy-tien',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây cau',
    price: '189',
    img: product_03,
    catSlug: 'cay-trong',
    slug: 'cay-cau',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây địa lan',
    price: '189',
    img: product_04,
    catSlug: 'cay-canh',
    slug: 'cay-dia-lan',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây bằng lăng',
    price: '189',
    img: product_05,
    catSlug: 'cay-trong',
    slug: 'cay-bang-lang',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây xương rồng',
    price: '189',
    img: product_06,
    catSlug: 'cay-canh',
    slug: 'cay-xuong-rong',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây măng cụt',
    price: '189',
    img: product_07,

    catSlug: 'cay-trong',
    slug: 'cay-mang-cut',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây Phong lan',
    price: '189',
    img: product_08,

    catSlug: 'cay-canh',
    slug: 'cay-phong-lan',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây khế',
    price: '189',
    img: product_09,

    catSlug: 'cay-trong',
    slug: 'cay-khe',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây hoa hồng',
    price: '189',
    img: product_10,

    catSlug: 'cay-trong',
    slug: 'cay-hoa-hong',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây cúc họa mi',
    price: '189',
    img: product_11,

    catSlug: 'cay-canh',
    slug: 'cay-cuc-hoa-mi',
    size: ['s', 'm', 'l', 'xl'],
  },
  {
    title: 'Cây hoa bỏng',
    price: '189',
    img: product_12,

    catSlug: 'cay-canh',
    slug: 'cay-hoa-bong',
    size: ['s', 'm', 'l', 'xl'],
  },
];

export const getAllProducts = () => products;

export const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);

  return products.slice(start, start + count);
};
