
export const LOCALE_SET= 'LOCALE_SET';

export default function locale(state={lang:'hu'},action={})
{
    switch (action.type){
        case LOCALE_SET:
            return { lang:action.lang }
        default:
            return state
    }
} 
