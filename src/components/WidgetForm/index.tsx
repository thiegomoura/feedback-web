import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'Image de umm inseto'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedBackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedBackType] = useState<FeedBackType | null>(null)

    function handleRestartFeedback() {
        setFeedBackType(null)
    }

    return (
        <div className="bg-zinc-700 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">


            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />

            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onFeedbackRestartRequested={handleRestartFeedback} />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ☕ por <a href="" className="text-teal-500 underline-offset-2">Thiego</a>
            </footer>
        </div>
    )
}