import React from "react";

const Fourth =()=>{
    return(
        <>
        <div className="portfolio group" id="port">
      <div className="row-3 group">
        <div className="title-6">
          <p className="portfolio-2">Portfolio</p>
          <div className="title-deco-line-6" />
        </div>
        <div className="filters group">
          <div className="active-holder">all</div>
          <p className="panoramas">panoramas</p>
          <p className="portraits">portraits</p>
          <p className="macro">macro</p>
          <p className="journal">journal</p>
        </div>
      </div>
      <div className="portfolio-grid group">
        <div className="wrapper-2">
          <div className="row-1 group">
            <img src="images/holder_9.png" alt="" width={270} height={270} />
            <img src="images/holder_8.png" alt="" width={270} height={270} />
            <img src="images/holder_7.png" alt="" width={270} height={270} />
            <img src="images/holder_6.png" alt="" width={270} height={270} />
          </div>
          <div className="hover">+</div>
        </div>
        <div className="row-2-2 group">
          <img src="images/holder_5.jpg" alt="" width={270} height={270} />
          <img src="images/holder_4.jpg" alt="" width={270} height={270} />
          <img src="images/holder_3.jpg" alt="" width={270} height={270} />
          <img src="images/holder_2.jpg" alt="" width={270} height={270} />
        </div>
      </div>
    </div>
    <div className="services" id="service">
      <div className="title-7">
        <p className="services-2">Services</p>
        <div className="title-deco-line-7" />
      </div>
      <div className="row-4 match-height group">
        <div className="service2">
          <div className="column-1">
            <img
              className="coffee"
              src="images/coffee.png"
              alt=""
              width={34}
              height={48}
            />
            <p className="coffee-2">Coffee</p>
            <p className="text-16">
              Apple pie icing sweet. Brownie jelly-o applicake applicake sweet
              roll liquorice bear claw. Jujubes carrot cake cotton candy sweet
              tart brownie. Tiramisu applicake jujubes.
            </p>
          </div>
          <div className="column-2">
            <img
              className="instant"
              src="images/instant.png"
              alt=""
              width={48}
              height={48}
            />
            <p className="instant-2">Instant</p>
            <p className="text-17">
              Apple pie icing sweet. Brownie jelly-o applicake applicake sweet
              roll liquorice bear claw. Jujubes carrot cake cotton candy sweet
              tart brownie. Tiramisu applicake jujubes.
            </p>
          </div>
        </div>
        <div className="service2">
          <div className="column-3">
            <img
              className="dslr"
              src="images/dslr.png"
              alt=""
              width={47}
              height={45}
            />
            <p className="serious">Serious</p>
            <p className="text-18">
              Apple pie icing sweet. Brownie jelly-o applicake applicake sweet
              roll liquorice bear claw. Jujubes carrot cake cotton candy sweet
              tart brownie. Tiramisu applicake jujubes.
            </p>
          </div>
          <div className="column-4">
            <img
              className="frame"
              src="images/frame.png"
              alt=""
              width={48}
              height={48}
            />
            <p className="frame-2">Frame</p>
            <p className="text-19">
              Apple pie icing sweet. Brownie jelly-o applicake applicake sweet
              roll liquorice bear claw. Jujubes carrot cake cotton candy sweet
              tart brownie. Tiramisu applicake jujubes.
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Fourth