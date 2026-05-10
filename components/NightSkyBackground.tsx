"use client";
import { useEffect, useRef } from "react";

export default function NightSkyBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const gl = canvas.getContext("webgl")!;
        if (!gl) return;

        const resize = () => {
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        window.addEventListener("resize", resize);

        const vert = `
            attribute vec2 a_pos;
            void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
        `;

        const frag = `
            precision highp float;
            uniform float u_time;
            uniform vec2  u_res;
            uniform vec2  u_mouse;

            float hash(vec2 p){
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }
            float hash1(float n){ return fract(sin(n) * 43758.5453); }

            float noise(vec2 p){
                vec2 i = floor(p), f = fract(p);
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(
                    mix(hash(i),           hash(i + vec2(1,0)), u.x),
                    mix(hash(i+vec2(0,1)), hash(i + vec2(1,1)), u.x),
                    u.y
                );
            }

            float fbm(vec2 p){
                float v = 0.0, a = 0.5;
                for(int i = 0; i < 5; i++){
                    v += a * noise(p);
                    p  = p * 2.1 + vec2(1.7, 9.2);
                    a *= 0.5;
                }
                return v;
            }

            void main(){
                vec2 uv = gl_FragCoord.xy / u_res;
                uv.y    = 1.0 - uv.y;
                float t = u_time * 0.04;

                /* Subtle mouse parallax — only noticeable if you focus on it */
                uv += (u_mouse / u_res - 0.5) * 0.002;

                /* ── Base sky — pure deep black ── */
                vec3 sky = vec3(0.0, 0.0, 0.0);
                sky = mix(sky, vec3(0.008, 0.006, 0.006), uv.y * 0.6);

                /* ── Milky Way — warm silver-white ── */
                float mw  = fbm(uv * vec2(1.2, 2.8) + vec2(t * 0.3, 0.0));
                mw       *= fbm(uv * vec2(2.0, 1.5) + vec2(-t * 0.2, 0.4));
                mw        = smoothstep(0.20, 0.52, mw);
                float bandProj = dot(uv - vec2(0.5, 0.5), vec2(0.6, 1.0));
                float band     = exp(-bandProj * bandProj * 4.5);
                mw *= band;
                vec3 mwColor = mix(
                    vec3(0.06, 0.05, 0.05),
                    vec3(0.22, 0.20, 0.18),
                    mw
                );
                sky = mix(sky, mwColor, mw * 0.75);

                /* ── Nebula wisps — warm amber/rust, very faint ── */
                float neb1 = fbm(uv * 3.5 + vec2(t * 0.5, t * 0.3));
                float neb2 = fbm(uv * 2.2 + vec2(-t * 0.4, t * 0.6) + neb1 * 0.4);
                sky += vec3(0.12, 0.06, 0.02) * smoothstep(0.46, 0.66, neb2) * 0.3;
                sky += vec3(0.10, 0.04, 0.01) * smoothstep(0.43, 0.63, neb1) * 0.22;

                /* ── Stars — 3 layers, warm white only ── */
                for(int i = 0; i < 3; i++){
                    float scale = 180.0 + float(i) * 120.0;
                    vec2 sp    = uv * scale + vec2(float(i) * 47.3, float(i) * 83.1);
                    vec2 cell  = floor(sp);
                    vec2 local = fract(sp) - 0.5;

                    float rng  = hash(cell);
                    float rng2 = hash(cell + vec2(7.3, 2.1));

                    if(rng > 0.02){
                        vec2  jitter  = (vec2(rng2, hash(cell + vec2(1.0))) - 0.5) * 0.6;
                        float dist    = length(local - jitter);
                        float twinkle = 0.72 + 0.28 * sin(u_time * (1.5 + rng * 3.0) + rng * 6.28);
                        float bright  = rng * rng * twinkle;
                        float star    = bright * smoothstep(0.03, 0.0, dist);

                        vec3 sc = mix(vec3(1.00, 0.97, 0.90), vec3(1.00, 1.00, 1.00), rng2);
                        sky += sc * star * 9.5;
                    }
                }

                /* ── Shooting star ── */
                float sSeed  = floor(u_time * 0.14);
                float sPhase = fract(u_time * 0.14);
                float sRngA  = hash1(sSeed * 7.3  + 1.0);
                float sRngB  = hash1(sSeed * 13.7 + 2.0);
                vec2  sOrig  = vec2(0.1 + sRngA * 0.7, sRngB * 0.55);
                vec2  sDir   = normalize(vec2(0.55 + sRngA * 0.35, 0.28 + sRngB * 0.22));
                float sLen   = 0.18;
                float sVis   = smoothstep(0.0, 0.08, sPhase) * smoothstep(0.5, 0.28, sPhase);
                vec2  sTip   = sOrig + sDir * sLen * sPhase;
                vec2  toTip  = uv - sTip;
                float proj   = dot(toTip, -sDir);
                float perp   = length(toTip - proj * (-sDir));
                float inT    = step(0.0, proj) * step(0.0, sLen * sPhase - proj);
                float fade   = 1.0 - proj / max(sLen * sPhase, 0.001);
                sky += vec3(1.00, 0.98, 0.95)
                       * inT * smoothstep(0.003, 0.0, perp) * fade * sVis * 2.5;

                gl_FragColor = vec4(clamp(sky, 0.0, 1.0), 1.0);
            }
        `;

        const compile = (type: number, src: string) => {
            const s = gl.createShader(type)!;
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        };

        const prog = gl.createProgram()!;
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
        );
        const loc = gl.getAttribLocation(prog, "a_pos");
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        const uTime  = gl.getUniformLocation(prog, "u_time");
        const uRes   = gl.getUniformLocation(prog, "u_res");
        const uMouse = gl.getUniformLocation(prog, "u_mouse");

        /* Smooth lerp — 2% per frame so movement is barely perceptible */
        const mouse  = { x: window.innerWidth * 0.5,  y: window.innerHeight * 0.5 };
        const target = { x: mouse.x, y: mouse.y };
        const onMove = (e: MouseEvent) => { target.x = e.clientX; target.y = e.clientY; };
        window.addEventListener("mousemove", onMove);

        let animId: number;
        const start = performance.now();

        const render = () => {
            animId = requestAnimationFrame(render);

            /* Lerp toward target — very slow follow */
            mouse.x += (target.x - mouse.x) * 0.005;
            mouse.y += (target.y - mouse.y) * 0.005;

            const t = (performance.now() - start) / 1000;
            gl.uniform1f(uTime, t);
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform2f(uMouse, mouse.x * devicePixelRatio, canvas.height - mouse.y * devicePixelRatio);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };
        render();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize",    resize);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position:      "fixed",
                inset:         0,
                width:         "100%",
                height:        "100%",
                zIndex:        -0,
                pointerEvents: "none",
            }}
        />
    );
}