import s from "./SpinningText.module.css"

export default function SpinningText({text, children}) {
    const length = text.length
    const deg = 360 / length

    return (
        <div className={s.spinning_text_wrapper}>
            <div className={s.spinning_text}>
                <p>{text.split("").map((letra, i) => (
                    <span
                    key={i}
                    style={{
                        transform: `rotate(${deg * i}deg)`
                    }}>
                        {letra}
                    </span>
                ))}</p>
            </div>
            {children}
        </div>
    )
}