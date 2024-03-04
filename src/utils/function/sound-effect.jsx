//fonction sound effect
 
export const soundEffect = (sound) => {
    const audio = new Audio(sound);
    audio.play();
};

