import React, { useRef, useState, useEffect } from 'react'
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, take } from 'rxjs/operators';

export const InputFieldSubject = () => {
    const [value, setValue] = useState('default value')
    const textSubject = useRef(new Subject());

    useEffect(() => {
        textSubject.current
            .pipe(
                debounceTime(500),
                pluck('target', 'value'),
                distinctUntilChanged(),
                take(3)
            )
            .subscribe(value => {
                setValue(value)
                console.log(value)
            })
    }, [])

    return <div>
        <h2>InputFieldSubject</h2>
        <h3>{value}</h3>
        <input type='text' onChange={(e) => {textSubject.current.next(e)}}/>
    </div>
}