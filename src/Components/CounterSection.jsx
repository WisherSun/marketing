function CounterSection(props) {
    return (
        <section className="counter">
            <div className="container counter__list">
                {props.data.map(item => (
                    <div key={item.title} className="counter__item">
                        <div className="counter__frame counter__frame--top"></div>
                        <div className="counter__frame counter__frame--bottom"></div>

                        <div className="counter__content">
                            <img src={item.icon} alt="" className="counter__icon" />
                            <h3 className="counter__title">{item.title}</h3>
                            <p className="counter__number">{item.numb}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default CounterSection
