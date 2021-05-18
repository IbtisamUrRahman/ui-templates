import {useState} from 'react';

const dropDown = [
    { name: 'Charts',  },
    { name: 'Markets',  },
    { name: 'Historical Data',  },
]

const Down = () => {
    const [open, setOpen] = useState(false);
    return ( 
        <>
        <button className="bg-blue-900 text-white px-2 py-1 flex justify-center" onClick={() => setOpen(!open)}>Menu</button>
        {open ? 
        <div className="bg-white w-48 rounded-md shadow-lg mr-4">
            {dropDown.map((item) => (
            <a className="block px-4 py-2 font-semibold cursor-pointer">View {item.name}</a>
            ))}
    </div>
        : false}
    </>
     );
}
 
export default Down;