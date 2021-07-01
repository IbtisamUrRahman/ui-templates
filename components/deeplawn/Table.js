import Pagination from './Pagination';

const people = [
    {
      sr: '01',
      name: 'Ibtisam Ur Rehman',
      bill: '$457.96',
      status: 'PAY_AS_YOU_GO',
    },
    {
        sr: '02',
        name: 'Hassan Ur Rehman',
        bill: '$255.06',
        status: 'PAY_AS_YOU_GO',
    },
    {
        sr: '03',
        name: 'Khalil Ur Rehman',
        bill: '$306.17',
        status: 'PAY_AS_YOU_GO',
      },
      {
          sr: '05',
          name: 'Saif Ur Rehman',
          bill: '$321.34',
          status: 'PAY_AS_YOU_GO',
        },
        {
            sr: '06',
            name: 'Abdul Rehman',
            bill: '$321.34',
            status: 'PAY_AS_YOU_GO',
        },
        {
        sr: '07',
        name: 'Muhammad Saim',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
      {
        sr: '08',
        name: 'Devin Simpson',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
    },
    {
      sr: '04',
      name: 'Attique Ur Rehman',
      bill: '$100.00',
      status: 'PAY_AS_YOU_GO',
    },
      {
        sr: '09',
        name: 'Saif Ur Rehman',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
      {
        sr: '14',
        name: 'Ella Rogers',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
      {
        sr: '10',
        name: 'Horace Alvarez',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
      {
        sr: '11',
        name: 'Angelo Edwards',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
      {
        sr: '12',
        name: 'Saif Ur Rehman',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
      {
        sr: '13',
        name: 'Antonio Lynch',
        bill: '$321.34',
        status: 'PAY_AS_YOU_GO',
      },
    // More people...
  ]
  
  export default function Table() {
    return (
      <div className="flex flex-col font-deeplawn">
        <div className="-my-2 overflow-auto h-100 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center text-lg font-bold border border-green-900 text-gray-200 uppercase tracking-wider"
                    >
                      Sr.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center text-lg border border-green-900 font-bold text-gray-200 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center text-lg font-bold border border-green-900 text-gray-200 uppercase tracking-wider"
                    >
                      Total Bill
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center text-lg font-bold text-gray-200 border border-green-900 uppercase tracking-wider"
                    >
                      Bill Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-2 whitespace-nowrap">
                          <div className="pl-3">
                            <div className="text-lg font-medium text-gray-900">{person.sr}</div>
                          </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-lg text-gray-900 text-center">{person.name}</div>   
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap text-lg text-center text-gray-500">{person.bill}</td>
                      <td className="px-6 py-2 whitespace-nowrap text-lg text-center text-gray-500">{person.status}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            <Pagination/>
      </div>
    )
  }