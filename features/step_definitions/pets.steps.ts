import { DataTable, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, property } from '@serenity-js/assertions';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import {login} from "../../src/screenplay/task/login"
import {orderPet} from "../../src/screenplay/task/order"
import { findOrder} from "../../src/screenplay/task/findOrder"

When('{actor} user makes an order',async (actor: Actor)=>{
    await actor.attemptsTo(
        orderPet()
    )
})

When('{actor} find order {string}',async (actor:Actor,id:String)=>{
    await actor.attemptsTo(
        findOrder(id)
    )
})

