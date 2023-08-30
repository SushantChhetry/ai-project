//Without defined matcher, this one line applies to the entire project

export {default} from "next-auth/middleware"

//Applies next-auth only to matching routes: can be regex
export const config = {matcher: ["/extra","/dashboard"]}