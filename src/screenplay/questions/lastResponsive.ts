import { Question } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";



export const LastResponseBody = (): Question<Promise<any>> =>
    Question.about('Last response body', actor => LastResponse.body().answeredBy(actor));
