import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CanvasExpress = () => {
  const [frame, setFrame] = useState({ value: 1 });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(frame, {
      value: 44,
      duration: 0,
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        setFrame({ value: Math.floor(frame.value) });
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = `/frames/frame_${frame.value.toString().padStart(4, "0")}.jpeg`;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [frame]);

  return <canvas ref={canvasRef} id="expression-canvas"></canvas>;
};

export default CanvasExpress;
