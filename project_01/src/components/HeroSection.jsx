const HeroSection = () => {
  return (
    <main className="Hero">

      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="buttons">
        <button className="firstbtn">Shop Now</button>
        <button className="secondbtn">Category</button>
        </div>
        
        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
                <img src="/images/flipkart.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
        </div>
      </div>

      <div className="image">
        <img src="/images/shoe_image.png" alt="shoeimg" />
      </div>
    </main>
  );
};

export default HeroSection;
