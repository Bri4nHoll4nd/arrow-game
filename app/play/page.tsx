"use client"

import Arrow from "@/components/Arrow"
import "@/styles/PlayPageStyle.css";
import { useEffect, useState } from "react";

const initialState = {arrows: 4};

export default function Play() {
    const listOfKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    const [amountOfArrows, setAmountOfArrows] = useState(initialState.arrows);
    const [correctSequence, setCorrectSequence] = useState(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
    const [userInputIndex, setUserInputIndex] = useState(0);
    
    useEffect(() => {
        const handleKeyPress = (event: any) => {
            const {key} = event;
            if (listOfKeys.includes(key)) {
                if (key === correctSequence[userInputIndex]) {
                    setUserInputIndex(userInputIndex + 1);

                    if (userInputIndex + 1 === correctSequence.length) {
                        setUserInputIndex(0);
                        setAmountOfArrows(amountOfArrows + 1);
                        createSequnce(amountOfArrows + 1);
                    }
                } else {
                    setUserInputIndex(0);
                    setAmountOfArrows(initialState.arrows);
                    createSequnce(initialState.arrows);
                }
            }
        };
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, [userInputIndex])

    function createSequnce(length: number) {
        const newSequence: string[] = [];

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * listOfKeys.length);
            newSequence.push(listOfKeys[randomIndex]);
        }

        setCorrectSequence(newSequence);
    }

    function keyToString(key: string): string {
        if (key === "ArrowUp") {
            return "up";
        } else if (key === "ArrowDown") {
            return "down";
        } else if (key === "ArrowLeft") {
            return "left";
        } else if (key === "ArrowRight") {
            return "right";
        }
        return "";
    }

    return (
        <main>
            <div id="arrow-sequence">
                {correctSequence.map((key, index) => (
                    <Arrow direction={keyToString(key)} complete={index + 1 <= userInputIndex} key={index}></Arrow>
                ))}
            </div>
        </main>
    )
}