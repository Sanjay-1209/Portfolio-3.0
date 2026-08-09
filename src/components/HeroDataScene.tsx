"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
};

export default function HeroDataScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
    const count = isMobile ? 34 : 70;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let mouseX = 0;
    let mouseY = 0;

    function resize() {
      if (!canvas || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const maxDist = isMobile ? 90 : 130;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + (mouseX - width / 2) * 0.00003;
        p.y += p.vy + (mouseY - height / 2) * 0.00003;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(146, 146, 146, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const isYellow = i % 11 === 0;
        ctx.fillStyle = isYellow
          ? "rgba(255, 214, 0, 0.9)"
          : `rgba(250, 250, 250, ${0.35 + p.z * 0.35})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isYellow ? 2.4 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    resize();
    init();

    if (prefersReducedMotion) {
      draw();
    } else {
      loop();
      window.addEventListener("mousemove", onMouseMove);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      init();
      if (prefersReducedMotion) draw();
    });
    resizeObserver.observe(container);

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        if (prefersReducedMotion) return;
        if (visible && !running) {
          running = true;
          loop();
        } else if (!visible && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(container);

    function onVisibilityChange() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!prefersReducedMotion) {
        running = true;
        loop();
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
