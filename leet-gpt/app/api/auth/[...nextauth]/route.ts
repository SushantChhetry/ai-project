import NextAuth from 'next-auth';
import {options} from './options'
//where next auth will receive our options
const handler = NextAuth(options);

export {handler as GET, handler as POST}