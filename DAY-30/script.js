const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 },
];

const avgRating = () => {
    const headers = [...new Set(ratingData.map(({ restaurant }) => restaurant))];
    const arr = headers.map((head) => {
        const filteredRatingData = ratingData.filter((obj) => obj.restaurant === head);
        const total = filteredRatingData.reduce((sum, item) => sum + item.rating, 0);
        const averageRating = (total / filteredRatingData.length).toFixed(2);
        return { restaurant: head, averageRating };
    });
    return arr;
};

const arr = avgRating();

console.log(arr);

console.log(arr.filter((item) => item.averageRating >= 4));