import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/Context";

const QuoteMachine = () => {
  const { theme, changeTheme } = useContext(Context);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };


  const handleTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(tweetUrl, "_blank");
  };

  const handleTumblr = () => {
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(tumblrUrl, "_blank");
  };

  useEffect(() => {
    fetchQuote();
  }, [theme]);

  return (
    <>
      <div style={{ backgroundColor: theme.backgroundColor }} className="container-fluid d-flex align-items-center justify-content-center vh-100 vw-100 color-transition">
        <div className="card col-md-4 col-sm-10 col-12">
          <div className="card-body">
            <div id="text" style={{ color: theme.quoteColor }}>
              <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
            </div>
            <div className="d-flex justify-content-end" id="author" style={{ color: theme.quoteColor }}>
              - {author}
            </div>
            <div className="buttons d-flex justify-content-between">
              <div className="d-flex">
                <a style={{ backgroundColor: theme.buttonColor, color: theme.textColor }} className="button" id="tweet-quote" href="#" onClick={handleTweet}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a style={{ backgroundColor: theme.buttonColor, color: theme.textColor }} className="button" id="tumblr-quote" href="#" onClick={handleTumblr}>
                  <FontAwesomeIcon icon={faTumblr} />
                </a>
              </div>
              <button type="button" className="btn button" id="new-quote" onClick={changeTheme} style={{ backgroundColor: theme.buttonColor, color: theme.textColor }}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteMachine;
