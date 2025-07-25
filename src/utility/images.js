const images = Array.from(
  { length: 231 },
  (_, i) => `/frames/frame_${i.toString().padStart(4, "0")}.jpeg`
);
export default images;
