import React from "react";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

function NewsArticles() {
    return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col-4">
                <div className="pt-card pt-elevation-2 pt-interactive">
                    <img href="https://www.cbdforlife.us/blogs/articles/arizona-police-board-clears-cops-to-use-cbd-products/" target="_blank" src="assets/images/Picture1Resized.png" />
                    <h5><a href="https://www.cbdforlife.us/blogs/articles/arizona-police-board-clears-cops-to-use-cbd-products/" target="_blank">Arizona Police Board Clears Cops to Use CBD</a></h5>
                </div>
            </div>
            <div className="col-4">
                <div className="pt-card pt-elevation-2 pt-interactive">
                    <img href="https://www.cbdforlife.us/blogs/articles/women-in-the-c-suite-meet-three-ladies-running-big-publicly-traded-cannabis-companies/" target="_blank" src="assets/images/ThreeWomenResized.jpg" />
                    <h5><a href="https://www.cbdforlife.us/blogs/articles/women-in-the-c-suite-meet-three-ladies-running-big-publicly-traded-cannabis-companies/" target="_blank">Three Ladies Running Cannabis Companies</a></h5>
                </div>
            </div>
            <div className="col-4">
                <div className="pt-card pt-elevation-2 pt-interactive">
                    <img href="https://www.cbdforlife.us/blogs/articles/18-made-in-usa-cbd-beauty-products-you-should-get-to-know/" target="_blank" src="assets/images/CBDLifeResized.jpg" />
                    <h5><a href="https://www.cbdforlife.us/blogs/articles/18-made-in-usa-cbd-beauty-products-you-should-get-to-know/" target="_blank">18 Made in USA CBD Beauty Products</a></h5>
                </div>
            </div>
        </div>
    </div>

    <div>
        <br />
    </div>

    <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="pt-card pt-elevation-2 pt-interactive">
                        <img href="https://www.cbdforlife.us/blogs/articles/study-confirms-cannabis-oil-can-reduce-or-eliminate-epileptic-seizures-in-kids/" target="_blank" src="assets/images/charlotte-nowResized.jpg" />
                        <h5><a href="https://www.cbdforlife.us/blogs/articles/study-confirms-cannabis-oil-can-reduce-or-eliminate-epileptic-seizures-in-kids/" target="_blank">Cannabis Oil Can Reduce Or Eliminate Epileptic Seizures</a></h5>                    
                    </div>
                </div>
                <div className="col-4">
                    <div className="pt-card pt-elevation-2 pt-interactive">
                        <img href="https://www.cbdforlife.us/blogs/articles/could-endocannabinoid-deficiency-syndrome-be-the-cause-of-ibs-and-migraines/" target="_blank" src="assets/images/cannabinoidsystemResized.jpg" />
                        <h5><a href="https://www.cbdforlife.us/blogs/articles/could-endocannabinoid-deficiency-syndrome-be-the-cause-of-ibs-and-migraines/" target="_blank">Could Endocannabinoid Deficiency Syndrome Be the Cause of IBS and Migraines?</a></h5>
                    </div>
                </div>
                <div className="col-4">
                    <div className="pt-card pt-elevation-2 pt-interactive">
                        <img href="https://www.cbdforlife.us/blogs/articles/cannabis-ingredient-cbd-could-one-day-become-an-antibiotic/" target="_blank" src="assets/images/cannabis-marijuana-Resized.jpg" />
                        <h5><a href="https://www.cbdforlife.us/blogs/articles/cannabis-ingredient-cbd-could-one-day-become-an-antibiotic/" target="_blank">Cannabis ingrediant CBD could one day become antibiotic</a></h5>
                    </div>
                </div>
            </div>
        </div>

    <div>
        <br />
    </div>
    
    </div>
    );
  }

  export default NewsArticles;