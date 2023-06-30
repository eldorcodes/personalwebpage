import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';

class ItemGrid extends Component {
    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <div>
            <ul className="list_style portfolio_menu text-center">
                <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>ALL</li>
                <li className={`${this.onActive('web')}`} data-wow-delay="0.3s" data-filter="web" onClick={() => {this.onFilterChange("web")}}>Book Search Engine</li>
                <li className={`${this.onActive(`develop`)}`} data-wow-delay="0.6s" data-filter="develop" onClick={()=> {this.onFilterChange("develop")}}>To Do List</li>
                <li className={`${this.onActive(`market`)}`} data-wow-delay="0.8s" data-filter="market" onClick={()=> {this.onFilterChange("market")}}>Social Media</li>
            </ul>	

            <div className="grid row">
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item tech develop">
                    <div className="portfolio hover-style">
                        <a href='/todo'>
                        <img src={require('../../image/portfolio/1.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h2 className="sm-titl">To Do List</h2>
                            </div>
                        </div>
                            </a>						
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                    <div className="portfolio hover-style">
                    <a href='/book'><img 
                    src={require('../../image/portfolio/2.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h2 className="sm-titl">Book Search Engine</h2>
                            </div>
                        </div>
                        </a>
                    </div>						
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item market">
                    <div className="portfolio hover-style">
                   <a href='https://www.ijtimoiytarmoq.online'>
                   <img src={require('../../image/portfolio/9.png')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h2 className="sm-titl">Social Media</h2>
                            </div>
                        </div>
                   </a>
                    </div>
                </div>
              
               
                {/* <div className="col-md-3 col-sm-6 col-xs-12 grid-item">
                    <div className="portfolio hover-style">
                        <img src={require('../../image/portfolio/4.jpg')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">WEB DESIGN</h6>
                                <div className="icons">
                                    <a href=".#"><i className="icon_heart_alt"></i></a>
                                    <a href=".#"><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
            </div>
        )
    }
  }

  export default ItemGrid;
