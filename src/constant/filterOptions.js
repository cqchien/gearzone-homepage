import { ROUTES } from "./routePath";

const FILTER_BRAND_LAPTOP = [
  {
    title: 'Apple',
    to: 'apple',
  },
  {
    title: 'Acer',
    to: 'acer',
  },
  {
    title: 'ASUS',
    to: 'asus',
  },
  {
    title: 'Dell',
    to: 'dell',
  },
  {
    title: 'HP',
    to: 'hp',
  },
  {
    title: 'Lenovo',
    to: 'lenovo',
  },
  {
    title: 'LG',
    to: 'lg',
  },
  {
    title: 'MSI',
    to: 'msi',
  },
];


const FILTER_SIZE_LAPTOP = [
  {
    title: 'Dưới 13 inch',
    to: `duoi_13_inch`,
  },
  {
    title: 'Từ 13 đến 15 inch',
    to: `tu_13_den_15_inch`,
  },
  {
    title: 'Trên 15 inch',
    to: `tren_15_inch`,
  },
];
const FILTER_PRICE_LAPTOP = [
  {
    title: 'Dưới 10 triệu',
    to: `nhohon-10tr`,
  },
  {
    title: 'Từ 10 - 15 triệu',
    to: `lonhon-10tr,nhohon-15tr`,
  },
  {
    title: 'Từ 15 - 20 triệu',
    to: `lonhon-15tr,nhohon-20tr`,
  },
  {
    title: 'Từ 20 - 30 triệu',
    to: `lonhon-20tr,nhohon-30tr`,
  },
  {
    title: 'Từ 30 - 50 triệu',
    to: `lonhon-30tr,nhohon-50tr`,
  },
  {
    title: 'Trên 50 triệu',
    to: `lonhon-50tr`,
  },
];
const FILTER_CHIP_LAPTOP = [
  {
    title: 'Intel Core i3',
    to: '0',
  },
  {
    title: 'Intel Core i5',
    to: '1',
  },
  {
    title: 'Intel Core i7',
    to: '2',
  },
  {
    title: 'Intel Core i9',
    to: '3',
  },
  {
    title: 'AMD Ryzen 3',
    to: '4',
  },
  {
    title: 'AMD Ryzen 5',
    to: '5',
  },
  {
    title: 'AMD Ryzen 7',
    to: '6',
  },
  {
    title: 'Pentium',
    to: '7',
  },
  {
    title: 'Celeron',
    to: '8',
  },
];

// filter options list
export const FILTER_OPTION_LIST = [
  // 0: LAPTOP
  {
    key: 0,
    root: `${ROUTES.FILTER}?t=0`,
    data: [
      {
        title: 'Thương hiệu',
        subFilters: FILTER_BRAND_LAPTOP,
        query: 'p-reg-thuong_hieu=',
      },
      {
        title: 'Kích thước',
        subFilters: FILTER_SIZE_LAPTOP,
        query: 'reg-kich_thuoc_man_hinh=',
      },
      {
        title: 'Laptop theo giá',
        subFilters: FILTER_PRICE_LAPTOP,
        query: 'p-o-gia=',
      },
      {
        title: 'Cấu hình chip',
        subFilters: FILTER_CHIP_LAPTOP,
        query: 'the_he_chip=',
      },
    ],
  },
]

