import { useEffect, useRef, useState } from "react";

const CanvasExpress = () => {
  const [frame, setFrame] = useState({ value: 1 });
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = `/frames/frame_000${frame.value}.jpeg`;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [frame]);

  return <canvas ref={canvasRef} id="expression-canvas"></canvas>;
};

export default CanvasExpress;
