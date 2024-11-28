import { useState } from "react";
import json from "./bd.json"

let bd = json
export function getBd(){
    return bd;
}
export function getTreino(treino){
    return bd[treino]
}