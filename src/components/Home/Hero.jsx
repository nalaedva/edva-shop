function Hero() {

    const start = () => {
        alert('Arrancando NENE!!!');
    }

    return (
        <>
            <h1>Welcome to my shop</h1>
            <p>EDVA services</p>
            <button onClick={start}>Start</button>
        </>
    )
}

export default Hero;