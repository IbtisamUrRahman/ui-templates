import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['06', '07', '08', '09', '10', '11', '12'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 1
  }]
}

export default () => ({
  displayName: 'BarExample',
  render() {
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});