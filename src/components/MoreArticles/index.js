import React from 'react';

const smallArticles = [
  {
    id: "3",
    title: "Farmers Protest highlights: Forces asked to tackle aggression with aggression",
    summary: "Delhi-NCR is facing massive traffic jams as heavy security cover is put in view of the farmers' protest.",
    content: "Farmers Protest Highlights: Farmers, pressing for a law on minimum support price for crops, are now marching towards Delhi following inconclusive talks with a team of union ministers. The Samyukta Kisan Morcha (Non-Political) and the Kisan Mazdoor Morcha have declared the farmers' intent to head to Delhi, intensifying their efforts to persuade the Centre to meet their demands.",
    author: "Hindustan Times",
    publishedDate: "2024-02-14",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0VLC7Gn2rL2jnpHkT6dd7XpXaX18EI6lBZ0Y4nkC3GSPmbp35LK-l-LU1TNkXVRrTHtxEcEfzZ7zJbJeJmrmoWL28cimbF9myYtEmrxmNC_ARg",
  },
  {
    id: "4",
    title: "From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi...",
    summary: "Back Back From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi said at Ahlan Modi event",
    content: "Prime Minister Narendra Modi on Tuesday addressed the members of the Indian diaspora in Abu Dhabi during the Ahlan Modi event. PM Modi, who is on a two-day visit to the United Arab Emirates (UAE) congratulated the members of the Indian diaspora for turning up in such a large number and said this is time to hail the partnership between India and UAE.The UAE visit by the Indian Prime Minister came as the relations between both nations are at an all-time high with trade reaching over $85 billion in 2022-23. Among the Gulf nations, UAE has the largest Indian expatriate community with 3.5 million Indian nationals living in the country.",
    author: "Mint",
    publishedDate: "2024-02-13",
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ38CUPc9B7q9YnLOJsPon3GWsmgp58qryv1qR-Us-tqeWXyGiQcmPySt3sKIZlv7fTpq0lpITLjGMKEZCq7pM-r--5gP4uYyscuFFxUEeOXfJ1kQ",
  },
  {
    id: "5",
    title: "Farmers Protest highlights: Forces asked to tackle aggression with aggression",
    summary: "Delhi-NCR is facing massive traffic jams as heavy security cover is put in view of the farmers' protest.",
    content: "Farmers Protest Highlights: Farmers, pressing for a law on minimum support price for crops, are now marching towards Delhi following inconclusive talks with a team of union ministers. The Samyukta Kisan Morcha (Non-Political) and the Kisan Mazdoor Morcha have declared the farmers' intent to head to Delhi, intensifying their efforts to persuade the Centre to meet their demands.",
    author: "Hindustan Times",
    publishedDate: "2024-02-14",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0VLC7Gn2rL2jnpHkT6dd7XpXaX18EI6lBZ0Y4nkC3GSPmbp35LK-l-LU1TNkXVRrTHtxEcEfzZ7zJbJeJmrmoWL28cimbF9myYtEmrxmNC_ARg",
  },
  {
    id: "6",
    title: "From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi...",
    summary: "Back Back From Modi’s 'guarantee' to 'long live Bharat-UAE friendship': 10 things PM Modi said at Ahlan Modi event",
    content: "Prime Minister Narendra Modi on Tuesday addressed the members of the Indian diaspora in Abu Dhabi during the Ahlan Modi event. PM Modi, who is on a two-day visit to the United Arab Emirates (UAE) congratulated the members of the Indian diaspora for turning up in such a large number and said this is time to hail the partnership between India and UAE.The UAE visit by the Indian Prime Minister came as the relations between both nations are at an all-time high with trade reaching over $85 billion in 2022-23. Among the Gulf nations, UAE has the largest Indian expatriate community with 3.5 million Indian nationals living in the country.",
    author: "Mint",
    publishedDate: "2024-02-13",
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ38CUPc9B7q9YnLOJsPon3GWsmgp58qryv1qR-Us-tqeWXyGiQcmPySt3sKIZlv7fTpq0lpITLjGMKEZCq7pM-r--5gP4uYyscuFFxUEeOXfJ1kQ",
  },
];

const MoreArticles = () => {
  return (
    <div className="row">
      {smallArticles.map(article => (
        <div className="col-sm-4 col-md-4 col-lg-4" key={article.id}>
          <Link to={`/article/${article.id}`} className="text-decoration-none text-dark">
            <div className="article-card mb-2 border-0">
              <img className="image" src={article.imageUrl} alt={article.title} variant="top" />
              <p className="title">{article.title}</p>
              <p className="summary">{article.summary}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoreArticles;
