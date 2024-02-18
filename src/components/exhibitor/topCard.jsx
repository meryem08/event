import { React , useState ,useEffect } from "react";
import { Text } from "components";
import Layout from "./Layout";
import ProfileCard from "./profileCard";
import { Button } from "../ui/button";

const TopCard = () => {

  const [exhibitorData, setExhibitorData] = useState(null);

  useEffect(() => {
    const fetchExhibitorData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/showUser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch exhibitor  manager data');
        }

        const exhibitorData = await response.json();
        setExhibitorData(exhibitorData);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchExhibitorData();
  }, );
   // Added dependency to re-run the effect when the token changes



  return (
        <div className="w-[70%] sm:w-full">
          <div className="bg-blue-300 h-[210px] mx-auto rounded-[15px] w-full"></div>
          <div className="flex justify-between">
          

          <div className="lg:flex justify-start">

            <div className="bg-gray-100 h-[86px] ml-[45px] mt-[-33px] rounded-[50%] w-[86px] "></div> 
            
            <div className="lg:ml-6">
              <div className="  font-bold">{exhibitorData?.first_name} {exhibitorData?.last_name}</div>
              <div className="  text-gray-600">{exhibitorData?.email} </div>

            </div>
          </div> 
          <Button className='m-2'> Edit </Button>       
            <Button className='m-2'> Add Product</Button>
          </div>
          
  
        </div>
      
  
  );
};

export default TopCard;