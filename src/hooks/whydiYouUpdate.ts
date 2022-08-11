import { useRef, useEffect } from 'react'
export function useWhyDidYouUpdate(name: any, props: any) {
    // 获得一个可变的 ref 对象用于存储 props，下次 hook 运行的时候可以比较
    const previousProps:any = useRef();

    useEffect(() => {
        if (previousProps.current) {
            // 获取到之前的和现在的 props 所有 key。
            const allKeys = Object.keys({ ...previousProps.current, ...props });
            // 使用这个对象追踪 props 的变化。
            const changesObj: any = {};;
            // 迭代 keys
            allKeys.forEach(key => {
                if (previousProps.current[key] !== props[key]) {
                    // 添加到 changesObj
                    changesObj[key] = {
                        from: previousProps.current[key],
                        to: props[key]
                    };
                }
            });

      // 如果 changesObj 不为空，就输出到 console
            if (Object.keys(changesObj).length) {
                console.log('[why-did-you-update]', name, changesObj);
            }
        }

        // 最后用当前的 props 更新 previousProps 用于下次 hook 调用
        previousProps.current = props;
    });
}