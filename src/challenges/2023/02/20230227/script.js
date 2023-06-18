import ContentEditable  from 'https://cdn.skypack.dev/react-contenteditable';
import sanitizeHtml  from 'https://cdn.skypack.dev/sanitize-html';


function App() {
    return (
        <div className={"bg-gray-100 text-gray-900 min-h-screen"}>
            <Header/>

            <div className={"p-4"}>
                <div className={"bg-white w-full h-[90vh] overflow-hidden mx-auto p-4 flex divide-x-2"}>
                    <aside className={"w-3/12 pr-3"}>
                        <div className={"mb-3 flex items-center"}>
                            <button className={"bg-blue-500 text-white rounded-full w-8 h-8 aspect-square flex items-center justify-center"}>
                                <PlusIcon/>
                            </button>

                            <div className={"ml-3 mr-auto"}>
                                <h5 className={"font-medium"}>Sessions</h5>

                                <p className={"text-gray-500"}>48240 total words</p>
                            </div>

                            <button className={"text-gray-500"}>
                                <SearchIcon/>
                            </button>
                        </div>

                        <NoteNavItem title={"Intro"} wordsCount={2450} />
                        <NoteNavItem title={"Chapter 1"} wordsCount={2450} />
                        <NoteNavItem title={"Chapter 2"} wordsCount={2450} isActive />
                        <NoteNavItem title={"Chapter 3"} wordsCount={2450} />
                    </aside>

                    <main className={"w-9/12 pl-3 space-y-4 overflow-y-scroll"}>
                        <div className={"flex"}>
                            <h3 className={"text-lg font-semibold"}>Chapter 2</h3>

                            <div className={"text-gray-500 ml-auto flex space-x-4"}>
                                <PencilIcon/>
                                <PointingOutArrowsIcon/>
                                <VerticalEllipsisIcon/>
                            </div>
                        </div>

                        <Editable/>
                    </main>
                </div>
            </div>
        </div>
    );
}

function Header() {
    return (
        <header className={"bg-white text-gray-500 h-16 flex items-center px-6 py-2"}>
            <HomeIcon/>

            <div className={"ml-4"}>
                <h2 className={"text-gray-900 font-semibold"}>Learn how to motivate yourself</h2>

                <p className={"divide-x-2"}>
                    <span className={"pr-2"}>48240 total words</span>
                    <span className={"pl-2"}>4 sessions</span>
                </p>
            </div>

            <div className={"ml-auto flex space-x-2"}>
                <button>Delete</button>

                <button className={"flex items-center space-x-1"}>
                    <span>Export</span>

                    <ChevronDownIcon/>
                </button>
            </div>
        </header>
    );
}

const Editable = () => {
	const [content, setContent] = React.useState(fakeContent)

	const onContentChange = React.useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};

		setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
	}, [])

    const className = "h-full focus:outline-none";

	return (
		<ContentEditable onChange={onContentChange} onBlur={onContentChange} html={content} className={className} />
	)
}

function NoteNavItem({title, wordsCount, isActive = false}) {
    let countColor = isActive ? "text-blue-100" : "text-gray-500";
    let bgColor = isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100";

    return (
        <div className={`pl-8 py-2 ${bgColor} duration-300`}>
            <h4>{title}</h4>
            <p className={`text-sm ${countColor}`}>{wordsCount} words</p>
        </div>
    );
}

function HomeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

    );
}

function ChevronDownIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

    );
}

function PlusIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    );
}

function PencilIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
    );
}

function PointingOutArrowsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
    );
}

function PointingInArrowsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
        </svg>
    );
}

function VerticalEllipsisIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
    );
}

const fakeContent = `
Motivation is the driving force that fuels our actions and behaviors. It is the reason we get up in the morning, 
pursue our goals and dreams, and strive for success. However, at times, it can be challenging to stay motivated, 
especially when we face setbacks or obstacles. In such situations, we need to learn how to motivate ourselves and 
keep moving forward towards our goals. In this article, we will discuss some tips and strategies to help you motivate yourself.
<br>
<br>

<strong>Set Goals:</strong>
One of the most effective ways to motivate yourself is to set clear and specific goals. 
When you have a clear target in mind, it becomes easier to focus your energy and efforts towards achieving it. 
Make sure your goals are challenging yet achievable, and break them down into smaller milestones to help you track your progress.
<br>

<strong>Create a plan:</strong>
Once you have set your goals, the next step is to create a plan to achieve them. 
A plan will help you stay organized and focused, and it will also provide you with a roadmap to follow. 
Identify the actions and steps you need to take to achieve your goals, and create a timeline for completing them.
<br>
`;

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);