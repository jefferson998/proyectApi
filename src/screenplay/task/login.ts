import { Task } from "@serenity-js/core";
import { GetRequest, PostRequest, Send } from "@serenity-js/rest";

export const urlBase = 'https://petstore3.swagger.io/api/v3/'

export const login = (username, password): Task => {
    return Task.where(`api de login`,
        Send.a(GetRequest.to(urlBase + 'user/login').using({
            params: {
                username: username,
                password: password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })



        ))
}