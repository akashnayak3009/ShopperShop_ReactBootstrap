import Carousel11 from "../Carousel/Carousel11";
import Card1 from "../Card_1/Card1.jsx"
import Card2 from "../Card_2/Card2.jsx"
import Card3 from "../Card_3/Card3.jsx"
import Card4 from "../Card_4/Card4.jsx"
import NavbarAmazon from "../NavbarAmazon/NavbarAmazon";
import '../MainPage/MainPage.css';


import Footer from "../Footer/Footer";

const MainPage=()=>{
    return(
        <> 
    
        <div>
        <header>
             <div><NavbarAmazon/></div>
        </header>
        <main>
        
            <div>
                
                 <div><Carousel11/></div>
                 <div className="d-flex cardContainer">
                    <div className="cardpara" ><Card1/></div>
                    <div className="cardpara" ><Card2/></div>
                    <div className="cardpara" ><Card3/></div>
                    <div className="cardpara" ><Card4/></div>
                </div>
            </div>
        
        </main>   
        <div>
            <Footer/>
        </div>
        </div>
        </>

    )
}

export default MainPage;