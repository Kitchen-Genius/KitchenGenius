import '../../style/cssP2.css';
import HeaderP2 from '../Page2Components/HeaderP2';
import { useLocation } from 'react-router-dom';

export default function HomeP2() {
    const location = useLocation();
    const ingredientList = location.state ? location.state.ingredientList : null;
    
    console.log(ingredientList);
    
    
    return ( 
        <div className="lay_out">
            <HeaderP2  ingredientList={ingredientList}/>
           
        </div>

    

    )
}