import { BarChartOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import adminApi from '../../../../apis/adminApi';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { formatProductPrice } from '../../../../helpers';

// tạo danh sách tháng
function generateLabels() {
  let result = [];
  for (let i = 0; i < 12; ++i) {
    result.push(`T${i + 1}`);
  }
  return result;
}

function MonthlyRevenue() {
  // năm hiện tại
  const year = new Date().getFullYear();
  const [data, setData] = useState({ thisYear: [], lastYear: [] });
  const [isLoading, setIsLoading] = useState(true);
  const admin = JSON.parse(localStorage.getItem('admin'));

  // Lây doanh thu
  useEffect(() => {
    async function getStaMonthlyRevenue(year) {

      setIsLoading(true);
      const response = await adminApi.doStatisticMonthlyRevenue(year, admin._id);
      if (response && response.success) {
        const { thisYear, lastYear } = response.data;
        setData({ thisYear, lastYear });
      }
      setIsLoading(false);

    }
    getStaMonthlyRevenue(year);
    return () => {
    };
  }, [admin._id, year]);

  // rendering ...
  return (
    <>
      {isLoading ? (
        <Spin
          tip="Đang thống kê ..."
          size="large"
          indicator={<BarChartOutlined spin />}
        />
      ) : (
        <Bar
          data={{
            labels: generateLabels(),
            datasets: [
              {
                backgroundColor: '#1caf9a',
                data: [...data.lastYear],
                label: `Năm ${year - 1}`,
              },
              {
                backgroundColor: '#F7C325',
                data: [...data.thisYear],
                label: `Năm ${year}`,
              },
            ],
          }}
          options={{
            legend: { display: true },
            title: {
              display: true,
              text: `Doanh thu theo từng tháng của năm ${year - 1}, ${year}`,
              fontSize: 18,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    callback: function (value, index, values) {
                      return value >= 1000000000
                        ? `${(value / 1000000000).toFixed(1)} tỷ`
                        : value >= 1000000
                          ? `${(value / 1000000).toFixed(0)} tr`
                          : formatProductPrice(value);
                    },
                  },
                },
              ],
            },
          }}
        />
      )}
    </>
  );
}

export default MonthlyRevenue;
