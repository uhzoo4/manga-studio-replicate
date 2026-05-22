import { useEffect, useRef } from "react";

/**
 * GrainOverlay Component
 * 
 * Creates an animated grain/noise texture overlay that gives the site
 * a cinematic, analog film quality. The grain animates subtly to create
 * a sense of movement and atmosphere.
 */

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animate grain
    let animationId: number;
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create grain pattern
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const grain = Math.random() * 255;
        // Very subtle grain - only visible at certain angles
        const alpha = Math.random() > 0.98 ? grain * 0.03 : 0;

        data[i] = 255; // R
        data[i + 1] = 255; // G
        data[i + 2] = 255; // B
        data[i + 3] = alpha; // A
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}
