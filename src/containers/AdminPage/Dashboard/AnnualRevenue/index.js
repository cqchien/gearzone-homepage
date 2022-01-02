import { BarChartOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import adminApi from '../../../../apis/adminApi';
import { formatProductPrice } from '../../../../helpers';

// tạo danh sách năm
function generateLabels(
  startYear = new Date().getFullYear(),
  endYear = new Date().getFullYear(),
) {
  let result = [];
  for (let i = startYear; i <= endYear; ++i) {
    result.push(`${i}`);
  }
  return result;
}

function AnnualRevenue() {
  const startYear = 2010;
  const endYear = new Date().getFullYear();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const admin = JSON.parse(localStorage.getItem('adminGearZone'));

  // event: thống kê
  useEffect(() => {
    async function getStaAnnualRevenue() {
      const response = await adminApi.doStatisticAnnualRevenue(
        startYear,
        endYear,
        admin._id
      );
      if (response && response.success) {
        const { data } = response.data;
        setData(data);
      }
      setIsLoading(false);
    }

    getStaAnnualRevenue();
    return () => {
    };
  }, [admin._id, endYear]);

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
            labels: generateLabels(startYear, endYear),
            datasets: [
              {
                backgroundColor: '#1caf9a',
                data: [...data],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: `Doanh thu theo từng năm từ năm ${startYear} đến ${endYear}`,
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
                          ? `${(value / 1000000).toFixed(1)} tr`
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

export default AnnualRevenue;
