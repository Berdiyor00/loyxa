import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Img from "../assets/Image/bakground.png";
import Texnikum from "../assets/Image/texnikum.jpg"
import { NavLink } from 'react-router-dom';
import Swipper from './Swipper';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
 
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const universities = [
  { id: 1, name: "Xalqaro innovatsion tibbiyot Texnikumi Nodavlat Ta'lim Muassasasi", price: 500, img: Texnikum },
  { id: 2, name:"Xalqaro innovatsion tibbiyot Texnikumi Nodavlat Ta'lim Muassasasi", price: 600, img: Img },
  { id: 3, name: "Otm 3", price: 400, img: Img },
  { id: 4, name: "Otm 4", price: 300, img: Img },
];

const Header = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(600);

  const filteredUniversities = universities
    .filter(university => university.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
    .filter(university => university.price <= priceFilter);

  const handleSliderChange = (event, newValue) => {
    setPriceFilter(newValue);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="flex items-center justify-center pt-[200px]">
            <input 
              type="text" 
              placeholder="Search by name" 
              className='text-[#000]'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Box sx={{ width: 300, ml: 4 }}>
              <Typography gutterBottom>Max Price: ${priceFilter}</Typography>
              <Slider
                value={priceFilter}
                min={0}
                step={50}
                max={1000}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
        </div>
      </header>

      <section className='pt-[30px] pb-[20px] bagi'>
        <div className="container">
          
          <div className="flex items-center justify-between flex-wrap gap-[30px]">
            {filteredUniversities.map((university) => (
              <NavLink key={university.id} to={`/university/${university.id}`} className="md:flex items-start flex-wrap hover:scale-110 shadows transition-all cursor-pointer bg-white text-[#000] md:rounded-tl-[10px] rounded-bl-[10px]">
                <img src={university.img} alt={university.name} className='md:w-[340px] object-cover md:h-[250px] md:rounded-tl-[10px] rounded-bl-[10px]' />
                <div className="flex flex-col items-center justify-center md:pt-[30px] md:pl-[50px] pr-[100px]">
                  <h1 className=' pb-[20px] pt-[20px] md:max-w-[200px] unversityname'>{university.name}</h1>
                
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#958d8d60]'>
        <div className="container">
          <h1>Hello world</h1>
          <div className="flex items-center justify-center gap-[40px] flex-wrap">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src="src/assets/apple-watch.png" alt="product image" />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {/* Additional content can be added here */}
        </div>
      </section>

      <Box sx={{ width: 200, display: 'flex', alignItems: 'center', mt: 4, mx: 'auto' }}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      <Swipper/>
    </>
  );
}

export default Header;
