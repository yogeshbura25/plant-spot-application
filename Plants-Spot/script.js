const Reviews = [
    { 
      name: "Supriya",
      happy: "Absolutely Thrilled with My New Garden!",
      rating: 5,
      image: "https://i.ibb.co/4d4v96L/Balcony-Garden-India.jpg",
      review: "Plant's Spot truly exceeded my expectations! I ordered a variety of plants for my balcony garden, and I couldn't be happier with the quality and service. The roses are blooming beautifully, the tomatoes are thriving, and the basil smells divine. Their personalized care packages made it so easy for a beginner like me to get started. Highly recommend Plant's Spot for all your gardening needs!"
    },
    {
      name: "Meenakshi",
      happy: "Fantastic Experience and Exceptional Service!",
      rating: 5,
      image: "https://i.ibb.co/7NJXtDj/indoor-farming-1024x683.jpg",
      review: "I recently attended one of Plant's Spot workshops, and it was an absolute delight! Not only did I learn valuable gardening tips and techniques, but I also got to connect with fellow plant enthusiasts. The passion and expertise of the team were evident throughout the event. I left feeling inspired and equipped to take my gardening skills to the next level. Thank you, Plant's Spot."
    },
    { 
      name: "Suriya Kumar",
      happy:"A Green Paradise in the Heart of the City!",
      rating: 5,
      image: "https://i.ibb.co/7NJXtDj/indoor-farming-1024x683.jpg",
      review: "Plant's Spot has transformed my urban space into a green oasis! Their selection of plants is impressive, and their commitment to sustainability is commendable. I love strolling through my balcony garden, surrounded by lush foliage and vibrant blooms. The personalized garden design consultation was invaluable in maximizing my limited space."
    },
    {
      name: "Mansi Appu",
      happy: "Top-Notch Quality and Customer Care!",
      rating: 5,
      image: "https://i.ibb.co/7NJXtDj/indoor-farming-1024x683.jpg",
      review: "I've been a loyal customer of Plant's Spot for years, and they never disappoint! Whether I'm shopping for flowers, vegetables, or herbs, I can always count on the superior quality of their products. The team goes above and beyond to ensure customer satisfaction, from prompt delivery to expert advice on plant care. With Plant's Spot, I know I'm investing in not just plants, but also a greener and more sustainable future."
    },
    {
      name: "Rohith",
      happy:"An Oasis of Serenity and Beauty!",
      rating: 5,
      image: "https://i.ibb.co/7NJXtDj/indoor-farming-1024x683.jpg",
      review: "Plant's Spot has truly created a magical sanctuary right in my backyard! Their diverse selection of plants has allowed me to create a garden paradise that soothes the soul and delights the senses. Whether I'm admiring the vibrant colors of the flowers or harvesting fresh herbs for my meals, every moment spent in my garden is pure joy. Thank you, Plant's Spot."
    }
  ];
  

const customerReviews = document.getElementById("customer-reviews");

Reviews.forEach(data => {
    const card = document.createElement("div");
    card.classList.add("card-bg");
    card.innerHTML = `
    <div class="card-review">
    <div class="review-info">
    <p class="name">Name:${data.name}</p>
    <p class="expression">Expression:${data.happy}</p>
    <p class="rating">Rating:${data.rating}</p>
    <p class="review">Review:${data.review}</p>
    </div>
    <img class="card-image" src=${data.image} />
    </div>
    `;
    customerReviews.appendChild(card);
})
