import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, img, customerName, email, service, price, status } = booking;
    
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-14 h-14 rounded">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>
                {customerName}
            </td>
            <td>
                {email}
            </td>
            <td>
                {price}
            </td>
            <th>
                {status === 'confirm'? <span>Confirmed</span>
                    :<button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;