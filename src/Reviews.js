import React from "react";
import { reviewData } from "./data";
import "./App.css";

export const Reviews = () => {
    return (
        <>
            <p>Here's some thoughts on things that I've finished and felt like I wanted to capture.</p>
            <div className="cards">
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
    var reviewHeading;
    if (!title) return <div />;

    //todo: style this up better
    if (author) {
        reviewHeading = title + ' by ' + author;
    } else {
        reviewHeading = title;
    }

    return (
        <div className={`card card--${category.toLowerCase()}`}>
            <p>{reviewHeading}</p>
            <p>{category}</p>
            <p>Finished: {dateFinished}</p>
            <p>{rating}</p>
            <p>{thoughts}</p>
        </div>

    );
  };