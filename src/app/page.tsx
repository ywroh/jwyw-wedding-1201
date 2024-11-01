"use client"
import Title from "@/app/components/Title";
import confetti, {Options as ConfettiOptions} from "canvas-confetti";
import React from "react";
import Message from "@/app/components/Message";
import Gallery from "@/app/components/Gallery";
import Location from "@/app/components/Location";
import CongratulatoryMoney from "@/app/components/CongratulatoryMoney";
import Share from "@/app/components/Share";
import Feast from "@/app/components/Feast";

export default function Home() {
    const handleConfettiSnow = async () => {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const colors = ['#FFC0CB', '#FF1493', '#C71585'];
        // let skew = 1;

        const heart = confetti.shapeFromPath({
            path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
            // matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
        });

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        }

        const frame = () => {
            const timeLeft = animationEnd - Date.now();

            colors.forEach((color) => {
                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: Math.max(50, 75 * (timeLeft / duration)),
                    origin: {
                        x: Math.random(),
                        y: Math.abs(Math.random() - (timeLeft / duration)),
                    },
                    zIndex: 1057,
                    colors: [color],
                    shapes: [heart],
                    drift: randomInRange(-0.5, 0.5),
                    gravity: randomInRange(0.5, 1),
                    scalar: randomInRange(0.5, 1),
                });
            });

            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        }

        frame();
    }

    const handleConfetti = async () => {
        const count = 200;
        const defaults: ConfettiOptions = {
            origin: {y: 0.7},
        };

        const fire = (particleRatio: number, opts: ConfettiOptions) => {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio),
            });
        };

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    };

    React.useEffect(() => {
        const timer1 = setTimeout(() => handleConfetti(), 500);
        const timer2 = setTimeout(() => handleConfettiSnow(), 3000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <main className="flex flex-col row-start-2 items-center sm:items-start">
            <Title/>
            <Message/>
            <Location/>
            <Feast/>
            <Gallery/>
            <CongratulatoryMoney/>
            <Share/>
        </main>
    );
}
