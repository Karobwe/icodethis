import * as HeroIcons from "https://cdn.skypack.dev/heroicons-react"
import * as ReactTransitionGroup from "https://cdn.skypack.dev/react-transition-group"

const useState = React.useState
const CSSTransition = ReactTransitionGroup.CSSTransition
const TransitionGroup = ReactTransitionGroup.TransitionGroup

function App() {
    return (
            <div className={"bg-gradient-to-tr bg-gradient-to-r from-indigo-700 via-rose-500 to-amber-300 flex items-center justify-center w-full h-screen"}>
                <main className="bg-white flex items-center justify-center min-w-[300px] min-h-[300px] m-4 p-6 rounded-lg">
                <SwipeContainer>
                    <SwipePage>
                        <h1>First Page</h1>
                    </SwipePage>
                    <SwipePage>
                        <h1>Second Page</h1>
                    </SwipePage>
                    <SwipePage>
                        <h1>Third Page</h1>
                    </SwipePage>
                </SwipeContainer>
                </main>
            </div>
        );
    }
    
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)

function SwipePage({ children }) {
    return (
        <div className="swipe-page">
            {children}
        </div>
    );
}

function SwipeContainer({ children }) {
    const [currentIndex, setCurrentIndex] = useState(2);

    const nextPage = () => {
        if (currentIndex < children.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const prevPage = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    return (
        <div>
            <TransitionGroup className="swipe-container">
                <CSSTransition key={currentIndex} timeout={500} classNames="page-transition">
                    {children[currentIndex]}
                </CSSTransition>
            </TransitionGroup>
            {currentIndex > 0 && <button onClick={prevPage}>Previous</button>}
        </div>
    );
}