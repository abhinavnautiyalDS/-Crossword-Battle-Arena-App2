"use server";

import { generateHint, type GenerateHintInput } from "@/ai/flows/generate-hint";
import { z } from "zod";

const getHintSchema = z.object({
    clue: z.string(),
    currentAnswer: z.string(),
});

export async function getHintForClue(input: GenerateHintInput) {
    const validatedInput = getHintSchema.parse(input);
    try {
        const result = await generateHint(validatedInput);
        return result;
    } catch (error) {
        console.error("Error generating hint:", error);
        throw new Error("Failed to generate hint");
    }
}
