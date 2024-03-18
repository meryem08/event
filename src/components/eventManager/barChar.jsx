import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  // Sample data
  const data = {
    labels: ['Red', 'Blue', 'Yellow' , '1','2','3','4'],
    datasets: [
      {
        label: '# of Votes',
        data: [4, 4, 3,2,4,2,6,4],
        backgroundColor: [
          '#FBF8CC',
          '#FFCFD2',
          '#F1C0E8',
          '#CFBAF0',
          '#A3C4F3',
          '#90DBF4',
          '#98F5E1',
          '#B9FBC0'
        ],
        borderColor: [
          'black',
          'black',
          'black',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='border rounded-xl bg-blue-950'>
      <Pie data={data} />
    </div>

  )
  
};

export default BarChart;
