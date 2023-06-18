function App() {
    return (
        <div className="relative bg-slate-100 min-h-screen">
            <Background/>

            <div className="absolute z-20 inset-0 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-y-4 max-w-3xl min-w-[300px] px-8 py-6 bg-white text-center border-4 border-slate-900 rounded-xl sm:gap-8 md:px-36 md:py-16">
                    <h2 className="text-xl font-bold sm:text-2xl">Verify your email address</h2>
        
                    <p>To verify your email address, enter this code in your browser.</p>
        
                    <CodeOutput/>
        
                    <p>If you didn't requested a code you can safely ignore this email.</p>
        
                    <p>Question? <a href="">We are here to help.</a></p>
                </div>

                <ConfirmationBox/>
            </div>
        </div>
    );
}

function CodeOutput() {
    let [code, setCode] = React.useState(`${getRandomInteger()}${getRandomInteger()}${getRandomInteger()}${getRandomInteger()}`);

    React.useEffect(() => {
        setInterval(() => {
            setCode(`${getRandomInteger()}${getRandomInteger()}${getRandomInteger()}${getRandomInteger()}`);
            setTimeout(null, 3000)
        }, 5000);
    });

    return (
        <p id="code" className="w-fit mx-auto px-10 py-6 bg-slate-200 rounded text-3xl font-semibold tracking-[.3em]">{code}</p>
    );
}

function Background() {
    return (
        <div className={"min-w-full min-h-screen overflow-hidden"}>
            <section className={"relative blur"}>
                <div className={`absolute -left-[5vw] top-[50vh] duration-1000`}>
                    <Circle color={"text-violet-400"} size={64}/>
                </div>

                <BackgroundShape x={"left-[70vw]"} y={"top-[50vh]"} animation={"animate-bounce"}>
                    <Circle color={"text-lime-400"} size={64}/>
                </BackgroundShape>

                <BackgroundShape x={"left-32"} y={"top-44"} animation={"animate-pulse"}>
                    <Square color={"text-red-400 -rotate-[30deg]"} size={56}/>
                </BackgroundShape>

                <BackgroundShape x={"left-[15vw]"} y={"top-[70vh]"} animation={"animate-spin"}>
                    <Triangle color={"text-teal-400/50"} size={80}/>
                </BackgroundShape>

                <div className={"absolute left-[90vw] top-[20vh] rotate-45"}>
                    <Triangle color={"text-yellow-400"} size={56}/>
                </div>

                <div className={"absolute right-[50vw] -top-[10vh]"}>
                    <Square color={"text-pink-500/50 -rotate-6"} size={72}/>
                </div>
            </section>

            <section className={"relative z-10"}>
                <div className={"absolute right-[65vw] top-[30vh]"}>
                    <Circle color={"text-sky-200 drop-shadow-xl"} size={44}/>
                </div>

                <div className={"absolute left-[70vw] top-[80vh] rotate-12"}>
                    <Triangle color={"text-fuchsia-200 drop-shadow-lg"} size={48}/>
                </div>

                <div className={"absolute right-[25vw] top-[40vh] -rotate-45"}>
                    <Square color={"text-orange-200 drop-shadow-2xl"} size={72}/>
                </div>
            </section>

            <section className={"w-full h-full bg-slate-50 opacity-70"}></section>
        </div>
    );
}

function BackgroundShape({x, y, animation, children}) {
    // let [translation, setTranslation] = React.useState(`translate-x-[${getRandomInteger(1, 100)}%] translate-y-[${getRandomInteger(1, 100)}%]`);

    // React.useEffect(() => {
    //     setInterval(() => {
    //             let xSign = Math.random() > .5 ? "-" : "";
    //             let ySign = Math.random() > .5 ? "-" : "";

    //             setTranslation(`${xSign}translate-x-96 ${ySign}translate-y-96`)
    //         }, 
    //         10000
    //     );
    // });

    return (
        <div className={`absolute ${x} ${y} ${animation} duration-1000`}>
            {children}
        </div>
    );
}

function ConfirmationBox() {
    return (
        <div className="absolute bottom-8 flex gap-x-4 px-12 py-4 bg-slate-200 rounded-xl">
            <InputNumber/>
            <InputNumber/>
            <InputNumber/>
            <InputNumber/>
        </div>
    );
}

function InputNumber() {
    const [value, setValue] = React.useState('');

    function inputHandler(e) {
        setValue(e.target.value);
    }

    return (
        <input onChange={inputHandler} type="text" className="w-12 h-20 border border-slate-700 px-1 py-2 rounded-xl text-3xl text-center focus:border-slate-900" maxLength={1}/>
    );
}

function Circle({color, size = 16}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-${size} h-${size} ${color}`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" strokeWidth="0" fill="currentColor"></path>
        </svg>
    );
}

function Triangle({color, size = 16}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-${size} h-${size} ${color}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11.99 1.968c1.023 0 1.97 .521 2.512 1.359l.103 .172l7.1 12.25l.062 .126a3 3 0 0 1 -2.568 4.117l-.199 .008h-14l-.049 -.003l-.112 .002a3 3 0 0 1 -2.268 -1.226l-.109 -.16a3 3 0 0 1 -.32 -2.545l.072 -.194l.06 -.125l7.092 -12.233a3 3 0 0 1 2.625 -1.548z" strokeWidth="0" fill="currentColor"></path>
        </svg>
    );
}

function Square({color, size = 16}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-${size} h-${size} ${color}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001z" strokeWidth="0" fill="currentColor"></path>
        </svg>
    );
}

function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);