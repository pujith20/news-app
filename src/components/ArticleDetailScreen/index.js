import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailScreen = () => {
  // Get the id parameter from the URL using useParams hook
  const { id } = useParams();
  
  // Define article details directly within the component
  const articleDetails = {
    "1": {
      id: "1",
      title: "Farmers Protest highlights: Forces asked to tackle aggression with aggression",
      content: "Farmers Protest Highlights: Farmers, pressing for a law on minimum support price for crops, are now marching towards Delhi following inconclusive talks with a team of union ministers. The Samyukta Kisan Morcha (Non-Political) and the Kisan Mazdoor Morcha have declared the farmers' intent to head to Delhi, intensifying their efforts to persuade the Centre to meet their demands.",
      author: "Hindustan Times",
      publishedDate: "2024-02-14",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0VLC7Gn2rL2jnpHkT6dd7XpXaX18EI6lBZ0Y4nkC3GSPmbp35LK-l-LU1TNkXVRrTHtxEcEfzZ7zJbJeJmrmoWL28cimbF9myYtEmrxmNC_ARg",
    },
    "2": {
      id: "2",
      title:
        "From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi...",
      summary:
        "Back Back From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi said at Ahlan Modi event",
      content:
        "Prime Minister Narendra Modi on Tuesday addressed the members of the Indian diaspora in Abu Dhabi during the Ahlan Modi event. PM Modi, who is on a two-day visit to the United Arab Emirates (UAE) congratulated the members of the Indian diaspora for turning up in such a large number and said this is time to hail the partnership between India and UAE.The UAE visit by the Indian Prime Minister came as the relations between both nations are at an all-time high with trade reaching over $85 billion in 2022-23. Among the Gulf nations, UAE has the largest Indian expatriate community with 3.5 million Indian nationals living in the country.",
      author: "Mint",
      publishedDate: "2024-02-13",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ38CUPc9B7q9YnLOJsPon3GWsmgp58qryv1qR-Us-tqeWXyGiQcmPySt3sKIZlv7fTpq0lpITLjGMKEZCq7pM-r--5gP4uYyscuFFxUEeOXfJ1kQ",
    },
    "3": {
      id: "3",
      title: "Joy In Ayodhya Amplified In Abu Dhabi: PM Modi Inaugurates Temple In UAE",
      summary: "Spread over 27 acres, the 108-foot-tall structure is Abu Dhabi's first Hindu temple and the largest in the Middle East.",
      content: "PM Narendra Modi conducted rituals for the temple's inauguration.Marking a significant milestone for the Indian community in the Middle East, Prime Minister Narendra Modi has inaugurated Abu Dhabi's first Hindu temple, which is also the largest in the region.",
      author: "Hindustan Times",
      publishedDate: "2024-02-14",
      imageUrl: "https://th.bing.com/th?id=OIP.hsWOrO400CJffhFtKcgN9QHaEl&w=317&h=196&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    "4": {
      id: "4",
      title: "Supreme Court declares electoral bonds scheme unconstitutional",
      summary: "Amendments to the law, which allowed companies to make unlimited financial contributions to political parties under the cover of absolute anonymity, declared ‘manifestly arbitrary’.",
      content: "In a landmark unanimous judgment, the Supreme Court on Thursday struck down as “unconstitutional and manifestly arbitrary” the electoral bonds scheme, which provides blanket anonymity to political donors, as well as critical legal amendments allowing rich corporations to make unlimited political donations.A five-judge Bench headed by Chief Justice of India D.Y. Chandrachud held that the Union government’s scheme, and preceding amendments made to the Representation of the People Act, the Companies Act, and the Income Tax Act, violated the voters’ right to information about political funding under Article 19(1)(a) of the Constitution",
      author: "The Hindu",
      publishedDate: "2024-02-15",
      imageUrl: "https://th.bing.com/th?id=OIP.vCq_Oq8z1gfuQs8VsS6lHQHaDS&w=350&h=155&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    "5": {
      id: "5",
      title: "Farmers’ protest | After ‘positive’ discussion, Centre-farmers to hold fourth round of meeting on February 18",
      summary: "Farmers continue to camp at different locations on the Haryana-Punjab inter-State boundary.",
      content: "Even as protesting farmers from Punjab continued to camp near different locations on the inter-state boundaries with Haryana on Thursday, another round of meetings between farmer representatives and Union Ministers would be now held on February 18, after ‘positive’ discussions were held between Centre-farmers in the meeting concluded on the intervening night of Thursday-Friday. The Kisan Mazdoor Morcha and the Sanyukta Kisan Morcha (Non-Political) — the two umbrella bodies of around 200 farmers’ and farm labourer unions — had given the call for the ‘Delhi Chalo’ march as they planned to lay siege to the national capital to press for fulfillment of their demands",
      author: "Hindustan Times",
      publishedDate: "2024-02-14",
      imageUrl: "https://th-i.thgim.com/public/incoming/qr5hwm/article67850934.ece/alternates/LANDSCAPE_1200/IMG_FARMERS_PROTEST_SHAM_2_1_MVCDITKM.jpg",
    },
    "6": {
      id: "6",
      title: "India vs England: Sarfaraz Khan Breaks Silence On Run Out Mix-Up, Reveals Ravindra Jadeja's Message",
      summary: "Sarfaraz Khan scored a 48-ball half-century - the joint fastest by an Indian Test debutant in the post-Independence era - before departing at 62 after a horrible run out mix up with Ravindra Jadeja.",
      content: "n recent history, rarely has any player's international debut made so much noise as Sarfaraz Khan's. And there was every reason for it to happen. Sarfaraz Khan has been one of the most consistent performers in Indian domestic cricket over the past few years. However, the BCCI selectors took their time to rope him in  the Indian cricket team. When it happened in Rajkot in the third India vs England Test, there were emotional scenes as his father and wife could not stop their tears. Sarfaraz Khan repaid their faith with a confident innings. Sarfaraz Khan opened up on his dismissal at the end of day's play. 'At times there is miscommunication, and it is a part of the game. Sometimes you get run out. Such kind of things happen,' Sarfaraz Khan  said in the post-match conference.",
      author: "NDTV Sports",
      publishedDate: "2024-02-15",
      imageUrl: "https://c.ndtvimg.com/2024-02/tsg30sv_jadeja_650x400_15_February_24.jpeg?im=FaceCrop,algorithm=dnn,width=466,height=205",
    },
  };

  // Find the article details based on the id parameter
  const article = articleDetails[id];

  // If the article with the matching id is found, display its details
  if (article) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card align-self-center mt-2">
              <div className="card-body">
                <h5 className="card-title mb-1 fs-22 fw-bolder">{article.title}</h5>
                <br />
                <img src={article.imageUrl} className="card-img-top mb-3" alt={article.title} />
                <p className='card-text fst-italic'>{article.summary}</p>
                <p className="card-text">{article.content}</p>
                <p className="card-text"><small className="text-muted">By {article.author} | Published Date: {article.publishedDate}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // If no article is found with the given id, display a message
    return (
      <div className="container">
        <p>Article not found</p>
      </div>
    );
  }
};

export default ArticleDetailScreen;
