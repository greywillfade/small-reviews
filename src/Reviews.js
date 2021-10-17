import React from "react";
import { reviewData } from "./data";
import "./App.css";
import Illu from './assets/img/books-person.svg';

export const Reviews = () => {
    return (
        <>
            <p>Here's some thoughts on things that I've finished and felt like I wanted to capture.</p>
            <div className="cards">

                <div><img src={Illu} alt="A person reading a book" /></div>

                {reviewData.map((data, key) => {
                    return (
                        <div key={key}> 

                            <Review
                                key={key}
                                title={data.title}
                                author={data.author}
                                category={data.category}
                                dateFinished={data.dateFinished}
                                rating={data.rating}
                                thoughts={data.thoughts}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const Review = ({ title, author, category, dateFinished, rating, thoughts }) => {
    var reviewHeading, categoryIcon, categoryAlt;
    if (!title) return <div />;

    //todo: style this up better
    if (author) {
        reviewHeading = title + ' by ' + author;
    } else {
        reviewHeading = title;
    }

    if (category == "Game") {
        categoryIcon = "🎮";
        categoryAlt = "Game controller";
    }
    else {
        categoryIcon = "📖";
        categoryAlt = "Open book";
    }


    var starRating = {
        "--rating": rating
    }; 

    return (
        <div className={`card card--${category.toLowerCase()}`}>
            <p className="card-title">
                    <span role="img" aria-label={categoryAlt}>{categoryIcon}</span> {reviewHeading}</p>
            <p>Finished: {dateFinished}</p>
            <div className={`stars stars--${category.toLowerCase()}`} style={starRating}></div>
            
            
            <p>{thoughts}</p>
        </div>

    );
  };