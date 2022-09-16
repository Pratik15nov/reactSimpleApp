import { useEffect } from 'react';

export function useEffectAsync (
    callerEffect: ( isCanceled: () => boolean ) => Promise<() => void> | Promise<void>, 
    dependencies: any[]
) {
    return useEffect(() => {
        let canceled = false;
        const callerEffectReturn: any = callerEffect(() => canceled);

        return () => { 
            canceled = true;

            callerEffectReturn.then( (func: any) => {
                if(func !== undefined) {
                    func();
                }
            });
        };
        
    // eslint-disable-next-line
    }, dependencies)
}