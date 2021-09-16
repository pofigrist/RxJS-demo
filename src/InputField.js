import React, { useRef, useState, useEffect } from 'react'
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

export const InputField = () => {
    const [value, setValue] = useState('default value')
    const textInput = useRef(null);

    useEffect(() => {
        fromEvent(textInput.current, 'input')
            .pipe(
                debounceTime(500),
                pluck('target', 'value'),
                distinctUntilChanged(),
            )
            .subscribe((val) => {setValue(val); console.log(value)})
    }, [])

    return <div>
        <h2>InputField</h2>
        <h3>{value}</h3>
        <input type='text' ref={textInput} />
    </div>
}