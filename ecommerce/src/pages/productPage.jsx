import ProductCard from "../components/cards";

import '../App.css'

function ProductPage()
{
    return(
        
         <div className="parallax-container">
      <div className="parallax-bg"></div>
      <div className="content-container"></div>
      {/* <div className="home-container"> */}
                {/* <div className="home-content"> */}
                    <h1 className="animate-title">Shop Here</h1>
                    <p className="animate-subtitle">Introducing Latest Collections and Designs</p>
                {/* </div> */}
            {/* </div> */}
        <ProductCard/>
      </div>
    
    )
}
export default ProductPage;