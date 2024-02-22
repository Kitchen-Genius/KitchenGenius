import { useEffect,useState } from 'react';
import my_Images from '../my_Images/kitchengenius.png'
import '../style/cssP1.css'
import axios from 'axios';

export default function HeaderP1 () {
    
     /*   const [stevenPic, setStevenPic] = useState(null);
      
        useEffect(() => {
          const fetchStevenPic = async () => {
            try {
              const response = await axios.get('https://images.app.goo.gl/nharNJUMPnT7nsnG9');
              setStevenPic(response.data); 
            } catch (error) {
              console.error('Error fetching Steven pic:', error);
            }
          };
      
          fetchStevenPic();
        }, []);
        */

    return (
        <>
        <div className='kitchenIMG'>
            <img src={my_Images} alt="kitchengenius"/>
        </div>
        <div className='Rectangle_gray_p1'>
            <div className='Bell'></div>
            <div className='Steven_square_p1'>
                <p className='Hader_text_p1'>Hi,Steve</p>
                <div className='Steven_pic_p1'>
              
                </div>
            </div>
        </div>
        </>
    )
}


/*    {stevenPic && <img src={stevenPic} alt="Steven Pic" />}  */          /*זה צריך להיות בתוך דיב סטיבן פיק כשיהיה שרת*/