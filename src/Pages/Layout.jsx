import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import universities from './unversites';
import { Checkbox, Table } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const UniversityDetail = () => {
  const { id } = useParams();
  const university = universities.find((uni) => uni.id === parseInt(id));
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  if (!university) {
    return <h2>University not found</h2>;
  }

  const handleCheckboxChange = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleSubmit = (event, itemName) => {
    event.preventDefault();
    if (selectedItem !== itemName) {
      alert('Please select the university before submitting.');
      return;
    }
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const newSubmission = { id: existingSubmissions.length + 1, item: selectedItem };
    localStorage.setItem('submissions', JSON.stringify([...existingSubmissions, newSubmission]));
    alert('Submission successful');
    setSelectedItem(null); // Clear the selection after submission
  };

  const handleViewPDF = () => {
    const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    let content = `University: ${university.name}\nDetails:\nName: ${university.name}\nImage: ${university.img}\n\nSubmissions:\n`;
    existingSubmissions.forEach((submission, index) => {
      content += `Submission ${index + 1}: ${submission.item}\n`;
    });

    navigate('/pdf-viewer', { state: { content } });
  };

  return (
    <div className="container pt-[200px]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide><img src={university.img} alt={university.name} className='w-[220px] h-[200px] object-cover' /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <h1>{university.name}</h1>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4"></Table.HeadCell>
            <Table.HeadCell>Direction</Table.HeadCell>
            <Table.HeadCell>Daytime</Table.HeadCell>
            <Table.HeadCell>Evening</Table.HeadCell>
            <Table.HeadCell>Remote</Table.HeadCell>
            <Table.HeadCell>Submit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox
                  checked={selectedItem === 'Apple MacBook Pro 17"'}
                  onChange={() => handleCheckboxChange('Apple MacBook Pro 17"')}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={(e) => handleSubmit(e, 'Apple MacBook Pro 17"')}
                >
                  Submit
                </button>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox
                  checked={selectedItem === 'Microsoft Surface Pro'}
                  onChange={() => handleCheckboxChange('Microsoft Surface Pro')}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
              <Table.Cell>$1999</Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={(e) => handleSubmit(e, 'Microsoft Surface Pro')}
                >
                  Submit
                </button>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox
                  checked={selectedItem === 'Magic Mouse 2'}
                  onChange={() => handleCheckboxChange('Magic Mouse 2')}
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell>$99</Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={(e) => handleSubmit(e, 'Magic Mouse 2')}
                >
                  Submit
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleViewPDF}
        >
          View PDF
        </button>
      </div>
    </div>
  );
};

export default UniversityDetail;
