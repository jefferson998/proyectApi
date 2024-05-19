import { Task } from "@serenity-js/core";
import { GetRequest, LastResponse, Send } from "@serenity-js/rest";
import { urlBase } from "./login";
import { Ensure, equals } from "@serenity-js/assertions";
import { equal } from "assert";


export const findOrder = (id):Task=>{

    return Task.where('find order',
        Send.a(GetRequest.to(urlBase+'store/order/'+id).using({
            headers:{
                accept: 'application/json'
            }
        })),
        Ensure.that(LastResponse.status(),equals(200))
    
    )
}