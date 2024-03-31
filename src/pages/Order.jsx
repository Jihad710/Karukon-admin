import React, { useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../lib/helpers';

const orderData = [
  {
    id: '1',
    product_name: 'Samsung Mobile',
    customer_id: '23143',
    customer_name: 'Faruk Rahman Jihad ',
    phone: '01773239086 ',
    email:'Jihadmahmud71@gmail.com',
    order_date: '2022-05-17T03:24:00',
    order_total: '$435.50',
    current_order_status: 'CONFIRMED',
    shipment_address: {
      country:'Bangladesh',
      street_address: ': 262/5 West Agargaon, Dhaka 1207',
      house_number: '272/A',
      town_city: 'Cottage Grove',
      district: 'Dhaka',
      order_notes:'বাংলা ভাষা বিকাশের ইতিহাস ১৩০০ বছর পুরনো। চর্যাপদ এ ভাষার আদি নিদর্শন। অষ্টম শতক থেকে বাংলায় রচিত সাহিত্যের বিশাল ভান্ডারের '
    }
  },
  {
    id: '2',
    product_name: 'Iphn 15 Max',
    customer_id: '96453',
    customer_name: 'Faruk Rahman Jihad',
    phone: '01773239086 ',
    email:'Jihadmahmud71@gmail.com',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'CONFIRMED',
    shipment_address: {
      country:'Bangladesh',
      street_address: ': 262/5 West Agargaon, Dhaka 1207',
      house_number: '272/A',
      town_city: 'Los Angeles',
      district: 'Dhaka',
      order_notes:'বাংলা ভাষা বিকাশের ইতিহাস ১৩০০ বছর পুরনো। চর্যাপদ এ ভাষার আদি নিদর্শন। অষ্টম শতক থেকে বাংলায় রচিত সাহিত্যের বিশাল ভান্ডারের '
    }
  },
  {
    id: '3',
    product_name: 'Iphn 15 Max',
    customer_id: '96453',
    customer_name: 'Faruk Rahman Jihad',
    phone: '01773239086 ',
    email:'Jihadmahmud71@gmail.com',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'CONFIRMED',
    shipment_address: {
      country:'Bangladesh',
      street_address: ': 262/5 West Agargaon, Dhaka 1207',
      house_number: '272/A',
      town_city: 'Los Angeles',
      district: 'Dhaka',
      order_notes:'বাংলা ভাষা বিকাশের ইতিহাস ১৩০০ বছর পুরনো। চর্যাপদ এ ভাষার আদি নিদর্শন। অষ্টম শতক থেকে বাংলায় রচিত সাহিত্যের বিশাল ভান্ডারের '
    }
  },
  {
    id: '5',
    product_name: 'Iphn 15 Max',
    customer_id: '96453',
    customer_name: 'Faruk Rahman Jihad',
    phone: '01773239086 ',
    email:'Jihadmahmud71@gmail.com',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'CONFIRMED',
    shipment_address: {
      country:'Bangladesh',
      street_address: ': 262/5 West Agargaon, Dhaka 1207',
      house_number: '272/A',
      town_city: 'Los Angeles',
      district: 'Dhaka',
      order_notes:'বাংলা ভাষা বিকাশের ইতিহাস ১৩০০ বছর পুরনো। চর্যাপদ এ ভাষার আদি নিদর্শন। অষ্টম শতক থেকে বাংলায় রচিত সাহিত্যের বিশাল ভান্ডারের '
    }
  },
  {
    id: '5',
    product_name: 'Iphn 15 Max',
    customer_id: '96453',
    customer_name: 'Faruk Rahman Jihad',
    phone: '01773239086 ',
    email:'Jihadmahmud71@gmail.com',
    order_date: '2022-05-14T05:24:00',
    order_total: '$96.35',
    current_order_status: 'CONFIRMED',
    shipment_address: {
      country:'Bangladesh',
      street_address: ': 262/5 West Agargaon, Dhaka 1207',
      house_number: '272/A',
      town_city: 'Los Angeles',
      district: 'Dhaka',
      order_notes:'বাংলা ভাষা বিকাশের ইতিহাস ১৩০০ বছর পুরনো। চর্যাপদ এ ভাষার আদি নিদর্শন। অষ্টম শতক থেকে বাংলায় রচিত সাহিত্যের বিশাল ভান্ডারের '
    }
  },

];


const ShipmentAddressModal = ({ address, onClose }) => {
  return (
<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
  <div className="bg-white p-6 rounded-lg">
    <h2 className="text-xl text-center font-semibold mb-8">SHIPPING ADDRESS</h2>
    <p className="mb-3"><strong>Country:</strong> {address.country}</p>
    <p className="mb-3"><strong>Street Address:</strong> {address.street_address}</p>
    <p className="mb-3"><strong>House Number:</strong> {address.house_number}</p>
    <p className="mb-3"><strong>Town/City:</strong> {address.town_city}</p>
    <p className="mb-3"><strong>District:</strong> {address.district}</p>
    <p className="mb-3"><strong>Order Notes:</strong> {address.order_notes}</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>Close</button>
  </div>
</div>

  );
};

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressClick = (address) => {
    setSelectedAddress(address);
    setShowModal(true);
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Total Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Order Date</th>
              <th>Order Total</th>
              <th>Shipping Address</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/order/${order.id}`}>{order.id}</Link>
                </td>
                <td>
                  <Link to={`/product/${order.product_name}`}>{order.product_name}</Link>
                </td>
                <td>
                  <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                </td>
                <td>
                  <Link to={`/${order.phone}`}>{order.phone}</Link>
                </td>
                <td>
                  <Link to={`/${order.email}`}>{order.email}</Link>
                </td>
                <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                <td>{order.order_total}</td>
                <td>
                  <button className="text-blue-500 " onClick={() => handleAddressClick(order.shipment_address)}>
                    View Details
                  </button>
                </td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && selectedAddress && (
        <ShipmentAddressModal address={selectedAddress} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Orders;
