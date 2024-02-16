import React from "react";
import { Link } from "react-router-dom";
import {FaCog} from "react-icons/fa";
import "./index.css";
const articles = [
  {
    id: "1",
    title:
      "Farmers Protest highlights: Forces asked to tackle aggression with aggression",
    summary:
      "Delhi-NCR is facing massive traffic jams as heavy security cover is put in view of the farmers' protest.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0VLC7Gn2rL2jnpHkT6dd7XpXaX18EI6lBZ0Y4nkC3GSPmbp35LK-l-LU1TNkXVRrTHtxEcEfzZ7zJbJeJmrmoWL28cimbF9myYtEmrxmNC_ARg",
  },
  {
    id: "2",
    title:
      "From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi...",
    summary:
      "Back Back From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi said at Ahlan Modi event",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ38CUPc9B7q9YnLOJsPon3GWsmgp58qryv1qR-Us-tqeWXyGiQcmPySt3sKIZlv7fTpq0lpITLjGMKEZCq7pM-r--5gP4uYyscuFFxUEeOXfJ1kQ",
  },
];
const smallArticles = [
  {
    id: "3",
    title: "Joy In Ayodhya Amplified In Abu Dhabi: PM Modi Inaugurates Temple In UAE",
    summary: "Spread over 27 acres, the 108-foot-tall structure is Abu Dhabi's first Hindu temple and the largest in the Middle East.",
    imageUrl: "https://th.bing.com/th?id=OIP.hsWOrO400CJffhFtKcgN9QHaEl&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: "4",
    title: "Supreme Court declares electoral bonds scheme unconstitutional",
    summary: "Amendments to the law, which allowed companies to make unlimited financial contributions to political parties under the cover of absolute anonymity, declared ‘manifestly arbitrary’.",
    imageUrl: "https://th.bing.com/th?id=OIP.vCq_Oq8z1gfuQs8VsS6lHQHaDS&w=350&h=155&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: "5",
    title: "Farmers’ protest | After ‘positive’ discussion, Centre-farmers to hold fourth round of meeting on February 18",
    summary: "Farmers continue to camp at different locations on the Haryana-Punjab inter-State boundary.",
    imageUrl: "https://th.bing.com/th?id=OIF.FJNWafc%2fa%2blsxEeYaYpeaA&rs=1&pid=ImgDetMain",
  },
  {
    id: "6",
    title: "India vs England: Sarfaraz Khan Breaks Silence On Run Out Mix-Up, Reveals Ravindra Jadeja's Message",
    summary: "Sarfaraz Khan scored a 48-ball half-century - the joint fastest by an Indian Test debutant in the post-Independence era - before departing at 62 after a horrible run out mix up with Ravindra Jadeja.",
    imageUrl: "https://c.ndtvimg.com/2024-02/tsg30sv_jadeja_650x400_15_February_24.jpeg?im=FaceCrop,algorithm=dnn,width=466,height=205",
  },
];
const Home = () => {
  return (
    <div className="home-con">
      <div className="navbar">
          <h1>News.</h1>
          <FaCog />
        </div>
    <div className="container">
      <div className="row home-page-con">
        <div className="col-lg-7 col-md-12 st">
          <h1>Top Stories</h1>
        {articles.map((article) => (
          <div className="col-sm-4 col-md-12 col-lg-12" key={article.id}>
            <Link
              to={`/article/${article.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="article-card mb-2 border-0">
                <img
                  className="image"
                  src={article.imageUrl}
                  alt={article.title}
                  variant="top"
                />
                <p className="title">{article.title}</p>
                <p className="summary">{article.summary}</p>
              </div>
            </Link>
          </div>
        ))}
        </div>
        <div className="col-md-12 col-lg-5">
          <h1>Related Articles</h1>
        {smallArticles.map(article => (
        <div className="col-sm-4 col-md-12 col-lg-12" key={article.id}>
          <Link to={`/article/${article.id}`} className="text-decoration-none text-dark">
            <div className="article-sm-card mb-2 border-0">
              <img className="sm-image" src={article.imageUrl} alt={article.title} variant="top" />
              <p className="sm-title">{article.title}</p>
              <p className="sm-summary">{article.summary}</p>
            </div>
          </Link>
        </div>
      ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
