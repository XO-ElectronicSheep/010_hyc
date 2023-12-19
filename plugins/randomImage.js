function getRandomImage() {
    const images = require.context('~/assets/images', false, /\.(png|jpe?g|gif|svg)$/);
    const imagePaths = images.keys();
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomIndex];
    return images(randomImagePath);
}





export default getRandomImage;
