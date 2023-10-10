// const video = document.getElementById('video');
// const videoOne = document.getElementById('video_1');
// const videoModal = document.getElementById('videoModal');
// const modalVideo = document.getElementById('modalVideo');
// const closeModal = document.getElementById('closeModal');

// video.addEventListener('click', () => {
//     videoModal.style.display = 'block';
//     modalVideo.src = video.src; // Set the source of the modalVideo.
//     modalVideo.load(); // Ensure the video is loaded before playing.
//     modalVideo.play().catch(error => console.error(error)); // Play the video in the modal.
// });

// closeModal.addEventListener('click', () => {
//     videoModal.style.display = 'none';
//     modalVideo.pause();
// });


const video = document.getElementById('video');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.getElementById('closeModal');

video.addEventListener('click', () => {
    videoModal.style.width= '800px';
    videoModal.style.display = 'block';
    modalVideo.src = video.querySelector('source').src; // Get the source of the main video.
    modalVideo.load(); // Ensure the video is loaded before playing.
    modalVideo.play().catch(error => console.error(error)); // Play the video in the modal.
});

closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    modalVideo.pause();
});
