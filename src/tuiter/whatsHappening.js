import React, {useState} from "react";
import { AiOutlinePicture} from '@react-icons/all-files/ai/AiOutlinePicture';
import { MdFormatListBulleted} from '@react-icons/all-files/md/MdFormatListBulleted';
import { HiOutlineLocationMarker} from '@react-icons/all-files/hi/HiOutlineLocationMarker';
import { BiBold} from '@react-icons/all-files/bi/BiBold';
import { BiItalic} from '@react-icons/all-files/bi/BiItalic';
import {createTuitThunk} from "./services/tuits-thunks";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
    const newTuit = {
        tuit: whatsHappening
      }
      dispatch(createTuitThunk(newTuit));
      setWhatsHappening("");
   console.log(whatsHappening);
 }
 return (
   <div className="row">
     <div className="col-auto">
       <img src="https://th.bing.com/th/id/R.dfe000c4d39e10adeac73e968d0081c0?rik=2qecWrg5GwkLaA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnasa-logo-png-nasa-logo-1664.png&ehk=d%2bgvuoNz%2b0udsBSxL%2bAGF0N%2f1tWoj4H6GaKOJhRCIyQ%3d&risl=&pid=ImgRaw&r=0" width={60}/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <AiOutlinePicture className="me-3"></AiOutlinePicture>
           <MdFormatListBulleted className="me-3"></MdFormatListBulleted>
           <HiOutlineLocationMarker className="me-3"></HiOutlineLocationMarker>
           <BiBold className="me-3"></BiBold>
           <BiItalic className="me-3"></BiItalic>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;